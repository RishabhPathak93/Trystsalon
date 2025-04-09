import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  backgroundVideo?: string;
  buttonLink?: string;
  buttonText?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  backgroundVideo,
  buttonLink = "https://wa.me/1234567890",
  buttonText = "BOOK AN APPOINTMENT NOW",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.warn("Video autoplay was prevented:", error);
      });
    }
  }, [backgroundVideo]);

  return (
    <div className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Video Background */}
      {backgroundVideo && (
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            controlsList="nodownload noplaybackrate"
            className="absolute top-0 left-0 object-cover w-full h-full"
            style={{ 
              filter: 'brightness(0.5)',
              objectPosition: 'center'
            }}
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Fallback Background Image */}
      {!backgroundVideo && backgroundImage && (
        <div 
          className="absolute inset-0 z-0 bg-center bg-cover"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`,
            backgroundSize: 'cover'
          }}
        />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 rounded-b-3xl z-[1]" />

      <div className="container relative z-10 px-4 py-12 mx-auto">
        <div className="max-w-3xl">
          <motion.h1
            className="mb-6 text-4xl leading-tight text-white sm:text-5xl md:text-6xl font-lora"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="mb-8 text-base leading-relaxed sm:text-lg md:text-xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>

          {buttonText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to={buttonLink}
                className="inline-block px-6 py-2.5 text-xs font-medium tracking-wider text-white uppercase transition-all duration-300 bg-dark-green sm:text-sm rounded-full hover:bg-dark-brown hover:text-white"
              >
                {buttonText}
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
