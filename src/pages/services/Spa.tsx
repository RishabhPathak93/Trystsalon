import ServiceTemplate from './ServiceTemplate';

const SpaPage = () => {
  const spaServices = [
    {
      name: "Swedish Massage",
      description: "Classic relaxation massage with medium pressure",
      price: "From $80"
    },
    {
      name: "Deep Tissue Massage",
      description: "Therapeutic massage targeting deep muscle tension",
      price: "From $90"
    },
    {
      name: "Hot Stone Massage",
      description: "Relaxing massage using heated stones",
      price: "From $100"
    },
    {
      name: "Aromatherapy Massage",
      description: "Massage with essential oils for enhanced relaxation",
      price: "From $85"
    },
    {
      name: "Body Scrub",
      description: "Full body exfoliation treatment",
      price: "From $70"
    },
    {
      name: "Body Wrap",
      description: "Detoxifying and moisturizing body wrap treatments",
      price: "From $75"
    }
  ];

  return (
    <ServiceTemplate
      title="Spa Services"
      subtitle="Relax and rejuvenate with our luxurious spa treatments"
      heroImage="/images/spa.jpeg"
      services={spaServices}
    />
  );
};

export default SpaPage; 