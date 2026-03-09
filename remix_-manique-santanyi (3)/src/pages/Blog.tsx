import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const blogPosts = [
  {
    id: "tripadvisor-travelers-choice-2025",
    title: "For the second consecutive year, Manique has been recognized with the TripAdvisor Travelers’ Choice Award",
    excerpt: "For the second consecutive year, we are proud to remain the Top 1 restaurant in Santanyí and to be awarded once again with the Travelers’ Choice 2025 seal by TripAdvisor.",
    category: "Awards",
    date: "March 9, 2026",
    img: "https://manique.restaurant/wp-content/uploads/2026/03/WhatsApp-Image-2025-06-23-at-09.50.42-1.jpeg",
    isPillar: true
  },
  {
    id: "best-restaurants-santanyi",
    title: "Best Restaurants in Santanyi: A Culinary Guide",
    excerpt: "Discover the top dining experiences in Santanyi, Mallorca. From traditional tapas to innovative fine dining, explore the culinary landscape of this historic town.",
    category: "Guide",
    date: "May 15, 2024",
    img: "https://picsum.photos/seed/blog1/800/600",
    isPillar: true
  },
  {
    id: "brazilian-parrilla-art-fire",
    title: "Brazilian Parrilla: The Art of Fire Cooking",
    excerpt: "Learn about the ancient techniques of Brazilian parrilla grilling. How wood, charcoal, and patience create unforgettable flavors.",
    category: "Culinary",
    date: "June 2, 2024",
    img: "https://manique.restaurant/wp-content/uploads/2026/03/WhatsApp-Image-2025-07-09-at-13.11.36-scaled.jpeg",
    isPillar: false
  },
  {
    id: "romantic-restaurants-mallorca",
    title: "Romantic Restaurants in Mallorca for Special Occasions",
    excerpt: "Planning an anniversary or proposal? Here are the most romantic dining spots in Mallorca, featuring candlelit courtyards and intimate atmospheres.",
    category: "Lifestyle",
    date: "June 20, 2024",
    img: "https://picsum.photos/seed/blog3/800/600",
    isPillar: false
  },
  {
    id: "mediterranean-seafood-culture",
    title: "Mediterranean Seafood Culture: From Sea to Table",
    excerpt: "Explore the rich history of Mediterranean fishing and how local chefs are preserving traditional methods while innovating on the plate.",
    category: "Ingredients",
    date: "July 5, 2024",
    img: "https://manique.restaurant/wp-content/uploads/2026/03/caption.jpg",
    isPillar: false
  }
];

export default function Blog() {
  return (
    <>
      <SEO pageKey="blog" />

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/bloghero/1920/1080?blur=1"
            alt="Blog Hero"
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
            <span className="text-sm tracking-[0.4em] uppercase text-manique-gold block mb-6">Journal</span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-manique-gray">
              Stories & <span className="italic font-serif text-manique-gold">Guides</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-manique-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col bg-manique-deep rounded-sm overflow-hidden"
              >
                <Link to={`/blog/${post.id}`} className="block relative h-64 overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {post.isPillar && (
                    <div className="absolute top-4 left-4 bg-manique-gold text-manique-black text-xs font-bold uppercase tracking-widest px-3 py-1">
                      Featured Guide
                    </div>
                  )}
                </Link>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between text-xs tracking-widest uppercase text-manique-gold mb-4">
                    <span>{post.category}</span>
                    <span className="text-manique-gray/50">{post.date}</span>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <h2 className="text-2xl font-light mb-4 group-hover:text-manique-gold transition-colors duration-300">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-manique-gray/70 font-light leading-relaxed mb-8 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center space-x-4 text-manique-gold uppercase tracking-widest text-xs font-bold hover:text-white transition-colors mt-auto group"
                  >
                    <span>Read Article</span>
                    <span className="w-8 h-[1px] bg-manique-gold group-hover:bg-white group-hover:w-12 transition-all duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Strategy Note (Hidden from users, visible to crawlers/devs) */}
      {/* 
        SEO Strategy:
        1. Pillar Article: "Best Restaurants in Santanyi" targets high-volume local search.
        2. Cluster Articles: "Romantic Restaurants in Mallorca", "Brazilian Parrilla" link back to the pillar.
        3. Internal Linking: Every blog post links to /reservations and /menu.
        4. Keywords: "best restaurant Santanyi", "where to eat Santanyi", "best seafood restaurant Mallorca", "romantic dinner Mallorca".
      */}
    </>
  );
}
