import { Link } from 'react-router-dom';
import logoImg from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-[80vh] z-0 bg-primary text-white flex flex-col justify-between overflow-hidden pt-6 lg:pt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-16 w-full max-w-7xl mx-auto px-6 md:px-12 z-10 mt-0">
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 md:space-y-4 text-lg md:text-xl">
            <li><Link to="/activities" className="hover:text-black transition-colors">Activities</Link></li>
            <li><Link to="/bookings" className="hover:text-black transition-colors">Bookings</Link></li>
            <li><Link to="/#about" className="hover:text-black transition-colors">About Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-4">Visit Us</h3>
          <a href="https://maps.google.com/?q=Art+Rickshaw,+Hindustan+Park,+Kolkata" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl leading-relaxed hover:text-black transition-colors block">
            Hindustan Park, Gariahat<br />
            Kolkata, West Bengal<br />
            India
          </a>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-4">Contact</h3>
          <a href="mailto:hello@artrickshaw.com" className="text-lg md:text-xl hover:text-black transition-colors underline break-all">
            hello@artrickshaw.com
          </a>
        </div>
        <div className="w-full h-24 lg:h-full min-h-[100px]">
          <iframe 
            src="https://maps.google.com/maps?q=Art%20Rickshaw,%20Hindustan%20Park,%20Kolkata&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            className="w-full h-full rounded-2xl filter grayscale lg:hover:grayscale-0 transition-all duration-500 border-none"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      
      <h1 className="text-[13vw] font-serif font-bold leading-none text-center opacity-90 tracking-tighter pb-4 md:pb-8 pointer-events-none mt-auto">
        ART RICKSHAW
      </h1>
    </footer>
  );
};

export default Footer;
