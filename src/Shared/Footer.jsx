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
    ArrowUpRight
} from "lucide-react";

const Footer = () => {
    const socialLinks = [
        {
            name: "GitHub",
            icon: <Github size={20} />,
            url: "https://github.com/yourusername",
            color: "hover:bg-gray-700"
        },
        {
            name: "LinkedIn",
            icon: <Linkedin size={20} />,
            url: "https://linkedin.com/in/yourprofile",
            color: "hover:bg-blue-600"
        },
        {
            name: "Twitter",
            icon: <Twitter size={20} />,
            url: "https://twitter.com/yourhandle",
            color: "hover:bg-blue-400"
        },
        {
            name: "Email",
            icon: <Mail size={20} />,
            url: "mailto:your@email.com",
            color: "hover:bg-red-500"
        }
    ];

    const footerLinks = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 border-t border-gray-800 pt-16 pb-8 overflow-hidden">
            {/* Floating tech icons */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-blue-400"
                        style={{
                            top: `${Math.random() * 80 + 10}%`,
                            left: `${Math.random() * 80 + 10}%`
                        }}
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, i % 2 === 0 ? 15 : -15, 0],
                            opacity: [0.3, 0.7, 0.3]
                        }}
                        transition={{
                            duration: 15 + i * 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: i * 0.5
                        }}
                    >
                        <Code2 size={24} />
                    </motion.div>
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <div className="flex items-center gap-2">
                            <Code2 className="text-blue-400" size={24} />
                            <span className="text-xl font-bold text-white">Razu.dev</span>
                        </div>
                        <p className="text-gray-400">
                            Crafting modern web applications with the MERN stack and beyond.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, i) => (
                                <motion.a
                                    key={i}
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-2 rounded-full bg-gray-800 text-white transition-colors ${social.color}`}
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {footerLinks.map((link, i) => (
                                <motion.li
                                    key={i}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1"
                                    >
                                        <ArrowUpRight size={14} />
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Admin section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-semibold text-white mb-4">Admin</h3>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block"
                        >
                            <Link
                                to="/auth/admin-login"
                                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white transition-colors"
                            >
                                <Lock size={18} />
                                Admin Login
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Contact info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
                        <address className="not-italic text-gray-400 space-y-2">
                            <p>Dhaka, Bangladesh</p>
                            <a
                                href="mailto:your@email.com"
                                className="hover:text-blue-400 transition-colors"
                            >
                                your@email.com
                            </a>
                            <p>Available for freelance work</p>
                        </address>
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm"
                >
                    <p>
                        © {new Date().getFullYear()} Mobarak Hossain Razu. All rights reserved.
                    </p>
                    <p className="mt-1">
                        Built with React, Tailwind CSS, and Framer Motion
                    </p>
                </motion.div>
            </div>

            {/* Back to top button */}
            <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-6 right-6 p-3 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg z-50"
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
        </footer>
    );
};

export default Footer;