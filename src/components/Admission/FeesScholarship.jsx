import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiHelpCircle, FiCheckCircle } from 'react-icons/fi';
import HeroSection from '../common/components/HeroSection';
import { feesScholarshipHero } from '../common/data/heroData';

const FeesScholarship = () => {
    const feeStructure = [
        {
            course: "B. Pharmacy (First Year)",
            year: "1st Year",
            tuitionFee: "₹72,727 (As per FRA)",
            developmentFee: "₹7,273",
            total: "₹80,000"
        },
        {
            course: "Direct Second Year B. Pharm",
            year: "2nd Year Entry",
            tuitionFee: "₹85,000 – ₹95,000",
            developmentFee: "₹5,000 – ₹10,000",
            total: "₹90,000 – ₹1,05,000"
        }
    ];

    const scholarships = [
        {
            type: "Post Matric Scholarship (SC/ST/OBC/VJNT/SBC)",
            criteria: "Maharashtra domicile, valid caste certificate & income limit"
        },
        {
            type: "EBC (Economically Backward Class)",
            criteria: "General category with family income < ₹8 lakh"
        },
        {
            type: "Minority Scholarship (Muslim/Sikh/Christian etc.)",
            criteria: "Minority students with valid documents"
        },
        {
            type: "Dr. Panjabrao Deshmukh Hostel Maintenance Allowance",
            criteria: "For students from rural areas who stay in hostel/accommodation"
        },
        {
            type: "Fee Reimbursement (TFWS)",
            criteria: "Through CAP admission & CET rank, annual income < ₹8 lakh"
        }
    ];

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* HERO SECTION */}
            <HeroSection {...feesScholarshipHero} />

            <div className="max-w-6xl mx-auto px-4 md:px-8 mt-16">

                {/* 1. COURSE FEES STRUCTURE */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-3 mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#003366] flex items-center gap-2">
                            <span className="text-purple-600">🎓</span> Course Fees Structure (2025–26)
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="overflow-x-auto rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100"
                    >
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#3b82f6] text-white text-center">
                                    <th className="py-4 px-6 font-bold uppercase text-[12px] border-r border-white/20">Course</th>
                                    <th className="py-4 px-6 font-bold uppercase text-[12px] border-r border-white/20">Year</th>
                                    <th className="py-4 px-6 font-bold uppercase text-[12px] border-r border-white/20">Annual Tuition Fee (₹)</th>
                                    <th className="py-4 px-6 font-bold uppercase text-[12px] border-r border-white/20">Development Fee (₹)</th>
                                    <th className="py-4 px-6 font-bold uppercase text-[12px]">Total (Approx.) (₹)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-[14px] text-center">
                                {feeStructure.map((row, index) => (
                                    <tr key={index} className="hover:bg-blue-50/30 transition-colors">
                                        <td className="py-5 px-6 font-medium text-gray-700 border-r border-gray-100">{row.course}</td>
                                        <td className="py-5 px-6 font-medium text-gray-600 border-r border-gray-100">{row.year}</td>
                                        <td className="py-5 px-6 text-gray-700 border-r border-gray-100">{row.tuitionFee}</td>
                                        <td className="py-5 px-6 text-gray-700 border-r border-gray-100">{row.developmentFee}</td>
                                        <td className="py-5 px-6 font-bold text-[#003366]">{row.total}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                    <p className="mt-4 text-xs text-gray-500 italic">
                        <span className="font-bold">Note:</span> Final fees are subject to approval by the Fee Regulating Authority (FRA), Maharashtra. Students are advised to confirm at the time of admission.
                    </p>
                </div>

                {/* 2. SCHOLARSHIPS SECTION */}
                <div className="mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#003366] flex items-center gap-2 mb-4">
                            <span className="text-purple-600">🎓</span> Scholarships & Fee Concessions
                        </h2>
                        <p className="text-gray-600">
                            We support eligible students in availing Government of Maharashtra and Social Welfare Department scholarships:
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <FiCheckCircle className="text-green-500 text-xl" />
                            <h3 className="font-bold text-[#003366]">Government Scholarships Available:</h3>
                        </div>

                        <div className="overflow-hidden rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#3b82f6] text-white">
                                        <th className="py-4 px-6 font-bold uppercase text-[12px] border-r border-white/20 text-center w-1/2">Type of Scholarship</th>
                                        <th className="py-4 px-6 font-bold uppercase text-[12px] text-center">Eligibility Criteria</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-[14px]">
                                    {scholarships.map((sch, index) => (
                                        <tr key={index} className="hover:bg-blue-50/30 transition-colors">
                                            <td className="py-5 px-6 font-medium text-gray-700 border-r border-gray-100">{sch.type}</td>
                                            <td className="py-5 px-6 text-gray-600 font-medium">{sch.criteria}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>

                    {/* HELP BOX */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-blue-50/60 border border-blue-100 rounded-2xl p-6 md:p-8"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-full shadow-sm">
                                    <FiHelpCircle className="text-2xl text-pink-500" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-[#003366] mb-1">Need Help Applying?</h4>
                                    <p className="text-sm text-gray-600">
                                        Our Scholarship Support Cell guides students step-by-step in applying through:
                                    </p>
                                </div>
                            </div>
                            <div className="flex-shrink-0">
                                <a
                                    href="https://mahadbt.maharashtra.gov.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-[#001f3f] text-white px-6 py-3 rounded-md font-bold text-sm hover:bg-black transition-all shadow-md group"
                                >
                                    <span className="text-pink-400">🌐</span> mahadbt.maharashtra.gov.in
                                    <FiExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default FeesScholarship;
