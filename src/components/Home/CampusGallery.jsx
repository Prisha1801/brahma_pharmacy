import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const images = [
    { src: "/campus-gallery/c1.jpg", alt: "Campus Event" },
    { src: "/campus-gallery/c2.png", alt: "Campus Building" },
    { src: "/campus-gallery/c3.png", alt: "Laboratory" },
    { src: "/campus-gallery/c4.png", alt: "Campus Overview" },
];

const CampusGallery = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
                        Campus Gallery
                    </h2>
                    <div className="w-16 h-[3px] bg-[#ea1f28] mx-auto"></div>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="overflow-hidden rounded-lg shadow-md group"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center">
                    <Link to="/gallery">
                        <button className="bg-[#e23e44] hover:bg-[#c93238] text-white px-8 py-2.5 rounded-md font-medium transition-colors shadow-sm active:scale-95">
                            View All Photos
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default CampusGallery;