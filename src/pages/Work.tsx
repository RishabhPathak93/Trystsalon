import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';

const Work = () => {
  const workImages = [
    {
      id: 1,
      image: '/images/service1.jpg',
      instagramLink: 'https://instagram.com/p/example1',
      category: 'Hair Color'
    },
    {
      id: 2,
      image: '/images/service2.jpg',
      instagramLink: 'https://instagram.com/p/example2',
      category: 'Styling'
    },
    {
      id: 3,
      image: '/images/service3.jpg',
      instagramLink: 'https://instagram.com/p/example3',
      category: 'Haircut'
    },
    {
      id: 4,
      image: '/images/service4.jpg',
      instagramLink: 'https://instagram.com/p/example4',
      category: 'Color'
    },
    {
      id: 5,
      image: '/images/service5.jpg',
      instagramLink: 'https://instagram.com/p/example5',
      category: 'Styling'
    },
    {
      id: 6,
      image: '/images/service6.jpg',
      instagramLink: 'https://instagram.com/p/example6',
      category: 'Haircut'
    }
  ];

  return (
    <div className="min-h-screen py-16 bg-white md:py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-lora text-salon-purple">
            What we do makes us who we are
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-jet/70">
            In the mood for a makeover, but not sure what you have in mind? Take a look at our tried-and-tested dos and get inspired.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {workImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={item.image}
                  alt={`Work ${item.id}`}
                  className="object-cover w-full h-full transition-all duration-500 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-0 group-hover:opacity-40" />
                
                {/* Instagram Icon Overlay */}
                <a
                  href={item.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                >
                  <div className="p-3 text-white transition-transform duration-300 transform -translate-y-2 rounded-full bg-black/50 group-hover:translate-y-0">
                    <FaInstagram size={24} />
                  </div>
                </a>

                {/* Category Tag */}
                <div className="absolute px-3 py-1 text-sm font-medium transition-all duration-300 transform translate-y-2 rounded-full opacity-0 bottom-4 left-4 bg-white/90 text-jet group-hover:opacity-100 group-hover:translate-y-0">
                  {item.category}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Follow Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <a
            href="https://www.instagram.com/tryst.salon/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 space-x-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 border rounded-full text-jet border-jet hover:bg-jet hover:text-champagne-pink-2 group"
          >
            <FaInstagram
              size={18}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span>Follow us on Instagram</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Work; 