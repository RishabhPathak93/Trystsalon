import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export interface BlogPostType {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  image?: string;
  excerpt: string;
  category?: string;
}

interface BlogPostProps {
  post: BlogPostType;
  isPreview?: boolean;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, isPreview = true }) => {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-100px' }}
      className="overflow-hidden bg-white rounded-sm shadow-md group"
    >
      {post.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="object-cover w-full h-full transition-all duration-500 transform group-hover:scale-105"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="mb-4 text-sm text-jet/60">
          <span>{formattedDate}</span>
          <span className="mx-2">•</span>
          <span>By {post.author}</span>
        </div>
        
        <h2 className="mb-3 text-2xl font-lora text-salon-purple">
          {isPreview ? (
            <Link to={`/blog/${post.id}`} className="transition-colors hover:text-black">
              {post.title}
            </Link>
          ) : (
            post.title
          )}
        </h2>
        
        <p className="mb-4 text-jet/70">
          {isPreview ? post.excerpt : post.content}
        </p>
        
        {isPreview && (
          <Link
            to={`/blog/${post.id}`}
            className="inline-block text-sm font-medium tracking-wide uppercase transition-all duration-300 border-b text-salon-purple border-salon-purple hover:text-black hover:border-black"
          >
            Read More
          </Link>
        )}
      </div>
    </motion.article>
  );
};

export default BlogPost; 