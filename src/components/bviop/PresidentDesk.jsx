import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from '../common/components/HeroSection';
import { presidentDeskHero } from '../common/data/heroData';
import PresidentImage from '/posters/president.png';

const PresidentDesk = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...presidentDeskHero} />

            <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2d2e2e] relative inline-block pb-4">
                            President Desk
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#ea1f28]"></div>
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">

                        {/* LEFT SIDE: Image and Profile */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-[40%] text-center"
                        >
                            <div className="relative inline-block mb-8">
                                <div className="absolute -inset-2 bg-[#003366]/5 rounded-2xl blur-lg"></div>
                                <img
                                    src={PresidentImage}
                                    alt="Mr. Rajaram D. Pangavhane (Patil)"
                                    className="relative w-full max-w-[450px] h-auto object-cover rounded-2xl shadow-2xl border-4 border-white"
                                />
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-2xl md:text-3xl font-extrabold text-[#003366] tracking-tight">
                                    Mr. Rajaram D. Pangavhane (Patil)
                                </h3>
                                <div className="flex flex-col items-center">
                                    <span className="text-lg font-bold text-[#ea1f28] uppercase tracking-wider">
                                        Founder President
                                    </span>
                                    <p className="text-gray-500 font-medium mt-1">
                                        Nashik Gramin Shikshan Prasarak Mandal
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT SIDE: Message Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-[60%]"
                        >
                            <div className="bg-[#fcfcfc] p-8 md:p-12 rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col justify-center h-full">
                                <div className="space-y-8 text-[#444] leading-relaxed">
                                    <p className="text-xl font-semibold text-gray-900">
                                        Dear Students,
                                    </p>

                                    <p className="italic text-lg md:text-xl text-gray-600 border-l-4 border-[#ea1f28] pl-6 py-2">
                                        "Education is not merely the accumulation of knowledge, but the formation of character, values, and vision."
                                    </p>

                                    <div className="space-y-6 text-[17px] md:text-[18px]">
                                        <p>
                                            It gives me immense pride and satisfaction to welcome you to the <span className="font-bold text-[#003366]">Brahma Valley Institute of Pharmacy</span>,
                                            a key initiative of <span className="font-bold text-black">Nashik Gramin Shikshan Prasarak Mandal</span>.
                                        </p>

                                        <p>
                                            Our mission is dedicated to bringing quality professional education to rural and semi-urban youth, nurturing their potential into professional excellence.
                                        </p>

                                        <p>
                                            At BVIOP, we aim to transform students into ethical, skilled, and responsible healthcare professionals who will lead the future of pharmacy.
                                        </p>
                                    </div>

                                    <div className="pt-6 border-t border-gray-100">
                                        <p className="text-[#ea1f28] font-bold text-xl italic tracking-wide">
                                            Mr. Rajaram D. Pangavhane (Patil)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default PresidentDesk;
