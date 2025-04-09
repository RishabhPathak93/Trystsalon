import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  reversed?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  link,
  reversed = false
}) => {
  return (
    <div className={`container mx-auto px-4 mb-12 ${reversed ? 'md:flex-row-reverse' : ''}`}>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${reversed ? 'md:flex-row-reverse' : ''}`}>
        <motion.div
          initial={{ opacity: 0, x: reversed ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-100px' }}
          className={`bg-white ${reversed ? 'md:order-2' : 'md:order-1'}`}
        >
          <div className="flex flex-col justify-center h-full p-8 lg:p-12">
            <h3 className="mb-4 text-2xl md:text-3xl font-lora text-dark-green">{title}</h3>
            <p className="mb-6 text-brown/80">{description}</p>
            <Link
              to={link}
              className="inline-block pb-1 text-xs font-medium tracking-wider uppercase transition-all duration-300 border-b text-dark-green border-dark-green hover:text-white hover:bg-dark-green hover:border-dark-green"
            >
              Explore all our services
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: reversed ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-100px' }}
          className={`overflow-hidden rounded-lg shadow-lg ${reversed ? 'md:order-1' : 'md:order-2'}`}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceCard;
