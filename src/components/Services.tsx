
import { Building, Network, Home, SolarPanel, Wind, BarChart4 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Home className="h-10 w-10" />,
    title: "Sustainable Home Construction",
    description: "Custom-built homes with unique sustainability features tailored to each client's preferences and the local environment."
  },
  {
    icon: <Building className="h-10 w-10" />,
    title: "Property Development",
    description: "Eco-friendly residential and commercial developments designed with smart technology integration and green spaces."
  },
  {
    icon: <Network className="h-10 w-10" />,
    title: "Network Infrastructure",
    description: "Cutting-edge network solutions for smart, connected communities enabling advanced home automation and monitoring."
  },
  {
    icon: <SolarPanel className="h-10 w-10" />,
    title: "Renewable Energy Solutions",
    description: "Custom solar panel installations, geothermal systems, and energy storage solutions integrated directly into building designs."
  },
  {
    icon: <Wind className="h-10 w-10" />,
    title: "Green Retrofitting",
    description: "Transform existing properties into energy-efficient, sustainable spaces with minimal environmental impact."
  },
  {
    icon: <BarChart4 className="h-10 w-10" />,
    title: "Sustainability Consulting",
    description: "Expert guidance on implementing eco-friendly building practices and achieving sustainability certifications."
  }
];

const Services = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-semibold mb-4">
            Our <span className="gold-gradient">Services</span>
          </h2>
          <div className="w-20 h-1 bg-ina-gold mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of construction and development services focused on sustainability and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md transition-scale">
              <div className="text-ina-gold mb-4">{service.icon}</div>
              <h3 className="text-xl font-serif font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link to="/services" className="text-ina-gold hover:text-ina-gold2 flex items-center font-medium">
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button asChild className="btn-primary">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
