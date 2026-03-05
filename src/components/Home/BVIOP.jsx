import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AboutCollege from "../../assets/about_college.png";

const BVIOP = () => {
    return (
        <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2d2e2e] mb-4">
                        About BVIOP
                    </h2>
                    <div className="w-16 h-1 bg-[#ea1f28] mx-auto"></div>
                </div>

                {/* Content Container: Grid layout for side-by-side view */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-blue-100">
                            <img
                                src={AboutCollege}
                                alt="BVIOP Campus"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="space-y-6 text-[#444] leading-relaxed">
                            <p className="text-[17px]">
                                <span className="font-bold text-black">Welcome to Brahma Valley Institute of Pharmacy (BVIOP)</span> —
                                established in 2023 with the vision to offer world-class pharmacy education to students
                                from remote and rural backgrounds. Our institute stands as a symbol of academic excellence
                                and modern infrastructure within a serene and spiritually enriched environment.
                            </p>

                            <p className="text-[17px]">
                                Located at Anjaneri village (Tal. Trimbakeshwar, Dist. Nashik), the birthplace of Lord Hanuman
                                and near the sacred Trimbakeshwar Temple (one of the 12 Jyotirlingas of Lord Shiva), BVIOP
                                combines the purity of nature with cutting-edge education, making it a unique destination
                                for aspiring pharmacists.
                            </p>

                            <div className="pt-4">
                                <Link
                                    to="/vision-mission"
                                    className="inline-block bg-[#ea1f28] hover:bg-[#c91a22] text-white font-semibold py-3 px-10 rounded-lg shadow-md transition-all active:scale-95"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default BVIOP;