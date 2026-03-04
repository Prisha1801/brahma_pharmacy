import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const quickLinksCol1 = [
    { label: "Home", to: "/" },
    { label: "BVIOP", to: "/board-members" },
    { label: "DTE Code", to: "/" },
    { label: "Event Gallery", to: "/gallery" },
    { label: "Admission", to: "/admission/apply-now" },
    { label: "Academics", to: "/academics/PO-PEO-PSO-CO" },
];

const quickLinksCol2 = [
    { label: "Contact", to: "/contact" },
    { label: "Rule Regulation", to: "/student-corner/rules-regulations" },
    { label: "Women Cmmeette", to: "/committee/women-committee" },
    { label: "Terms & Condition", to: "/" },
    { label: "Privacy & Policy", to: "/" },
];

const Footer = () => {
    return (
        <footer className="bg-[#1e1e1e] text-white pt-14 pb-6">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* About Us */}
                    <div>
                        <h3 className="text-base font-bold uppercase tracking-widest mb-5">About Us</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Brahma Valley Institute of Pharmacy (BVIOP), established in 2023, is committed to delivering
                            premier pharmacy education with world-class infrastructure to students in remote regions.
                        </p>
                        <div className="flex gap-4">
                            {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links — two sub-columns */}
                    <div>
                        <h3 className="text-base font-bold uppercase tracking-widest mb-5">Quick Links</h3>
                        <div className="grid grid-cols-2 gap-x-4">
                            <ul className="space-y-3">
                                {quickLinksCol1.map((link) => (
                                    <li key={link.label} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200">
                                        <FaChevronRight size={10} className="text-yellow-400 flex-shrink-0" />
                                        <Link to={link.to}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-3">
                                {quickLinksCol2.map((link) => (
                                    <li key={link.label} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200">
                                        <FaChevronRight size={10} className="text-yellow-400 flex-shrink-0" />
                                        <Link to={link.to}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-base font-bold uppercase tracking-widest mb-5">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-gray-400">
                                <FaMapMarkerAlt size={15} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                                <span>Brahma Valley Campus, Anjaneri, Trimbak Road, Nashik-422213, Maharashtra</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-400">
                                <FaPhone size={14} className="text-yellow-400 flex-shrink-0" />
                                <span>8830602363 / 02594 299247</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-400">
                                <FaEnvelope size={14} className="text-yellow-400 flex-shrink-0" />
                                <a href="mailto:principalbviop@gmail.com" className="hover:text-white transition-colors duration-200">
                                    principalbviop@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-12 pt-6 text-center">
                    <p className="text-sm text-gray-400">
                        © 2025 <span className="font-bold text-white">Brahma Valley Institute of Pharmacy</span>. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;