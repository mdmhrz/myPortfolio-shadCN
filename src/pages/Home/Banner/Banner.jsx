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
    CalendarCheck,
    Mail,
    Linkedin,
    Github,
    Twitter
} from "lucide-react";
import CustomButton from "../../../components/ui/CustomButton";

const MERNStackIcons = [
    {
        icon: <FileJson size={48} />,
        lightColor: "text-green-700",
        darkColor: "text-green-400",
        name: "MongoDB",
        animation: { y: [0, -25, 0], rotate: [0, 10, -10, 0], scale: [1, 1.15, 1] }
    },
    {
        icon: <Code2 size={48} />,
        lightColor: "text-gray-700",
        darkColor: "text-gray-400",
        name: "Express",
        animation: { y: [0, 20, -20, 0], rotate: [0, -15, 15, 0], scale: [1, 1.1, 1] }
    },
    {
        icon: <Atom size={48} />,
        lightColor: "text-blue-700",
        darkColor: "text-blue-400",
        name: "React",
        animation: { y: [0, -15, 15, 0], rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }
    },
    {
        icon: <Cpu size={48} />,
        lightColor: "text-green-700",
        darkColor: "text-green-500",
        name: "Node.js",
        animation: { y: [0, 25, -25, 0], rotate: [0, -25, 25, 0], scale: [1, 1.15, 1] }
    },
    {
        icon: <GitBranch size={48} />,
        lightColor: "text-orange-700",
        darkColor: "text-orange-400",
        name: "Git",
        animation: { y: [0, -30, 30, 0], rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }
    },
    {
        icon: <Terminal size={48} />,
        lightColor: "text-gray-800",
        darkColor: "text-gray-300",
        name: "CLI",
        animation: { y: [0, 15, -15, 0], rotate: [0, -10, 10, 0], scale: [1, 1.25, 1] }
    },
    {
        icon: <Palette size={48} />,
        lightColor: "text-purple-700",
        darkColor: "text-purple-400",
        name: "Tailwind",
        animation: { y: [0, -20, 20, 0], rotate: [0, 25, -25, 0], scale: [1, 1.15, 1] }
    },
    {
        icon: <LayoutDashboard size={48} />,
        lightColor: "text-yellow-700",
        darkColor: "text-yellow-400",
        name: "Components",
        animation: { y: [0, 30, -30, 0], rotate: [0, -20, 20, 0], scale: [1, 1.2, 1] }
    }
];

const socialLinks = [
    {
        icon: <Github size={20} />,
        name: "GitHub",
        url: "https://github.com/mdmhrz",
        lightColor: "bg-gray-900 hover:bg-gray-800",
        darkColor: "bg-gray-700 hover:bg-gray-600"
    },
    {
        icon: <Linkedin size={20} />,
        name: "LinkedIn",
        url: "https://linkedin.com/in/mdmhrz",
        lightColor: "bg-blue-700 hover:bg-blue-800",
        darkColor: "bg-blue-500 hover:bg-blue-600"
    },
    {
        icon: <Mail size={20} />,
        name: "Email",
        url: "mailto:razufreelance@gmail.com",
        lightColor: "bg-red-600 hover:bg-red-700",
        darkColor: "bg-red-600 hover:bg-red-500"
    }
];

const Banner = () => {
    return (
        <section id="banner" className="relative flex items-center justify-center w-full  sm:min-h-[calc(100vh-61px)]    bg-gradient-to-r from-blue-100 to-blue-50 dark:from-black dark:to-black overflow-hidden">
            {/* Animated MERN stack icons */}
            <div className="absolute inset-0 overflow-hidden z-0">
                {MERNStackIcons.map((tech, index) => (
                    <motion.div
                        key={index}
                        className={`absolute ${tech.lightColor} dark:${tech.darkColor} dark:opacity-20 opacity-10 `}
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

            {/* Floating tech labels */}
            <div className="absolute inset-0 overflow-hidden z-0">
                {MERNStackIcons.map((tech, index) => (
                    <motion.div
                        key={`label-${index}`}
                        className={`absolute text-xs font-mono ${tech.lightColor} dark:${tech.darkColor} opacity-5`}
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
            <div className="w-11/12 max-w-[1920px] mx-auto h-full flex flex-col lg:flex-row items-center  justify-center gap-12 py-20 relative z-10">
                {/* Left side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-blue-200 mb-6">
                        Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-purple-600 dark:to-blue-500">
                            Mobarak Hossain Razu
                        </span>
                    </h1>

                    <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-blue-200 mb-8 h-12">
                        <TypeAnimation
                            sequence={[
                                'Web Developer',
                                2000,
                                'Frontend Developer',
                                2000,
                                'MERN Stack Specialist',
                                2000,
                                'React.js Professional',
                                2000,

                            ]}
                            speed={50}
                            repeat={Infinity}
                            className="text-gray-900 dark:text-blue-200"
                        />
                    </div>

                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-xl">
                        I build responsive, user-friendly web interfaces and full-stack applications with the MERN stack (MongoDB, Express.js, React, Node.js), delivering seamless user experiences and performant, maintainable solutions using modern JavaScript tools.
                    </p>

                    {/* Tech stack indicator */}
                    <div className="flex items-center gap-3 mb-8">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                            Currently working with: NextJS, Typescript, Redux
                        </span>
                    </div>

                    {/* Contact CTA */}
                    <div className="flex flex-wrap gap-4 mb-6">
                        <CustomButton id="contact" text={'Hire Me'} />
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://drive.google.com/file/d/1jd16Ah_ky0umhWDrs8sb8jiSpgMrTgIb/view?usp=sharing"
                            target="_blank"
                            className="px-6 py-3 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg text-gray-800 dark:text-white font-semibold shadow-lg border border-gray-200 dark:border-gray-700 transition-all"
                        >
                            Download Resume
                        </motion.a>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-5">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.9 }}
                                href={social.url}
                                target="_blank"
                                rel="noreferrer"
                                className={`${social.lightColor} dark:${social.darkColor} p-3 rounded-full text-white transition-all shadow-md`}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Right side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:w-1/2 flex justify-center"
                >
                    <div className="relative">


                        {/* Profile image */}
                        <div className="relative w-70 h-70 md:w-90 md:h-90 lg:w-104 lg:h-104 xl:w-112 xl:h-112 rounded-full overflow-hidden border-4 border-blue-400/30 dark:border-blue-500/30 shadow-2xl backdrop-blur-sm">
                            <img
                                src="https://i.ibb.co/r2vvMjkz/unnamed-1.png"
                                alt="Mobarak Hossain"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-800/5 to-transparent dark:from-gray-400/20"></div>
                        </div>

                        {/* Experience badge */}
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="absolute -bottom-5 xl:-bottom-3 xl:-right-3 -right-5 bg-gradient-to-r from-purple-700 to-blue-700 text-white px-4 py-2 rounded-lg shadow-xl flex items-center gap-2"
                        >
                            <CalendarCheck size={18} />
                            <span>2+ Years Exp</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Connection lines */}
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
                            stroke="rgba(59, 130, 246, 0.1)"
                            strokeWidth={strokeWidth}
                            strokeDasharray={dashArray}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.2, 0], pathLength: [0, 1, 0] }}
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
