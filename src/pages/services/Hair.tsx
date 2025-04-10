import ServiceTemplate from './ServiceTemplate';

const HairPage = () => {
  const hairServices = [
    {
      name: "Haircut & Style",
      description: "Expert haircut and styling personalized to enhance your unique features",
      price: "₹999 onwards"
    },
    {
      name: "Hair Coloring",
      description: "Premium hair coloring including global color, highlights, and balayage",
      price: "₹2999 onwards"
    },
    {
      name: "Hair Treatments",
      description: "Luxury hair treatments including Olaplex, keratin, and specialized hair spa",
      price: "₹1999 onwards"
    },
    {
      name: "Blowout & Styling",
      description: "Professional blow dry and styling for any occasion with lasting results",
      price: "₹899 onwards"
    },
    {
      name: "Hair Extensions",
      description: "High-quality hair extensions for added length and volume",
      price: "₹15000 onwards"
    },
    {
      name: "Bridal Hair",
      description: "Exquisite bridal hair styling for your special day",
      price: "₹8000 onwards"
    }
  ];

  return (
    <ServiceTemplate
      title="Hair Services"
      subtitle="Experience the art of hair transformation with our expert stylists"
      heroImage="/images/hair.jpeg"
      services={hairServices}
    />
  );
};

export default HairPage; 