import React from 'react';
import { motion } from 'framer-motion';
import { FiInfo, FiShield, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import HeroSection from '../common/components/HeroSection';
import { antiRaggingHero } from '../common/data/heroData';
import { antiRaggingMembers } from '../common/data/FacultyData';

const AntiRagging = () => {
    return (
        <div className="bg-white min-h-screen pb-20">
            {/* HERO SECTION */}
            <HeroSection {...antiRaggingHero} />

            {/* ── Commitment Section ── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold text-[#003366] mb-6"
                >
                    Our Commitment to a Ragging-Free Campus
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="max-w-5xl mx-auto text-gray-600 leading-relaxed mb-12"
                >
                    Brahma Valley Institute of Pharmacy is committed to maintaining a safe, inclusive, and respectful environment for all students. In compliance with the UGC Regulations on Curbing the Menace of Ragging, 2009, we have a zero-tolerance policy towards ragging. Ragging in any form is strictly prohibited and is treated as a serious offense, with stringent actions taken against violators to ensure a harmonious campus community.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left"
                    >
                        <h3 className="text-xl font-bold text-[#003366] mb-4">What is Ragging?</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Ragging includes any act that causes physical or psychological harm, embarrassment, or discomfort to a student, such as teasing, abuse, or forced participation in activities, as defined by UGC regulations.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left"
                    >
                        <h3 className="text-xl font-bold text-[#003366] mb-4">Our Policy</h3>
                        <p className="text-gray-600 leading-relaxed">
                            We enforce strict anti-ragging measures, including awareness programs, a dedicated committee, and a robust reporting mechanism to prevent and address ragging incidents promptly.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* ── Anti-Ragging Committee Table ── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold text-[#003366] text-center mb-4"
                >
                    Anti-Ragging Committee
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-gray-500 text-center mb-12"
                >
                    The Anti-Ragging Committee ensures a ragging-free environment through proactive monitoring and swift action. Meet our committee members for the term 2025-2026.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="overflow-x-auto rounded-xl border border-gray-200"
                >
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-[#3b9de5] text-white">
                                <th className="px-4 py-4 font-bold uppercase text-xs w-20">Sr.No</th>
                                <th className="px-6 py-4 font-bold uppercase text-xs border-l border-white/20">Structure of Cell</th>
                                <th className="px-6 py-4 font-bold uppercase text-xs border-l border-white/20">Name</th>
                                <th className="px-6 py-4 font-bold uppercase text-xs border-l border-white/20">Designation</th>
                                <th className="px-6 py-4 font-bold uppercase text-xs border-l border-white/20 text-center">Phone</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {antiRaggingMembers.map((member, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-4 py-4 text-gray-700 font-medium text-center">{member.srNo}</td>
                                    <td className="px-6 py-4 text-gray-600 border-l border-gray-200">{member.structure}</td>
                                    <td className="px-6 py-4 text-gray-600 border-l border-gray-200">{member.name}</td>
                                    <td className="px-6 py-4 text-gray-600 border-l border-gray-200">{member.designation}</td>
                                    <td className="px-6 py-4 text-gray-600 border-l border-gray-200 text-center">{member.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>

            {/* ── Reporting Section ── */}
            <div className="bg-gray-50 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl font-bold text-[#003366] text-center mb-4"
                    >
                        How to Report Ragging
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-gray-500 text-center mb-16"
                    >
                        We encourage students to report any ragging incidents immediately. Your identity will be protected, and swift action will be taken.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center">
                                <FiPhone size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-[#003366]">Helpline Numbers</h3>
                            <p className="text-gray-600">Contact our 24/7 anti-ragging helpline for immediate assistance.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center">
                                <FiMail size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-[#003366]">Email Reporting</h3>
                            <p className="text-gray-600">Send details of the incident to our official anti-ragging email address.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center">
                                <FiMapPin size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-[#003366]">In-Person Reporting</h3>
                            <p className="text-gray-600">Visit the Anti-Ragging Committee office at the Administrative Block, Brahma Valley Educational Campus.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AntiRagging;
