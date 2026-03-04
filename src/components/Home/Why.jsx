import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaBullseye, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Why = () => {
    const cards = [
        {
            title: 'Our Vision',
            icon: <FaEye className="text-[#FFC107] text-4xl mb-4" />,
            text: 'To become a center of excellence in pharmacy education and research, nurturing professionals who make a difference globally.',
        },
        {
            title: 'Our Mission',
            icon: <FaBullseye className="text-[#28A745] text-4xl mb-4" />,
            text: 'To equip students with the latest knowledge, practical skills, and ethical values, fostering leaders in healthcare and pharmaceutical sectors.',
        },
        {
            title: 'Our Values',
            icon: <FaHeart className="text-[#DC3545] text-4xl mb-4" />,
            text: 'Integrity, innovation, empathy, and academic excellence drive every decision we make for the holistic development of our students.',
        },
    ];

    return (
        <section className="relative w-full py-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/college.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/75"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 lg:px-20 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Why Choose <span className="text-[#FFC107]">BVIOP</span>
                    </h2>
                    <p className="text-gray-300 text-base md:text-lg mb-4 leading-relaxed">
                        At Brahma Valley Institute of Pharmacy, we nurture future pharmacists through a student-centric approach blending science, compassion, and innovation. Our programs are aligned with global healthcare needs and pharmaceutical advancements.
                    </p>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        From world-class laboratories to industry-integrated learning, BVIOP offers an environment where knowledge meets purpose. <Link to="/admission/admission-form" className="text-[#FFC107] font-bold hover:underline">Enquire Now!</Link>
                    </p>
                </motion.div>

                {/* Vision, Mission, Values Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-white/20 transition-all duration-300 group"
                        >
                            {card.icon}
                            <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                {card.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom Geometric Design/Divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-full h-[60px] fill-white"
                >
                    <path d="M1200 120L0 120 309.19 8.1 1200 120z"></path>
                </svg>
            </div>
        </section>
    );
};

export default Why;
