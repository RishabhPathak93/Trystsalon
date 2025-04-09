import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  location?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "I've been a loyal customer for years. The stylists here are exceptional, and I always leave feeling like a new person.",
    author: "Sarah Johnson",
    location: "Bangalore"
  },
  {
    id: 2,
    content: "The attention to detail and personalized service is what keeps me coming back. They truly understand what I want.",
    author: "Priya Sharma",
    location: "Chennai"
  },
  {
    id: 3,
    content: "From the moment you walk in, you're treated like royalty. The ambiance is peaceful, and the results are always perfect.",
    author: "Raj Patel",
    location: "Hyderabad"
  },
  {
    id: 4,
    content: "I appreciate how they stay on top of trends while still giving practical advice for my hair type and lifestyle.",
    author: "Aisha Khan",
    location: "Bangalore"
  }
];

const TestimonialSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-champagne_pink/20">
      <div className="container px-4 mx-auto">
        <SectionTitle
          title="What our clients say"
          subtitle="Don't just take our word for it, hear from our satisfied clients."
          center
        />

        <div className="relative max-w-4xl mx-auto mt-12 min-h-[300px]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: index === activeIndex ? 1 : 0,
                x: index === activeIndex ? 0 : 50,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0
              }}
              transition={{ duration: 0.5 }}
              className={`bg-white p-8 shadow-md rounded-md ${
                index === activeIndex ? 'z-10' : 'z-0'
              }`}
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <svg className="w-10 h-10 mb-4 text-salon-purple/30" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="mb-6 text-lg italic text-jet/90">"{testimonial.content}"</p>
                </div>
                <div>
                  <p className="font-medium text-jet">
                    {testimonial.author}
                    {testimonial.location && (
                      <span className="font-normal text-jet/70"> — {testimonial.location}</span>
                    )}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="absolute left-0 right-0 flex justify-center gap-2 mt-6 -bottom-12">
            {testimonials.map((testimonial) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveIndex(testimonials.findIndex(t => t.id === testimonial.id))}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  testimonials.findIndex(t => t.id === testimonial.id) === activeIndex ? 'bg-salon-purple scale-110' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${testimonial.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
