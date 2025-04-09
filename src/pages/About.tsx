import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <HeroSection
        title="Where Beauty Meets Care"
        subtitle="Step into our world — where style, sustainability, and self-love come together."
        backgroundImage="/images/hero.jpg"
        backgroundVideo='/public/HeroVideo.mp4'
        buttonText="EXPLORE OUR WORK"
        buttonLink="/work"
      />

      <section className="py-16 bg-white md:py-24">
        <div className="container px-4 mx-auto">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <SectionTitle
                title="Our Story"
                subtitle="Founded two years ago with a vision to redefine self-care, we are more than just a salon — it's a space where you're truly cared for."
              />

              <div className="mt-6 space-y-4 text-jet/70">
                <p>
                  Welcome to our salon – a retreat where elegance, confidence, and care come together. Our approach goes beyond enhancing your appearance; we focus on crafting confidence through personalized, ethical services tailored to you.
                </p>
                <p>
                  Carefully choosing only all-natural, eco-friendly products, we ensure that every treatment nurtures both your beauty and the planet. We believe in beauty with integrity.
                </p>
                <p>
                  Step into a beautifully designed space, created to offer a warm, inviting atmosphere that makes you feel completely comfortable and at ease. Here, you are valued, rejuvenated, and treated with the utmost care – because your radiance is our purpose.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: '-100px' }}
              className="relative"
            >
              <img
                src="/images/salon1.jpg"
                alt="Tryst salon interior"
                className="relative z-10 object-cover w-full transition-all duration-500 rounded-lg shadow-lg grayscale hover:grayscale-0"
              />
              <div className="absolute w-32 h-32 rounded-lg -bottom-4 -right-4 bg-salon-purple -z-0" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-almond/20">
        <div className="container px-4 mx-auto">
          <SectionTitle
            title="Our Mission & Vision"
            subtitle="Making you look and feel your absolute best through sustainable beauty practices."
            center
          />

          <div className="grid gap-8 mt-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="p-8 bg-white rounded-sm shadow-md"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-salon-purple/10">
                <svg className="w-8 h-8 text-salon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-lora text-salon-purple">Our Mission</h3>
              <p className="text-jet/70">
                To provide personalized, ethical services that enhance both your appearance and confidence, while maintaining our commitment to sustainability and environmental responsibility through the use of eco-friendly products.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
              className="p-8 bg-white rounded-sm shadow-md"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-salon-purple/10">
                <svg className="w-8 h-8 text-salon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-lora text-salon-purple">Our Vision</h3>
              <p className="text-jet/70">
                To create a space where style, sustainability, and self-love come together, offering a warm, inviting atmosphere where every client feels completely comfortable and valued while receiving the highest quality beauty services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white md:py-24">
        <div className="container px-4 mx-auto">
          <SectionTitle
            title="Our Values"
            subtitle="The core principles that guide our approach to beauty and care."
            center
          />

          <div className="grid gap-8 mt-12 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-champagne_pink/30">
                <svg className="w-8 h-8 text-salon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-lora text-salon-purple">Sustainability</h3>
              <p className="text-jet/70">
              At our salon, sustainability isn’t just a choice it’s a commitment to both our clients, community and the environment. We thoughtfully select clean, eco-conscious products that are as gentle on you as they are respectful to the planet.              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
              className="text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-champagne_pink/30">
                <svg className="w-8 h-8 text-salon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-lora text-salon-purple">Personalization</h3>
              <p className="text-jet/70">
                Every service is tailored to your unique needs, ensuring that you receive care that's perfectly suited to your individual style and preferences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: '-100px' }}
              className="text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-champagne_pink/30">
                <svg className="w-8 h-8 text-salon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-lora text-salon-purple">Comfort</h3>
              <p className="text-jet/70">
                Our beautifully designed space offers a warm, inviting atmosphere where you can feel completely at ease while being pampered and cared for.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 text-white md:py-24 bg-salon-purple">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
              className="mb-6 text-3xl md:text-4xl font-lora"
            >
              Experience beauty with integrity
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="mb-8 text-white/80"
            >
              Ready to experience personalized care in our warm and inviting space?
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <Link
                to="https://wa.me/1234567890"
                className="inline-block px-8 py-3 mr-4 text-sm font-medium tracking-wider uppercase transition-all duration-300 bg-white text-salon-purple hover:bg-black hover:text-white"
              >
                Book an Appointment
              </Link>
              <Link
                to="/services"
                className="inline-block px-8 py-3 text-sm font-medium tracking-wider text-white uppercase transition-all duration-300 border border-white hover:bg-white hover:text-salon-purple"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
