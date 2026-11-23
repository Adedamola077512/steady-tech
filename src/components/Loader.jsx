
import { motion } from "motion/react";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#101D38]"
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-center"
      >
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-[#C9A45C] bg-[#174EA6] shadow-xl">
          <span className="text-5xl font-extrabold text-white">
            S
          </span>
        </div>

        <h1 className="text-2xl font-extrabold tracking-wider text-white">
          STEADY <span className="text-[#C9A45C]">TECH</span>
        </h1>

        <p className="mt-2 text-xs font-medium uppercase tracking-[3px] text-gray-300">
          Engineering Solutions
        </p>
      </motion.div>

      {/* Loading Spinner */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "linear",
        }}
        className="h-10 w-10 rounded-full border-4 border-[#174EA6] border-t-[#C9A45C]"
      />

      <motion.p
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="mt-6 text-sm text-gray-300"
      >
        Preparing your experience...
      </motion.p>

      <p className="absolute bottom-10 text-xs font-semibold tracking-widest text-[#C9A45C]">
        QUALITY SERVICE. EVERY TIME.
      </p>
    </motion.div>
  );
};

export default Loader;
