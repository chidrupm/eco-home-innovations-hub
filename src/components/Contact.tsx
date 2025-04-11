
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to a server
    console.log('Form submitted:', formData);
    
    toast({
      title: "Form Submitted!",
      description: "Thank you for your message. We'll get back to you soon.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section className="bg-white py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-semibold mb-4">
            Get in <span className="gold-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-ina-gold mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your sustainable home project? Contact us today to schedule a consultation with our expert team.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
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
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
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
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="Your phone number (optional)"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
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
              
              <Button type="submit" className="btn-primary w-full">
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-6">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex">
                <MapPin className="h-6 w-6 text-ina-gold shrink-0 mr-4" />
                <div>
                  <h4 className="font-semibold mb-1">Our Office</h4>
                  <p className="text-gray-600">123 Sustainable Way<br />Greenville, CA 90210</p>
                </div>
              </div>
              
              <div className="flex">
                <Phone className="h-6 w-6 text-ina-gold shrink-0 mr-4" />
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex">
                <Mail className="h-6 w-6 text-ina-gold shrink-0 mr-4" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-600">info@inahomes.com</p>
                </div>
              </div>
              
              <div className="flex">
                <Clock className="h-6 w-6 text-ina-gold shrink-0 mr-4" />
                <div>
                  <h4 className="font-semibold mb-1">Business Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-3">Book a Consultation</h4>
              <p className="text-gray-600 mb-4">
                Schedule a free consultation with one of our sustainable home experts to discuss your project in detail.
              </p>
              <Button asChild className="btn-outline">
                <a href="tel:+15551234567">Call Us Today</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
