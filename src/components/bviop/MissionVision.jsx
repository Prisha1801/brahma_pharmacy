import React from 'react';
import { motion } from 'framer-motion';
import { FiEye, FiFlag } from 'react-icons/fi';
import HeroSection from '../common/components/HeroSection';
import { missionVisionHero } from '../common/data/heroData';

const MissionVision = () => {
    const missionPoints = [
        {
            id: 'M-1',
            text: 'To provide quality education in pharmaceutical sciences that equips students with strong academic foundations, practical skills, and research aptitude.'
        },
        {
            id: 'M-2',
            text: 'To foster innovation and industry collaboration for the development of advanced drug delivery systems, formulations, and healthcare solutions.'
        },
        {
            id: 'M-3',
            text: 'To inculcate ethical values, social responsibility, and lifelong learning among students to meet the global challenges in the pharmacy and healthcare sectors.'
        },
        {
            id: 'M-4',
            text: 'To develop entrepreneurship and leadership qualities in students for self-reliance and contributions to pharmaceutical industry growth.'
        },
        {
            id: 'M-5',
            text: 'To serve rural and urban communities by promoting awareness of rational drug use and providing healthcare outreach through academic and clinical engagement.'
        }
    ];

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Hero Section */}
            <HeroSection {...missionVisionHero} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold text-gray-900 mb-4"
                    >
                        Guided by Purpose
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-600 text-lg max-w-2xl mx-auto"
                    >
                        Empowering future leaders through knowledge, innovation, and integrity.
                    </motion.p>
                </div>

                {/* VISION SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
                    {/* Vision Text Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border-l-8 border-[#047857] h-full flex flex-col justify-center"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-emerald-50 rounded-xl">
                                <FiEye className="text-3xl text-emerald-600" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800">Our Vision</h3>
                        </div>
                        <p className="text-xl text-gray-600 leading-relaxed italic">
                            "To be a center of excellence in pharmaceutical education, research, and healthcare, nurturing competent professionals with ethical values and a commitment to societal well-being."
                        </p>
                    </motion.div>

                    {/* Vision Image Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 flex flex-col items-center justify-center w-72 group">
                            {/* Circle image container */}
                            <div className="w-52 h-52 rounded-full overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500">
                                <img
                                    src="posters/vision.jpg"
                                    alt="Vision"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Shadow beneath circle */}
                            <div className="w-40 h-4 bg-black/10 rounded-[100%] blur-xl opacity-40 -mt-2"></div>
                        </div>
                    </motion.div>
                </div>

                {/* MISSION SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Mission Image Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="flex justify-center order-2 lg:order-1"
                    >
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 flex flex-col items-center justify-center w-72 group">
                            {/* Circle image container */}
                            <div className="w-52 h-52 rounded-full overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500">
                                <img
                                    src="posters/mission.png"
                                    alt="Mission"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Shadow beneath circle */}
                            <div className="w-40 h-4 bg-black/10 rounded-[100%] blur-xl opacity-40 -mt-2"></div>
                        </div>
                    </motion.div>

                    {/* Mission Text Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border-l-8 border-[#2563eb] order-1 lg:order-2"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-blue-50 rounded-xl">
                                <FiFlag className="text-3xl text-blue-600" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800">Our Mission</h3>
                        </div>

                        <div className="space-y-6">
                            {missionPoints.map((point) => (
                                <div key={point.id} className="flex gap-4 group">
                                    <span className="text-lg font-extrabold text-[#111] whitespace-nowrap pt-1 transition-colors group-hover:text-blue-600">
                                        {point.id} —
                                    </span>
                                    <p className="text-[#444] text-[15px] md:text-[16px] leading-relaxed font-medium">
                                        {point.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default MissionVision;