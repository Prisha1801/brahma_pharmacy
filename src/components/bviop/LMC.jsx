import React from "react";
import { motion } from "framer-motion";
import HeroSection from '../common/components/HeroSection';
import { lmcHero } from '../common/data/heroData';

const LMC = () => {
    const committeeMembers = [
        { srNo: 1, name: "Shri. Rajaram Pangavhane (Patil)", designation: "President" },
        { srNo: 2, name: "Mr. Gaurav R. Pangvhane (Patil)", designation: "Executive President" },
        { srNo: 3, name: "Dr. Dhanisha G. Pangvhane (Patil)", designation: "Vice President of Trust" },
        { srNo: 4, name: "Dr. Rohit P. Mali", designation: "Principal" },
        { srNo: 5, name: "Dr. Santosh H. Pawar", designation: "Member" },
        { srNo: 6, name: "Mr. Samadhan Pagar", designation: "Member" },
        { srNo: 7, name: "Dr. Zafar Khan", designation: "Member" },
        { srNo: 8, name: "Prof. Vrushali V. Nikhade", designation: "Member" },
        { srNo: 9, name: "Prof. Neha M. Pawar", designation: "Member" },
        { srNo: 10, name: "Prof. Anuja Ghorpade", designation: "Member" },
        { srNo: 11, name: "Shri. Abhijeet R. Suryawanshi", designation: "Member" },
    ];

    return (
        <div className="bg-white min-h-screen pb-16">
            {/* HERO SECTION */}
            <HeroSection {...lmcHero} />

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
                        <h3 className="text-xl md:text-2xl font-bold text-[#2d2e2e] mt-1 uppercase">
                            LMC COMMITTEE
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
                                {committeeMembers.map((member, index) => (
                                    <tr key={index} className="hover:bg-blue-50/40 transition-colors">
                                        <td className="py-5 px-6 text-[#555] text-center border-r border-gray-100 font-medium">{member.srNo}</td>
                                        <td className="py-5 px-6 text-[#2d2e2e] font-medium border-r border-gray-100">{member.name}</td>
                                        <td className="py-5 px-6 text-[#555]">{member.designation}</td>
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

export default LMC;
