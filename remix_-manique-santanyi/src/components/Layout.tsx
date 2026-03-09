import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageCircle, Instagram, Facebook, Youtube } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

const TikTokIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const navLinks = [
  { key: 'nav.home', path: '/' },
  { key: 'nav.menu', path: '/menu' },
  { key: 'nav.blog', path: '/blog' },
  { key: 'nav.reservations', path: '/reservations' },
  { key: 'nav.contact', path: '/contact' },
];

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-manique-black text-manique-gray font-sans">
      {/* Navigation */}
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-manique-black/90 backdrop-blur-md py-4 shadow-lg shadow-manique-black/50' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="https://manique.restaurant/wp-content/uploads/2026/03/Name_Color_Blue.png" 
              alt="Manique Logo" 
              className="h-8 w-auto object-contain"
              fetchPriority="high"
              loading="eager"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.path}
                className={`text-sm tracking-widest uppercase transition-colors duration-300 hover:text-manique-gold ${
                  location.pathname === link.path ? 'text-manique-gold' : 'text-manique-gray/80'
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 text-xs tracking-widest uppercase text-manique-gray/60 ml-4 border-l border-manique-gray/20 pl-4">
              <button 
                onClick={() => setLanguage('EN')}
                className={`hover:text-manique-gold transition-colors ${language === 'EN' ? 'text-manique-gold font-medium' : ''}`}
              >
                EN
              </button>
              <span>|</span>
              <button 
                onClick={() => setLanguage('ES')}
                className={`hover:text-manique-gold transition-colors ${language === 'ES' ? 'text-manique-gold font-medium' : ''}`}
              >
                ES
              </button>
              <span>|</span>
              <button 
                onClick={() => setLanguage('PT')}
                className={`hover:text-manique-gold transition-colors ${language === 'PT' ? 'text-manique-gold font-medium' : ''}`}
              >
                PT
              </button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-manique-gold"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-manique-black flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.path}
                className="text-2xl tracking-widest uppercase text-manique-gray hover:text-manique-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(link.key)}
              </Link>
            ))}
            <div className="flex items-center space-x-4 text-sm tracking-widest uppercase text-manique-gray/60 mt-8">
              <button 
                onClick={() => { setLanguage('EN'); setMobileMenuOpen(false); }}
                className={language === 'EN' ? 'text-manique-gold' : ''}
              >EN</button>
              <button 
                onClick={() => { setLanguage('ES'); setMobileMenuOpen(false); }}
                className={language === 'ES' ? 'text-manique-gold' : ''}
              >ES</button>
              <button 
                onClick={() => { setLanguage('PT'); setMobileMenuOpen(false); }}
                className={language === 'PT' ? 'text-manique-gold' : ''}
              >PT</button>
            </div>
            <div className="flex items-center space-x-6 mt-8">
              <a href="https://www.instagram.com/manique.santanyi/" target="_blank" rel="noopener noreferrer" className="text-manique-gray/70 hover:text-manique-gold transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/manique.santanyi/" target="_blank" rel="noopener noreferrer" className="text-manique-gray/70 hover:text-manique-gold transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.youtube.com/@ManiqueSantany%C3%AD" target="_blank" rel="noopener noreferrer" className="text-manique-gray/70 hover:text-manique-gold transition-colors">
                <Youtube size={24} />
              </a>
              <a href="https://www.tiktok.com/@maniquesantanyi" target="_blank" rel="noopener noreferrer" className="text-manique-gray/70 hover:text-manique-gold transition-colors">
                <TikTokIcon size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-manique-deep py-16 px-6 md:px-12 border-t border-manique-forest/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="md:col-span-2">
            <h2 className="text-2xl tracking-[0.2em] uppercase text-manique-gold mb-6">Manique</h2>
            <p className="text-manique-gray/70 leading-relaxed font-light mb-8 max-w-sm">
              Where Brazilian Fire Meets Mediterranean Sea.
              <br />
              A culinary journey in the heart of Santanyi.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="https://www.instagram.com/manique.santanyi/" target="_blank" rel="noopener noreferrer" className="text-manique-gray/70 hover:text-manique-gold transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/manique.santanyi/" target="_blank" rel="noopener noreferrer" className="text-manique-gray/70 hover:text-manique-gold transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.youtube.com/@ManiqueSantany%C3%AD" target="_blank" rel="noopener noreferrer" className="text-manique-gray/70 hover:text-manique-gold transition-colors">
                <Youtube size={24} />
              </a>
              <a href="https://www.tiktok.com/@maniquesantanyi" target="_blank" rel="noopener noreferrer" className="text-manique-gray/70 hover:text-manique-gold transition-colors">
                <TikTokIcon size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg tracking-widest uppercase text-manique-gray mb-6">Contact</h3>
            <address className="not-italic text-manique-gray/70 font-light space-y-2">
              <p>Carrer Portell 14</p>
              <p>07650 Santanyi</p>
              <p>Mallorca, Spain</p>
              <p className="pt-4">+34 675 019 515</p>
            </address>
          </div>
          <div>
            <h3 className="text-lg tracking-widest uppercase text-manique-gray mb-6">Hours</h3>
            <div className="text-manique-gray/70 font-light space-y-2">
              <p>Tuesday - Sunday</p>
              <p>18:30 - 23:00</p>
              <p className="pt-4 text-manique-gold">Reservations Recommended</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-manique-forest/30 text-center text-sm text-manique-gray/50 font-light">
          &copy; {new Date().getFullYear()} Manique Santanyi. All rights reserved.
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send/?phone=34675019515&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
