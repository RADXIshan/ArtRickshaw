import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import logoImg from '../assets/images/logo.png';

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
      window.lenis?.stop();
    } else {
      document.body.style.overflow = '';
      window.lenis?.start();
    }

    return () => {
      document.body.style.overflow = '';
      window.lenis?.start();
    };
  }, [activeModal]);

  return (
    <footer className="relative lg:fixed lg:bottom-0 lg:left-0 w-full min-h-fit lg:h-[90vh] z-0 bg-primary text-white flex flex-col justify-between overflow-hidden py-12 lg:py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-16 w-full max-w-7xl mx-auto px-6 md:px-12 z-10 mt-0">
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 md:space-y-4 text-lg md:text-xl">
            <li><Link to="/activities" className="hover:text-black transition-colors">Activities</Link></li>
            <li><Link to="/bookings" className="hover:text-black transition-colors">Bookings</Link></li>
            <li><Link to="/#about" className="hover:text-black transition-colors">About Us</Link></li>
            <li>
              <button 
                onClick={() => setActiveModal('privacy')} 
                className="hover:text-black transition-colors text-left cursor-pointer font-sans"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveModal('refunds')} 
                className="hover:text-black transition-colors text-left cursor-pointer font-sans"
              >
                Bookings & Refunds
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveModal('terms')} 
                className="hover:text-black transition-colors text-left cursor-pointer font-sans"
              >
                Terms & Conditions
              </button>
            </li>
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
          <a href="mailto:hello@artrickshaw.com" className="text-lg md:text-xl hover:text-black transition-colors underline break-all block mb-4">
            hello@artrickshaw.com
          </a>
          {/* Social Links */}
          <div className="flex gap-4 items-center mt-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-all hover:scale-110" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-all hover:scale-110" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-all hover:scale-110" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="w-full h-24 lg:h-full min-h-[100px] group relative cursor-pointer" data-cursor="explore">
          <iframe 
            src="https://maps.google.com/maps?q=Art%20Rickshaw,%20Hindustan%20Park,%20Kolkata&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            className="w-full h-full rounded-2xl filter grayscale lg:group-hover:grayscale-0 transition-all duration-500 border-none pointer-events-none"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      
      <div className="w-full flex justify-center mt-8 lg:mt-12 pointer-events-none px-6 mb-0 md:mb-[-2px] lg:mb-[-4px]">
        <img 
          src={logoImg} 
          alt="Art Rickshaw Logo" 
          className="h-28 md:h-44 lg:h-60 w-auto object-contain opacity-95 brightness-0 invert" 
        />
      </div>

      {/* Modal Popup System */}
      {activeModal && createPortal(
        <div 
          className="fixed inset-0 z-99999 flex items-center justify-center bg-black/60 backdrop-blur-lg px-4 py-6"
          onClick={() => setActiveModal(null)}
        >
          <div 
            data-lenis-prevent
            className="bg-bg-base border border-text-dark/10 rounded-4xl max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col p-8 md:p-12 shadow-2xl relative text-text-dark cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full border border-text-dark/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer animate-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Modal Title */}
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 uppercase tracking-tight text-primary">
              {activeModal === 'privacy' && 'Privacy Policy'}
              {activeModal === 'refunds' && 'Bookings & Refunds'}
              {activeModal === 'terms' && 'Terms & Conditions'}
            </h2>

            {/* Modal Content */}
            <div 
              data-lenis-prevent
              className="flex-1 min-h-0 overflow-y-auto pr-2 space-y-6 text-base md:text-lg leading-relaxed font-sans font-medium text-gray-600"
            >
              {activeModal === 'privacy' && (
                <>
                  <p>Welcome to Art Rickshaw. Your privacy is critically important to us. This policy describes how we collect, use, and handle your information when you use our website and studio services.</p>
                  <h3 className="text-xl font-serif font-bold text-text-dark mt-4">1. Information We Collect</h3>
                  <p>We collect personal information such as your name, email address, phone number, and billing details when you book a workshop or contact us. We also collect anonymous usage data to improve user experiences.</p>
                  <h3 className="text-xl font-serif font-bold text-text-dark mt-4">2. How We Use Information</h3>
                  <p>We use your information to confirm workshop bookings, process secure payments, communicate scheduling updates, and notify you about curated events or promotions with your consent.</p>
                  <h3 className="text-xl font-serif font-bold text-text-dark mt-4">3. Data Security</h3>
                  <p>Your transactions are processed through encrypted payment gateways. We do not store credit card details on our servers, and we take active security measures to safeguard your contact details from unauthorized access.</p>
                  <h3 className="text-xl font-serif font-bold text-text-dark mt-4">4. Third-Party Sharing</h3>
                  <p>We do not sell, trade, or transfer your personal details to outside parties, except trusted service providers who assist us in operating our site and hosting experiences, under strict confidentiality terms.</p>
                </>
              )}

              {activeModal === 'refunds' && (
                <>
                  <p>Our bookings and experiences are carefully curated with limited capacity to ensure high-quality individual attention. Please review our booking guidelines and cancellation terms below.</p>
                  <h3 className="text-xl font-serif font-bold text-text-dark mt-4">1. Rescheduling</h3>
                  <p>If you cannot attend your scheduled workshop, you may request a reschedule up to 24 hours prior to the event. We will accommodate your request subject to availability in future slots.</p>
                  <h3 className="text-xl font-serif font-bold text-text-dark mt-4">2. Cancellations & Refunds</h3>
                  <p>Bookings are final and non-refundable. If you cancel within less than 24 hours or do not show up for your slot, your booking fees are forfeited. Exceptions are considered only under extreme, verified medical emergencies.</p>
                  <h3 className="text-xl font-serif font-bold text-text-dark mt-4">3. Studio Cancellations</h3>
                  <p>In rare instances where the studio must cancel or postpone a workshop (due to instructor illness, weather events, or local regulations), we will offer you a full 100% refund or immediate free rescheduling.</p>
                </>
              )}

              {activeModal === 'terms' && (
                <>
                  <p>By using the Art Rickshaw website, booking platform, and physical studio facilities in Hindustan Park, Kolkata, you agree to comply with the following Terms and Conditions.</p>
                  <h3 className="text-xl font-serif font-bold text-text-dark mt-4">1. Studio Code of Conduct</h3>
                  <p>We promote an inclusive, respectful, and safe creative environment. Participants must follow instructor safety instructions, particularly when handling pottery wheels, clay tools, chemicals, resin, or sharp implements.</p>
                  <h3 className="text-xl font-serif font-bold text-text-dark mt-4">2. Artwork Collection</h3>
                  <p>Clay and ceramic items require drying and kiln firing, which takes 2-4 weeks. You will be notified when items are ready for pickup. Pieces left unclaimed at the studio for more than 60 days may be discarded due to storage limits.</p>
                  <h3 className="text-xl font-serif font-bold text-text-dark mt-4">3. Intellectual Property</h3>
                  <p>All website content, photographs, branding illustrations, and original workshop structures are the intellectual property of Art Rickshaw. These may not be reproduced without written permission.</p>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-text-dark/10 flex justify-end">
              <button 
                onClick={() => setActiveModal(null)}
                className="bg-text-dark text-white px-6 py-2.5 rounded-full uppercase tracking-widest text-xs font-bold hover:bg-primary transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </footer>
  );
};

export default Footer;
