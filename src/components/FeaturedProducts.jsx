import { motion } from "motion/react";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

const products = [
  {
    name: "Premium Laptop",
    category: "Laptops",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&auto=format&fit=crop&q=85",
    tag: "LAPTOPS",
  },
  {
    name: "Modern Smartphone",
    category: "Smartphones",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&auto=format&fit=crop&q=85",
    tag: "SMARTPHONES",
  },
  {
    name: "Wireless Headphones",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&auto=format&fit=crop&q=85",
    tag: "ACCESSORIES",
  },
  {
    name: "Desktop Computer",
    category: "Computer Systems",
    image:
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=900&auto=format&fit=crop&q=85",
    tag: "COMPUTERS",
  },
];

const FeaturedProducts = () => {
  return (
    <section id="featured" className="bg-[#F8FAFC] py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12"
        >
          <div className="max-w-2xl">
            <span className="text-[#C9A45C] text-sm font-bold tracking-[2px] uppercase">
              Handpicked For You
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101D38] mt-4">
              Featured Products
            </h2>

            <p className="text-gray-500 mt-4 leading-7">
              Explore some of the technology and gadgets available at STEADY
              TECH.
            </p>
          </div>

          <a
            href="#shop"
            className="inline-flex items-center gap-3 text-[#174EA6] font-bold hover:text-[#C9A45C] transition-colors"
          >
            View All Products
            <FaArrowRight />
          </a>
        </motion.div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="relative h-60 bg-white overflow-hidden p-4">
                <img
                  src={product.image}
                  alt={`${product.name} at STEADY TECH`}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://placehold.co/600x400/F1F5F9/101D38?text=STEADY+TECH";
                  }}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />

                <span className="absolute top-5 left-5 bg-[#101D38] text-white text-[10px] font-bold tracking-wider px-3 py-2 rounded-full">
                  {product.tag}
                </span>
              </div>

              {/* Product Information */}
              <div className="p-5 border-t border-gray-100">
                <p className="text-xs text-[#C9A45C] font-bold uppercase tracking-wider">
                  {product.category}
                </p>

                <h3 className="text-lg font-bold text-[#101D38] mt-2">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-400">Pricing</p>

                    <p className="text-sm font-bold text-[#101D38]">
                      Price on request
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/2349066151823?text=${encodeURIComponent(
                      `Hello STEADY TECH, I'm interested in your ${product.name}. Please provide more details and pricing.`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Enquire about ${product.name} on WhatsApp`}
                    className="w-11 h-11 rounded-full bg-[#101D38] text-white flex items-center justify-center hover:bg-[#174EA6] hover:scale-110 transition-all duration-300"
                  >
                    <FaWhatsapp size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
