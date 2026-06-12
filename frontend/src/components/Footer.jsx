import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-text-dark text-bg-base py-16 mt-20">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">Art Rickshaw</h2>
          <p className="text-gray-400 max-w-sm">
            Experience the vibrant art culture of Kolkata. Join our workshops, classes, and private events.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/activities" className="text-gray-400 hover:text-primary transition-colors">Our Activities</Link></li>
            <li><Link to="/bookings" className="text-gray-400 hover:text-primary transition-colors">Bookings</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Visit Us</h3>
          <p className="text-gray-400">
            Hindustan Park, Gariahat<br />
            Kolkata, West Bengal<br />
            India
          </p>
          <div className="mt-4 text-primary">
            hello@artrickshaw.com
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Art Rickshaw. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
