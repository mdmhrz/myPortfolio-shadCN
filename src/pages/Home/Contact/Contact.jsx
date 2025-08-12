import React from "react";
import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaLinkedin,
    FaGithub,
    FaTwitter,
    FaPhoneAlt
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import CustomButton from "../../../components/ui/CustomButton";

const Contact = () => {
    return (
        <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black overflow-hidden">
            {/* Background shapes */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
            >
                <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-500 blur-3xl opacity-10 dark:opacity-20"></div>
                <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-purple-500 blur-3xl opacity-10 dark:opacity-20"></div>
                <div className="absolute top-1/2 right-1/4 w-32 h-32 rotate-45 bg-green-500 blur-3xl opacity-10 dark:opacity-20"></div>
            </motion.div>

            <div className="w-11/12 max-w-[1920px]  mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="heading">
                        <span className="gradient-text">Get In Touch</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? Feel free to reach out.
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    {/* Left side: Contact Info */}
                    <motion.div
                        initial={{ x: -60, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-gray-900 dark:text-gray-100"
                    >
                        <h2 className="text-4xl font-extrabold mb-8 tracking-tight">
                            Let's Build Your Business Together
                        </h2>
                        <p className="text-lg mb-12 text-gray-700 dark:text-gray-300 max-w-md">
                            I’m always excited to connect, collaborate, or discuss new projects.
                            Reach me through any of the channels below or send a message directly!
                        </p>

                        <div className="space-y-8 max-w-md">
                            {/* Address */}
                            <div className="flex items-center gap-5">
                                <div className="p-4 bg-indigo-600 dark:bg-indigo-500 rounded-xl text-white shadow-lg">
                                    <FaMapMarkerAlt size={28} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg md:text-xl md:mb-1">Address</h4>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Pahartali, Chattogram, Bangladesh
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-5">
                                <div className="p-4 bg-purple-600 dark:bg-purple-500 rounded-xl text-white shadow-lg">
                                    <FaPhoneAlt size={28} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg md:text-xl md:mb-1">Phone</h4>
                                    <a
                                        href="tel:+1234567890"
                                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                                    >
                                        +880 1824975616
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-5">
                                <div className="p-4 bg-pink-600 dark:bg-pink-500 rounded-xl text-white shadow-lg">
                                    <FaEnvelope size={28} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg md:text-xl md:mb-1">Email</h4>
                                    <a
                                        href="mailto:hello@reactdev.com"
                                        className="text-pink-600 dark:text-pink-400 hover:underline"
                                    >
                                        razufreelance@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Socials */}
                            <div className="flex space-x-6 mt-4">
                                <a
                                    href="#"
                                    aria-label="GitHub"
                                    className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                                >
                                    <FaGithub size={24} />
                                </a>
                                <a
                                    href="#"
                                    aria-label="LinkedIn"
                                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                                >
                                    <FaLinkedin size={24} />
                                </a>
                                <a
                                    href="#"
                                    aria-label="Twitter"
                                    className="text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 transition"
                                >
                                    <FaTwitter size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 dark:bg-gray-950/80 rounded-xl p-6 sm:p-8 shadow-sm border border-gray-200 dark:border-gray-700"
                    >
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                            Send a Message
                        </h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-black/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-black/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-black/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="What's this about?"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-black/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-700 to-blue-700 hover:from-purple-800 hover:to-blue-800 text-white font-medium rounded-lg transition-colors shadow-sm"
                            >
                                Send Message
                                <FiSend className="text-lg" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>



        </section>
    );
};

export default Contact;


