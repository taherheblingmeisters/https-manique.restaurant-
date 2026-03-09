import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Star, MapPin, ChefHat, Flame, Instagram, Facebook, Youtube } from 'lucide-react';
import SEO from '../components/SEO';
import { useLanguage } from '../components/LanguageContext';

const TikTokIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const galleryImages = [
  { src: "https://manique.restaurant/wp-content/uploads/2026/03/Charcoal-Grilled-Angus-Tomahawk-Steak-Brazilian-Style-1-scaled.jpg", alt: "Tomahawk Steak" },
  { src: "https://manique.restaurant/wp-content/uploads/2026/03/Scallops-Carpaccio-with-Truffle-Oil-and-Mujjol-Caviar-1-scaled.jpg", alt: "Scallops Carpaccio" },
  { src: "https://manique.restaurant/wp-content/uploads/2026/03/Grilled-Corvina-Served-on-a-Banana-Leaf-1-scaled.jpg", alt: "Grilled Corvina" },
  { src: "https://manique.restaurant/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-25-at-10.20.15-1.jpeg", alt: "Restaurant Interior" },
  { src: "https://manique.restaurant/wp-content/uploads/2026/01/Restaurant-Manique-1024x576-1.jpg", alt: "Restaurant Exterior" },
  { src: "https://manique.restaurant/wp-content/uploads/2024/07/Copy-of-WhatsApp-Image-2024-03-14-at-14.43.53-2-1536x1152-1.jpeg", alt: "Restaurant Ambience" }
];

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <SEO pageKey="home" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://manique.restaurant/wp-content/uploads/2026/03/WhatsApp-Image-2025-06-23-at-09.50.42-1.jpeg"
            alt="Manique Restaurant"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-manique-black/60 via-manique-black/20 to-manique-black" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-manique-gray mb-6 leading-tight">
              {t('home.hero.title1')} <br />
              <span className="text-manique-gold italic font-serif">{t('home.hero.title2')}</span>
            </h1>
            <p className="text-lg md:text-xl text-manique-gray/80 font-light mb-10 max-w-2xl mx-auto">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Link
                to="/reservations"
                className="px-8 py-4 bg-manique-gold text-manique-black uppercase tracking-widest text-sm font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] w-full sm:w-auto"
              >
                {t('home.hero.btn.reserve')}
              </Link>
              <Link
                to="/menu"
                className="px-8 py-4 border border-manique-gold text-manique-gold uppercase tracking-widest text-sm font-bold hover:bg-manique-gold hover:text-manique-black hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                {t('home.hero.btn.menu')}
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-6">
              <a href="https://www.instagram.com/manique.santanyi/" target="_blank" rel="noopener noreferrer" className="text-manique-gray/70 hover:text-manique-gold transition-colors hover:scale-110">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/manique.santanyi/" target="_blank" rel="noopener noreferrer" className="text-manique-gray/70 hover:text-manique-gold transition-colors hover:scale-110">
                <Facebook size={24} />
              </a>
              <a href="https://www.youtube.com/@ManiqueSantany%C3%AD" target="_blank" rel="noopener noreferrer" className="text-manique-gray/70 hover:text-manique-gold transition-colors hover:scale-110">
                <Youtube size={24} />
              </a>
              <a href="https://www.tiktok.com/@maniquesantanyi" target="_blank" rel="noopener noreferrer" className="text-manique-gray/70 hover:text-manique-gold transition-colors hover:scale-110">
                <TikTokIcon size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-24 bg-manique-black relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="sr-only">Awards and Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="mb-6 h-16 flex items-center justify-center">
                <div id="TA_certificateOfExcellence922" className="TA_certificateOfExcellence">
                  <ul id="OfjeLE" className="TA_links VfoKjody9PWY">
                    <li id="eriqnDhs" className="N68601ZO5z64">
                      <a target="_blank" rel="noopener noreferrer" href="https://www.tripadvisor.es/Restaurant_Review-g663368-d24132333-Reviews-Manique-Santanyi_Majorca_Balearic_Islands.html">
                        <img src="https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_2024_LL.png" alt="TripAdvisor" className="widCOEImg h-16 object-contain" id="CDSWIDCOELOGO"/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="text-xl tracking-widest uppercase mb-4">{t('home.credibility.tripadvisor')}</h3>
              <p className="text-manique-gray/60 font-light leading-relaxed">
                {t('home.credibility.tripadvisor.desc')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <ChefHat className="text-manique-gold w-12 h-12 mb-6" strokeWidth={1} />
              <h3 className="text-xl tracking-widest uppercase mb-4">{t('home.credibility.chef')}</h3>
              <p className="text-manique-gray/60 font-light leading-relaxed">
                {t('home.credibility.chef.desc')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <Flame className="text-manique-gold w-12 h-12 mb-6" strokeWidth={1} />
              <h3 className="text-xl tracking-widest uppercase mb-4">{t('home.credibility.top10')}</h3>
              <p className="text-manique-gray/60 font-light leading-relaxed">
                {t('home.credibility.top10.desc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 bg-manique-deep relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] w-full"
          >
            <img
              src="https://manique.restaurant/wp-content/uploads/2025/08/manique-restaurant.jpeg"
              alt="17th Century House"
              className="w-full h-full object-cover rounded-sm"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 border border-manique-gold/30 translate-x-4 translate-y-4 -z-10 rounded-sm" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-sm tracking-[0.3em] uppercase text-manique-gold block">{t('home.story.subtitle')}</span>
            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              {t('home.story.title1')} <br />
              <span className="italic font-serif text-manique-gray/80">{t('home.story.title2')}</span>
            </h2>
            <p className="text-manique-gray/70 font-light leading-relaxed text-lg">
              {t('home.story.p1')}
            </p>
            <p className="text-manique-gray/70 font-light leading-relaxed text-lg">
              {t('home.story.p2')}
            </p>
            <blockquote className="border-l-2 border-manique-gold pl-6 py-2 italic text-manique-gray/90 text-xl font-serif mt-8">
              {t('home.story.quote')}
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-32 bg-manique-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">
          {/* Parrilla */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <span className="text-sm tracking-[0.3em] uppercase text-manique-gold block">{t('home.experience.fire.subtitle')}</span>
              <h2 className="text-3xl md:text-4xl font-light leading-tight">
                {t('home.experience.fire.title')}
              </h2>
              <p className="text-manique-gray/70 font-light leading-relaxed text-lg">
                {t('home.experience.fire.desc')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] w-full"
            >
              <img
                src="https://manique.restaurant/wp-content/uploads/2026/03/WhatsApp-Image-2025-07-09-at-13.11.36-scaled.jpeg"
                alt="Parrilla Grill"
                className="w-full h-full object-cover rounded-sm"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Seafood & Sourcing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] w-full order-2 lg:order-1"
            >
              <img
                src="https://manique.restaurant/wp-content/uploads/2026/03/caption.jpg"
                alt="Fresh Seafood"
                className="w-full h-full object-cover rounded-sm"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 order-1 lg:order-2"
            >
              <span className="text-sm tracking-[0.3em] uppercase text-manique-gold block">{t('home.experience.sea.subtitle')}</span>
              <h2 className="text-3xl md:text-4xl font-light leading-tight">
                {t('home.experience.sea.title')}
              </h2>
              <p className="text-manique-gray/70 font-light leading-relaxed text-lg">
                {t('home.experience.sea.desc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signature Dishes Preview */}
      <section className="py-32 bg-manique-deep">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <span className="text-sm tracking-[0.3em] uppercase text-manique-gold block mb-6">{t('home.signature.subtitle')}</span>
            <h2 className="text-4xl md:text-5xl font-light">{t('home.signature.title')}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: t('home.signature.dish1.name'),
                desc: t('home.signature.dish1.desc'),
                img: "https://manique.restaurant/wp-content/uploads/2026/03/Charcoal-Grilled-Angus-Tomahawk-Steak-Brazilian-Style-1-scaled.jpg"
              },
              {
                name: t('home.signature.dish2.name'),
                desc: t('home.signature.dish2.desc'),
                img: "https://manique.restaurant/wp-content/uploads/2026/03/Scallops-Carpaccio-with-Truffle-Oil-and-Mujjol-Caviar-1-scaled.jpg"
              },
              {
                name: t('home.signature.dish3.name'),
                desc: t('home.signature.dish3.desc'),
                img: "https://manique.restaurant/wp-content/uploads/2026/03/Grilled-Corvina-Served-on-a-Banana-Leaf-1-scaled.jpg"
              }
            ].map((dish, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden mb-6 relative h-[400px]">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-manique-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-light mb-2">{dish.name}</h3>
                <p className="text-manique-gray/60 font-light text-sm">{dish.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link
              to="/menu"
              className="inline-block px-8 py-4 border border-manique-gold text-manique-gold uppercase tracking-widest text-sm font-bold hover:bg-manique-gold hover:text-manique-black hover:scale-105 transition-all duration-300"
            >
              {t('home.signature.btn')}
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-32 bg-manique-deep">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <span className="text-sm tracking-[0.3em] uppercase text-manique-gold block mb-6">Visuals</span>
            <h2 className="text-4xl md:text-5xl font-light">The Gallery</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-sm aspect-square cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-manique-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-manique-gold tracking-widest uppercase text-sm font-medium">
                    {img.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 bg-manique-forest/10 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Star className="text-manique-gold w-8 h-8 mx-auto mb-8" />
          <blockquote className="text-2xl md:text-4xl font-light leading-relaxed italic text-manique-gray/90 mb-12">
            {t('home.testimonial.quote')}
          </blockquote>
          <p className="text-sm tracking-widest uppercase text-manique-gold">— {t('home.testimonial.author')}</p>
        </div>
      </section>

      {/* Map Preview */}
      <section className="h-[500px] relative">
        <div className="absolute inset-0 bg-manique-black/80 z-10 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
          <MapPin className="text-manique-gold w-12 h-12 mb-6" />
          <h2 className="text-3xl font-light mb-4">Visit Us</h2>
          <p className="text-manique-gray/70 font-light mb-8">Carrer Portell 14, 07650 Santanyi, Mallorca</p>
          <Link
            to="/contact"
            className="pointer-events-auto px-8 py-4 bg-manique-gold text-manique-black uppercase tracking-widest text-sm font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]"
          >
            Get Directions
          </Link>
        </div>
        <iframe
          src="https://maps.google.com/maps?q=Carrer%20Portell%2014,%2007650%20Santanyi,%20Mallorca,%20Spain&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Manique Santanyi Location"
        ></iframe>
      </section>
    </>
  );
}
