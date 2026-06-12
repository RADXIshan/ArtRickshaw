import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-bg-base pt-12 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-text-dark mb-6">Let's Connect</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Have a question or want to collaborate? Drop us a line.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3 space-y-10"
          >
            <div>
              <h3 className="text-3xl font-serif font-bold text-text-dark mb-8">Studio Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-dark">Visit Us</h4>
                    <p className="text-gray-600 mt-1">Hindustan Park, Gariahat<br/>Kolkata, West Bengal<br/>India - 700029</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-dark">Email Us</h4>
                    <p className="text-gray-600 mt-1">hello@artrickshaw.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-dark">Call Us</h4>
                    <p className="text-gray-600 mt-1">+91 98300 98300</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-2/3 bg-white p-10 md:p-14 rounded-[2.5rem] shadow-xl"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Floating Label Input */}
                <div className="relative z-0 w-full group">
                  <input type="text" name="name" id="name" className="block py-4 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer transition-colors" placeholder=" " required />
                  <label htmlFor="name" className="peer-focus:font-medium absolute text-gray-500 text-lg duration-300 transform -translate-y-8 scale-75 top-4 -z-10 origin-left peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Full Name</label>
                </div>
                
                <div className="relative z-0 w-full group">
                  <input type="email" name="email" id="email" className="block py-4 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer transition-colors" placeholder=" " required />
                  <label htmlFor="email" className="peer-focus:font-medium absolute text-gray-500 text-lg duration-300 transform -translate-y-8 scale-75 top-4 -z-10 origin-left peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Email Address</label>
                </div>
              </div>

              <div className="relative z-0 w-full group">
                <input type="text" name="subject" id="subject" className="block py-4 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer transition-colors" placeholder=" " required />
                <label htmlFor="subject" className="peer-focus:font-medium absolute text-gray-500 text-lg duration-300 transform -translate-y-8 scale-75 top-4 -z-10 origin-left peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Subject</label>
              </div>

              <div className="relative z-0 w-full group">
                <textarea name="message" id="message" rows="4" className="block py-4 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer transition-colors resize-none" placeholder=" " required></textarea>
                <label htmlFor="message" className="peer-focus:font-medium absolute text-gray-500 text-lg duration-300 transform -translate-y-8 scale-75 top-4 -z-10 origin-left peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Your Message</label>
              </div>

              <button type="submit" className="text-white bg-text-dark hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary/50 font-medium rounded-xl text-lg w-full sm:w-auto px-10 py-4 text-center transition-colors">Send Message</button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
