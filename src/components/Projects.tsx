
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Leaf, SolarPanel, Droplets, Wind } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "EcoHaven Residences",
    location: "Portland, Oregon",
    tags: ["Solar Energy", "Rainwater Harvesting", "Smart Home"],
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
    sustainabilityFeature: "Solar Energy",
    sustainabilityIcon: <SolarPanel className="h-5 w-5" />
  },
  {
    id: 2,
    title: "Terra Verde Community",
    location: "Austin, Texas",
    tags: ["Geothermal", "Living Walls", "Zero Waste"],
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    sustainabilityFeature: "Water Conservation",
    sustainabilityIcon: <Droplets className="h-5 w-5" />
  },
  {
    id: 3,
    title: "Skywind Towers",
    location: "Chicago, Illinois",
    tags: ["Wind Power", "Green Roof", "Energy Efficient"],
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
    sustainabilityFeature: "Wind Energy",
    sustainabilityIcon: <Wind className="h-5 w-5" />
  }
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-semibold mb-4">
            Featured <span className="gold-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-ina-gold mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover our sustainable homes, each featuring unique eco-friendly elements that reflect our commitment to innovation and environmental responsibility.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="relative rounded-lg overflow-hidden shadow-lg group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="h-72 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-ina-black/90 via-ina-black/30 to-transparent p-6 flex flex-col justify-end transition-opacity duration-300">
                <div className="flex items-center mb-2">
                  <Leaf className="h-5 w-5 text-ina-gold mr-2" />
                  <span className="text-white/80 text-sm">{project.location}</span>
                </div>
                
                <h3 className="text-white text-xl font-serif font-semibold">{project.title}</h3>
                
                <div className="flex items-center mt-3 bg-ina-black/50 rounded-full px-3 py-1 w-fit">
                  {project.sustainabilityIcon}
                  <span className="text-white text-xs ml-2">{project.sustainabilityFeature}</span>
                </div>
                
                <div className={`flex flex-wrap gap-2 mt-4 transition-all duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-white/10 text-white text-xs px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className={`absolute top-0 left-0 bg-ina-gold text-ina-black px-4 py-2 font-semibold text-sm transition-all duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                Featured
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button asChild className="btn-primary">
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
