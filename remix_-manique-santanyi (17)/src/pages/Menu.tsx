import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { useLanguage } from '../components/LanguageContext';

export default function Menu() {
  const { t } = useLanguage();

  const menuData = [
    {
      category: t('menu.cat.starters'),
      items: [
        { name: t('menu.item.flatbread'), price: "€6.90" },
        { name: t('menu.item.lychee'), price: "€7.90" },
        { name: t('menu.item.yuca'), price: "€8.90" },
        { name: t('menu.item.oyster'), price: "€8.90" },
        { name: t('menu.item.heartpalm'), price: "€15.90" },
        { name: t('menu.item.octopus'), price: "€15.90" },
        { name: t('menu.item.scallops'), price: "€24.90" },
        { name: t('menu.item.tunatartare'), price: "€26.90" },
        { name: t('menu.item.tunahackepeter'), price: "€26.90" },
        { name: t('menu.item.marinatedfish'), price: "€26.90" },
        { name: t('menu.item.grilledseafood'), price: "€31.90" }
      ]
    },
    {
      category: t('menu.cat.mainsind'),
      items: [
        { name: t('menu.item.greensalad'), price: "€16.90" },
        { name: t('menu.item.eggplant'), price: "€19.90" },
        { name: t('menu.item.grilledshrimps'), price: "€28.90" }
      ]
    },
    {
      category: t('menu.cat.mainsshare'),
      items: [
        { name: t('menu.item.searedtuna'), price: "€39.90" },
        { name: t('menu.item.corvina'), price: "€41.90" },
        { name: t('menu.item.pumpkin'), price: "€41.90" },
        { name: t('menu.item.tomahawk'), price: "€71.90" }
      ]
    },
    {
      category: t('menu.cat.sides'),
      items: [
        { name: t('menu.item.coconutrice'), price: "€7.90" },
        { name: t('menu.item.breadfarofa'), price: "€7.90" },
        { name: t('menu.item.babypotatoes'), price: "€7.90" },
        { name: t('menu.item.potatocream'), price: "€9.90" },
        { name: t('menu.item.broccoli'), price: "€11.90" }
      ]
    },
    {
      category: t('menu.cat.desserts'),
      items: [
        { name: t('menu.item.bakedbanana'), price: "€8.90" },
        { name: t('menu.item.carrotpancake'), price: "€9.90" },
        { name: t('menu.item.romeojuliet'), price: "€8.90" },
        { name: t('menu.item.icecream'), price: "€7.90" }
      ]
    },
    {
      category: t('menu.cat.drinks'),
      items: [
        { name: t('menu.item.cocktails'), price: "" },
        { name: t('menu.item.beer'), price: "" }
      ]
    }
  ];

  return (
    <>
      <SEO pageKey="menu" />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://manique.restaurant/wp-content/uploads/2026/03/caption.jpg"
            alt="Menu Hero"
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
            <span className="text-sm tracking-[0.4em] uppercase text-manique-gold block mb-6">{t('menu.hero.subtitle')}</span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-manique-gray">
              {t('menu.hero.title1')} <span className="italic font-serif text-manique-gold">{t('menu.hero.title2')}</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-24 bg-manique-black">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {menuData.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-20"
            >
              <h2 className="text-2xl tracking-[0.2em] uppercase text-manique-gold text-center mb-12 pb-4 border-b border-manique-forest/30">
                {section.category}
              </h2>
              <ul className="space-y-8">
                {section.items.map((item, i) => (
                  <li key={i} className="flex justify-between items-baseline group">
                    <div className="flex-1 pr-8">
                      <h3 className="text-lg font-light text-manique-gray tracking-wide group-hover:text-manique-gold transition-colors duration-300">
                        {item.name}
                      </h3>
                    </div>
                    {item.price && (
                      <div className="text-manique-gold font-light tracking-widest">
                        {item.price}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-24 bg-manique-deep text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-8">Experience the Flavors of Manique</h2>
          <p className="text-manique-gray/70 font-light mb-12">
            Join us for an unforgettable evening of fire, seafood, and storytelling.
          </p>
          <a
            href="/reservations"
            className="inline-block px-10 py-4 bg-manique-gold text-manique-black uppercase tracking-widest text-sm font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]"
          >
            Reserve Your Table
          </a>
        </div>
      </section>
    </>
  );
}
