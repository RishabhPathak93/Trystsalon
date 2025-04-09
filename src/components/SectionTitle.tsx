import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  center = false,
  light = false,
  className = ""
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
      className={`mb-4 md:mb-12 ${center ? 'text-center' : ''} ${className}`}
    >
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-lora mb-3 md:mb-4 ${light ? 'text-white' : 'text-dark-green'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-sm sm:text-base md:text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-white/80' : 'text-brown/80'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
