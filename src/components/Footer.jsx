
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#101D38] text-white">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <a href="#home" className="mb-5 inline-block">
            <h2 className="text-2xl font-extrabold tracking-wide">
              STEADY <span className="text-[#C9A45C]">TECH</span>
            </h2>
            <p className="mt-1 text-xs tracking-widest text-gray-400">
              & ENGINEERING SOLUTIONS
            </p>
          </a>

          <p className="mb-6 max-w-xs text-sm leading-7 text-gray-300">
            Your Trusted Technology Partner. Quality gadgets, reliable
            repairs and dependable technology solutions.
          </p>

          <a
            href="https://wa.me/2349066151823"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-green-400 transition hover:text-green-300"
          >
            <FaWhatsapp className="text-lg" />
            Chat with us
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-6 text-lg font-bold">Quick Links</h3>

          <ul className="space-y-4 text-sm text-gray-300">
            <li><a href="#home" className="transition hover:text-[#C9A45C]">Home</a></li>
            <li><a href="#categories" className="transition hover:text-[#C9A45C]">Categories</a></li>
            <li><a href="#shop" className="transition hover:text-[#C9A45C]">Shop</a></li>
            <li><a href="#repairs" className="transition hover:text-[#C9A45C]">Repairs & Services</a></li>
            <li><a href="#about" className="transition hover:text-[#C9A45C]">About Us</a></li>
            <li><a href="#contact" className="transition hover:text-[#C9A45C]">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-6 text-lg font-bold">Our Services</h3>

          <ul className="space-y-4 text-sm text-gray-300">
            <li>Laptop & Computer Repairs</li>
            <li>Phone Repairs</li>
            <li>Software Installation</li>
            <li>Computer Maintenance</li>
            <li>Gadgets & Accessories</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-6 text-lg font-bold">Contact Us</h3>

          <ul className="space-y-5 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-[#C9A45C]" />
              <span>
                No. 10, Oshitelu Street, Computer Village, Ikeja, Lagos.
              </span>
            </li>

            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#C9A45C]" />
              <a href="tel:09066151823" className="hover:text-white">
                09066151823
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-green-400" />
              <a
                href="https://wa.me/2349066151823"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center sm:flex-row">

          <p className="text-sm text-gray-400">
            © {currentYear} STEADY TECH & ENGINEERING SOLUTIONS.
            All rights reserved.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#C9A45C] transition hover:text-white"
          >
            Back to Top <FaArrowRight className="-rotate-90" />
          </a>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
