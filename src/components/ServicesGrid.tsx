import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ServicesGridProps {
  services: Service[];
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ services }) => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, margin: '-100px' }}
          className="overflow-hidden bg-white rounded-sm shadow-md group"
        >
          <div className="relative h-64 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="object-cover w-full h-full transition-all duration-500 transform grayscale group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-20 group-hover:opacity-0" />
          </div>

          <div className="p-6">
            <h3 className="mb-2 text-xl font-lora text-salon-purple">{service.title}</h3>
            <p className="mb-4 text-jet/70 line-clamp-3">{service.description}</p>
            <Link
              to={service.link}
              className="inline-block text-sm font-medium tracking-wide uppercase transition-all duration-300 border-b text-dark-green border-dark-green hover:text-white hover:bg-dark-green"
            >
              Explore service
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesGrid;
