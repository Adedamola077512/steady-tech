
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiChevronDown,
} from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Shop", href: "#shop", dropdown: true },
    { name: "Repairs", href: "#repairs" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-[1440px] mx-auto min-h-[100px] px-5 md:px-8 lg:px-10 flex items-center justify-between">

        {/* BRAND LOGO */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-3 shrink-0"
        >
          {/* Logo Symbol */}
          <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="absolute w-10 h-6 border-[5px] border-[#101D38] rounded-full -rotate-45"></div>
            <div className="absolute w-10 h-6 border-[5px] border-[#C9A45C] rounded-full rotate-45"></div>
            <span className="relative text-[#101D38] font-black text-lg">
              S
            </span>
          </div>

          {/* Brand Name */}
          <div className="leading-none">
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#101D38]">
              STEADY <span className="text-[#C9A45C]">TECH</span>
            </h2>

            <p className="text-[8px] sm:text-[10px] font-bold tracking-[2px] text-[#101D38] mt-2">
              & ENGINEERING SOLUTIONS
            </p>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <ul className="hidden lg:flex items-center gap-8 xl:gap-10">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="group relative flex items-center gap-1.5 py-3 text-[15px] font-semibold text-[#101D38] hover:text-[#C9A45C] transition-colors duration-300"
              >
                {link.name}

                {link.dropdown && (
                  <HiChevronDown size={17} />
                )}

                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#C9A45C] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* WHATSAPP BUTTON */}
        <a
          href="https://wa.me/2349066151823"
          target="_blank"
          rel="noreferrer"
          className="hidden lg:inline-flex items-center gap-3 bg-[#101D38] text-white px-6 py-4 rounded-full text-sm font-semibold hover:bg-[#174EA6] hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
        >
          <FaWhatsapp size={20} />
          WhatsApp Us
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-[#101D38] text-3xl p-2"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="flex flex-col px-6 py-5 gap-1">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between py-3 text-sm font-semibold text-[#101D38] hover:text-[#C9A45C] transition-colors"
                >
                  {link.name}
                  {link.dropdown && <HiChevronDown size={17} />}
                </a>
              </li>
            ))}
          </ul>

          <div className="px-6 pb-6">
            <a
              href="https://wa.me/2349066151823"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-[#101D38] text-white py-4 rounded-full font-semibold hover:bg-[#174EA6] transition-colors"
            >
              <FaWhatsapp size={20} />
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
