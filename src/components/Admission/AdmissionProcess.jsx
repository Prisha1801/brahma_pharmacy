import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiExternalLink, FiFileText, FiCheckSquare } from 'react-icons/fi';
import HeroSection from '../common/components/HeroSection';
import { admissionProcessHero } from '../common/data/heroData';

const AdmissionProcess = () => {
    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Hero Section */}
            <HeroSection {...admissionProcessHero} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-[#003366] mb-4"
                    >
                        Admission Process 2025–26
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-600 text-lg max-w-2xl mx-auto"
                    >
                        Explore our streamlined admission process and take the first step toward your future.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                    {/* First Card: CAP Process */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white border rounded-2xl shadow-lg p-8 md:p-10 flex flex-col items-center"
                    >
                        <div className="mb-6 flex justify-center">
                            <div className="p-4 bg-red-50 rounded-2xl">
                                <FiFileText className="text-5xl text-red-500" />
                            </div>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-[#003366] mb-8 text-center px-4">
                            Admission Brochure 2025–26
                        </h3>

                        <div className="text-center mb-8 space-y-4">
                            <p className="font-bold text-gray-800">
                                1. Centralized Admission Process (CAP) – Government Quota
                            </p>
                            <div className="text-sm space-y-1 text-gray-700">
                                <p>Conducted by the <span className="font-bold">State Common Entrance Test Cell, Maharashtra</span></p>
                                <div className="flex items-center justify-center gap-1 text-blue-600 font-medium">
                                    👉 <a href="https://cetcell.mahacet.org" target="_blank" rel="noopener noreferrer" className="hover:underline">https://cetcell.mahacet.org</a>
                                </div>
                            </div>
                        </div>

                        <div className="w-full space-y-4 mb-10 text-[15px] md:text-[16px] text-gray-700">
                            <p className="font-bold text-center">Steps:</p>
                            <ol className="list-decimal pl-6 space-y-3 font-medium">
                                <li><span className="font-bold text-black">Register online</span> through the CET Cell portal.</li>
                                <li><span className="font-bold text-black">Fill application form</span> and upload required documents.</li>
                                <li><span className="font-bold text-black">Choose BVIOP (College Code)</span> as your preferred option.</li>
                                <li>Participate in <span className="font-bold text-black">CAP rounds</span> as per CET schedule.</li>
                                <li>Confirm seat and report to the institute with documents and fees.</li>
                            </ol>
                        </div>

                        <div className="mt-auto">
                            <a
                                href="#"
                                download
                                className="flex items-center gap-2 bg-[#ea1f28] text-white px-8 py-3 rounded-lg font-bold shadow-md hover:bg-red-700 transition-colors"
                            >
                                <FiDownload /> Download Brochure
                            </a>
                        </div>
                    </motion.div>

                    {/* Second Card: Institute Level Admission */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white border rounded-2xl shadow-lg p-8 md:p-10 flex flex-col items-center"
                    >
                        <div className="mb-6 flex justify-center">
                            <div className="p-4 bg-blue-50 rounded-2xl">
                                <FiCheckSquare className="text-5xl text-[#003366]" />
                            </div>
                        </div>

                        <div className="text-center mb-8 px-4">
                            <h3 className="text-xl md:text-2xl font-bold text-[#003366] mb-2 uppercase text-[17px] tracking-tight">
                                2. Institute Level / Management Quota Admission
                            </h3>
                            <p className="text-sm text-gray-600 font-medium italic">
                                Limited seats are available at the institute level for eligible candidates.
                            </p>
                        </div>

                        <div className="w-full space-y-4 mb-10 text-[15px] md:text-[16px] text-gray-700">
                            <p className="font-bold text-center">Steps:</p>
                            <ol className="list-decimal pl-6 space-y-3 font-medium">
                                <li><span className="font-bold text-black">Visit the college</span> or contact the admission cell.</li>
                                <li><span className="font-bold text-black">Check eligibility</span> and seat availability.</li>
                                <li>Fill the <span className="font-bold text-black">BVIOP admission form</span>.</li>
                                <li>Submit <span className="font-bold text-black">original documents</span> for verification.</li>
                                <li>Pay fees to confirm admission.</li>
                            </ol>
                        </div>

                        <div className="mt-auto">
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSepv8WqOrxKvmutzHxIjsCY_ht955yheDahZMfhRm6KvnQdag/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-[#003366] text-white px-8 py-3 rounded-lg font-bold shadow-md hover:bg-blue-900 transition-colors"
                            >
                                <FiExternalLink /> Fill Online Form
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default AdmissionProcess;
