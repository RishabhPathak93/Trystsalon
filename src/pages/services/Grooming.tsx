import ServiceTemplate from './ServiceTemplate';

const GroomingPage = () => {
  const groomingServices = [
    {
      name: "Men's Haircut",
      description: "Professional haircut and styling for men",
      price: "From $40"
    },
    {
      name: "Beard Trim & Styling",
      description: "Expert beard grooming and shaping",
      price: "From $25"
    },
    {
      name: "Hot Towel Shave",
      description: "Traditional hot towel straight razor shave",
      price: "From $35"
    },
    {
      name: "Hair Color",
      description: "Professional hair coloring services for men",
      price: "From $60"
    },
    {
      name: "Facial",
      description: "Men's facial treatment for skin care",
      price: "From $50"
    },
    {
      name: "Complete Grooming Package",
      description: "Comprehensive grooming service including haircut, beard trim, and facial",
      price: "From $100"
    }
  ];

  return (
    <ServiceTemplate
      title="Men's Grooming"
      subtitle="Professional grooming services tailored for the modern gentleman"
      heroImage="/images/grooming.jpeg"
      services={groomingServices}
    />
  );
};

export default GroomingPage;    