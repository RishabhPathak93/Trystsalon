import ServiceTemplate from './ServiceTemplate';

const NailPage = () => {
  const nailServices = [
    {
      name: "Manicure",
      description: "Classic manicure with premium products and perfect finishing",
      price: "From $30"
    },
    {
      name: "Pedicure",
      description: "Relaxing pedicure treatment with massage",
      price: "From $45"
    },
    {
      name: "Gel Nails",
      description: "Long-lasting gel nail application",
      price: "From $50"
    },
    {
      name: "Nail Art",
      description: "Creative nail art and designs",
      price: "From $20"
    },
    {
      name: "Acrylic Extensions",
      description: "Professional acrylic nail extensions",
      price: "From $70"
    },
    {
      name: "Nail Repair",
      description: "Nail repair and maintenance services",
      price: "From $25"
    }
  ];

  return (
    <ServiceTemplate
      title="Nail Care Services"
      subtitle="Pamper your hands and feet with our professional nail care services"
      heroImage="/images/nail.jpeg"
      services={nailServices}
    />
  );
};

export default NailPage; 