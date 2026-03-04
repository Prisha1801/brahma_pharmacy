import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { popeoHero } from '../common/data/heroData';

const POPEO = () => {
    const programOutcomes = [
        {
            id: "PO1",
            title: "Pharmacy Knowledge",
            description: "Possess comprehensive knowledge of pharmacy and its applications in areas like drug design, drug manufacturing, regulatory affairs, and pharmacological evaluation."
        },
        {
            id: "PO2",
            title: "Planning Abilities",
            description: "Demonstrate effective planning and time management in both academic and professional settings to achieve pharmaceutical goals."
        },
        {
            id: "PO3",
            title: "Problem Analysis",
            description: "Identify, analyze, and solve pharmaceutical problems using scientific principles and data analysis, particularly in areas such as pharmacokinetics, formulation, and quality assurance."
        },
        {
            id: "PO4",
            title: "Modern Tool Usage",
            description: "Apply modern tools and software relevant to pharmaceutical research, drug design, biotechnology, and formulation development while understanding their limitations."
        },
        {
            id: "PO5",
            title: "Leadership Skills",
            description: "Exhibit leadership, team-building, and management skills in multidisciplinary professional environments such as hospitals, industries, and regulatory bodies."
        },
        {
            id: "PO6",
            title: "Professional Identity",
            description: "Understand and uphold the roles, responsibilities, and ethical values of a pharmacist in diverse healthcare settings."
        },
        {
            id: "PO7",
            title: "Pharmaceutical Ethics",
            description: "Practice pharmaceutical ethics in accordance with national and international codes of conduct and contribute responsibly to healthcare and the community."
        },
        {
            id: "PO8",
            title: "Communication",
            description: "Communicate effectively with peers, patients, healthcare professionals, and the public through verbal, written, and digital means."
        },
        {
            id: "PO9",
            title: "The Pharmacist and Society",
            description: "Apply reasoning informed by pharmaceutical knowledge to assess societal, health, safety, and legal responsibilities relevant to pharmacy practice."
        },
        {
            id: "P10",
            title: "Environment and Sustainability",
            description: "Understand the impact of pharmaceutical industries on the environment and promote sustainable practices in drug development and healthcare delivery."
        },
        {
            id: "P11",
            title: "Lifelong Learning",
            description: "Recognize the need for and engage in continuous professional development and lifelong learning in a rapidly evolving pharmaceutical and healthcare sector."
        },
        {
            id: "P12",
            title: "Research Aptitude",
            description: "Demonstrate research skills, scientific temperament, and ability to design, conduct, analyze, and report experiments and projects in pharmaceutical sciences."
        }
    ];

    const programEducationalObjectives = [
        {
            id: "PEO1",
            title: "Strong Pharmaceutical Foundation",
            description: "Graduates will have a strong foundation in pharmaceutical sciences and allied areas enabling them to understand, analyze, and solve real-world healthcare and industrial challenges."
        },
        {
            id: "PEO2",
            title: "Professional Competence",
            description: "Graduates will become competent professionals capable of working effectively in various fields such as community pharmacy, clinical pharmacy, regulatory affairs, pharmaceutical marketing, and drug manufacturing."
        },
        {
            id: "PEO3",
            title: "Lifelong Learning and Higher Studies",
            description: "Graduates will engage in lifelong learning and pursue higher education, research, or professional development in pharmaceutical sciences and related fields."
        },
        {
            id: "PEO4",
            title: "Ethics and Social Responsibility",
            description: "Graduates will exhibit high ethical standards and social responsibility, serving the healthcare system and contributing positively to society through safe and effective drug use."
        },
        {
            id: "PEO5",
            title: "Entrepreneurship and Innovation",
            description: "Graduates will develop entrepreneurial capabilities and innovative thinking for setting up ventures or contributing to R&D and product development in the pharmaceutical sector."
        }
    ];

    const programSpecificOutcomes = [
        {
            id: "PSO1",
            title: "Drug Development and Formulation",
            description: "Apply knowledge of pharmaceutics, pharmaceutical chemistry, and biopharmaceutics to design, develop, and evaluate effective drug delivery systems and dosage forms."
        },
        {
            id: "PSO2",
            title: "Clinical and Community Pharmacy",
            description: "Provide effective patient care by applying principles of pharmacology, clinical pharmacy, and pharmacotherapeutics, ensuring safe and rational use of medicines."
        },
        {
            id: "PSO3",
            title: "Regulatory and Industrial Competency",
            description: "Demonstrate understanding of pharmaceutical laws, ethics, regulatory frameworks, quality assurance, and industrial practices essential for roles in manufacturing and compliance."
        },
        {
            id: "PSO4",
            title: "Research and Analytical Skills",
            description: "Demonstrate skills in pharmaceutical research, quality control, and analysis using advanced instrumentation and techniques, contributing to innovation and problem-solving in drug development."
        }
    ];

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* HERO SECTION */}
            <HeroSection {...popeoHero} />

            {/* ── Program Outcomes (POs) ── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-[#3b82f6] mb-4 flex items-center justify-center gap-2"
                    >
                        <span className="text-gray-800">🎓</span> Program Outcomes (POs)
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-500 text-sm max-w-3xl mx-auto"
                    >
                        Empowering students with academic excellence, professional skills, and ethical values in pharmaceutical sciences.
                    </motion.p>
                </div>

                <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 p-8 md:p-12">
                    <div className="flex items-center gap-2 mb-10 text-[#3b82f6]">
                        <span className="text-gray-800">🎓</span>
                        <h3 className="text-xl font-bold">Program Outcomes (POs)</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        {programOutcomes.map((po, index) => (
                            <motion.div
                                key={po.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="space-y-2"
                            >
                                <h4 className="text-lg font-bold text-gray-800">
                                    {po.id} – {po.title}
                                </h4>
                                <p className="text-gray-500 text-[14px] leading-relaxed">
                                    {po.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Program Educational Objectives (PEOs) ── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-[#0d9488] mb-4 flex items-center justify-center gap-2"
                    >
                        <span>🎯</span> Program Educational Objectives (PEOs)
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-500 text-sm max-w-3xl mx-auto"
                    >
                        Nurturing future pharmacists to lead with knowledge, ethics, and innovation.
                    </motion.p>
                </div>

                <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 p-8 md:p-12">
                    <div className="flex items-center gap-2 mb-10 text-[#0d9488]">
                        <span>🎯</span>
                        <h3 className="text-xl font-bold">Program Educational Objectives (PEOs)</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        {programEducationalObjectives.map((peo, index) => (
                            <motion.div
                                key={peo.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="space-y-2"
                            >
                                <h4 className="text-lg font-bold text-gray-800">
                                    {peo.id}: {peo.title}
                                </h4>
                                <p className="text-gray-500 text-[14px] leading-relaxed text-justify">
                                    {peo.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Program Specific Outcomes (PSOs) ── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-[#2563eb] mb-4 flex items-center justify-center gap-2"
                    >
                        <span>💉</span> Program Specific Outcomes (PSOs)
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-500 text-sm max-w-3xl mx-auto"
                    >
                        Focused capabilities designed for excellence in pharmacy practice, industry, and research.
                    </motion.p>
                </div>

                <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 p-8 md:p-12">
                    <div className="flex items-center gap-2 mb-10 text-[#2563eb]">
                        <span>🧪</span>
                        <h3 className="text-xl font-bold">Program Specific Outcomes (PSOs)</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        {programSpecificOutcomes.map((pso, index) => (
                            <motion.div
                                key={pso.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="space-y-2"
                            >
                                <h4 className="text-lg font-bold text-gray-800">
                                    {pso.id}: {pso.title}
                                </h4>
                                <p className="text-gray-500 text-[14px] leading-relaxed text-justify">
                                    {pso.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default POPEO;