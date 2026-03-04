import React from "react";
import { motion } from "framer-motion";
import HeroSection from '../common/components/HeroSection';
import { generalSecretaryHero } from '../common/data/heroData';
import SecretaryImage from '/posters/secretary1.jpeg';

const GeneralSecretary = () => {
    return (
        <div className="bg-white pb-16">
            {/* HERO SECTION */}
            <HeroSection {...generalSecretaryHero} />

            <section className="py-16 px-4 md:px-8 lg:px-16 container mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2d2e2e] relative inline-block pb-4">
                        General Secretary's Desk
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#ea1f28]"></div>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-20">

                    {/* LEFT SIDE: Message Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-[60%]"
                    >
                        <div className="bg-[#f8f9fa] p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                            <div className="space-y-6 text-[#444] leading-relaxed">
                                <p className="text-lg font-medium">Dear Students,</p>

                                <p className="italic text-lg text-gray-600">
                                    "Education is the most powerful tool to transform society and shape a brighter future."
                                </p>

                                <div className="space-y-6 text-[16px] md:text-[17px]">
                                    <p>
                                        It is my privilege to address you through the platform of <span className="font-bold text-black">Brahma Valley Institute of Pharmacy</span>,
                                        a progressive institution under the banner of <span className="font-bold text-black">Nashik Gramin Shikshan Prasarak Mandal (NGSPM)</span>.
                                        Our goal has always been to provide <span className="font-bold text-black">accessible, quality, and value-based education</span> to aspiring students,
                                        especially from rural and semi-urban regions.
                                    </p>

                                    <p>
                                        In today’s competitive and rapidly evolving pharmaceutical landscape, there is a strong demand for professionals who are not only knowledgeable but also ethical, compassionate, and innovative.
                                    </p>
                                </div>

                                <div className="pt-6">
                                    <p className="text-[#ea1f28] font-bold text-lg italic tracking-wide">
                                        Mr. Gaurav R. Pangavhane (Patil)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE: Image and Profile */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-[40%] flex flex-col items-center text-center"
                    >
                        <div className="relative group mb-8">
                            <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-100 rounded-2xl blur opacity-25"></div>
                            <img
                                src={SecretaryImage}
                                alt="Mr. Gaurav R. Pangavhane (Patil)"
                                className="relative w-full max-w-[400px] h-auto object-cover rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-[#003366] tracking-tight">
                                Mr. Gaurav R. Pangavhane (Patil)
                            </h3>
                            <div className="flex flex-col items-center">
                                <span className="text-lg font-semibold text-gray-600 uppercase tracking-widest">
                                    General Secretary
                                </span>
                                <p className="text-gray-500 font-medium mt-1">
                                    NGSPM's Brahma Valley Education Campus
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>
        </div>
    );
};

export default GeneralSecretary;
