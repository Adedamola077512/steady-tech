import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import {
  FaArrowRight,
  FaWhatsapp,
  FaShieldAlt,
  FaHeadset,
  FaClock,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const productImages = [
  {
    src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
    alt: "Premium laptop showcase",
  },
  {
    src: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
    alt: "Modern smartphone showcase",
  },
  {
    src: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=900&q=80",
    alt: "Laptop and technology accessories",
  },
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + productImages.length) % productImages.length,
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-[#F8FAFC]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center min-h-[700px] py-12 lg:py-0">
          {/* LEFT CONTENT */}
          <div className="relative z-10 max-w-[720px]">
            {/* Brand Label */}
            <div className="inline-flex items-center gap-3 bg-[#C9A45C]/20 text-[#101D38] px-5 py-3 rounded-full mb-8">
              <span className="w-3 h-3 rounded-full bg-[#C9A45C]"></span>
              <span className="text-xs sm:text-sm font-bold">
                YOUR TRUSTED TECHNOLOGY PARTNER
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-[42px] sm:text-5xl lg:text-[64px] font-extrabold leading-[1.12] tracking-tight text-[#101D38]">
              Technology that
              <br />
              moves you <span className="text-[#C9A45C]">forward.</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-[650px] text-gray-600 text-base sm:text-lg leading-8">
              Discover quality laptops, smartphones and accessories at the right
              price. From brand-new devices to fairly used gadgets, STEADY TECH
              has you covered.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-9">
              <a
                href="#shop"
                className="inline-flex items-center gap-3 bg-[#101D38] text-white px-7 py-4 rounded-full font-semibold hover:bg-[#174EA6] transition-all duration-300"
              >
                Explore Products
                <FaArrowRight size={15} />
              </a>

              <a
                href="https://wa.me/2349066151823"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 border-2 border-[#101D38] text-[#101D38] px-7 py-[14px] rounded-full font-semibold hover:bg-[#101D38] hover:text-white transition-all duration-300"
              >
                <FaWhatsapp size={20} />
                Contact Us
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="mt-12 pt-7 border-t border-gray-200 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <FaShieldAlt className="text-[#101D38] text-3xl shrink-0" />
                <div>
                  <h3 className="font-bold text-[#101D38]">Quality</h3>
                  <p className="text-sm text-gray-600">Trusted Products</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaHeadset className="text-[#101D38] text-3xl shrink-0" />
                <div>
                  <h3 className="font-bold text-[#101D38]">Reliable</h3>
                  <p className="text-sm text-gray-600">Customer Service</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaClock className="text-[#101D38] text-3xl shrink-0" />
                <div>
                  <h3 className="font-bold text-[#101D38]">8AM – 8PM</h3>
                  <p className="text-sm text-gray-600">Business Hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PRODUCT IMAGE CAROUSEL */}
          <div className="relative flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative w-full max-w-[720px]">
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-3xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={productImages[currentImage].src}
                    alt={productImages[currentImage].alt}
                    initial={{ opacity: 0, x: 35 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -35 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover"
                  />
                </AnimatePresence>
              </div>

              {/* Previous Button */}
              <button
                onClick={prevImage}
                aria-label="Previous product image"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg text-[#101D38] flex items-center justify-center hover:bg-[#101D38] hover:text-white transition-all"
              >
                <FaChevronLeft />
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                aria-label="Next product image"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg text-[#101D38] flex items-center justify-center hover:bg-[#101D38] hover:text-white transition-all"
              >
                <FaChevronRight />
              </button>

              {/* Image Indicators */}
              <div className="flex justify-center items-center gap-2 mt-5">
                {productImages.map((image, index) => (
                  <button
                    key={image.src}
                    onClick={() => setCurrentImage(index)}
                    aria-label={`Show product image ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentImage === index
                        ? "w-8 bg-[#C9A45C]"
                        : "w-2.5 bg-gray-300 hover:bg-[#174EA6]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
