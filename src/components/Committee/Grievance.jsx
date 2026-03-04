import React from 'react';
import { motion } from 'framer-motion';
import { FiMessageSquare, FiShield, FiPhone, FiMail } from 'react-icons/fi';
import HeroSection from '../common/components/HeroSection';
import { grievanceHero } from '../common/data/heroData';
import { grievanceMembers } from '../common/data/FacultyData';

const Grievance = () => {
    return (
        <div className="bg-white min-h-screen pb-20">
            {/* HERO SECTION */}
            <HeroSection {...grievanceHero} />

            {/* ── About Section ── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold text-[#003366] mb-6"
                >
                    About Grievance Redressal
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="max-w-5xl mx-auto text-gray-600 leading-relaxed mb-12"
                >
                    Brahma Valley Institute of Pharmacy is dedicated to fostering a supportive and transparent environment. In accordance with the UGC (Redressal of Grievances of Students) Regulations, 2023, our Grievance Redressal Committee ensures that all student grievances—related to academics, facilities, or other issues—are addressed promptly, fairly, and confidentially.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left"
                    >
                        <h3 className="text-xl font-bold text-[#003366] mb-4">What is a Grievance?</h3>
                        <p className="text-gray-600 leading-relaxed">
                            A grievance is any complaint or dissatisfaction related to academic matters, hostel facilities, discrimination, or other institutional services, as defined by UGC regulations.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left"
                    >
                        <h3 className="text-xl font-bold text-[#003366] mb-4">Our Commitment</h3>
                        <p className="text-gray-600 leading-relaxed">
                            We provide a structured mechanism to resolve grievances through a dedicated committee, ensuring confidentiality, impartiality, and timely action.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* ── Committee Table ── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold text-[#003366] text-center mb-4"
                >
                    Grievance Redressal Committee
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-gray-500 text-center mb-12"
                >
                    Meet the members of our Grievance Redressal Committee for the term 2025–2026, dedicated to ensuring a fair resolution process.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm"
                >
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-[#3b9de5] text-white">
                                <th className="px-4 py-4 font-bold uppercase text-xs w-20">Sr.No</th>
                                <th className="px-6 py-4 font-bold uppercase text-xs border-l border-white/20">Name</th>
                                <th className="px-6 py-4 font-bold uppercase text-xs border-l border-white/20">Designation</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {grievanceMembers.map((member, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-4 py-4 text-gray-700 font-medium text-center">{member.srNo}</td>
                                    <td className="px-6 py-4 text-gray-700 border-l border-gray-200">{member.name}</td>
                                    <td className="px-6 py-4 text-gray-600 border-l border-gray-200">{member.designation}</td>
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
                        How to Report a Grievance
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-gray-500 text-center mb-16"
                    >
                        We encourage students to report grievances promptly. All complaints are handled confidentially, with resolutions provided within stipulated timelines.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center">
                                <FiMail size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-[#003366]">Email Reporting</h3>
                            <p className="text-gray-600">Send details of the incident to our official grievance redressal email address.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center">
                                <FiMessageSquare size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-[#003366]">Online Portal</h3>
                            <p className="text-gray-600">Submit your grievance through our secure online portal for tracking and updates.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Grievance;
