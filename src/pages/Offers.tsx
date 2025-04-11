import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: 'Wax Works',
      price: '999',
      description: 'Full arms + Full legs + Underarms',
      features: ['Professional waxing', 'Soothing aftercare', 'Hygienic process'],
      category: 'Body Care'
    },
    {
      id: 2,
      title: 'Old School Luxe',
      price: '2399',
      description: 'Manicure + Pedicure',
      features: ['Premium products', 'Relaxing massage', 'Nail care', 'Cuticle treatment'],
      category: 'Nail Care',
      popular: true
    },
    {
      id: 3,
      title: 'Haircut & Olaplex',
      price: 'Custom',
      description: 'Haircut & Olaplex combo',
      features: ['Professional haircut', 'Olaplex treatment', 'Hair consultation'],
      category: 'Hair Care'
    },
    {
      id: 4,
      title: 'Express Mani-Pedi',
      price: '1999',
      description: 'Manicure + Pedicure + Gel polish (for hands)',
      features: ['Quick service', 'Gel polish', 'Basic nail care'],
      category: 'Nail Care'
    },
    {
      id: 5,
      title: 'Premium Mani-Pedi',
      price: '2799',
      description: 'Manicure + Pedicure + Jeannot ceuticals clean up',
      features: ['Premium products', 'Deep cleaning', 'Luxury experience'],
      category: 'Nail Care'
    },
    {
      id: 6,
      title: "Men's Ultimate Grooming",
      price: '2999',
      description: 'Haircut + Beard trim + Scalp Detox + Jeannot Ceuticals Clean up',
      features: ['Complete grooming', 'Scalp treatment', 'Premium products'],
      category: "Men's Grooming",
      popular: true
    },
    {
      id: 7,
      title: "Men's Essential Grooming",
      price: '1699',
      description: 'Haircut + Beard trim + Old School Detan',
      features: ['Basic grooming', 'Detan treatment', 'Professional service'],
      category: "Men's Grooming"
    },
    {
      id: 8,
      title: 'THALGO Facial',
      price: '3999',
      description: 'Luxe Facial treatment by THALGO',
      features: ['Premium products', 'Deep cleansing', 'Relaxing massage', 'Skin consultation'],
      category: 'Skin Care',
      popular: true
    }
  ];

  const categories = Array.from(new Set(offers.map(offer => offer.category)));

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-champagne_pink/20">
      <HeroSection
        title="Special Offers"
        subtitle="Indulge in our carefully curated packages designed for your complete wellness"
        backgroundImage="/HeroImage.jpg"
        backgroundVideo="/HeroVideo.mp4"
        buttonText="BOOK NOW"
        buttonLink="https://wa.me/1234567890"
      />

      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <SectionTitle
            title="Current Offers"
            subtitle="Choose from our selection of premium packages and treatments"
            center
          />

          {categories.map((category, categoryIndex) => (
            <div key={category} className="mt-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="mb-8 text-2xl font-lora text-salon-purple"
              >
                {category}
              </motion.h2>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {offers
                  .filter(offer => offer.category === category)
                  .map((offer, index) => (
                    <motion.div
                      key={offer.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative p-6 transition-all duration-300 bg-white rounded-lg shadow-lg group hover:shadow-xl"
                    >
                      {offer.popular && (
                        <span className="absolute px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded-full -top-3 right-6 bg-salon-purple">
                          Popular
                        </span>
                      )}

                      <div className="mb-4">
                        <h3 className="mb-2 text-xl font-lora text-salon-purple group-hover:text-black">
                          {offer.title}
                        </h3>
                        <p className="text-sm text-jet/70">{offer.description}</p>
                      </div>

                      <div className="mb-6">
                        <div className="flex items-baseline mb-4">
                          <span className="text-3xl font-bold text-jet">₹{offer.price}</span>
                          {offer.price !== 'Custom' && (
                            <span className="ml-1 text-sm text-jet/60">only</span>
                          )}
                        </div>

                        <ul className="space-y-2">
                          {offer.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-sm text-jet/70">
                              <svg
                                className="flex-shrink-0 w-4 h-4 mr-2 text-salon-purple"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to="https://wa.me/1234567890"
                        className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-medium tracking-wider text-white uppercase transition-all duration-300 rounded-lg bg-salon-purple hover:bg-black group"
                      >
                        Book Now
                        <svg
                          className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-champagne_pink/20 to-white md:py-24">
        <div className="container px-4 mx-auto text-center">
          <SectionTitle
            title="Need a Custom Package?"
            subtitle="We can create a personalized package tailored to your needs"
            center
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Link
              to="https://wa.me/1234567890"
              className="inline-flex items-center px-8 py-3 text-sm font-medium tracking-wider text-white uppercase transition-all duration-300 rounded-lg bg-salon-purple hover:bg-black group"
            >
              Contact Us
              <svg
                className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Offers; 