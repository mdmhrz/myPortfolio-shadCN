import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import {
    // MERN Core
    FileJson, // MongoDB
    Code2, // Express
    Atom, // React
    Cpu, // Node

    // Related Tools
    GitBranch, // Git
    Terminal, // CLI

    // UI/UX
    Palette, // Styling
    LayoutDashboard, // Components

    // Profile
    MapPin,
    CircleDot,
    CalendarCheck,
    Linkedin,
    Github,
    Mail,
    Twitter,
    Facebook
} from "lucide-react";
import { MailIcon } from "lucide-react";
import { LinkedinIcon } from "lucide-react";
import { GithubIcon } from "lucide-react";

const MERNStackIcons = [
    {
        icon: <FileJson size={48} />, color: "text-green-400", name: "MongoDB",
        animation: { y: [0, -25, 0], rotate: [0, 10, -10, 0], scale: [1, 1.15, 1] }
    },
    {
        icon: <Code2 size={48} />, color: "text-gray-400", name: "Express",
        animation: { y: [0, 20, -20, 0], rotate: [0, -15, 15, 0], scale: [1, 1.1, 1] }
    },
    {
        icon: <Atom size={48} />, color: "text-blue-400", name: "React",
        animation: { y: [0, -15, 15, 0], rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }
    },
    {
        icon: <Cpu size={48} />, color: "text-green-500", name: "Node.js",
        animation: { y: [0, 25, -25, 0], rotate: [0, -25, 25, 0], scale: [1, 1.15, 1] }
    },
    {
        icon: <GitBranch size={48} />, color: "text-orange-400", name: "Git",
        animation: { y: [0, -30, 30, 0], rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }
    },
    {
        icon: <Terminal size={48} />, color: "text-white", name: "CLI",
        animation: { y: [0, 15, -15, 0], rotate: [0, -10, 10, 0], scale: [1, 1.25, 1] }
    },
    {
        icon: <Palette size={48} />, color: "text-purple-400", name: "Tailwind",
        animation: { y: [0, -20, 20, 0], rotate: [0, 25, -25, 0], scale: [1, 1.15, 1] }
    },
    {
        icon: <LayoutDashboard size={48} />, color: "text-yellow-400", name: "Components",
        animation: { y: [0, 30, -30, 0], rotate: [0, -20, 20, 0], scale: [1, 1.2, 1] }
    }
];

const socialLinks = [
    { icon: <Linkedin size={20} />, name: "LinkedIn", url: "https://linkedin.com/in/yourprofile", color: "bg-blue-600 hover:bg-blue-700" },
    { icon: <Github size={20} />, name: "GitHub", url: "https://github.com/yourprofile", color: "bg-gray-800 hover:bg-gray-700" },
    { icon: <Twitter size={20} />, name: "Twitter", url: "https://twitter.com/yourprofile", color: "bg-blue-400 hover:bg-blue-500" },
    { icon: <Mail size={20} />, name: "Email", url: "mailto:your@email.com", color: "bg-red-500 hover:bg-red-600" }
];

const Banner = () => {
    return (
        <section className="relative flex items-center justify-center w-full min-h-[calc(100vh-61px)] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
            {/* Animated MERN stack icons with unique animations */}
            <div className="absolute inset-0 overflow-hidden z-0">
                {MERNStackIcons.map((tech, index) => (
                    <motion.div
                        key={index}
                        className={`absolute ${tech.color} opacity-10`}
                        style={{
                            top: `${Math.random() * 80 + 10}%`,
                            left: `${Math.random() * 80 + 10}%`
                        }}
                        animate={tech.animation}
                        transition={{
                            duration: 12 + index * 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: index * 0.7
                        }}
                    >
                        {tech.icon}
                    </motion.div>
                ))}
            </div>

            {/* Floating tech labels with different animation */}
            <div className="absolute inset-0 overflow-hidden z-0">
                {MERNStackIcons.map((tech, index) => (
                    <motion.div
                        key={`label-${index}`}
                        className={`absolute text-xs font-mono ${tech.color} opacity-70`}
                        style={{
                            top: `${Math.random() * 70 + 15}%`,
                            left: `${Math.random() * 70 + 15}%`
                        }}
                        animate={{
                            y: [0, -15, 15, 0],
                            opacity: [0.4, 0.8, 0.4],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            duration: 18 + index * 4,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: index * 0.9
                        }}
                    >
                        {tech.name}
                    </motion.div>
                ))}
            </div>

            {/* Content container */}
            <div className="w-10/12 mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-center gap-12 py-20 relative z-10">
                {/* Left side - Text content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-200 mb-6"> Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Mobarak Hossain
                    </span>
                    </h1>

                    <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-200 mb-8 h-12">
                        <TypeAnimation
                            sequence={[
                                'MERN Stack Specialist',
                                2000,
                                'MongoDB Expert',
                                2000,
                                'Express.js Developer',
                                2000,
                                'React.js Professional',
                                2000,
                                'Node.js Engineer',
                                2000
                            ]}
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>

                    <p className="text-lg text-gray-300 mb-10 max-w-lg">
                        I architect and build full-stack JavaScript applications using the MERN stack.
                        Specializing in creating scalable, performant web solutions with modern tools.
                    </p>

                    {/* Tech stack indicator */}
                    <div className="flex items-center gap-3 mb-8">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-sm text-gray-400 font-mono">
                            Currently working with: MongoDB, Express, React 18, Node.js 20
                        </span>
                    </div>

                    {/* Contact CTA */}
                    <div className="flex flex-wrap gap-4 mb-6">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-white font-semibold shadow-lg"
                        >
                            Hire Me
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-white font-semibold shadow-lg border border-gray-700"
                        >
                            View Projects
                        </motion.a>
                    </div>

                    {/* Professional social links */}
                    {/* Professional Links */}
                    <div className="flex items-center gap-5 text-gray-400">
                        <a href="mailto:mobarak.dev@gmail.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
                            <MailIcon size={22} />
                        </a>
                        <a href="https://linkedin.com/in/mobarak-hossain" target="_blank" rel="noreferrer" className="hover:text-white transition">
                            <LinkedinIcon size={22} />
                        </a>
                        <a href="https://github.com/mobarak-razu" target="_blank" rel="noreferrer" className="hover:text-white transition">
                            <GithubIcon size={22} />
                        </a>
                    </div>
                </motion.div>

                {/* Right side - Profile image with tech halo */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="md:w-1/2 flex justify-center"
                >
                    <div className="relative">
                        {/* Tech halo animation */}
                        <motion.div
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            {MERNStackIcons.slice(0, 6).map((tech, index) => (
                                <motion.div
                                    key={`halo-${index}`}
                                    className={`absolute ${tech.color} opacity-70`}
                                    style={{
                                        transform: `rotate(${index * 60}deg) translateX(120px) rotate(-${index * 60}deg)`
                                    }}
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.6, 0.9, 0.6]
                                    }}
                                    transition={{
                                        duration: 8 + index * 2,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                >
                                    {tech.icon}
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Profile image */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-2xl backdrop-blur-sm">
                            <img
                                src="https://i.ibb.co/r2vvMjkz/unnamed-1.png"
                                alt="Mobarak Hossain"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                        </div>

                        {/* Experience badge */}
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="absolute -bottom-5 -right-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow-xl flex items-center gap-2"
                        >
                            <CalendarCheck size={18} />
                            <span>5+ Years Exp</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Animated connection lines with varied patterns */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                {Array.from({ length: 16 }).map((_, i) => {
                    const strokeWidth = i % 2 === 0 ? 1 : 0.5;
                    const dashArray = i % 3 === 0 ? "5,5" : i % 3 === 1 ? "10,5" : "3,8";
                    return (
                        <motion.line
                            key={i}
                            x1={Math.random() * 100 + '%'}
                            y1={Math.random() * 100 + '%'}
                            x2={Math.random() * 100 + '%'}
                            y2={Math.random() * 100 + '%'}
                            stroke="rgba(96, 165, 250, 0.1)"
                            strokeWidth={strokeWidth}
                            strokeDasharray={dashArray}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: [0, 0.2, 0],
                                pathLength: [0, 1, 0]
                            }}
                            transition={{
                                duration: 15 + Math.random() * 20,
                                repeat: Infinity,
                                delay: i * 0.3
                            }}
                        />
                    );
                })}
            </svg>
        </section>
    );
};

export default Banner;