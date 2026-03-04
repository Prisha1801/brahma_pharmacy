import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { facultiesHero } from '../common/data/heroData';
import { teachingStaff, nonTeachingStaff } from '../common/data/FacultyData'; // adjust path as needed

// ── Reusable Staff Card ──────────────────────────────────────────────────────
const StaffCard = ({ member, index }) => (
    <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-300"
    >
        <div className="p-4 bg-white flex flex-col items-center">
            <div className="w-full aspect-[4/5] overflow-hidden rounded-lg border-2 border-blue-900 mb-6 bg-gray-50">
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                        e.target.src = "/faculties/person.png";
                    }}
                />
            </div>

            <div className="text-center space-y-1">
                <div className="text-[14px]">
                    <span className="font-bold text-gray-900">Name: </span>
                    <span className="text-gray-700">{member.name}</span>
                </div>
                <div className="text-[14px]">
                    <span className="font-bold text-gray-900">Designation: </span>
                    <span className="text-blue-600 font-medium">{member.designation}</span>
                </div>
                <div className="text-[14px]">
                    <span className="font-bold text-gray-900">Qualification: </span>
                    <span className="text-gray-700">{member.qualification}</span>
                </div>
            </div>
        </div>
    </motion.div>
);

// ── Main Component ───────────────────────────────────────────────────────────
const Faculties = () => {
    return (
        <div className="bg-white min-h-screen pb-20">
            {/* HERO SECTION */}
            <HeroSection {...facultiesHero} />

            {/* ── Teaching Staff ── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Our Teaching Staff
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teachingStaff.map((member, index) => (
                        <StaffCard key={index} member={member} index={index} />
                    ))}
                </div>
            </div>

            {/* ── Non-Teaching Staff ── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Our Non-Teaching Staff
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {nonTeachingStaff.map((member, index) => (
                        <StaffCard key={index} member={member} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faculties;