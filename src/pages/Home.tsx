import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import TestimonialSection from '../components/TestimonialSection';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      id: 1,
      title: 'Hair',
      description: 'Cut. Colour. Cure. No matter the service, you will meet a new you, every time.',
      image: '/images/salon1.jpg',
      link: '/services/hair',
      reversed: false
    },
    {
      id: 2,
      title: 'Skin',
      description: 'Clean-up or get an indulging facial, you deserve to be pampered. Over and over again.',
      image: '/images/salon2.jpg',
      link: '/services/skin',
      reversed: true
    },
    {
      id: 3,
      title: 'Grooming',
      description: 'Become a regular. Make it a grooming ritual. Scrub, shave, trim, put on a good face and look like success. While having a good time.',
      image: '/images/salon3.jpg',
      link: '/services/grooming',
      reversed: false
    },
    {
      id: 4,
      title: 'Spa',
      description: 'Not for special occasions alone. Treat yourself to one, on good days, bad days, and special ones.',
      image: '/images/salon4.jpg',
      link: '/services/spa',
      reversed: true
    }
  ];

  return (
    <div className="bg-white">
      <HeroSection
        title="What you wear starts with your hair"
        subtitle="Walk in for more than a cut, curl or cure. We have got you covered, head to toe."
        backgroundImage="/images/hero.jpg"
        backgroundVideo="/public/HeroVideo.mp4"
      />

      <section className="py-16 bg-champagne-pink/10">
        <div className="container px-4 mx-auto">
          <SectionTitle
            title="More than a salon"
            subtitle="In a time everyone's hair looked same, came a brother-sister duo with a vision to transform. Your hair. Your lives."
            center
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="mt-8 mb-12 text-center"
          >
            <Link
              to="/about"
              className="inline-block px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 border text-brown border-dark-green hover:bg-dark-green hover:text-white"
            >
              More about us
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-white md:py-24">
        <div className="container px-4 mx-auto mb-16">
          <SectionTitle
            title="Our Services"
            subtitle="Experience premium services tailored to your unique style and needs."
            center
          />
        </div>

        <div className="space-y-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              link={service.link}
              reversed={service.reversed}
            />
          ))}
        </div>

        <div className="container px-4 mx-auto mt-16 text-center">
          <Link
            to="/services"
            className="inline-block px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 border text-brown border-dark-green hover:bg-dark-green hover:text-white"
          >
            Explore all services
          </Link>
        </div>
      </section>

      <TestimonialSection />

      <section className="relative py-16 overflow-hidden text-jet md:py-24 bg-champagne-pink/10">
        <div className="container px-4 mx-auto">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative z-10 space-y-6">
              <SectionTitle
                title="Our work"
                subtitle="Hair technicians to masters in skin care sciences. Every one of us takes the grooming business, very personally. Here's a look."
                className="mb-0"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <Link
                  to="/work"
                  className="inline-block px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 border text-brown border-dark-green hover:bg-dark-green hover:text-white"
                >
                  View our work
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: '-100px' }}
              className="relative z-10 grid grid-cols-2 gap-4"
            >
              <div className="col-span-2 row-span-2 overflow-hidden rounded-lg shadow-lg md:col-span-1 group">
                <div className="relative overflow-hidden">
                  <img 
                    src="/images/service2.jpg" 
                    alt="Our work" 
                    className="object-cover w-full h-full transition-all duration-500 transform grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-500 bg-black opacity-20 group-hover:opacity-0" />
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg group">
                <div className="relative overflow-hidden">
                  <img 
                    src="/images/service2.jpg" 
                    alt="Our work" 
                    className="object-cover w-full h-48 transition-all duration-500 transform grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-500 bg-black opacity-20 group-hover:opacity-0" />
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg group">
                <div className="relative overflow-hidden">
                  <img 
                    src="/images/service3.jpg" 
                    alt="Our work" 
                    className="object-cover w-full h-48 transition-all duration-500 transform grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-500 bg-black opacity-20 group-hover:opacity-0" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div 
          className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10 bg-gradient-to-br from-dun/50 to-champagne-pink/50"
        />
      </section>

      <section className="py-16 bg-white md:py-24">
        <div className="container px-4 mx-auto">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: '-100px' }}
              className="order-2 md:order-1"
            >
              <img
                src="/images/hero-bg.jpg"
                alt="Make a booking"
                className="object-cover w-full rounded-lg shadow-lg h-80"
              />
            </motion.div>

            <div className="order-1 md:order-2">
              <SectionTitle
                title="Here to help"
                subtitle="Have a question? Or want to make a booking? Reach out to us via email or phone."
              />

              <div className="mb-8 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="flex items-center"
                >
                  <div className="mr-2 font-medium text-jet">Bangalore:</div>
                  <a href="tel:+918880903903" className="text-jet hover:underline">8880903903</a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="flex items-center"
                >
                  <div className="mr-2 font-medium text-jet">Chennai:</div>
                  <a href="tel:+917811903903" className="text-jet hover:underline">7811903903</a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="flex items-center"
                >
                  <div className="mr-2 font-medium text-jet">Hyderabad:</div>
                  <a href="tel:+917601903903" className="text-jet hover:underline">7601903903</a>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <Link
                  to="https://wa.me/1234567890"
                  className="inline-block px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 border text-brown border-dark-green hover:bg-dark-green hover:text-white"
                >
                  Send us an email
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
