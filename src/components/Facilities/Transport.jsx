import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { transportHero } from '../common/data/heroData';

const Transport = () => {
    return (
        <div className="bg-white min-h-screen pb-20">
            {/* HERO SECTION */}
            <HeroSection {...transportHero} />

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
                            src="/posters/transport.webp"
                            alt="Transport Facility"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-[#007bff] mb-2">Transport Facility</h2>
                        <p className="text-gray-500 mb-8 italic">Safe, Convenient & Student-Friendly Commute</p>

                        <p className="text-gray-700 leading-relaxed mb-10">
                            At Brahma Valley Institute of Pharmacy, we understand the importance of reliable and comfortable transportation for our students and staff. To ensure timely and safe travel, the institute provides a well-organized transport facility covering major areas of Nashik city and surrounding regions.
                        </p>

                        <ul className="space-y-4 text-gray-800 font-medium">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <div><span className="font-bold">Well-Maintained Buses:</span> Regularly serviced for safety & comfort.</div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <div><span className="font-bold">Wide Route Coverage:</span> Nashik, Trimbak Road, Panchavati & nearby villages.</div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <div><span className="font-bold">Affordable Charges:</span> Pay annually or semester-wise with reasonable fees.</div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <div><span className="font-bold">Experienced Drivers & Staff:</span> Ensuring punctuality & safety.</div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <div><span className="font-bold">Fixed Timings & Backup Support:</span> Emergency support always available.</div>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Transport;
