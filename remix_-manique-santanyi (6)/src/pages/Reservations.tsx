import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone } from 'lucide-react';
import SEO from '../components/SEO';

export default function Reservations() {
  return (
    <>
      <SEO pageKey="reservations" />

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/reservationhero/1920/1080?blur=1"
            alt="Reservations"
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
            <span className="text-sm tracking-[0.4em] uppercase text-manique-gold block mb-6">Join Us</span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-manique-gray">
              Reserve Your <span className="italic font-serif text-manique-gold">Table</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Reservation Form & Info */}
      <section className="py-24 bg-manique-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Form (TheFork Widget) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-sm overflow-hidden"
          >
            <iframe
              src="https://widget.thefork.com/205e0036-8581-4aed-905f-452683732dc6"
              style={{ width: '100%', minHeight: '800px', border: 'none', overflow: 'scroll' }}
              title="TheFork Reservation Widget"
            ></iframe>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12 flex flex-col justify-center"
          >
            <div>
              <h2 className="text-2xl font-light mb-6 text-manique-gold">Opening Hours</h2>
              <ul className="space-y-4 text-manique-gray/80 font-light">
                <li className="flex justify-between border-b border-manique-forest/30 pb-2">
                  <span>Tuesday - Sunday</span>
                  <span>18:30 - 23:00</span>
                </li>
                <li className="flex justify-between border-b border-manique-forest/30 pb-2">
                  <span>Monday</span>
                  <span className="text-manique-gold">Closed</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-6 text-manique-gold">Contact Details</h2>
              <ul className="space-y-6 text-manique-gray/80 font-light">
                <li className="flex items-start gap-4">
                  <MapPin className="text-manique-gold shrink-0 mt-1" size={20} />
                  <span>Carrer Portell 14<br />07650 Santanyi<br />Mallorca, Spain</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="text-manique-gold shrink-0" size={20} />
                  <span>+34 675 019 515</span>
                </li>
              </ul>
            </div>

            <div className="bg-manique-forest/10 p-6 rounded-sm border border-manique-forest/30">
              <h3 className="text-sm tracking-widest uppercase text-manique-gold mb-2">Important Information</h3>
              <p className="text-manique-gray/70 font-light text-sm leading-relaxed">
                We are a pet-friendly establishment. Please let us know in advance if you are bringing a pet so we can accommodate you comfortably. For parties larger than 8, please contact us directly by phone.
              </p>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
