import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <>
      <SEO pageKey="contact" />

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://manique.restaurant/wp-content/uploads/2026/03/caption.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-manique-black/80 via-manique-black/50 to-manique-black" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm tracking-[0.4em] uppercase text-manique-gold block mb-6">Reach Out</span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-manique-gray">
              <span className="italic font-serif text-manique-gold">Contact</span> Us
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-24 bg-manique-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div>
              <h2 className="text-3xl font-light mb-8">Get in Touch</h2>
              <p className="text-manique-gray/70 font-light leading-relaxed mb-12 text-lg">
                Whether you have a question about our menu, want to plan a special event, or simply need directions, we are here to help.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-manique-deep flex items-center justify-center shrink-0 border border-manique-forest/30">
                    <MapPin className="text-manique-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm tracking-widest uppercase text-manique-gold mb-2">Location</h3>
                    <p className="text-manique-gray/80 font-light leading-relaxed">
                      Carrer Portell 14<br />
                      07650 Santanyi<br />
                      Mallorca, Spain
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-manique-deep flex items-center justify-center shrink-0 border border-manique-forest/30">
                    <Phone className="text-manique-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm tracking-widest uppercase text-manique-gold mb-2">Phone</h3>
                    <p className="text-manique-gray/80 font-light leading-relaxed">
                      +34 675 019 515
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-manique-deep flex items-center justify-center shrink-0 border border-manique-forest/30">
                    <Mail className="text-manique-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm tracking-widest uppercase text-manique-gold mb-2">Email</h3>
                    <p className="text-manique-gray/80 font-light leading-relaxed">
                      info@maniquesantanyi.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-manique-deep flex items-center justify-center shrink-0 border border-manique-forest/30">
                    <Clock className="text-manique-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm tracking-widest uppercase text-manique-gold mb-2">Hours</h3>
                    <p className="text-manique-gray/80 font-light leading-relaxed">
                      Tuesday - Sunday: 18:30 - 23:00<br />
                      Monday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] w-full rounded-sm overflow-hidden border border-manique-forest/30"
          >
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
          </motion.div>

        </div>
      </section>
    </>
  );
}
