
import { Leaf, Target, Award, Heart, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <Leaf className="text-ina-green w-10 h-10 mx-auto mb-4" />
          <h2 className="text-4xl font-serif font-semibold mb-4">
            <span className="gold-gradient">About</span> INA
          </h2>
          <div className="w-20 h-1 bg-ina-gold mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We are dedicated to creating sustainable, innovative homes that blend cutting-edge technology with environmental responsibility.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-ina-gold">
              <h3 className="text-2xl font-serif mb-4 flex items-center">
                <Target className="text-ina-gold mr-3 h-6 w-6" />
                Our Vision
              </h3>
              <p className="text-gray-600">
                "To become a leading global provider of innovative, sustainable, and reliable network infrastructure and real estate solutions by 2030, driving smart, connected communities where every home features a unique sustainability focus to create a greener, smarter future."
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-ina-green">
              <h3 className="text-2xl font-serif mb-4 flex items-center">
                <Award className="text-ina-green mr-3 h-6 w-6" />
                Our Mission
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex">
                  <Award className="text-ina-gold shrink-0 mr-3 h-5 w-5 mt-1" />
                  <span><strong>Deliver Excellence:</strong> To provide top-quality network construction and real estate services that meet the evolving needs of industries, businesses, and communities.</span>
                </li>
                <li className="flex">
                  <Leaf className="text-ina-gold shrink-0 mr-3 h-5 w-5 mt-1" />
                  <span><strong>Embrace Innovation:</strong> To integrate cutting-edge technologies such as AI, IoT, and renewable solutions into infrastructure and property development.</span>
                </li>
                <li className="flex">
                  <Heart className="text-ina-gold shrink-0 mr-3 h-5 w-5 mt-1" />
                  <span><strong>Sustainability for Every Home:</strong> To design homes with unique sustainability features, ensuring energy efficiency, reduced carbon footprint, and a focus on environmentally conscious living.</span>
                </li>
                <li className="flex">
                  <Users className="text-ina-gold shrink-0 mr-3 h-5 w-5 mt-1" />
                  <span><strong>Customer-Centric Approach:</strong> To deliver exceptional client satisfaction through transparency, trust, and high-quality service.</span>
                </li>
                <li className="flex">
                  <Globe className="text-ina-gold shrink-0 mr-3 h-5 w-5 mt-1" />
                  <span><strong>Expand Access:</strong> To create smart, scalable solutions for network connectivity and real estate ownership, enhancing lives and businesses globally.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-ina-gold rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-ina-green rounded-full opacity-20"></div>
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833" 
                alt="Sustainable architecture" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ina-black/70 to-transparent flex items-end">
                <div className="p-8">
                  <h3 className="text-white text-2xl font-serif mb-2">Building a Sustainable Future</h3>
                  <p className="text-white/80">Every project we undertake is a step towards a greener, more connected world.</p>
                </div>
              </div>
            </div>
            
            <Button asChild className="btn-primary mt-8">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
