import ServiceTemplate from './ServiceTemplate';

const SkinPage = () => {
  const skinServices = [
    {
      name: "Facial Treatments",
      description: "Customized facial treatments for all skin types",
      price: "From $60"
    },
    {
      name: "Chemical Peels",
      description: "Professional chemical peels for skin rejuvenation",
      price: "From $80"
    },
    {
      name: "Microdermabrasion",
      description: "Advanced exfoliation treatment for renewed skin",
      price: "From $70"
    },
    {
      name: "Acne Treatment",
      description: "Specialized treatments for acne-prone skin",
      price: "From $65"
    },
    {
      name: "Anti-Aging Treatment",
      description: "Premium anti-aging treatments and procedures",
      price: "From $90"
    },
    {
      name: "Skin Consultation",
      description: "Professional skin analysis and treatment planning",
      price: "From $40"
    }
  ];

  return (
    <ServiceTemplate
      title="Skin Care Services"
      subtitle="Reveal your natural glow with our professional skin care treatments"
      heroImage="/images/skin.jpeg"
      services={skinServices}
    />
  );
};

export default SkinPage; 