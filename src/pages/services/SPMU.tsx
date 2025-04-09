import ServiceTemplate from './ServiceTemplate';

const SPMUPage = () => {
  const spmuServices = [
    {
      name: "Microblading",
      description: "Natural-looking, semi-permanent eyebrow enhancement",
      price: "From $400"
    },
    {
      name: "Powder Brows",
      description: "Soft, powdered eyebrow look that lasts",
      price: "From $450"
    },
    {
      name: "Lip Blush",
      description: "Semi-permanent lip color enhancement",
      price: "From $500"
    },
    {
      name: "Eyeliner",
      description: "Long-lasting definition for your eyes",
      price: "From $350"
    },
    {
      name: "Color Boost",
      description: "Touch-up service for existing SPMU treatments",
      price: "From $200"
    },
    {
      name: "Consultation",
      description: "Professional consultation and patch test",
      price: "From $50"
    }
  ];

  return (
    <ServiceTemplate
      title="Semi-Permanent Makeup"
      subtitle="Enhance your natural beauty with our professional SPMU services"
      heroImage="/images/spmu.jpeg"
      services={spmuServices}
    />
  );
};

export default SPMUPage; 