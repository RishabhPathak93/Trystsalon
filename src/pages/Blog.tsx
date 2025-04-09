import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import BlogPost, { BlogPostType } from '../components/BlogPost';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [posts, setPosts] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, this would be an API call
    // For now, we'll use local storage
    const savedPosts = localStorage.getItem('blog_posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
    setLoading(false);
  }, []);

  return (
    <div>
      <HeroSection
        title="Our Blog"
        subtitle="Stories, tips, and insights from the world of beauty and wellness"
        backgroundVideo='/public/HeroVideo.mp4'
        backgroundImage='/public/images/hero-bg.jpg'
        buttonText="WRITE A POST"
        buttonLink="/blog/new"
      />

      <section className="py-16 bg-white md:py-24">
        <div className="container px-4 mx-auto">
          <SectionTitle
            title="Latest Posts"
            subtitle="Read our latest articles and stay up to date with beauty trends"
            center
          />

          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="w-16 h-16 border-4 rounded-full border-salon-purple border-t-transparent animate-spin"></div>
            </div>
          ) : posts.length > 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: '-100px' }}
              className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3"
            >
              {posts.map((post) => (
                <BlogPost key={post.id} post={post} />
              ))}
            </motion.div>
          ) : (
            <div className="mt-12 text-center">
              <p className="mb-6 text-lg text-jet/70">No blog posts yet.</p>
              <Link
                to="/blog/new"
                className="inline-block px-8 py-3 text-sm font-medium tracking-wider text-white uppercase transition-all duration-300 bg-salon-purple hover:bg-black"
              >
                Write Your First Post
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog; 