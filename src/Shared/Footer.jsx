import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import {
    Github,
    Linkedin,
    Twitter,
    Mail,
    Code2,
    Lock,
    ArrowUpRight,
    Heart,
    MapPin, Calendar,
} from "lucide-react";
import CustomButton from "../components/ui/CustomButton";

const Footer = () => {
    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    const socialLinks = [
        {
            name: "GitHub",
            icon: <Github size={18} />,
            url: "https://github.com/mdmhrz",
            color: "hover:bg-gray-700"
        },
        {
            name: "LinkedIn",
            icon: <Linkedin size={18} />,
            url: "https://linkedin.com/in/mdmhrz",
            color: "hover:bg-blue-600"
        },
        {
            name: "Email",
            icon: <Mail size={18} />,
            url: "razufreelance@gmail.com",
            color: "hover:bg-red-500"
        }
    ];

    const footerLinks = [
        { name: "About", path: "/about", icon: <ArrowUpRight size={14} />, id: "about" },
        { name: "Skills", path: "/skills", icon: <ArrowUpRight size={14} />, id: "skills" },
        { name: "Projects", path: "/projects", icon: <ArrowUpRight size={14} />, id: "projects" },
        { name: "Contact", path: "/contact", icon: <ArrowUpRight size={14} />, id: "contact" },

    ];

    return (
        <footer className=" bg-gray-800 dark:bg-black border-t pt-10 pb-12 overflow-hidden">
            <div className="w-11/12 relative max-w-[1920px] mx-auto ">
                {/* Floating tech elements */}
                <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-blue-400"
                            style={{
                                top: `${Math.random() * 80 + 10}%`,
                                left: `${Math.random() * 80 + 10}%`
                            }}
                            animate={{
                                y: [0, -15, 0],
                                rotate: [0, i % 2 === 0 ? 10 : -10, 0],
                                opacity: [0.2, 0.5, 0.2]
                            }}
                            transition={{
                                duration: 12 + i * 2,
                                repeat: Infinity,
                                repeatType: "reverse",
                                delay: i * 0.3
                            }}
                        >
                            <Code2 size={20} />
                        </motion.div>
                    ))}
                </div>

                <div className="relative z-10">
                    {/* Main content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
                        {/* Brand info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="space-y-5"
                        >
                            <div className="flex items-center gap-3">
                                <motion.div
                                    whileHover={{ rotate: 15, scale: 1.1 }}
                                    className="p-2 bg-blue-600/20 rounded-lg"
                                >
                                    <Code2 className="text-blue-400" size={24} />
                                </motion.div>
                                <span className="text-xl font-bold text-white">RAZU</span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Crafting high-performance web applications with modern technologies and clean code.
                            </p>
                            <div className="flex gap-3">
                                {socialLinks.map((social, i) => (
                                    <motion.a
                                        key={i}
                                        whileHover={{ y: -3, scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-2.5 rounded-full bg-gray-800 text-white transition-all ${social.color}`}
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Navigation links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="md:justify-self-center "
                        >
                            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-800 inline-block">
                                Navigation
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.map((link, i) => (
                                    <motion.li
                                        onClick={() => scrollToSection(link.id)}
                                        key={i}
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <Link
                                            // to={link.path}
                                            className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                                        >
                                            <span className="group-hover:translate-x-1 transition-transform">
                                                {link.icon}
                                            </span>
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Contact info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-800 inline-block">
                                Contact
                            </h3>
                            <address className="not-italic text-gray-400 space-y-4">
                                <div className="flex items-start gap-3">
                                    <Mail className="text-blue-400 mt-0.5 flex-shrink-0" size={18} />
                                    <a
                                        href="mailto:your@email.com"
                                        className="hover:text-blue-400 transition-colors"
                                    >
                                        mdmobarakhossainrazu@gmail.com
                                    </a>
                                </div>
                                <p className="flex items-start gap-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-blue-400 mt-0.5 flex-shrink-0"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    <span>Chattogram, Bangladesh</span>
                                </p>
                                <p className="flex items-start gap-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-blue-400 mt-0.5 flex-shrink-0"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                    <span>Available for freelance work</span>
                                </p>
                            </address>
                        </motion.div>



                    </div>

                    {/* Copyright */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="pt-8 border-t border-gray-600 dark:border-gray-800 flex items-center justify-center  text-center"
                    >
                        <p className="text-gray-500 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} Mobarak Hossain Razu. All rights reserved.
                        </p>

                    </motion.div>
                </div>

                {/* Back to top button */}
                <motion.button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                    className="fixed bottom-6 right-6 p-3 bg-gradient-to-t from-purple-700 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-full shadow-lg z-50 flex items-center justify-center"
                    aria-label="Back to top"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </motion.button>
            </div>
        </footer >
    );
};

export default Footer;