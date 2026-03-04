import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { cafeteriaHero } from '../common/data/heroData';

const Cafeteria = () => {
    return (
        <div className="bg-white min-h-screen pb-20">
            {/* HERO SECTION */}
            <HeroSection {...cafeteriaHero} />

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
                            src="/posters/cafeteria.png"
                            alt="Cafeteria Facility"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-[#007bff] mb-2">Cafeteria</h2>
                        <p className="text-gray-500 mb-8 italic">Hygienic | Nutritious | Student-Friendly</p>

                        <p className="text-gray-700 leading-relaxed mb-10">
                            At Brahma Valley Institute of Pharmacy, we understand the importance of providing healthy and hygienic food to support students' academic and practical activities. Our on-campus cafeteria is a welcoming space for students and staff to relax, eat, and interact.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mb-6">Key Features</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-800 font-medium mb-10">
                            <div className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <div><span className="font-bold">Clean & Hygienic:</span> Maintained with high standards.</div>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <div><span className="font-bold">Spacious Seating:</span> Relaxed dining during breaks.</div>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <div><span className="font-bold">Nutritious & Tasty:</span> Daily veg meals, snacks & beverages.</div>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <div><span className="font-bold">Filtered Water:</span> Purified water available on-site.</div>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <div><span className="font-bold">Affordable:</span> Priced to suit student budgets.</div>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <div><span className="font-bold">Quick Service:</span> Fast, efficient during peak hours.</div>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-4">Timing</h3>
                        <ul className="space-y-2 text-gray-800 font-medium">
                            <li className="flex items-center gap-2">
                                <span className="text-orange-500">◆</span>
                                <div><span className="font-bold">Open:</span> 8:30 AM to 5:00 PM (Monday to Saturday)</div>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-orange-500">◆</span>
                                <div><span className="font-bold">Break Hours:</span> Aligned with class and lab schedules</div>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Cafeteria;
