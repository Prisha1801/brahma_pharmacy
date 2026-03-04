import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { boardMembersHero } from '../common/data/heroData';

const BoardMembers = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    const members = [
        { srNo: 1, name: "Mr. Rajaram Dinkar Pangavhane (Patil)", role: "Founder President" },
        { srNo: 2, name: "Dr. Dhanisha G. Pangavhane (Patil)", role: "Vice President" },
        { srNo: 3, name: "Mrs. Ashwini A Bhosale", role: "Vice President" },
        { srNo: 4, name: "Mr. Gaurav R. Pangavhane (Patil)", role: "General Secretary" },
        { srNo: 5, name: "Mrs. Prabhavati R Pangavhane (Patil)", role: "Joint Secretary" },
        { srNo: 6, name: "Mrs. Rohini A Bhosale", role: "Member" },
        { srNo: 7, name: "Mrs. Shital Y Mule", role: "Member" },
    ];

    return (
        <div className="bg-white min-h-screen">
            <HeroSection {...boardMembersHero} />

            <div className="py-16 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#2d2e2e] tracking-tight">
                            NASHIK GRAMIN SHIKSHAN PRASARAK MANDAL
                        </h2>
                        <h3 className="text-xl md:text-2xl font-bold text-[#2d2e2e] mt-1">
                            BOARD OF TRUSTEES
                        </h3>
                    </motion.div>

                    {/* Table Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="overflow-x-auto shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-xl border border-gray-100"
                    >
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#3b82f6] text-white">
                                    <th className="py-4 px-6 font-semibold uppercase text-[13px] border-r border-white/20 text-center w-24">SR. NO</th>
                                    <th className="py-4 px-6 font-semibold uppercase text-[13px] border-r border-white/20">NAME</th>
                                    <th className="py-4 px-6 font-semibold uppercase text-[13px]">DESIGNATION</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {members.map((member, index) => (
                                    <tr key={index} className="hover:bg-blue-50/40 transition-colors">
                                        <td className="py-5 px-6 text-[#555] text-center border-r border-gray-100 font-medium">{member.srNo}</td>
                                        <td className="py-5 px-6 text-[#2d2e2e] font-medium border-r border-gray-100">{member.name}</td>
                                        <td className="py-5 px-6 text-[#555]">{member.role}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default BoardMembers;