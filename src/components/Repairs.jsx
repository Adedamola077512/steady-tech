
import { motion } from "motion/react";

import {
  FaLaptop,
  FaMobileAlt,
  FaTools,
  FaWindows,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptop />,
    number: "01",
    title: "Laptop & Computer Repairs",
    description:
      "Professional diagnosis and repair of laptop and desktop computer problems.",
  },
  {
    icon: <FaMobileAlt />,
    number: "02",
    title: "Phone Repairs",
    description:
      "Reliable solutions for smartphone hardware faults and software problems.",
  },
  {
    icon: <FaWindows />,
    number: "03",
    title: "Software Installation",
    description:
      "Operating system installation, software setup, updates and troubleshooting.",
  },
  {
    icon: <FaTools />,
    number: "04",
    title: "Maintenance & Upgrades",
    description:
      "Improve device performance through servicing, RAM upgrades and SSD installation.",
  },
];

const Repairs = () => {
  return (
    <section id="repairs" className="bg-[#101D38] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 max-w-2xl"
        >
          <span className="mb-5 inline-block rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-300">
            What We Do
          </span>

          <h2 className="mb-5 text-3xl font-bold leading-tight text-white md:text-5xl">
            Expert Technology
            <span className="text-[#C9A45C]"> Services & Repairs.</span>
          </h2>

          <p className="max-w-xl text-base leading-7 text-gray-300">
            From device repairs to software solutions, we provide dependable
            technical support to keep your technology working at its best.
          </p>
        </motion.div>

        {/* Services */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl border border-white/10 bg-white p-7 transition-shadow duration-300 hover:shadow-2xl"
            >

              <div className="mb-8 flex items-center justify-between">

                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-2xl text-[#174EA6] transition duration-300 group-hover:bg-[#174EA6] group-hover:text-white"
                >
                  {service.icon}
                </motion.div>

                <span className="text-sm font-bold text-gray-300">
                  {service.number}
                </span>

              </div>

              <h3 className="mb-3 text-lg font-bold text-[#101D38]">
                {service.title}
              </h3>

              <p className="mb-8 text-sm leading-6 text-gray-600">
                {service.description}
              </p>

              <a
                href="https://wa.me/2349066151823"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#174EA6] transition-all hover:gap-3"
              >
                Enquire Now <FaArrowRight />
              </a>

            </motion.div>
          ))}

        </div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 flex flex-col items-center justify-between gap-7 rounded-2xl border border-white/10 bg-[#172A4B] p-8 md:flex-row md:px-12 md:py-10"
        >

          <div>
            <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
              Need Professional Technical Support?
            </h3>

            <p className="max-w-xl text-sm leading-7 text-gray-300">
              Tell us what's wrong with your device. We're ready to help you
              find the right solution.
            </p>
          </div>

          <motion.a
            href="https://wa.me/2349066151823?text=Hello%20STEADY%20TECH%2C%20I%20need%20technical%20support."
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-green-500 px-6 py-4 font-semibold text-white transition hover:bg-green-600"
          >
            <FaWhatsapp className="text-xl" />
            Book a Service
          </motion.a>

        </motion.div>

      </div>
    </section>
  );
};

export default Repairs;
