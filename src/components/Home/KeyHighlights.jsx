import React from 'react';
import { motion } from 'framer-motion';

const KeyHighlights = () => {
    const highlights = [
        { type: 'image', src: '/key-highlights/h1.jpg', alt: 'Campus Building' },
        { type: 'text', title: 'Experienced Faculty' },
        { type: 'image', src: '/key-highlights/h2.jpg', alt: 'Library' },
        { type: 'text', title: 'State-of-the-Art Laboratories' },
        { type: 'text', title: 'Placement Assistance' },
        { type: 'image', src: '/key-highlights/h3.jpg', alt: 'Campus View' },
        { type: 'text', title: 'Focus on Research & Development' },
        { type: 'image', src: '/key-highlights/h4.jpg', alt: 'Student Group' },
    ];

    return (
        <section className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
                {highlights.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="aspect-[4/3] sm:aspect-square lg:aspect-auto lg:h-[300px] overflow-hidden group"
                    >
                        {item.type === 'image' ? (
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        ) : (
                            <div className="w-full h-full bg-[#003067] flex items-center justify-center p-6 text-center">
                                <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold tracking-wide">
                                    {item.title}
                                </h3>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default KeyHighlights;
