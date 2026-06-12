import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-[80vh] z-0 bg-primary text-white flex flex-col justify-end overflow-hidden">
      <div className="absolute top-20 left-10 md:left-32 grid grid-cols-1 md:grid-cols-3 gap-20 w-full max-w-7xl">
        <div>
          <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-xl">
            <li><Link to="/activities" className="hover:text-black transition-colors">Activities</Link></li>
            <li><Link to="/bookings" className="hover:text-black transition-colors">Bookings</Link></li>
            <li><Link to="/#about" className="hover:text-black transition-colors">About Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6">Visit Us</h3>
          <p className="text-xl leading-relaxed">
            Hindustan Park, Gariahat<br />
            Kolkata, West Bengal<br />
            India
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6">Contact</h3>
          <a href="mailto:hello@artrickshaw.com" className="text-xl hover:text-black transition-colors underline">
            hello@artrickshaw.com
          </a>
        </div>
      </div>
      <h1 className="text-[13vw] font-serif font-bold leading-none text-center opacity-90 tracking-tighter pb-4 md:pb-8 pointer-events-none">
        ART RICKSHAW
      </h1>
    </footer>
  );
};

export default Footer;
