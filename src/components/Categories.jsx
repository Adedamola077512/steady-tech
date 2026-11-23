import { motion } from "motion/react";
import { FaArrowRight } from "react-icons/fa";

const categories = [
  {
    name: "Laptops",
    description: "Powerful laptops for work, school and business.",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&auto=format&fit=crop&q=85",
  },
  {
    name: "Smartphones",
    description: "Discover quality smartphones at great prices.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&auto=format&fit=crop&q=85",
  },
  {
    name: "Accessories",
    description: "Essential accessories for your everyday technology.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&auto=format&fit=crop&q=85",
  },
  {
    name: "Computer Systems",
    description: "Reliable computer systems and equipment.",
    image:
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=900&auto=format&fit=crop&q=85",
  },
];

const Categories = () => {
  return (
    <section id="categories" className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-[#C9A45C] text-sm font-bold tracking-[2px] uppercase">
            Explore Our Collection
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101D38] mt-4">
            Shop by Category
          </h2>

          <p className="text-gray-500 mt-5 leading-7">
            Find the right technology for your needs. Explore our collection of
            quality gadgets and accessories.
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.a
              href="#shop"
              key={category.name}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="group bg-[#F8FAFC] rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Category Image */}
              <div className="h-52 overflow-hidden bg-gray-100">
                <img
                  src={category.image}
                  alt={`${category.name} at STEADY TECH`}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://placehold.co/600x400/F1F5F9/101D38?text=STEADY+TECH";
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Category Details */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#101D38]">
                  {category.name}
                </h3>

                <p className="text-sm text-gray-500 leading-6 mt-2">
                  {category.description}
                </p>

                <div className="flex items-center justify-between mt-6">
                  <span className="text-sm font-bold text-[#174EA6]">
                    Explore Category
                  </span>

                  <span className="w-9 h-9 rounded-full bg-[#101D38] text-white flex items-center justify-center group-hover:bg-[#C9A45C] transition-colors duration-300">
                    <FaArrowRight size={13} />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
