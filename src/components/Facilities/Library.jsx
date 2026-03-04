import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { libraryHero } from '../common/data/heroData';

const Library = () => {
    return (
        <div className="bg-white min-h-screen pb-20">
            {/* HERO SECTION */}
            <HeroSection {...libraryHero} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row"
                >
                    {/* Image Section */}
                    <div className="lg:w-1/2 overflow-hidden">
                        <img
                            src="/posters/libraryHero.png"
                            alt="Library Facility"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-[#007bff] mb-2">Facilities at BVIOP</h2>
                        <p className="text-gray-500 mb-8 italic">Empowering Academic & Personal Excellence</p>

                        <p className="text-gray-700 leading-relaxed mb-10">
                            At BVIOP, we strive to provide a nurturing and resource-rich environment that enhances both academic and personal growth. Our facilities are designed to meet the modern standards of pharmacy education.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mb-6">Library & Digital Learning</h3>

                        <ul className="space-y-4 text-gray-800 font-medium">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <div>2000+ books, journals, and periodicals</div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <div>Access to e-journals and digital resources</div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <div>Online databases and pharma content</div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <div>Comfortable reading space for study</div>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Library;
