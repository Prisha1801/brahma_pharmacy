import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { sportsHero } from '../common/data/heroData';

const Sports = () => {
    return (
        <div className="bg-white min-h-screen pb-20">
            {/* HERO SECTION */}
            <HeroSection {...sportsHero} />

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
                            src="/posters/sports.png"
                            alt="Sports Facilities"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-[#007bff] mb-2">Sports Facilities</h2>
                        <p className="text-gray-500 mb-8 italic">Fitness, Team, and Holistic Development</p>

                        <p className="text-gray-700 leading-relaxed mb-10">
                            At Brahma Valley Institute of Pharmacy, we believe sports are essential for student health and development. Our facilities and events promote physical fitness, teamwork, and leadership.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mb-6">Indoor & Outdoor Games</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-800 font-medium mb-10">
                            <div className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <div><span className="font-bold text-black underline">Outdoor Games:</span> Volleyball, Cricket, Football, Kho-Kho, Kabaddi</div>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <div><span className="font-bold text-black underline">Indoor Games:</span> Table Tennis, Badminton, Chess, Carrom, Yoga Hall</div>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-6">Sports Events & Activities</h3>
                        <ul className="space-y-4 text-gray-800 font-medium">
                            <li>
                                <span className="font-bold text-black">Annual Sports Week:</span> Competitive indoor and outdoor events.
                            </li>
                            <li>
                                <span className="font-bold text-black">Intercollegiate Participation:</span> Students represent BVIOP in tournaments.
                            </li>
                            <li>
                                <span className="font-bold text-black">Fitness & Wellness Programs:</span> Yoga sessions, health drives, and fitness camps.
                            </li>
                            <li>
                                <span className="font-bold text-black">Student Sports Committee:</span> Organizes and manages sports activities.
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Sports;
