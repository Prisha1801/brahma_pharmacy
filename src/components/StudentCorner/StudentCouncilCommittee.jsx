import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { studentCouncilCommitteeHero } from '../common/data/heroData';
import { studentCouncilMembers } from '../common/data/FacultyData';

const StudentCouncilCommittee = () => {
    return (
        <div className="bg-white min-h-screen pb-20">
            <HeroSection {...studentCouncilCommitteeHero} />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-[#003366] mb-3"
                    >
                        Student Council Committee
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        viewport={{ once: true }}
                        className="text-gray-500 text-base"
                    >
                        Meet our Student Council members for the academic year.
                    </motion.p>
                </div>

                {/* Table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="overflow-hidden rounded-xl border border-gray-200 shadow-sm"
                >
                    <table className="w-full text-left border-collapse">
                        {/* Head */}
                        <thead>
                            <tr className="bg-[#3b9de5]">
                                <th className="text-white text-[13px] font-bold uppercase tracking-wider px-6 py-4 w-32">
                                    Sr. No.
                                </th>
                                <th className="text-white text-[13px] font-bold uppercase tracking-wider px-6 py-4">
                                    Name
                                </th>
                                <th className="text-white text-[13px] font-bold uppercase tracking-wider px-6 py-4">
                                    Designation
                                </th>
                            </tr>
                        </thead>

                        {/* Body */}
                        <tbody>
                            {studentCouncilMembers.map((member) => (
                                <tr
                                    key={member.srNo}
                                    className={`border-t border-gray-200 ${member.srNo % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                        }`}
                                >
                                    <td className="px-6 py-4 text-gray-700 text-[15px] text-center">
                                        {member.srNo}
                                    </td>
                                    <td className="px-6 py-4 text-gray-700 text-[15px]">
                                        {member.name}
                                    </td>
                                    <td className="px-6 py-4 text-gray-700 text-[15px]">
                                        {member.designation}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>

            </div>
        </div>
    );
};

export default StudentCouncilCommittee;