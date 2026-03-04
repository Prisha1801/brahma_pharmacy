import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import HeroSection from '../components/common/components/HeroSection';
import { contactHero } from '../components/common/data/heroData';

const Contact = () => {
    const contentRef = useRef(null);
    const isInView = useInView(contentRef, { once: true, margin: "-100px" });

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Message sent successfully!');
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <HeroSection {...contactHero} />

            {/* College Name Header */}
            <div className="max-w-4xl mx-auto px-6 pt-10 pb-2 text-center">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
                    Nashik Gramin Shikshan Parashar Mandals College Of Pharmacy
                </h1>
                <p className="text-gray-500 text-sm">
                    Ajaniari, Tirnibak Road, NH-25M, Nashik, Maharashtra 422213
                </p>
                <p className="text-gray-400 text-xs mt-0.5">Tel: (22) 0</p>
            </div>

            {/* Google Map */}
            <div className="max-w-4xl mx-auto px-6 py-6">
                <h3 className="text-base font-semibold mb-3 text-gray-800 text-center">Our Location</h3>
                <div className="w-full h-60 rounded-xl shadow-md overflow-hidden border border-gray-200">
                    <iframe
                        title="Brahma Valley Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.3812704544357!2d73.5776609!3d19.9504618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb07ca717f83%3A0x6e0cfd86470d8815!2sNashik%20Gramin%20Shikshan%20Prasarak%20Mandals%20College%20Of%20Pharmacy!5e0!3m2!1sen!2sin!4v1772617646035!5m2!1sen!2sin"
                        className="w-full h-full border-0"
                        allowFullScreen=""
                        loading="lazy"
                    />
                </div>
            </div>

            {/* Get in Touch */}
            <div className="max-w-6xl mx-auto px-6 pb-16">

                {/* Section Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-[#003366] mb-3">Get in Touch</h1>
                    <p className="max-w-xl mx-auto text-gray-500 text-sm leading-relaxed">
                        Have questions about admissions, programs, or campus life? Send us a message or connect with us directly.
                        Your details are secure — no spam, guaranteed!
                    </p>
                </div>

                {/* Cards Grid */}
                <div ref={contentRef} className="grid lg:grid-cols-12 gap-6 items-stretch">

                    {/* Left — Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-4 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between"
                    >
                        <div>
                            <h2 className="text-xl font-bold text-[#003366] mb-6">Contact Information</h2>

                            <div className="space-y-5">
                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 text-[#ea1f28] flex-shrink-0"><FaMapMarkerAlt size={16} /></div>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Brahma Valley Institute of Pharmacy, Brahma Valley Educational Campus,
                                        Trimbakeshwar Road, Anjaneri Hills, Tal. Trimbakeshwar, Dist. Nashik — 422213
                                        Maharashtra, India
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 text-[#ea1f28] flex-shrink-0"><FaMapMarkerAlt size={16} /></div>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Brahma Valley Educational Campus, Anjaneri, Trimbak Road,
                                        Nashik-422213, Maharashtra, India.
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="text-[#ea1f28] flex-shrink-0"><FaPhoneAlt size={15} /></div>
                                    <p className="text-gray-600 text-sm">8830602363 &nbsp; 02594299247</p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 text-[#ea1f28] flex-shrink-0"><FaEnvelope size={15} /></div>
                                    <div className="text-sm space-y-0.5">
                                        <a href="mailto:principalbviop@gmail.com" className="text-[#003366] hover:underline block">principalbviop@gmail.com</a>
                                        <a href="mailto:officebviop@gmail.com" className="text-[#003366] hover:underline block">officebviop@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-sm font-bold text-[#003366] mb-3">Connect With Us</h3>
                            <div className="flex gap-3">
                                {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, idx) => (
                                    <a
                                        key={idx}
                                        href="#"
                                        className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#003366] hover:text-white transition-all"
                                    >
                                        <Icon size={14} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — Message Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8"
                    >
                        <h2 className="text-xl font-bold text-[#003366] mb-6">Send Us a Message</h2>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-gray-700">First Name <span className="text-red-500">*</span></label>
                                    <input
                                        type="text" name="firstName" placeholder="Enter first name" required
                                        className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-100 focus:border-[#003366] outline-none transition-all"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-gray-700">Last Name <span className="text-red-500">*</span></label>
                                    <input
                                        type="text" name="lastName" placeholder="Enter last name" required
                                        className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-100 focus:border-[#003366] outline-none transition-all"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-gray-700">Email Address <span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                            <FaEnvelope size={12} />
                                        </div>
                                        <input
                                            type="email" name="email" placeholder="example@mail.com" required
                                            className="w-full pl-8 pr-3 py-2.5 text-sm rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-100 focus:border-[#003366] outline-none transition-all"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-gray-700">Phone Number <span className="text-red-500">*</span></label>
                                    <div className="flex">
                                        <select className="px-2 py-2.5 rounded-l-lg border border-r-0 border-gray-200 bg-gray-50 text-xs text-gray-600 outline-none">
                                            <option>+91 (IN)</option>
                                        </select>
                                        <input
                                            type="tel" name="phone" placeholder="9987654321" required
                                            className="w-full px-3 py-2.5 text-sm rounded-r-lg border border-gray-200 focus:ring-2 focus:ring-blue-100 focus:border-[#003366] outline-none transition-all"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <p className="text-[10px] text-gray-400">Include your country code and number.</p>
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-gray-700">Comments / Questions</label>
                                <textarea
                                    name="message" rows="5" placeholder="Write your message or queries here"
                                    className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-100 focus:border-[#003366] outline-none transition-all resize-none"
                                    onChange={handleChange}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#ea1f28] hover:bg-red-700 text-white font-bold py-3 rounded-xl shadow-md shadow-red-100 transition-all flex items-center justify-center gap-2 group text-sm"
                            >
                                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Contact;