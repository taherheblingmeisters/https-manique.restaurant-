import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';

const blogPosts = {
  "tripadvisor-travelers-choice-2025": {
    title: "For the second consecutive year, Manique has been recognized with the TripAdvisor Travelers’ Choice Award",
    category: "Awards",
    date: "March 9, 2026",
    img: "https://manique.restaurant/wp-content/uploads/2026/03/WhatsApp-Image-2025-06-23-at-09.50.42-1.jpeg",
    content: `
      <p class="mb-6 text-lg">When great work is done, it gets recognized — and that’s exactly what has happened at Manique Santanyi.</p>
      <p class="mb-6">For the second consecutive year, we are proud to remain the Top 1 restaurant in Santanyí and to be awarded once again with the Travelers’ Choice 2025 seal by TripAdvisor. This recognition confirms what our guests already feel when dining with us: here, every detail truly matters.</p>
      <p class="mb-6">This award is based entirely on real reviews from guests who have visited us and shared their experiences. People who chose Manique for a special dinner, a romantic evening, or an unforgettable night in Mallorca, one of the most beautiful islands in the Mediterranean.</p>

      <h2 class="text-2xl font-light text-manique-gold mt-12 mb-6">The ideal choice for dinner in Mallorca</h2>
      <p class="mb-6">Being the number one restaurant in Santanyí is more than a title — it is a responsibility. A commitment to continue delivering memorable dining experiences every single night.</p>
      <p class="mb-6">At Manique, we bring together the best of Brazilian cuisine with Mediterranean flavors, locally sourced ingredients, and warm, attentive service. The result is a complete experience: outstanding food, a welcoming atmosphere, and moments that stay with you long after dinner ends.</p>

      <h2 class="text-2xl font-light text-manique-gold mt-12 mb-6">A recognition built on our guests’ trust</h2>
      <p class="mb-6">This achievement would not be possible without:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>The reviews shared on TripAdvisor</li>
        <li>The trust of guests who choose us for their dinner</li>
        <li>The daily dedication of our entire team</li>
      </ul>
      <p class="mb-6">Every comment, recommendation, and return visit reassures us that we are on the right path. Thank you for choosing Manique. Being recognized for the second year in a row motivates us to keep improving, innovating, and maintaining the high standards that brought us here.</p>
      <p class="mb-6">If you’re looking for where to have dinner in Santanyí, a special restaurant in Mallorca, or a unique dining experience on a paradisiacal island, Manique is the perfect choice.</p>
    `
  },
  "best-restaurants-santanyi": {
    title: "Best Restaurants in Santanyi: A Culinary Guide",
    category: "Guide",
    date: "May 15, 2024",
    img: "https://picsum.photos/seed/blog1/1920/1080",
    content: `
      <p class="mb-6 text-lg">Santanyi, a historic town in the southeast of Mallorca, has quietly become one of the island's most exciting culinary destinations. From traditional tapas bars hidden in narrow cobblestone streets to innovative fine dining experiences, the gastronomic landscape here is rich and varied.</p>
      
      <h2 class="text-2xl font-light text-manique-gold mt-12 mb-6">The Rise of Fine Dining in Santanyi</h2>
      <p class="mb-6">Over the past decade, Santanyi has attracted chefs from around the world who are drawn to the region's incredible local produce and fresh Mediterranean seafood. This influx of talent has elevated the local dining scene, making it a must-visit for food lovers.</p>
      
      <h2 class="text-2xl font-light text-manique-gold mt-12 mb-6">Where to Eat: Top Recommendations</h2>
      <p class="mb-6">When looking for the best restaurant in Santanyi, consider what type of experience you desire. For a truly unique and immersive evening, <strong>Manique Santanyi</strong> stands out as the #1 rated restaurant on TripAdvisor.</p>
      
      <p class="mb-6">At Manique, Chef Marcos Lee blends the ancient art of Brazilian parrilla grilling with the delicate flavors of the Mediterranean. Set in a beautifully restored 17th-century house, the atmosphere is as captivating as the food.</p>
      
      <h2 class="text-2xl font-light text-manique-gold mt-12 mb-6">Why Choose Manique?</h2>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Locally Sourced:</strong> Ingredients are sourced daily from local Mallorcan farmers and fishermen.</li>
        <li><strong>Fire Cooking:</strong> The parrilla grill imparts a unique, smoky depth to every dish.</li>
        <li><strong>Romantic Atmosphere:</strong> Perfect for anniversaries, dates, or special celebrations.</li>
      </ul>
      
      <p class="mb-6">Whether you are a local resident or visiting Mallorca for the first time, exploring the restaurants in Santanyi is a journey of flavor. Make sure to book your tables in advance, especially during the busy summer months.</p>
    `
  },
  "brazilian-parrilla-art-fire": {
    title: "Brazilian Parrilla: The Art of Fire Cooking",
    category: "Culinary",
    date: "June 2, 2024",
    img: "https://manique.restaurant/wp-content/uploads/2026/03/WhatsApp-Image-2025-07-09-at-13.11.36-scaled.jpeg",
    content: `
      <p class="mb-6 text-lg">Cooking with fire is humanity's oldest culinary technique, but the Brazilian parrilla elevates it to an art form. At Manique Santanyi, we have brought this primal tradition to the heart of Mallorca.</p>
      
      <h2 class="text-2xl font-light text-manique-gold mt-12 mb-6">What is a Parrilla?</h2>
      <p class="mb-6">Unlike a standard grill, a parrilla uses a system of grates positioned over glowing embers rather than direct flames. This allows the chef to control the heat precisely, searing the outside of the meat or fish while keeping the inside incredibly juicy.</p>
      
      <h2 class="text-2xl font-light text-manique-gold mt-12 mb-6">The Role of Wood and Smoke</h2>
      <p class="mb-6">The choice of wood is crucial. Different woods impart different flavors. By carefully selecting the wood, Chef Marcos Lee adds subtle notes of smoke that complement, rather than overpower, the natural taste of the Mediterranean seafood and local meats.</p>
      
      <h2 class="text-2xl font-light text-manique-gold mt-12 mb-6">Experience the Fire</h2>
      <p class="mb-6">To truly understand the magic of the parrilla, one must taste it. From our Charcoal Grilled Angus Tomahawk to our delicate Grilled Corvina on a banana leaf, the fire touches every part of our menu.</p>
    `
  },
  "romantic-restaurants-mallorca": {
    title: "Romantic Restaurants in Mallorca for Special Occasions",
    category: "Lifestyle",
    date: "June 20, 2024",
    img: "https://picsum.photos/seed/blog3/1920/1080",
    content: `
      <p class="mb-6 text-lg">Mallorca, with its stunning coastlines and historic towns, is inherently romantic. But finding the perfect restaurant for an anniversary, proposal, or special date night requires a delicate balance of atmosphere, service, and exceptional food.</p>
      
      <h2 class="text-2xl font-light text-manique-gold mt-12 mb-6">Setting the Scene</h2>
      <p class="mb-6">A truly romantic restaurant transports you. It's about the soft glow of candlelight, the acoustics that allow for intimate conversation, and a setting that feels exclusive. In Santanyi, the restored 17th-century house that is home to Manique provides exactly this backdrop.</p>
      
      <h2 class="text-2xl font-light text-manique-gold mt-12 mb-6">The Culinary Experience</h2>
      <p class="mb-6">Sharing food is a deeply intimate act. Our "Mains to Share" menu, featuring dishes like the Grilled Seared Tuna with House Chimichurri, is designed to bring people together over the table.</p>
      
      <h2 class="text-2xl font-light text-manique-gold mt-12 mb-6">Memorable Moments</h2>
      <p class="mb-6">With tableside finishing of dishes and a carefully curated wine list, we ensure that every moment of your evening is memorable. If you are planning a romantic dinner in Mallorca, let us help you create an unforgettable experience.</p>
    `
  },
  "mediterranean-seafood-culture": {
    title: "Mediterranean Seafood Culture: From Sea to Table",
    category: "Ingredients",
    date: "July 5, 2024",
    img: "https://manique.restaurant/wp-content/uploads/2026/03/caption.jpg",
    content: `
      <p class="mb-6 text-lg">The Mediterranean Sea has shaped the culture, history, and diet of Mallorca for millennia. At Manique Santanyi, we honor this deep connection by making fresh, local seafood a cornerstone of our menu.</p>
      
      <h2 class="text-2xl font-light text-manique-gold mt-12 mb-6">The Daily Catch</h2>
      <p class="mb-6">Our commitment begins at the local markets and harbors. We work directly with fishermen to source the freshest catch of the day. This means our menu is dynamic, reflecting the seasons and the rhythms of the sea.</p>
      
      <h2 class="text-2xl font-light text-manique-gold mt-12 mb-6">A Fusion of Techniques</h2>
      <p class="mb-6">While the ingredients are strictly Mediterranean, our approach is global. By applying Brazilian parrilla techniques to delicate seafood like Scallops and Corvina, we create a unique flavor profile that respects the ingredient while offering something entirely new.</p>
      
      <h2 class="text-2xl font-light text-manique-gold mt-12 mb-6">Taste the Mediterranean</h2>
      <p class="mb-6">From our Tuna Tartare to our Grilled Seafood Skewers, every dish is a celebration of the sea. Join us to experience the true taste of Mediterranean seafood culture.</p>
    `
  }
};

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogPosts[id as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-manique-black text-manique-gray">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-6">Article Not Found</h1>
          <Link to="/blog" className="text-manique-gold uppercase tracking-widest text-sm hover:text-white transition-colors">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO pageKey="blog" />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <img
            src={post.img}
            alt={post.title}
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-manique-black/80 via-manique-black/50 to-manique-black" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-4 text-xs tracking-widest uppercase text-manique-gold mb-6">
              <span>{post.category}</span>
              <span className="w-1 h-1 rounded-full bg-manique-gray/50" />
              <span className="text-manique-gray/70">{post.date}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-manique-gray leading-tight">
              {post.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-manique-black">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert prose-lg max-w-none font-light text-manique-gray/80 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-12 bg-manique-deep rounded-sm border border-manique-forest/30 text-center"
          >
            <h2 className="text-2xl font-light mb-6 text-manique-gold">Experience Manique</h2>
            <p className="text-manique-gray/70 mb-8">
              Ready to taste the fusion of Brazilian fire and Mediterranean sea?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/reservations"
                className="px-8 py-4 bg-manique-gold text-manique-black uppercase tracking-widest text-sm font-medium hover:bg-white transition-colors duration-300 w-full sm:w-auto"
              >
                Reserve Your Table
              </Link>
              <Link
                to="/menu"
                className="px-8 py-4 border border-manique-gold/50 text-manique-gold uppercase tracking-widest text-sm font-medium hover:bg-manique-gold/10 transition-colors duration-300 w-full sm:w-auto"
              >
                View Menu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
