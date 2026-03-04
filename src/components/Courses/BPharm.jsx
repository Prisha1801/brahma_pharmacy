import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, BookMarked, UserPlus, HeartPulse, FlaskConical, Pill, Microscope, Scale, Dna, Leaf, Download, Hospital, Building2, Search, BarChart2, BookOpen, Lightbulb } from 'lucide-react';
import HeroSection from '../common/components/HeroSection';
import { bpharmHero } from '../common/data/heroData';

// ── Data ─────────────────────────────────────────────────────────────────────

const courseHighlights = [
    {
        icon: <Clock className="w-7 h-7 text-white" />,
        title: "Duration",
        description: "4 Years (8 Semesters)"
    },
    {
        icon: <CheckCircle className="w-7 h-7 text-white" />,
        title: "Eligibility",
        description: "12th Science (PCM/PCB) with MHT-CET/NEET"
    },
    {
        icon: <BookMarked className="w-7 h-7 text-white" />,
        title: "Affiliation",
        description: "Approved by PCI, DTE, and Savitribai Phule Pune University"
    },
    {
        icon: <UserPlus className="w-7 h-7 text-white" />,
        title: "Intake",
        description: "60 Students / Year"
    }
];

const curriculumSubjects = [
    { icon: <HeartPulse className="w-5 h-5 text-red-500" />, name: "Human Anatomy & Physiology" },
    { icon: <Pill className="w-5 h-5 text-red-500" />, name: "Pharmaceutics" },
    { icon: <FlaskConical className="w-5 h-5 text-red-500" />, name: "Pharmaceutical Chemistry" },
    { icon: <Microscope className="w-5 h-5 text-red-500" />, name: "Pharmacology & Toxicology" },
    { icon: <Scale className="w-5 h-5 text-red-500" />, name: "Pharmaceutical Jurisprudence" },
    { icon: <Dna className="w-5 h-5 text-red-500" />, name: "Biochemistry & Biotechnology" },
    { icon: <Leaf className="w-5 h-5 text-red-500" />, name: "Pharmacognosy & Phytochemistry" },
];

const careerOpportunities = [
    { icon: <Hospital className="w-8 h-8 text-red-500" />, title: "Hospital Pharmacist" },
    { icon: <Building2 className="w-8 h-8 text-red-500" />, title: "Pharmaceutical Industry" },
    { icon: <Search className="w-8 h-8 text-red-500" />, title: "Research & Development" },
    { icon: <BarChart2 className="w-8 h-8 text-red-500" />, title: "Clinical Trials" },
    { icon: <BookOpen className="w-8 h-8 text-red-500" />, title: "Higher Studies (M. Pharm, MBA)" },
    { icon: <Lightbulb className="w-8 h-8 text-red-500" />, title: "Entrepreneurship / Pharma Startups" },
];

// ── Component ─────────────────────────────────────────────────────────────────

const BPharm = () => {
    return (
        <div className="bg-white min-h-screen pb-20">

            {/* HERO SECTION */}
            <HeroSection {...bpharmHero} />

            {/* ── Course Overview ── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="/posters/collegeBPharm.jpg"
                                alt="Brahma Valley Institute of Pharmacy"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#003366]">
                            Course Overview
                        </h2>
                        <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                            <p>
                                The Bachelor of Pharmacy (B. Pharm) is a 4-year undergraduate program designed to provide comprehensive knowledge in pharmaceutical sciences, including drug development, healthcare practices, and clinical pharmacy.
                            </p>
                            <p>
                                Our curriculum blends theoretical and practical training, preparing students for diverse roles in hospitals, research, pharmaceutical manufacturing, and regulatory affairs. Join us to become an industry-ready professional in 2025–26.
                            </p>
                        </div>
                        <div className="pt-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#003366] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-900 transition-colors"
                            >
                                Learn More About Curriculum
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ── Course Highlights ── */}
            <div className="bg-[#f0f4f8] mt-24 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-[#003366] text-center mb-12"
                    >
                        Course Highlights
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {courseHighlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center mb-5">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Curriculum Structure ── */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-[#003366] text-center mb-12"
                >
                    Curriculum Structure
                </motion.h2>

                <div className="divide-y divide-gray-200">
                    {curriculumSubjects.map((subject, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.07 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 py-4 hover:bg-gray-50 px-3 rounded-lg transition-colors duration-200"
                        >
                            <span className="flex-shrink-0">{subject.icon}</span>
                            <span className="text-gray-700 text-[15px] font-medium">{subject.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ── Download Syllabus Banner ── */}
            <div className="mt-24 bg-gradient-to-r from-blue-800 to-blue-600 py-14 px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white mb-6"
                >
                    Download B. Pharm Syllabus
                </motion.h2>
                <motion.a
                    href="/pdf/Syllabus_B_Pharm.pdf"
                    download
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-800 transition-colors duration-300"
                >
                    <Download className="w-5 h-5" />
                    Download PDF
                </motion.a>
                <p className="text-blue-100 text-sm mt-4">
                    Access the latest B. Pharm syllabus for 2025–26 in PDF format.
                </p>
            </div>

            {/* ── Career Opportunities ── */}
            <div className="bg-[#f0f4f8] py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-[#003366] text-center mb-4"
                    >
                        Career Opportunities
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        viewport={{ once: true }}
                        className="text-gray-500 text-center mb-12"
                    >
                        B. Pharm graduates can explore diverse career paths, including:
                    </motion.p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {careerOpportunities.map((career, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                viewport={{ once: true }}
                                className="bg-white border border-gray-200 rounded-xl flex flex-col items-center justify-center gap-3 py-10 px-6 text-center hover:shadow-md transition-shadow duration-300"
                            >
                                {career.icon}
                                <h3 className="text-[15px] font-bold text-gray-800">{career.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Ready to Join CTA ── */}
            <div className="bg-[#002855] py-20 px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white mb-4"
                >
                    Ready to Join B. Pharm?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    viewport={{ once: true }}
                    className="text-blue-200 text-lg mb-8"
                >
                    Apply now to embark on a rewarding career in pharmaceutical sciences.
                </motion.p>
                <motion.a
                    href="/admission/apply-now"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-white text-[#002855] px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-blue-50 transition-colors duration-300"
                >
                    apply now
                </motion.a>
            </div>

        </div>
    );
};

export default BPharm;