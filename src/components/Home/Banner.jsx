import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const images = [
  "/banners/b1.png",
  "/banners/b2.png",
];

function Banner() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    // Disable animation only for first render
    setFirstLoad(false);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">

      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={index}
          src={images[index]}
          alt="Banner"
          custom={direction}
          initial={
            firstLoad
              ? false
              : { x: direction > 0 ? "100%" : "-100%" }
          }
          animate={{ x: 0 }}
          exit={{ x: direction > 0 ? "-100%" : "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute w-full top-0 left-0"
        />
      </AnimatePresence>

      {/* Height holder */}
      <img
        src={images[0]}
        alt=""
        className="w-full invisible"
      />

      {/* Left Button */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow z-10"
      >
        <FiChevronLeft size={24} />
      </button>

      {/* Right Button */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow z-10"
      >
        <FiChevronRight size={24} />
      </button>

      {/* OVERLAP FORM */}
      <div className="absolute inset-y-0 left-0 flex items-center p-4 md:p-12 lg:p-20 z-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white rounded-lg shadow-2xl p-6 md:p-8 w-full max-w-md pointer-events-auto"
        >
          <h2 className="text-xl md:text-2xl font-bold text-[#222] mb-6 border-b pb-2 uppercase tracking-wide">
            For Admission Enquiry:
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name:</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003366] transition-all"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email:</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003366] transition-all"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Phone No.:</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003366] transition-all"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Message:</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003366] transition-all resize-none"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#003366] text-white font-bold py-3 px-6 rounded-md hover:bg-[#002244] transition-colors duration-300 shadow-lg mt-2"
            >
              Send Now
            </button>
          </form>
        </motion.div>
      </div>

    </div>
  );
}

export default Banner;