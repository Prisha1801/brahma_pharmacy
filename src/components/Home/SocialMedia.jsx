import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaHeart } from 'react-icons/fa';

const SocialMedia = () => {
    const images = [
        '/follow-us/i1.jpg',
        '/follow-us/i2.jpg',
        '/follow-us/i3.jpg',
        '/follow-us/i4.jpg',
        '/follow-us/i5.jpg',
    ];

    return (
        <section className="bg-white py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto text-center">

                {/* Header Section */}
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2d2e2e] mb-4">
                        Follow Us on Instagram
                    </h2>
                    <div className="flex justify-center">
                        <a
                            href="https://www.instagram.com/bviop_official/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#1b74e4] text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm hover:bg-[#165bb8] transition-colors"
                        >
                            <FaHeart className="text-white text-xs" />
                            @bviop_official
                        </a>
                    </div>
                </div>

                {/* Images Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
                    {images.map((src, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="relative aspect-square rounded-xl overflow-hidden shadow-md group"
                        >
                            <img
                                src={src}
                                alt={`Instagram post ${idx + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <FaInstagram className="text-white text-3xl" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Button */}
                <div className="flex justify-center">
                    <a
                        href="https://www.instagram.com/bviop_official/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-[#1b74e4] text-[#1b74e4] px-8 py-3 rounded-full font-semibold hover:bg-[#1b74e4] hover:text-white transition-all duration-300 group"
                    >
                        <FaInstagram className="text-xl transition-transform group-hover:scale-110" />
                        Follow on Instagram
                    </a>
                </div>

            </div>
        </section>
    );
};

export default SocialMedia;
