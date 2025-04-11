
import { Link } from 'react-router-dom';
import { Leaf, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ina-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="relative flex items-center justify-center">
                <Leaf className="text-ina-gold w-6 h-6 absolute top-0" />
                <span className="font-serif text-2xl font-bold text-ina-gold">INA</span>
              </div>
            </Link>
            <p className="text-white/70 mb-6">
              Leading the way in innovative, sustainable, and reliable infrastructure solutions for smart, connected communities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-ina-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-ina-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-ina-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-ina-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-ina-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-ina-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-ina-gold transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/projects" className="text-white/70 hover:text-ina-gold transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-ina-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-white/70 hover:text-ina-gold transition-colors">Sustainable Home Construction</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-ina-gold transition-colors">Property Development</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-ina-gold transition-colors">Network Infrastructure</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-ina-gold transition-colors">Renewable Energy Solutions</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-ina-gold transition-colors">Green Retrofitting</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <address className="not-italic text-white/70">
              <p className="mb-3">123 Sustainable Way</p>
              <p className="mb-3">Greenville, CA 90210</p>
              <p className="mb-3">
                <a href="tel:+15551234567" className="hover:text-ina-gold transition-colors">
                  (555) 123-4567
                </a>
              </p>
              <p>
                <a href="mailto:info@inahomes.com" className="hover:text-ina-gold transition-colors">
                  info@inahomes.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/70 text-sm mb-4 md:mb-0">
            © {currentYear} INA Sustainable Homes. All rights reserved.
          </div>
          
          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              className="mr-8 text-white/70 hover:text-ina-gold transition-colors flex items-center"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to top
            </button>
            
            <div className="text-white/70 text-sm">
              <Link to="/privacy" className="hover:text-ina-gold transition-colors mr-4">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-ina-gold transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
