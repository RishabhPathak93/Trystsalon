import ServiceTemplate from './ServiceTemplate';

const SkinPage = () => {
  const skinServices = [
    {
      name: "Facial Treatments",
      description: "Luxurious facials customized for your skin type using premium products",
      price: "₹2499 onwards"
    },
    {
      name: "Chemical Peels",
      description: "Advanced chemical peels for skin rejuvenation and texture improvement",
      price: "₹3999 onwards"
    },
    {
      name: "Microdermabrasion",
      description: "Diamond tip microdermabrasion for refined and renewed skin",
      price: "₹2999 onwards"
    },
    {
      name: "Acne Treatment",
      description: "Targeted treatments for acne using medical-grade products",
      price: "₹2499 onwards"
    },
    {
      name: "Anti-Aging Treatment",
      description: "Premium anti-aging treatments using advanced technology",
      price: "₹4999 onwards"
    },
    {
      name: "Skin Consultation",
      description: "Comprehensive skin analysis with personalized treatment plan",
      price: "₹999 onwards"
    }
  ];

  return (
    <ServiceTemplate
      title="Skin Care Services"
      subtitle="Advanced skincare treatments for radiant, healthy skin"
      heroImage="/images/skin.jpeg"
      services={skinServices}
    />
  );
};

export default SkinPage; 