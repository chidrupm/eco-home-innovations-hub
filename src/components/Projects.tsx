
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Code, Server, Database, Laptop, Brain } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "CodeCollab",
    category: "Web Application",
    tags: ["React", "WebSockets", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    techFeature: "Real-time Collaboration",
    techIcon: <Code className="h-5 w-5" />
  },
  {
    id: 2,
    title: "SmartRecommender",
    category: "Machine Learning",
    tags: ["Python", "TensorFlow", "NLP", "Flask"],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    techFeature: "AI Recommendation Engine",
    techIcon: <Brain className="h-5 w-5" />
  },
  {
    id: 3,
    title: "CloudScale",
    category: "DevOps Solution",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    techFeature: "Serverless Architecture",
    techIcon: <Server className="h-5 w-5" />
  }
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-20" id="projects">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-semibold mb-4">
            Featured <span className="gold-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-ina-gold mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A showcase of my technical projects, combining innovative solutions with clean, efficient code to solve real-world problems.
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
                  <Code className="h-5 w-5 text-ina-gold mr-2" />
                  <span className="text-white/80 text-sm">{project.category}</span>
                </div>
                
                <h3 className="text-white text-xl font-serif font-semibold">{project.title}</h3>
                
                <div className="flex items-center mt-3 bg-ina-black/50 rounded-full px-3 py-1 w-fit">
                  {project.techIcon}
                  <span className="text-white text-xs ml-2">{project.techFeature}</span>
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
