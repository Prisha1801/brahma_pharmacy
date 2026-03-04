import React from "react";
import { motion } from "framer-motion";

const facilities = [
  {
    title: "Modern Library",
    description:
      "Explore thousands of books, e-journals, and digital content in a quiet and resourceful environment.",
    image: "/facilities/Library.png",
  },
  {
    title: "Sports Complex",
    description:
      "Indoor and outdoor courts for cricket, football, badminton, and more for physical fitness and team building.",
    image: "/facilities/Sports.png",
  },
  {
    title: "Secure Hostels",
    description:
      "Our hostel offers a safe and peaceful environment specially designed for pharmacy students. With 24/7 security.",
    image: "/facilities/Hostel.png",
  },
  {
    title: "Transport Services",
    description:
      "Well-connected transport with GPS-enabled buses for safe and timely commutes across the city. Well-Maintained Buses.",
    image: "/facilities/Transport.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Facilities = () => {
  return (
    <section className="py-16 bg-[#1a854d] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our World-Class Facilities
          </h2>
        </div>

        {/* Grid - Centered items with 4 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white text-gray-800 rounded-2xl overflow-hidden shadow-xl flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="h-56 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 text-center flex flex-col flex-grow items-center">
                <h3 className="font-bold text-xl mb-3">
                  {facility.title}
                </h3>
                <p className="text-sm text-gray-600 italic leading-relaxed mb-6 flex-grow">
                  {facility.description}
                </p>

                {/* Internal Card Button */}
                <button className="bg-[#003366] hover:bg-[#002244] text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;