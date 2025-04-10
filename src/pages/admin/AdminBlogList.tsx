import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BlogPostType } from '../../components/BlogPost';

const AdminBlogList = () => {
  const [posts, setPosts] = useState<BlogPostType[]>([]);

  useEffect(() => {
    const savedPosts = localStorage.getItem('blog_posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      const updatedPosts = posts.filter(post => post.id !== id);
      localStorage.setItem('blog_posts', JSON.stringify(updatedPosts));
      setPosts(updatedPosts);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Manage Blog Posts</h1>
        <Link
          to="/admin/blog/new"
          className="px-4 py-2 text-sm font-medium text-white transition-colors rounded-md bg-salon-purple hover:bg-dark-green"
        >
          Create New Post
        </Link>
      </div>

      <div className="overflow-hidden bg-white rounded-lg shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Title
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Author
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Date
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Category
              </th>
              <th className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {posts.map((post) => (
              <tr key={post.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{post.title}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{post.author}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                    {post.category || 'Uncategorized'}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                  <Link
                    to={`/admin/blog/edit/${post.id}`}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="ml-4 text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBlogList; 