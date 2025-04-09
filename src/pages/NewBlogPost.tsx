import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { BlogPostType } from '../components/BlogPost';

const NewBlogPost = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    image: '',
    category: 'beauty'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const categories = [
    { value: 'beauty', label: 'Beauty' },
    { value: 'wellness', label: 'Wellness' },
    { value: 'lifestyle', label: 'Lifestyle' },
    { value: 'tips', label: 'Tips & Tricks' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const newPost: BlogPostType = {
        id: Date.now().toString(),
        title: formData.title,
        content: formData.content,
        author: formData.author,
        date: new Date().toISOString(),
        image: formData.image || undefined,
        excerpt: formData.content.slice(0, 150) + '...',
        category: formData.category
      };

      // Get existing posts from localStorage
      const existingPosts = JSON.parse(localStorage.getItem('blog_posts') || '[]');
      
      // Add new post to the beginning of the array
      const updatedPosts = [newPost, ...existingPosts];
      
      // Save to localStorage
      localStorage.setItem('blog_posts', JSON.stringify(updatedPosts));

      // Redirect to blog page
      navigate('/blog');
    } catch (error) {
      console.error('Error saving blog post:', error);
      alert('Failed to save blog post. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'image') {
      setPreviewImage(value);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-almond/20 to-white">
      <div className="container px-4 py-16 mx-auto md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-lora text-salon-purple">Create Your Blog Post</h1>
            <p className="text-lg text-jet/70">Share your expertise and insights with our community</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Preview Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-white rounded-lg shadow-lg"
            >
              <h2 className="mb-4 text-xl font-lora text-salon-purple">Preview</h2>
              <div className="space-y-4">
                {previewImage && (
                  <div className="relative overflow-hidden rounded-lg aspect-video">
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="object-cover w-full h-full"
                    />
                    {formData.category && (
                      <span className="absolute px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded-full top-4 left-4 bg-salon-purple/90">
                        {formData.category}
                      </span>
                    )}
                  </div>
                )}
                {formData.title && (
                  <h3 className="text-xl font-lora text-salon-purple">{formData.title}</h3>
                )}
                {formData.author && (
                  <p className="text-sm text-jet/60">By {formData.author}</p>
                )}
                {formData.content && (
                  <p className="text-sm text-jet/70 line-clamp-3">{formData.content}</p>
                )}
              </div>
            </motion.div>

            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-8 bg-white rounded-lg shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-jet"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-3 transition-colors border rounded-lg border-jet/20 focus:outline-none focus:ring-2 focus:ring-salon-purple/30 focus:border-salon-purple"
                    placeholder="Enter your blog post title"
                  />
                </div>

                <div>
                  <label
                    htmlFor="author"
                    className="block mb-2 text-sm font-medium text-jet"
                  >
                    Author Name
                  </label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    required
                    value={formData.author}
                    onChange={handleChange}
                    className="w-full px-4 py-3 transition-colors border rounded-lg border-jet/20 focus:outline-none focus:ring-2 focus:ring-salon-purple/30 focus:border-salon-purple"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-jet"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 transition-colors border rounded-lg border-jet/20 focus:outline-none focus:ring-2 focus:ring-salon-purple/30 focus:border-salon-purple"
                  >
                    {categories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-jet"
                  >
                    Image URL (optional)
                  </label>
                  <input
                    type="url"
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    className="w-full px-4 py-3 transition-colors border rounded-lg border-jet/20 focus:outline-none focus:ring-2 focus:ring-salon-purple/30 focus:border-salon-purple"
                    placeholder="Enter an image URL for your blog post"
                  />
                </div>

                <div>
                  <label
                    htmlFor="content"
                    className="block mb-2 text-sm font-medium text-jet"
                  >
                    Content
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    required
                    value={formData.content}
                    onChange={handleChange}
                    rows={8}
                    className="w-full px-4 py-3 transition-colors border rounded-lg border-jet/20 focus:outline-none focus:ring-2 focus:ring-salon-purple/30 focus:border-salon-purple"
                    placeholder="Write your blog post content here..."
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-8 py-3 text-sm font-medium tracking-wider text-white uppercase transition-all duration-300 rounded-lg bg-salon-purple hover:bg-black disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Publishing...
                      </span>
                    ) : (
                      'Publish Post'
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate('/blog')}
                    className="flex-1 px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 border rounded-lg border-jet/20 hover:border-black"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewBlogPost; 