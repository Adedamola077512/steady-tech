
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import ProductCatalogue from "./components/ProductCatalogue";
import Repairs from "./components/Repairs";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>

      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <ProductCatalogue />
      <Repairs />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
