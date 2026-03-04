import React from "react";
import { motion } from "framer-motion";
import { FiList, FiFileText, FiInfo } from "react-icons/fi";
import HeroSection from "../common/components/HeroSection";
import { requiredDocumentHero } from "../common/data/heroData";

const RequiredDocument = () => {
    const documents = [
        { srNo: 1, name: "SSC (10th) and HSC (12th) Marksheets" },
        { srNo: 2, name: "D. Pharmacy Marksheets (for lateral entry)" },
        { srNo: 3, name: "MHT-CET/NEET Score Card" },
        { srNo: 4, name: "School/College Leaving Certificate" },
        { srNo: 5, name: "12th Passing Certificate" },
        { srNo: 6, name: "Domicile/Nationality Certificate" },
        { srNo: 7, name: "Gap Certificate (if applicable)" },
        { srNo: 8, name: "Passport-size Photographs" },
        { srNo: 9, name: "Aadhaar Card Copy" },
        { srNo: 10, name: "EWS" },
        { srNo: 11, name: "TFWS" },
    ];

    return (
        <div className="bg-white min-h-screen pb-16">
            {/* HERO SECTION */}
            <HeroSection {...requiredDocumentHero} />

            <div className="py-16 px-4 md:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Header Title with Icon */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-8 border-b pb-4"
                    >
                        <FiList className="text-2xl text-[#003366]" />
                        <h2 className="text-2xl md:text-3xl font-bold text-[#003366] tracking-tight">
                            List of Required Documents
                        </h2>
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
                                    <th className="py-4 px-6 font-semibold uppercase text-[13px] border-r border-white/20 text-center w-24">
                                        SR. NO
                                    </th>
                                    <th className="py-4 px-6 font-semibold uppercase text-[13px]">
                                        DOCUMENT NAME
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 uppercase text-[14px]">
                                {documents.map((doc, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-blue-50/40 transition-colors"
                                    >
                                        <td className="py-5 px-6 text-[#555] text-center border-r border-gray-100 font-medium">
                                            {doc.srNo}
                                        </td>
                                        <td className="py-5 px-6 text-[#2d2e2e] font-medium flex items-center gap-3">
                                            <FiFileText className="text-blue-500" size={18} />
                                            {doc.name}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>

                    {/* Footer Note */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mt-8 flex items-center gap-2 text-gray-500 text-sm italic"
                    >
                        <FiInfo className="text-blue-500" />
                        <p>Ensure all documents are original with photocopies at the time of admission.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default RequiredDocument;
