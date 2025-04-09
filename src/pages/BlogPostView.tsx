import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import BlogPost, { BlogPostType } from '../components/BlogPost';
import SectionTitle from '../components/SectionTitle';

const BlogPostView = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);

  useEffect(() => {
    // In a real application, this would be an API call
    // For now, we'll use local storage
    const savedPosts = JSON.parse(localStorage.getItem('blog_posts') || '[]');
    const foundPost = savedPosts.find((p: BlogPostType) => p.id === id);
    
    if (foundPost) {
      setPost(foundPost);
      // Get related posts (same category)
      const related = savedPosts
        .filter((p: BlogPostType) => p.id !== id && p.category === foundPost.category)
        .slice(0, 3);
      setRelatedPosts(related);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 rounded-full border-salon-purple border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="mb-6 text-3xl font-lora text-salon-purple">Post Not Found</h1>
          <p className="mb-8 text-lg text-jet/70">The blog post you're looking for doesn't exist or has been removed.</p>
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center px-8 py-3 text-sm font-medium tracking-wider text-white uppercase transition-all duration-300 bg-salon-purple hover:bg-black group"
          >
            Back to Blog
            <svg 
              className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-white md:py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center mb-8 text-sm font-medium tracking-wide uppercase transition-all duration-300 text-salon-purple hover:text-black group"
          >
            <svg 
              className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </button>

          <article className="mb-16">
            {post.image && (
              <div className="relative mb-8 overflow-hidden rounded-lg aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
                {post.category && (
                  <span className="absolute px-4 py-2 text-sm font-medium tracking-wider text-white uppercase rounded-full top-4 left-4 bg-salon-purple/90">
                    {post.category}
                  </span>
                )}
              </div>
            )}

            <div className="flex items-center mb-6 text-sm text-jet/60">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                By {post.author}
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-lora text-salon-purple">{post.title}</h1>
            
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-6 leading-relaxed text-jet/80">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          {relatedPosts.length > 0 && (
            <div className="pt-16 border-t border-jet/10">
              <SectionTitle
                title="Related Posts"
                subtitle="You might also like these articles"
                center
              />
              <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <BlogPost key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPostView; 