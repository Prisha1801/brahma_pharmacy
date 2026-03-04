import React from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import HeroSection from "../common/components/HeroSection";
import { admissionFormHero } from "../common/data/heroData";

const AdmissionForm = () => {

    const inputClass =
        "w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all bg-white shadow-sm";

    const selectClass =
        "w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all bg-white shadow-sm cursor-pointer appearance-none";

    return (
        <div className="bg-gray-100 min-h-screen pb-20">

            {/* HERO */}
            <HeroSection {...admissionFormHero} />

            {/* FORM SECTION */}
            <div className="max-w-6xl mx-auto px-6 lg:px-8 mt-16">
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* LEFT FORM CARD */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 bg-white rounded-xl shadow-md p-8"
                    >
                        <h2 className="text-xl font-semibold text-blue-900 mb-6 flex items-center gap-2">
                            <FiUser /> Application Form 2025–26
                        </h2>

                        {/* Name */}
                        <div className="mb-5">
                            <label className="block text-sm font-medium mb-1">
                                Name of Student <span className="text-red-500">*</span>
                            </label>
                            <input type="text" placeholder="Enter full name" className={inputClass} />
                        </div>

                        {/* Email & Mobile */}
                        <div className="grid md:grid-cols-2 gap-6 mb-5">

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <div className="flex">
                                    <span className="bg-blue-900 text-white px-3 flex items-center rounded-l-md">
                                        <FiMail size={16} />
                                    </span>
                                    <input
                                        type="email"
                                        placeholder="example@mail.com"
                                        className="flex-1 border border-gray-300 rounded-r-md px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Mobile Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="+91 9987654321"
                                    className={inputClass}
                                />
                                <p className="text-xs text-gray-500 mt-1">
                                    Include your country code and number.
                                </p>
                            </div>

                        </div>

                        {/* Category & Gender */}
                        <div className="grid md:grid-cols-2 gap-6 mb-5">

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Category <span className="text-red-500">*</span>
                                </label>
                                <select className={selectClass}>
                                    <option>Select category</option>
                                    <option>Open</option>
                                    <option>OBC</option>
                                    <option>SC</option>
                                    <option>ST</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Gender <span className="text-red-500">*</span>
                                </label>
                                <div className="flex items-center gap-6 text-sm">
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="gender" />
                                        Male
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="gender" />
                                        Female
                                    </label>
                                </div>
                            </div>

                        </div>

                        {/* Marks */}
                        <div className="grid md:grid-cols-2 gap-6 mb-5">
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    12th Marks (%) <span className="text-red-500">*</span>
                                </label>
                                <input type="text" placeholder="e.g., 75" className={inputClass} />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    MHT-CET/NEET Marks <span className="text-red-500">*</span>
                                </label>
                                <input type="text" placeholder="Enter marks" className={inputClass} />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-1">
                                Message (Optional)
                            </label>
                            <textarea
                                rows="4"
                                placeholder="Write your message or queries here"
                                className={inputClass}
                            />
                        </div>

                        {/* Submit */}
                        <button className="w-full bg-red-600 hover:bg-red-700 transition-all text-white py-3 rounded-md font-semibold flex items-center justify-center gap-2">
                            <FiSend />
                            Submit Application
                        </button>
                    </motion.div>

                    {/* RIGHT CONTACT CARD */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-xl shadow-md p-8 h-fit"
                    >
                        <h3 className="text-lg font-semibold text-blue-900 mb-6 flex items-center gap-2">
                            <FiUser /> Contact Details
                        </h3>

                        <div className="space-y-6 text-sm text-gray-700">

                            <div className="flex gap-3">
                                <FiMapPin className="text-blue-600 mt-1" />
                                <p>
                                    Brahma Valley Educational Campus, Anjaneri,
                                    Trimbak Road, Nashik-422213, Maharashtra, India.
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <HiOutlineOfficeBuilding className="text-blue-600 mt-1" />
                                <p>
                                    Head Office: Palika Bazar Complex, Near Railway Booking Office,
                                    Sharanpur-Trimbak Link Road, Nashik-422002
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <FiPhone className="text-blue-600 mt-1" />
                                <p>8830602363 / 02594299247</p>
                            </div>

                            <div className="flex gap-3">
                                <FiMail className="text-blue-600 mt-1" />
                                <p className="text-blue-600 font-medium">
                                    principalbviop@gmail.com
                                </p>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>

        </div>
    );
};

export default AdmissionForm;