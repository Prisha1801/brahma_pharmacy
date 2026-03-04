import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { womensCommitteeHero } from '../common/data/heroData';
import { womensCommitteeMembers } from '../common/data/FacultyData';

const WomensCommittee = () => {
    return (
        <div className="bg-white min-h-screen pb-20">
            {/* HERO SECTION */}
            <HeroSection {...womensCommitteeHero} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-[#003366] mb-4"
                    >
                        Women Committee
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-gray-500 text-lg"
                    >
                        Meet our Women Committee members for the academic year.
                    </motion.p>
                </div>

                {/* Committee Members Table */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm"
                >
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-[#3b9de5] text-white">
                                <th className="px-6 py-4 font-bold uppercase text-xs w-24">SR. NO.</th>
                                <th className="px-6 py-4 font-bold uppercase text-xs border-l border-white/20">NAME</th>
                                <th className="px-6 py-4 font-bold uppercase text-xs border-l border-white/20">DESIGNATION</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {womensCommitteeMembers.map((member, idx) => (
                                <tr
                                    key={idx}
                                    className={`hover:bg-gray-50 transition-colors ${idx % 2 !== 0 ? 'bg-gray-50/50' : 'bg-white'}`}
                                >
                                    <td className="px-6 py-4 text-gray-700 font-medium text-center">{member.srNo}</td>
                                    <td className="px-6 py-4 text-gray-700 border-l border-gray-200">{member.name}</td>
                                    <td className="px-6 py-4 text-gray-600 border-l border-gray-200">{member.designation}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </div>
    );
};

export default WomensCommittee;
