
import { SolarPanel, Droplets, Wind, Leaf, Recycle, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <SolarPanel className="h-10 w-10" />,
    title: "Solar Integration",
    description: "Custom designed solar arrays integrated into the architectural design of your home."
  },
  {
    icon: <Droplets className="h-10 w-10" />,
    title: "Water Conservation",
    description: "Advanced rainwater harvesting systems and greywater recycling solutions."
  },
  {
    icon: <Wind className="h-10 w-10" />,
    title: "Passive Design",
    description: "Strategic orientation and design to maximize natural ventilation and lighting."
  },
  {
    icon: <Leaf className="h-10 w-10" />,
    title: "Living Architecture",
    description: "Green roofs and living walls that provide insulation and improve air quality."
  },
  {
    icon: <Recycle className="h-10 w-10" />,
    title: "Sustainable Materials",
    description: "Locally-sourced, recycled, and eco-friendly building materials."
  },
  {
    icon: <BarChart className="h-10 w-10" />,
    title: "Energy Monitoring",
    description: "Smart home systems to track and optimize your energy consumption."
  }
];

const Features = () => {
  return (
    <section className="bg-ina-black text-white py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1439337153520-7082a56a81f4')] bg-cover bg-center opacity-20"></div>
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-semibold mb-4">
            Unique <span className="text-ina-gold">Sustainability</span> Features
          </h2>
          <div className="w-20 h-1 bg-ina-gold mx-auto mb-8"></div>
          <p className="text-white/80 max-w-3xl mx-auto">
            Every INA home is designed with unique sustainability features that reduce environmental impact while enhancing comfort and quality of life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 transition-scale">
              <div className="text-ina-gold mb-4">{feature.icon}</div>
              <h3 className="text-xl font-serif font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/70 mb-6">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
          <div className="md:flex items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h3 className="text-2xl font-serif font-semibold mb-3">Ready to build your sustainable dream home?</h3>
              <p className="text-white/70">
                Contact our team to discuss how we can incorporate these unique sustainability features into your custom home design.
              </p>
            </div>
            <Button asChild className="btn-primary">
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
