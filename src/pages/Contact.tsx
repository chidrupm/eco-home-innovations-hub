
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Check } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to a server
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Form Submitted!",
      description: "Thank you for your message. We'll get back to you soon.",
      duration: 5000,
    });
    
    setSubmitted(true);
    
    // Reset form after a delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div>
      <Navbar />
      
      <section className="relative pt-40 pb-20 bg-ina-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1439337153520-7082a56a81f4')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-serif font-bold text-white mb-6">Contact <span className="text-ina-gold">Us</span></h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Get in touch to discuss your sustainable construction project.
          </p>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif font-semibold mb-8">Send Us a Message</h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <Check className="text-green-600 h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700">
                    Your message has been received. One of our representatives will be in touch with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">Project Type *</label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-ina-gold focus:ring focus:ring-ina-gold/20 focus:ring-opacity-50 h-10 px-3"
                      >
                        <option value="">Select Project Type</option>
                        <option value="Residential">Residential</option>
                        <option value="Multi-Family">Multi-Family</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Mixed Use">Mixed Use</option>
                        <option value="Retrofit">Retrofit</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Budget Range</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-ina-gold focus:ring focus:ring-ina-gold/20 focus:ring-opacity-50 h-10 px-3"
                      >
                        <option value="">Select Budget Range</option>
                        <option value="Under $500K">Under $500K</option>
                        <option value="$500K - $1M">$500K - $1M</option>
                        <option value="$1M - $5M">$1M - $5M</option>
                        <option value="$5M - $10M">$5M - $10M</option>
                        <option value="$10M+">$10M+</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">Timeline</label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-ina-gold focus:ring focus:ring-ina-gold/20 focus:ring-opacity-50 h-10 px-3"
                      >
                        <option value="">Select Timeline</option>
                        <option value="Immediate">Immediate</option>
                        <option value="1-3 Months">1-3 Months</option>
                        <option value="3-6 Months">3-6 Months</option>
                        <option value="6-12 Months">6-12 Months</option>
                        <option value="1+ Year">1+ Year</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full min-h-[150px]"
                      placeholder="Tell us about your project or questions"
                    />
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    Fields marked with * are required
                  </div>
                  
                  <Button type="submit" className="btn-primary w-full">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
            
            <div>
              <h2 className="text-3xl font-serif font-semibold mb-8">Contact Information</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex">
                  <MapPin className="h-6 w-6 text-ina-gold shrink-0 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Our Office</h3>
                    <p className="text-gray-600">123 Sustainable Way<br />Greenville, CA 90210</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Phone className="h-6 w-6 text-ina-gold shrink-0 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Mail className="h-6 w-6 text-ina-gold shrink-0 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">info@inahomes.com</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Clock className="h-6 w-6 text-ina-gold shrink-0 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423283.4355559815!2d-118.69193071914525!3d34.02073049784953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2ses!4v1617023012086!5m2!1sen!2ses" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="INA Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get answers to some common questions about our sustainable construction services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">How much does a sustainable home typically cost?</h3>
              <p className="text-gray-600">
                Costs vary widely based on size, location, and specific sustainability features. While sustainable homes may have a 5-15% higher upfront cost, they typically offer significant long-term savings through reduced energy and water bills.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">How long does it take to build a sustainable home?</h3>
              <p className="text-gray-600">
                The timeline ranges from 8-14 months depending on complexity, size, and custom features. Our team works efficiently to minimize construction time while ensuring quality and sustainability standards.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Do you handle all permits and approvals?</h3>
              <p className="text-gray-600">
                Yes, our team manages the entire permitting process, including environmental clearances and building permits. We have extensive experience navigating local regulations for sustainable construction.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Can I retrofit my existing home with sustainable features?</h3>
              <p className="text-gray-600">
                Absolutely! We specialize in green retrofitting for existing properties. Our team can assess your home and recommend the most impactful and cost-effective sustainability upgrades.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
