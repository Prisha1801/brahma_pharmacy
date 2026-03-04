import React from "react";
import { motion } from "framer-motion";
import HeroSection from '../common/components/HeroSection';
import { vicePresidentHero } from '../common/data/heroData';
import VicePresidentImage from '/posters/vice-president.jpeg';

const VicePresident = () => {
    return (
        <div className="bg-white pb-16">
            {/* HERO SECTION */}
            <HeroSection {...vicePresidentHero} />

            <section className="py-16 px-4 md:px-8 lg:px-16 container mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2d2e2e] relative inline-block pb-4">
                        From the Vice President's Desk
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
                                    “A good education not only teaches knowledge—It ignites curiosity, builds character, and prepares students to lead with purpose.”
                                </p>

                                <div className="space-y-6 text-[16px] md:text-[17px]">
                                    <p>
                                        It is a great honor and responsibility to serve as the <span className="font-bold text-black">Vice President of Brahma Valley Institute of Pharmacy</span>,
                                        a growing institution dedicated to shaping the future of pharmacy education under the vision of <span className="font-bold text-black">Nashik Gramin Shikshan Prasarak Mandal (NGSPM)</span>.
                                    </p>

                                    <p>
                                        In an era where healthcare innovation is advancing rapidly, the role of pharmacists has become even more critical.
                                        At BVIOP, we are committed to delivering a <span className="font-bold text-black">student-focused, research-oriented, and industry-aligned education</span> that empowers our graduates to thrive in a dynamic pharmaceutical world.
                                    </p>
                                </div>

                                <div className="pt-6">
                                    <p className="text-[#ea1f28] font-bold text-lg italic tracking-wide">
                                        Dr. Dhanisha G Pangavhane(Patil)
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
                                src={VicePresidentImage}
                                alt="Dr. Dhanisha G Pangavhane"
                                className="relative 
               w-full 
               max-w-[320px] md:max-w-[360px] lg:max-w-[380px]
               h-[320px] md:h-[360px] lg:h-[420px]
               object-cover 
               rounded-2xl 
               shadow-xl 
               transition-transform duration-500 
               group-hover:scale-[1.02]"
                            />
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-[#003366] tracking-tight">
                                Dr. Dhanisha G Pangavhane
                            </h3>
                            <div className="flex flex-col items-center">
                                <span className="text-lg font-semibold text-gray-600 uppercase tracking-widest">
                                    Vice President
                                </span>
                                <p className="text-gray-500 font-medium mt-1 text-sm">
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

export default VicePresident;
