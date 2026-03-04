import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../common/components/HeroSection';
import { eligibilityHero } from '../common/data/heroData';

const EligibilityCriteria = () => {
    return (
        <div className="bg-white min-h-screen pb-16">
            {/* Hero Section */}
            <HeroSection {...eligibilityHero} />

            <div className="max-w-4xl mx-auto px-4 md:px-8 mt-16">
                {/* Header Section removed as it's now in the Hero */}


                {/* Main Content Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white border-l-4 border-blue-500 rounded-xl shadow-xl p-8 md:p-12 mb-12"
                >
                    {/* Top Heading */}
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-xl font-bold text-gray-800 mb-1">
                            <span className="text-purple-600">🎓</span>
                            <h2>Eligibility Criteria for Admission</h2>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Brahma Valley Institute of Pharmacy</h3>
                        <p className="text-gray-600 font-medium">(Approved by PCI | Affiliated to DBATU, Lonere)</p>
                    </div>

                    {/* Section 1 */}
                    <div className="mb-10">
                        <div className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-4">
                            <span className="text-red-400">📌</span>
                            <h4>1. First Year B. Pharmacy (4 Years – 8 Semesters)</h4>
                        </div>
                        <div className="pl-7">
                            <h5 className="font-bold text-gray-900 mb-2">Eligibility:</h5>
                            <ul className="list-disc space-y-2 text-gray-700 ml-4">
                                <li>The candidate should be an <span className="font-bold">Indian National</span>.</li>
                                <li>
                                    Must have passed <span className="font-bold">HSC (Class 12) or its equivalent examination</span> with:
                                    <ul className="list-circle ml-6 mt-1 space-y-1">
                                        <li><span className="font-bold">Physics and Chemistry</span> as compulsory subjects</li>
                                        <li><span className="font-bold">Mathematics or Biology</span> as an additional subject</li>
                                    </ul>
                                </li>
                                <li>Minimum <span className="font-bold">45% marks (40% for reserved categories)</span> in the above subjects taken together.</li>
                                <li>
                                    Must have obtained a <span className="font-bold">non-zero score in MHT-CET / NEET / equivalent entrance exam</span> (as per DTE, Maharashtra norms).
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="mb-10">
                        <div className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-4">
                            <span className="text-red-400">📌</span>
                            <h4>2. Direct Second Year B. Pharmacy (Lateral Entry – 3 Years)</h4>
                        </div>
                        <div className="pl-7">
                            <h5 className="font-bold text-gray-900 mb-2">Eligibility:</h5>
                            <ul className="list-disc space-y-2 text-gray-700 ml-4">
                                <li>The candidate must have passed a <span className="font-bold">Diploma in Pharmacy (D. Pharm)</span> from an institute approved by <span className="font-bold">PCI</span>.</li>
                                <li>Must have secured <span className="font-bold">minimum 45% marks (40% for reserved categories)</span> in aggregate.</li>
                                <li>Should have completed all course requirements as prescribed by the State Board of Technical Education (MSBTE or equivalent).</li>
                            </ul>
                        </div>
                    </div>

                    {/* Conduct Info */}
                    <div className="pl-7 border-t pt-8 mt-8 border-gray-100">
                        <div className="mb-4">
                            <h5 className="font-bold text-gray-900 mb-2">Admissions are conducted through:</h5>
                            <ul className="list-disc space-y-2 text-gray-700 ml-4">
                                <li>
                                    <span className="font-bold text-black">Centralized Admission Process (CAP)</span> by the <span className="font-bold text-black">State Common Entrance Test Cell, Government of Maharashtra</span>
                                </li>
                                <li>
                                    <span className="font-bold text-black">Institute Level / Management Quota Seats</span> (as per state guidelines)
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Apply Button */}
                <div className="flex justify-center">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to="/admission/apply-now"
                            className="bg-[#003366] text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-[#002244] transition-all duration-300"
                        >
                            Apply for B.Pharm
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default EligibilityCriteria;
