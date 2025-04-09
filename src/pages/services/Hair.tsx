import ServiceTemplate from './ServiceTemplate';

const HairPage = () => {
  const hairServices = [
    {
      name: "Haircut & Style",
      description: "Professional haircut and styling tailored to your face shape and preferences",
      price: "From $50"
    },
    {
      name: "Hair Coloring",
      description: "Full color, highlights, balayage, or ombre by our expert colorists",
      price: "From $80"
    },
    {
      name: "Hair Treatments",
      description: "Deep conditioning, keratin treatment, and hair spa services",
      price: "From $45"
    },
    {
      name: "Blowout & Styling",
      description: "Professional blow dry and styling for any occasion",
      price: "From $35"
    },
    {
      name: "Hair Extensions",
      description: "Premium quality hair extensions application and maintenance",
      price: "From $200"
    },
    {
      name: "Bridal Hair",
      description: "Special occasion and bridal hair styling services",
      price: "From $150"
    }
  ];

  return (
    <ServiceTemplate
      title="Hair Services"
      subtitle="Transform your look with our expert hair styling, coloring, and treatment services"
      heroImage="/images/hair.jpeg"
      services={hairServices}
    />
  );
};

export default HairPage; 