
import { ArrowRight, Code, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContent = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-ina-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c')] bg-cover bg-center opacity-40"></div>
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Code className="text-ina-gold w-14 h-14 mx-auto mb-4" />
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-ina-gold">ALEX CHEN</h1>
          </div>
        </div>
        
        <h2 className="text-xl md:text-3xl text-white font-serif mb-8">
          COMPUTER SCIENCE STUDENT & <br />FULL-STACK DEVELOPER
        </h2>
        
        <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
          Passionate about building innovative solutions at the intersection of artificial intelligence, web development, and cloud computing. Currently studying Computer Science at MIT.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button asChild className="btn-primary">
            <Link to="/projects">View My Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild className="btn-outline">
            <Link to="/contact">Contact Me</Link>
          </Button>
        </div>
        
        <button 
          onClick={scrollToContent} 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white animate-pulse transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
