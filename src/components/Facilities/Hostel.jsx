import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { hostelHero } from '../common/data/heroData';

const Hostel = () => {
    return (
        <div className="bg-white min-h-screen pb-20">
            {/* HERO SECTION */}
            <HeroSection {...hostelHero} />

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
                            src="/posters/hostel.jpg"
                            alt="Hostel Facility"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-[#007bff] mb-2">Hostel Facilities</h2>
                        <p className="text-gray-500 mb-8 italic">Comfortable | Secure | Student-Centric Accommodation</p>

                        <p className="text-gray-700 leading-relaxed mb-10">
                            At Brahma Valley Institute of Pharmacy, we provide a safe and comfortable hostel environment that allows students to focus on academics while enjoying a healthy, community-based lifestyle.
                        </p>

                        <ul className="space-y-4 text-gray-800 font-medium">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <div><span className="font-bold">Separate Hostels:</span> For boys and girls, within or near campus.</div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <div><span className="font-bold">Spacious Rooms:</span> 2/3-sharing with beds, study tables, and storage.</div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <div><span className="font-bold">24/7 Security:</span> CCTV surveillance and night wardens for safety.</div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <div><span className="font-bold">Essential Facilities:</span> RO water, hot water, laundry, Wi-Fi, medical help.</div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <div><span className="font-bold">Mess Facility:</span> 3 hygienic vegetarian meals served daily.</div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <div><span className="font-bold">Cleanliness:</span> Regular maintenance and cleaning by staff.</div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <div><span className="font-bold">Hostel Fees:</span> ₹50,000 – ₹60,000 per year (incl. mess).</div>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hostel;
