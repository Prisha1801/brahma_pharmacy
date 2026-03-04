import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMaximize2, FiZoomIn } from 'react-icons/fi';
import HeroSection from '../common/components/HeroSection';
import { collegeFlyerHero } from '../common/data/heroData';

const CollegeFlyers = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const flyers = [
        {
            id: 1,
            title: "B.Pharm Admission Flyer",
            description: "Learn about our B.Pharm program and admission process for 2025.",
            image: "/posters/college flyer.png"
        }
    ];

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* HERO SECTION */}
            <HeroSection {...collegeFlyerHero} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">Explore Our Flyers</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
                        Stay updated with our vibrant events, academic programs, and campus activities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {flyers.map((flyer) => (
                        <motion.div
                            key={flyer.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 group cursor-pointer max-w-xs mx-auto"
                            onClick={() => setSelectedImage(flyer.image)}
                        >
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <img
                                    src={flyer.image}
                                    alt={flyer.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-full">
                                        <FiZoomIn className="text-white text-3xl" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-[#003366] mb-2">{flyer.title}</h3>
                                <p className="text-gray-500 text-sm italic">{flyer.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* LIGHTBOX / FULL SCREEN VIEW */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-6 right-6 text-white text-3xl z-[101] bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <FiX />
                        </motion.button>

                        <motion.img
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            src={selectedImage}
                            alt="Full Screen Flyer"
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CollegeFlyers;
