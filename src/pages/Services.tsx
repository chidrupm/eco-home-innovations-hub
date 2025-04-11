
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Building, Network, Home, SolarPanel, Wind, BarChart4, Check } from 'lucide-react';

const serviceDetails = [
  {
    id: 'sustainable-home',
    icon: <Home className="h-12 w-12" />,
    title: "Sustainable Home Construction",
    description: "We design and build custom homes with unique sustainability features tailored to each client's preferences and the local environment.",
    features: [
      "Passive solar design for natural heating and cooling",
      "High-performance insulation and windows",
      "Energy-efficient HVAC systems",
      "Smart home technology integration",
      "Sustainable landscaping and xeriscaping",
      "Water conservation systems"
    ],
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742"
  },
  {
    id: 'property-dev',
    icon: <Building className="h-12 w-12" />,
    title: "Property Development",
    description: "We develop eco-friendly residential and commercial properties designed with smart technology integration and green spaces.",
    features: [
      "Mixed-use developments with reduced environmental impact",
      "Community-focused designs that promote connection",
      "Integration of green spaces and natural elements",
      "Walkable communities that reduce reliance on vehicles",
      "Smart infrastructure for enhanced efficiency",
      "Sustainable waste management systems"
    ],
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
  },
  {
    id: 'network-infra',
    icon: <Network className="h-12 w-12" />,
    title: "Network Infrastructure",
    description: "We implement cutting-edge network solutions for smart, connected communities enabling advanced home automation and monitoring.",
    features: [
      "Fiber optic networks for high-speed connectivity",
      "Smart grid integration for efficient energy usage",
      "IoT infrastructure for home automation",
      "Community-wide monitoring systems",
      "Secure, private networks for residents",
      "Future-proof designs for technology evolution"
    ],
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511"
  },
  {
    id: 'renewable-energy',
    icon: <SolarPanel className="h-12 w-12" />,
    title: "Renewable Energy Solutions",
    description: "We design and install custom solar panel installations, geothermal systems, and energy storage solutions integrated directly into building designs.",
    features: [
      "Custom solar array design and installation",
      "Battery storage systems for energy independence",
      "Geothermal heating and cooling systems",
      "Wind energy solutions for suitable locations",
      "Microgrids for community energy sharing",
      "Energy monitoring and management systems"
    ],
    image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a"
  },
  {
    id: 'green-retrofit',
    icon: <Wind className="h-12 w-12" />,
    title: "Green Retrofitting",
    description: "We transform existing properties into energy-efficient, sustainable spaces with minimal environmental impact.",
    features: [
      "Energy audits and efficiency assessments",
      "Insulation upgrades and air sealing",
      "Window and door replacements",
      "HVAC system modernization",
      "Renewable energy integration",
      "Water-saving fixture installation"
    ],
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace"
  },
  {
    id: 'sustainability-consult',
    icon: <BarChart4 className="h-12 w-12" />,
    title: "Sustainability Consulting",
    description: "We provide expert guidance on implementing eco-friendly building practices and achieving sustainability certifications.",
    features: [
      "LEED certification guidance",
      "Passive House consulting",
      "Environmental impact assessments",
      "Sustainable material selection",
      "Energy modeling and analysis",
      "Regulatory compliance assistance"
    ],
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e"
  }
];

const Services = () => {
  return (
    <div>
      <Navbar />
      
      <section className="relative pt-40 pb-20 bg-ina-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1439337153520-7082a56a81f4')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-serif font-bold text-white mb-6">Our <span className="text-ina-gold">Services</span></h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Comprehensive sustainable construction and development solutions for homes and communities.
          </p>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-semibold mb-4">
              What We <span className="gold-gradient">Offer</span>
            </h2>
            <div className="w-20 h-1 bg-ina-gold mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At INA, we provide a full spectrum of services designed to create sustainable, innovative spaces that enhance lives while respecting our planet.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {serviceDetails.map((service, index) => (
              <div key={service.id} className="flex flex-col">
                <div className="relative h-64 mb-8 overflow-hidden rounded-lg">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ina-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-white text-2xl font-serif">{service.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col">
                  <div className="text-ina-gold mb-4">{service.icon}</div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <h4 className="text-lg font-semibold mb-4">Key Features:</h4>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="text-ina-green h-5 w-5 shrink-0 mr-2 mt-1" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto">
                    <Button asChild className="btn-primary">
                      <Link to="/contact">Inquire About This Service</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-ina-black text-white">
        <div className="container mx-auto px-4">
          <div className="rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl font-serif font-semibold mb-4">
                  Ready to Start Your <span className="text-ina-gold">Sustainable Project</span>?
                </h2>
                <p className="text-white/80 mb-8">
                  Contact our team today to discuss your project needs and learn how our services can help you achieve your sustainability goals.
                </p>
                <Button asChild className="btn-primary">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
              <div className="md:w-1/2 relative min-h-[300px]">
                <img 
                  src="https://images.unsplash.com/photo-1496307653780-42ee777d4833" 
                  alt="Sustainable building" 
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
