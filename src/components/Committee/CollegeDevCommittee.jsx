import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import HeroSection from '../common/components/HeroSection';
import { collegeDevCommitteeHero } from '../common/data/heroData';

const cdcMembers = [
    { name: "Dr. Rohit Pradip Mali", designation: "Chairman", role: "Nominee of the Management" },
    { name: "Prof. Vrushali V. Nikhade (M. Pharmacy)", designation: "Student Development Officer", role: "Principal, Brahma Valley Institute of Pharmacy" },
    { name: "Mr. Harish M. Kokate", designation: "Student General Secretary", role: "Elected Faculty Member" },
    { name: "Ms. Neha K. Johare", designation: "Ladies Representative", role: "Elected Non-Teaching Staff Member" }
];

const responsibilities = [
    {
        title: "Academic Planning",
        description: "Develop a comprehensive academic plan, including the annual calendar, new courses, and teaching programs to ensure excellence in education."
    },
    {
        title: "Infrastructure Development",
        description: "Oversee infrastructural growth, including facilities upgrades, to support a conducive learning environment."
    },
    {
        title: "Student & Staff Welfare",
        description: "Recommend welfare activities to enhance the well-being of students and employees, fostering a supportive community."
    },
    {
        title: "Discipline & Safety",
        description: "Ensure a safe and disciplined campus by recommending policies for security and regulatory compliance."
    }
];

const CollegeDevCommittee = () => {
    return (
        <div className="bg-white min-h-screen pb-20">
            {/* HERO SECTION */}
            <HeroSection {...collegeDevCommitteeHero} />

            {/* ── About TCDC Section ── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold text-[#003366] mb-6"
                >
                    About the College Development Committee
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="max-w-5xl mx-auto text-gray-600 leading-relaxed mb-12"
                >
                    The College Development Committee (CDC) at Brahma Valley Institute of Pharmacy is a statutory body constituted under Section 97 of the Maharashtra Public Universities Act, 2016. The CDC plays a pivotal role in shaping the institute's comprehensive development plan, fostering excellence in academics, infrastructure, and co-curricular activities while ensuring student and staff welfare.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left"
                    >
                        <h3 className="text-xl font-bold text-[#003366] mb-4">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To create a dynamic and inclusive educational environment that promotes innovation, quality education, and holistic development for all stakeholders.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left"
                    >
                        <h3 className="text-xl font-bold text-[#003366] mb-4">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To oversee strategic planning, recommend policies for academic and administrative growth, and ensure alignment with regulatory standards to elevate the institute's stature.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* ── Committee Members Table ── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold text-[#003366] text-center mb-4"
                >
                    Committee Members
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-gray-500 text-center mb-12"
                >
                    Meet the dedicated members of our College Development Committee for the term 2023–2028.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="overflow-x-auto rounded-xl border border-gray-200"
                >
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-blue-500 text-white">
                                <th className="px-6 py-4 font-bold uppercase text-sm">Name</th>
                                <th className="px-6 py-4 font-bold uppercase text-sm border-l border-white/20">Designation</th>
                                <th className="px-6 py-4 font-bold uppercase text-sm border-l border-white/20">Role</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {cdcMembers.map((member, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-gray-700 font-medium">{member.name}</td>
                                    <td className="px-6 py-4 text-gray-600 border-l border-gray-200">{member.designation}</td>
                                    <td className="px-6 py-4 text-gray-600 border-l border-gray-200">{member.role}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>

            {/* ── Key Responsibilities Section ── */}
            <div className="bg-gray-50 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl font-bold text-[#003366] text-center mb-4"
                    >
                        Key Responsibilities
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-gray-500 text-center mb-16"
                    >
                        The CDC is committed to fostering institutional growth and excellence through strategic planning and oversight.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {responsibilities.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start gap-4 hover:shadow-md transition-shadow"
                            >
                                <CheckCircle2 className="w-10 h-10 text-red-500 mb-2" />
                                <h3 className="text-xl font-bold text-[#003366]">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDevCommittee;
