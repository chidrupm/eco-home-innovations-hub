
import { Code, Database, Server, Laptop, Brain, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const skills = [
  {
    icon: <Code className="h-10 w-10" />,
    title: "Full-Stack Development",
    description: "Proficient in building responsive web applications using React, Node.js, and modern JavaScript frameworks with TypeScript."
  },
  {
    icon: <Database className="h-10 w-10" />,
    title: "Database Management",
    description: "Experience with SQL and NoSQL databases including PostgreSQL, MongoDB, and Firebase for scalable data solutions."
  },
  {
    icon: <Server className="h-10 w-10" />,
    title: "DevOps & Cloud Services",
    description: "Skilled in AWS, Docker, and CI/CD pipelines for automated deployment and infrastructure management."
  },
  {
    icon: <Laptop className="h-10 w-10" />,
    title: "Mobile App Development",
    description: "Creating cross-platform mobile applications using React Native and native development with Swift and Kotlin."
  },
  {
    icon: <Brain className="h-10 w-10" />,
    title: "Artificial Intelligence",
    description: "Developing machine learning models and AI integrations using TensorFlow, PyTorch, and natural language processing techniques."
  },
  {
    icon: <BookOpen className="h-10 w-10" />,
    title: "Computer Science Fundamentals",
    description: "Strong foundation in algorithms, data structures, system design, and computer architecture principles."
  }
];

const Services = () => {
  return (
    <section className="bg-gray-50 py-20" id="skills">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-semibold mb-4">
            My <span className="gold-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-ina-gold mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A collection of technical skills and expertise I've developed throughout my computer science journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md transition-scale">
              <div className="text-ina-gold mb-4">{skill.icon}</div>
              <h3 className="text-xl font-serif font-semibold mb-3">{skill.title}</h3>
              <p className="text-gray-600 mb-6">{skill.description}</p>
              <Link to="/skills" className="text-ina-gold hover:text-ina-gold2 flex items-center font-medium">
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
            <Link to="/skills">View All Skills</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
