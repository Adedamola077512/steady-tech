
import {
  FaShieldAlt,
  FaAward,
  FaHeadset,
  FaWallet,
} from "react-icons/fa";

import { motion } from "motion/react";

const reasons = [
  {
    icon: <FaShieldAlt />,
    title: "Quality Products",
    description:
      "We focus on providing quality gadgets and reliable technology products.",
  },
  {
    icon: <FaAward />,
    title: "Trusted Partner",
    description:
      "Your satisfaction matters. We are committed to honest and dependable service.",
  },
  {
    icon: <FaHeadset />,
    title: "Customer Support",
    description:
      "We're always ready to assist you with product enquiries and technical support.",
  },
  {
    icon: <FaWallet />,
    title: "Affordable Options",
    description:
      "Find technology solutions that suit your needs and budget.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-24" id="about">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Why Choose STEADY TECH
          </span>

          <h2 className="mb-5 text-3xl font-bold text-[#101D38] md:text-4xl">
            Technology You Can Trust,
            <span className="text-[#174EA6]"> Service You Deserve.</span>
          </h2>

          <p className="text-base leading-7 text-gray-600">
            We combine quality products, reliable service and customer-focused
            support to give you a better technology experience.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-gray-100 bg-[#F7F9FC] p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.12 }}
                transition={{ duration: 0.3 }}
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-2xl text-[#174EA6]"
              >
                {reason.icon}
              </motion.div>

              <h3 className="mb-3 text-lg font-bold text-[#101D38]">
                {reason.title}
              </h3>

              <p className="text-sm leading-6 text-gray-600">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-14 rounded-2xl bg-[#101D38] px-8 py-10 text-center"
        >
          <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
            Your Trusted Technology Partner
          </h3>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-gray-300">
            Whether you're shopping for a new device or looking for reliable
            technical support, STEADY TECH is here for you.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
