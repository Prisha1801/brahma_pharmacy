import React from "react";
import { motion } from "framer-motion";
import HeroSection from '../common/components/HeroSection';
import { principalHero } from '../common/data/heroData';
import PrincipalImage from '/posters/principal.png';

const Principal = () => {
    return (
        <div className="bg-white pb-16">
            {/* HERO SECTION */}
            <HeroSection {...principalHero} />

            <section className="py-16 px-4 md:px-8 lg:px-16 container mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2d2e2e] relative inline-block pb-4">
                        Principal Desk
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#ea1f28]"></div>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">

                    {/* LEFT SIDE: Message Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-[60%]"
                    >
                        <div className="bg-[#f8f9fa] p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 h-full">
                            <div className="space-y-6 text-[#444] leading-relaxed">
                                <p className="text-[14px] md:text-[16px] font-bold text-black uppercase tracking-wide">
                                    Meet the visionaries guiding Brahma Valley Pharmacy toward excellence
                                </p>

                                <p className="text-lg font-medium text-gray-800">Dear Students,</p>

                                <div className="space-y-6 text-[16px] md:text-[17px]">
                                    <p>
                                        It is a matter of pride for me that I serve for <span className="font-bold text-black">NGSPM’s Brahma Valley Institute Of Pharmacy</span>.
                                        I devote my heart and soul for neophytes entering in this profession as being principal of this esteemed institution.
                                        The college is initiating an employment oriented four years degree course in pharmacy i.e. B Pharm.
                                    </p>

                                    <p>
                                        We would like to see dissemination of that knowledge which will give strength and ability to the students to grow.
                                        It is my heart full desire to see these graduates of this institution will go around in the nation to abroad and presents them with pride as being trained professionals of this institution.
                                        With this hope I join with my faculty to exploit the potentials of the neophytes. I appeal to the parents and students to fully exploit our potential to endeavor you are future.
                                    </p>
                                </div>

                                <div className="pt-6">
                                    <p className="text-[#ea1f28] font-bold text-lg italic tracking-wide">
                                        Dr. Rohit P. Mali
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
                        <div className="relative group mb-8 w-full max-w-[380px]">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-gray-100 rounded-2xl blur opacity-25"></div>
                            <img
                                src={PrincipalImage}
                                alt="Dr. Rohit P. Mali"
                                className="relative w-full h-[320px] md:h-[380px] object-cover rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-[1.02] border-4 border-white"
                            />
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-[#003366] tracking-tight">
                                Dr. Rohit P. Mali
                            </h3>
                            <div className="flex flex-col items-center">
                                <span className="text-lg font-semibold text-gray-600">
                                    M. Pharm, PHD
                                </span>
                                <p className="text-gray-500 font-medium mt-1">
                                    Nashik Gramin Shikshan Prasarak Mandal.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>
        </div>
    );
};

export default Principal;
