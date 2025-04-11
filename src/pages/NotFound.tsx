
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div>
      <Navbar />
      
      <section className="pt-40 pb-20 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-8xl font-serif font-bold text-ina-gold mb-4">404</h1>
          <h2 className="text-3xl font-serif mb-6">Page Not Found</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-10">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button asChild className="btn-primary">
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Return to Home
            </Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default NotFound;
