import { motion } from 'framer-motion';
import HeroSection from '../../components/HeroSection';
import SectionTitle from '../../components/SectionTitle';

interface ServicePageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  services: {
    name: string;
    description: string;
    price?: string;
  }[];
}

const ServiceTemplate: React.FC<ServicePageProps> = ({
  title,
  subtitle,
  heroImage,
  services
}) => {
  return (
    <div>
      <HeroSection
        title={title}
        subtitle={subtitle}
        backgroundImage={heroImage}
        buttonText="BOOK NOW"
      />

      <section className="py-16 bg-white md:py-24">
        <div className="container px-4 mx-auto">
          <SectionTitle
            title="Our Services"
            subtitle="Choose from our range of professional services tailored to your needs"
            center
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: '-100px' }}
            className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
                className="p-6 transition-shadow duration-300 bg-white rounded-sm shadow-md hover:shadow-lg"
              >
                <h3 className="mb-2 text-xl font-lora text-salon-purple">{service.name}</h3>
                <p className="mb-4 text-jet/70">{service.description}</p>
                {service.price && (
                  <p className="text-lg font-medium text-salon-purple">{service.price}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-almond/20">
        <div className="container px-4 mx-auto text-center">
          <SectionTitle
            title="Ready to experience our services?"
            subtitle="Book your appointment today and let our experts take care of you."
            center
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="mt-8"
          >
            <a
              href="https://wa.me/1234567890"
              className="inline-block px-8 py-3 text-sm font-medium tracking-wider text-white uppercase transition-all duration-300 bg-salon-purple hover:bg-black hover:text-white"
            >
              Book an Appointment
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceTemplate; 