
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Leaf, Users, Building, Award, BarChart, Heart } from 'lucide-react';

const About = () => {
  return (
    <div>
      <Navbar />
      
      <section className="relative pt-40 pb-20 bg-ina-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1431576901776-e539bd916ba2')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-serif font-bold text-white mb-6">About <span className="text-ina-gold">INA</span></h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Pioneering sustainable construction and development since 2010.
          </p>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-semibold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                INA was founded with a singular vision: to revolutionize the construction industry by making sustainability the centerpiece of every project. What began as a small team of passionate architects and engineers has grown into a leading provider of sustainable construction and development solutions.
              </p>
              <p className="text-gray-600 mb-6">
                Our journey started in 2010 when our founders recognized the urgent need for a more environmentally conscious approach to building homes and communities. They believed that sustainable living shouldn't be a luxury but a standard that everyone deserves.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be at the forefront of innovative, eco-friendly construction practices, creating homes and communities that not only reduce environmental impact but also enhance the quality of life for their residents.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a" 
                alt="INA team meeting" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-5 -left-5 bg-ina-gold p-4 rounded-lg shadow-lg">
                <p className="text-ina-black font-serif font-semibold text-lg">15+ Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-semibold mb-4">
              Our <span className="gold-gradient">Values</span>
            </h2>
            <div className="w-20 h-1 bg-ina-gold mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do at INA, from the projects we take on to the partners we collaborate with.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Leaf className="text-ina-green h-10 w-10 mb-4" />
              <h3 className="text-xl font-serif font-semibold mb-3">Environmental Stewardship</h3>
              <p className="text-gray-600">
                We prioritize the planet in every decision we make, striving to minimize our ecological footprint and preserve natural resources for future generations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Building className="text-ina-gold h-10 w-10 mb-4" />
              <h3 className="text-xl font-serif font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously seek out and implement cutting-edge technologies and methodologies to advance sustainable building practices.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Award className="text-ina-gold h-10 w-10 mb-4" />
              <h3 className="text-xl font-serif font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We are committed to delivering the highest quality in every aspect of our work, exceeding expectations and setting new standards in the industry.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Users className="text-ina-gold h-10 w-10 mb-4" />
              <h3 className="text-xl font-serif font-semibold mb-3">Community Focus</h3>
              <p className="text-gray-600">
                We design with communities in mind, creating spaces that foster connection, well-being, and a shared commitment to sustainability.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <BarChart className="text-ina-gold h-10 w-10 mb-4" />
              <h3 className="text-xl font-serif font-semibold mb-3">Transparency</h3>
              <p className="text-gray-600">
                We operate with honesty and integrity, sharing our processes, materials, and impact metrics openly with clients and stakeholders.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Heart className="text-ina-gold h-10 w-10 mb-4" />
              <h3 className="text-xl font-serif font-semibold mb-3">Passion</h3>
              <p className="text-gray-600">
                We are driven by a genuine love for what we do and a deep-seated belief in the importance of sustainable living for a better future.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-ina-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-semibold mb-4">
              Our <span className="text-ina-gold">Vision & Mission</span>
            </h2>
            <div className="w-20 h-1 bg-ina-gold mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
              <h3 className="text-2xl font-serif font-semibold mb-6 text-ina-gold">Vision Statement</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                "To become a leading global provider of innovative, sustainable, and reliable network infrastructure and real estate solutions by 2030, driving smart, connected communities where every home features a unique sustainability focus to create a greener, smarter future."
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
              <h3 className="text-2xl font-serif font-semibold mb-6 text-ina-gold">Mission Statement</h3>
              <ul className="space-y-4 text-white/80">
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
                  <Building className="text-ina-gold shrink-0 mr-3 h-5 w-5 mt-1" />
                  <span><strong>Expand Access:</strong> To create smart, scalable solutions for network connectivity and real estate ownership, enhancing lives and businesses globally.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
