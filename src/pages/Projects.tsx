
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Leaf, Sun, Droplets, Wind, Home, BarChart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const allProjects = [
  {
    id: 1,
    title: "EcoHaven Residences",
    location: "Portland, Oregon",
    type: "Residential",
    year: 2022,
    tags: ["Solar Energy", "Rainwater Harvesting", "Smart Home"],
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
    sustainabilityFeature: "Solar Energy",
    sustainabilityIcon: <Sun className="h-5 w-5" />,
    description: "A collection of 12 luxury eco-homes featuring integrated solar arrays, smart home automation, and advanced rainwater harvesting systems.",
    features: [
      "32kW solar panel system",
      "100% LED lighting",
      "High-efficiency heat pumps",
      "Triple-glazed windows",
      "Smart home energy management",
      "50,000-gallon rainwater collection"
    ]
  },
  {
    id: 2,
    title: "Terra Verde Community",
    location: "Austin, Texas",
    type: "Mixed Use",
    year: 2021,
    tags: ["Geothermal", "Living Walls", "Zero Waste"],
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    sustainabilityFeature: "Water Conservation",
    sustainabilityIcon: <Droplets className="h-5 w-5" />,
    description: "A mixed-use development featuring 24 residential units and 6 commercial spaces, all powered by geothermal energy and featuring extensive living walls.",
    features: [
      "Closed-loop geothermal system",
      "5,000 sq ft of living walls",
      "Zero-waste infrastructure",
      "Community composting",
      "Greywater recycling system",
      "Electric vehicle charging stations"
    ]
  },
  {
    id: 3,
    title: "Skywind Towers",
    location: "Chicago, Illinois",
    type: "Multi-Family",
    year: 2023,
    tags: ["Wind Power", "Green Roof", "Energy Efficient"],
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
    sustainabilityFeature: "Wind Energy",
    sustainabilityIcon: <Wind className="h-5 w-5" />,
    description: "A high-rise residential building featuring integrated wind turbines, extensive green roofs, and state-of-the-art energy efficiency measures.",
    features: [
      "Rooftop vertical wind turbines",
      "10,000 sq ft green roof garden",
      "Triple-glazed curtain wall system",
      "Energy recovery ventilation",
      "Smart HVAC zoning",
      "Rainwater collection for irrigation"
    ]
  },
  {
    id: 4,
    title: "Sunflower Meadows",
    location: "Denver, Colorado",
    type: "Residential",
    year: 2022,
    tags: ["Passive House", "Solar", "Net Zero"],
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    sustainabilityFeature: "Passive Design",
    sustainabilityIcon: <Home className="h-5 w-5" />,
    description: "A collection of 8 passive house certified homes achieving net-zero energy consumption through advanced design and solar power.",
    features: [
      "Passive House certification",
      "Super-insulated building envelope",
      "Strategic window placement",
      "Heat recovery ventilation",
      "40kW solar array",
      "Battery storage system"
    ]
  },
  {
    id: 5,
    title: "The Evergreen",
    location: "Seattle, Washington",
    type: "Commercial",
    year: 2021,
    tags: ["LEED Platinum", "Biophilic Design", "Gray Water"],
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
    sustainabilityFeature: "Energy Monitoring",
    sustainabilityIcon: <BarChart className="h-5 w-5" />,
    description: "A LEED Platinum certified office building featuring extensive biophilic design elements and advanced water conservation systems.",
    features: [
      "LEED Platinum certification",
      "Extensive indoor plantings",
      "Natural ventilation system",
      "Greywater recycling",
      "Real-time energy monitoring",
      "100% renewable energy powered"
    ]
  },
  {
    id: 6,
    title: "Azure Waters",
    location: "Miami, Florida",
    type: "Multi-Family",
    year: 2023,
    tags: ["Solar", "Water Conservation", "Hurricane Resistant"],
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
    sustainabilityFeature: "Water Conservation",
    sustainabilityIcon: <Droplets className="h-5 w-5" />,
    description: "A coastal apartment complex designed for hurricane resilience, featuring extensive solar power and innovative water conservation systems.",
    features: [
      "Hurricane-resistant construction",
      "60kW solar array",
      "Saltwater pool with natural filtration",
      "Condensate water recovery",
      "Native, drought-resistant landscaping",
      "Stormwater capture and reuse"
    ]
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.type.toLowerCase() === filter.toLowerCase());
  
  const projectDetails = allProjects.find(p => p.id === selectedProject);

  return (
    <div>
      <Navbar />
      
      <section className="relative pt-40 pb-20 bg-ina-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-serif font-bold text-white mb-6">Our <span className="text-ina-gold">Projects</span></h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Innovative sustainable homes and developments, each with unique eco-friendly features.
          </p>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              onClick={() => setFilter('all')}
              className={`${filter === 'all' ? 'bg-ina-gold text-ina-black' : 'bg-gray-100 text-gray-800'} hover:bg-ina-gold hover:text-ina-black`}
            >
              All Projects
            </Button>
            <Button 
              onClick={() => setFilter('residential')}
              className={`${filter === 'residential' ? 'bg-ina-gold text-ina-black' : 'bg-gray-100 text-gray-800'} hover:bg-ina-gold hover:text-ina-black`}
            >
              Residential
            </Button>
            <Button 
              onClick={() => setFilter('multi-family')}
              className={`${filter === 'multi-family' ? 'bg-ina-gold text-ina-black' : 'bg-gray-100 text-gray-800'} hover:bg-ina-gold hover:text-ina-black`}
            >
              Multi-Family
            </Button>
            <Button 
              onClick={() => setFilter('commercial')}
              className={`${filter === 'commercial' ? 'bg-ina-gold text-ina-black' : 'bg-gray-100 text-gray-800'} hover:bg-ina-gold hover:text-ina-black`}
            >
              Commercial
            </Button>
            <Button 
              onClick={() => setFilter('mixed use')}
              className={`${filter === 'mixed use' ? 'bg-ina-gold text-ina-black' : 'bg-gray-100 text-gray-800'} hover:bg-ina-gold hover:text-ina-black`}
            >
              Mixed Use
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
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
                  
                  <div className="flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-white/10 text-white text-xs px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
                
                <div className="absolute top-0 left-0 bg-ina-gold text-ina-black px-4 py-2 font-semibold text-sm">
                  {project.year}
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-600 text-lg">No projects found matching your filter. Please try another category.</p>
            </div>
          )}
        </div>
      </section>
      
      {selectedProject && projectDetails && (
        <div className="fixed inset-0 z-50 bg-ina-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="relative h-80">
              <img 
                src={projectDetails.image} 
                alt={projectDetails.title} 
                className="w-full h-full object-cover object-center"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white rounded-full p-2 hover:bg-white/40 transition-colors"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ina-black to-transparent p-6">
                <h2 className="text-white text-3xl font-serif font-semibold">{projectDetails.title}</h2>
                <div className="flex items-center mt-2">
                  <span className="text-white/80">{projectDetails.location}</span>
                  <span className="mx-2 text-white/50">•</span>
                  <span className="text-white/80">{projectDetails.type}</span>
                  <span className="mx-2 text-white/50">•</span>
                  <span className="text-white/80">{projectDetails.year}</span>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {projectDetails.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              
              <p className="text-gray-600 mb-8">{projectDetails.description}</p>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Leaf className="text-ina-green mr-2 h-5 w-5" />
                  Sustainability Features
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {projectDetails.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="text-ina-gold h-5 w-5 shrink-0 mr-2 mt-1" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-600">Interested in this project?</p>
                  </div>
                  <Button asChild className="btn-primary">
                    <Link to="/contact" onClick={() => setSelectedProject(null)}>Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-semibold mb-6">Ready to Start Your Own Project?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Let's create a sustainable home or development that meets your unique needs while contributing to a greener future.
          </p>
          <Button asChild className="btn-primary">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
