import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaWhatsapp, FaSearch } from "react-icons/fa";
import products from "../data/products";

const brands = [
  "All",
  "HP",
  "Dell",
  "Apple",
  "Samsung",
  "Google",
  "Infinix",
  "Tecno",
  "Lenovo",
];

const categories = [
  "All",
  "Laptops",
  "Smartphones",
  "Accessories",
  "Computer Systems",
];

const conditions = ["All", "Brand New", "Fairly Used"];

function ProductCatalogue() {
  const [search, setSearch] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCondition, setSelectedCondition] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const searchText = search.toLowerCase();

      const matchesSearch = [
        product.brand,
        product.series,
        product.model,
        product.generation,
        ...(product.specs || []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(searchText);

      const matchesBrand =
        selectedBrand === "All" || product.brand === selectedBrand;

      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      const matchesCondition =
        selectedCondition === "All" || product.condition === selectedCondition;

      return (
        matchesSearch && matchesBrand && matchesCategory && matchesCondition
      );
    });
  }, [search, selectedBrand, selectedCategory, selectedCondition]);

  const whatsappLink = (product) => {
    const message = `Hello STEADY TECH, I'm interested in ${product.brand} ${product.model}. Please send me more details and the price.`;
    return `https://wa.me/2349066151823?text=${encodeURIComponent(message)}`;
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedBrand("All");
    setSelectedCategory("All");
    setSelectedCondition("All");
  };

  return (
    <section id="shop" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10 text-center"
        >
          <span className="font-semibold uppercase tracking-widest text-blue-700">
            Our Catalogue
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[#101D38] md:text-4xl">
            Explore Our Products
          </h2>

          <p className="mt-3 text-gray-500">
            Find the right device for your needs.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 flex max-w-2xl items-center gap-3 rounded-xl border border-gray-200 px-5 py-4 shadow-sm focus-within:border-blue-600"
        >
          <FaSearch className="text-gray-400" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search HP, Dell, iPhone, Samsung..."
            className="w-full bg-transparent text-sm outline-none"
          />
        </motion.div>

        {/* Brand shortcuts */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="mb-4 font-semibold text-[#101D38]">Browse by Brand</h3>

          <div className="flex flex-wrap gap-3">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
                  selectedBrand === brand
                    ? "border-blue-700 bg-blue-700 text-white"
                    : "border-gray-200 text-gray-600 hover:border-blue-600 hover:text-blue-700"
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10 grid gap-4 sm:grid-cols-2"
        >
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-600">
              Category
            </label>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 outline-none focus:border-blue-600"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-600">
              Condition
            </label>

            <select
              value={selectedCondition}
              onChange={(e) => setSelectedCondition(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 outline-none focus:border-blue-600"
            >
              {conditions.map((condition) => (
                <option key={condition} value={condition}>
                  {condition}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Results heading */}
        <motion.div
          layout
          className="mb-6 flex flex-wrap items-center justify-between gap-3"
        >
          <p className="font-semibold text-[#101D38]">
            {filteredProducts.length} Products Found
          </p>

          <button
            onClick={clearFilters}
            className="text-sm font-semibold text-blue-700 hover:underline"
          >
            Clear Filters
          </button>
        </motion.div>

        {/* Product grid */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Product Image */}
                <div className="group relative flex h-52 items-center justify-center overflow-hidden bg-[#F1F5F9]">
                  <img
                    src={product.image}
                    alt={`${product.brand} ${product.model}`}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="auto"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://placehold.co/600x400/F1F5F9/101D38?text=STEADY+TECH";
                    }}
                    className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-blue-800 shadow-sm">
                    {product.condition}
                  </span>
                </div>

                {/* Product Details */}
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                    {product.brand} · {product.series}
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-[#101D38]">
                    {product.model}
                  </h3>

                  {product.generation && (
                    <p className="mt-1 text-sm text-gray-500">
                      {product.generation}
                    </p>
                  )}

                  <div className="mt-3 flex flex-wrap gap-2">
                    {product.specs.map((spec, index) => (
                      <span
                        key={index}
                        className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-bold text-[#101D38]">
                      DM for Price
                    </span>

                    <span className="text-xs font-medium text-green-600">
                      {product.availability}
                    </span>
                  </div>

                  <a
                    href={whatsappLink(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#101D38] px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:scale-[1.02]"
                  >
                    <FaWhatsapp size={18} />
                    Enquire on WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl bg-gray-50 py-16 text-center"
          >
            <h3 className="text-xl font-bold text-[#101D38]">
              No Products Found
            </h3>

            <p className="mt-2 text-gray-500">
              Try another search or change your filters.
            </p>

            <button
              onClick={clearFilters}
              className="mt-5 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white"
            >
              Reset Catalogue
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default ProductCatalogue;
