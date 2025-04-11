
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-ina-black/90 backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-12 h-12 relative flex items-center justify-center">
            <Leaf className="text-ina-gold w-6 h-6 absolute top-0" />
            <span className="font-serif text-2xl font-bold text-ina-gold">INA</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-ina-gold transition-colors">Home</Link>
          <Link to="/about" className="text-white hover:text-ina-gold transition-colors">About</Link>
          <Link to="/services" className="text-white hover:text-ina-gold transition-colors">Services</Link>
          <Link to="/projects" className="text-white hover:text-ina-gold transition-colors">Projects</Link>
          <Link to="/contact" className="text-white hover:text-ina-gold transition-colors">Contact</Link>
          <Button asChild className="btn-primary">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-ina-gold"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-ina-black/95 backdrop-blur-sm absolute top-full left-0 w-full py-4 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link to="/" className="text-white hover:text-ina-gold py-2 px-4" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="text-white hover:text-ina-gold py-2 px-4" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/services" className="text-white hover:text-ina-gold py-2 px-4" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/projects" className="text-white hover:text-ina-gold py-2 px-4" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/contact" className="text-white hover:text-ina-gold py-2 px-4" onClick={() => setIsOpen(false)}>Contact</Link>
            <Button asChild className="btn-primary mx-4">
              <Link to="/contact" onClick={() => setIsOpen(false)}>Get a Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
