import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BlogPostType } from '../../components/BlogPost';

const CATEGORIES = [
  'Hair Care',
  'Skin Care',
  'Nail Care',
  'Spa & Wellness',
  'Beauty Tips',
  'Salon News',
  'Trends & Style',
  'Product Reviews'
];

const AdminBlogCreate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: CATEGORIES[0],
  });
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      const savedPosts = JSON.parse(localStorage.getItem('blog_posts') || '[]');
      const post = savedPosts.find((p: BlogPostType) => p.id === id);
      if (post) {
        setFormData({
          title: post.title,
          content: post.content,
          category: post.category || CATEGORIES[0],
        });
        if (post.image) {
          setImagePreview(post.image);
        }
      }
    }
  }, [id]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        alert('Image size should be less than 5MB');
        return;
      }
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = imagePreview;
      if (selectedImage) {
        imageUrl = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(selectedImage);
        });
      }

      const savedPosts = JSON.parse(localStorage.getItem('blog_posts') || '[]');
      const newPost: BlogPostType = {
        id: id || Date.now().toString(),
        title: formData.title,
        content: formData.content,
        excerpt: formData.content.slice(0, 150) + '...', // Auto-generate excerpt from content
        author: 'Tryst Salon', // Default author
        date: id ? savedPosts.find((p: BlogPostType) => p.id === id)?.date || new Date().toISOString() : new Date().toISOString(),
        category: formData.category,
        image: imageUrl
      };

      if (id) {
        const updatedPosts = savedPosts.map((post: BlogPostType) =>
          post.id === id ? newPost : post
        );
        localStorage.setItem('blog_posts', JSON.stringify(updatedPosts));
      } else {
        localStorage.setItem('blog_posts', JSON.stringify([...savedPosts, newPost]));
      }

      navigate('/admin/blog');
    } catch (error) {
      console.error('Error saving post:', error);
      alert('Error saving post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-gray-900">
        {id ? 'Edit Blog Post' : 'Create New Blog Post'}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-salon-purple focus:border-salon-purple"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-salon-purple focus:border-salon-purple"
          >
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Image</label>
          <div className="flex items-center mt-1 space-x-4">
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
            >
              Choose Image
            </button>
            {imagePreview && (
              <button
                type="button"
                onClick={() => {
                  setSelectedImage(null);
                  setImagePreview('');
                  if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                  }
                }}
                className="text-sm text-red-600 hover:text-red-800"
              >
                Remove Image
              </button>
            )}
          </div>
          {imagePreview && (
            <div className="mt-2">
              <img
                src={imagePreview}
                alt="Preview"
                className="object-cover w-48 h-32 rounded-md"
              />
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows={10}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-salon-purple focus:border-salon-purple"
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/admin/blog')}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 text-sm font-medium text-white rounded-md bg-salon-purple hover:bg-dark-green disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Saving...' : id ? 'Update Post' : 'Create Post'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminBlogCreate; 