import React from "react";
import { motion } from "framer-motion";
import {
    Code2,
    Database,
    Cpu,
    Atom,
    GitBranch,
    Terminal,
    LayoutDashboard,
    Rocket,
    Briefcase,
    School
} from "lucide-react";

const AboutMe = () => {
    const skills = [
        { name: "MongoDB", icon: <Database className="text-green-500" size={24} />, level: "90%" },
        { name: "Express.js", icon: <Code2 className="text-gray-400" size={24} />, level: "85%" },
        { name: "React.js", icon: <Atom className="text-blue-400" size={24} />, level: "95%" },
        { name: "Node.js", icon: <Cpu className="text-green-600" size={24} />, level: "88%" },
        { name: "Git", icon: <GitBranch className="text-orange-500" size={24} />, level: "80%" },
        { name: "REST APIs", icon: <Terminal className="text-purple-400" size={24} />, level: "92%" },
    ];

    const experience = [
        {
            role: "Senior MERN Developer",
            company: "Tech Solutions Inc.",
            duration: "2021 - Present",
            icon: <Briefcase className="text-blue-400" size={20} />,
            highlights: [
                "Led team building 10+ production apps",
                "Improved API response time by 40%",
                "Implemented CI/CD pipelines"
            ]
        },
        {
            role: "Full Stack Developer",
            company: "WebCraft Studio",
            duration: "2019 - 2021",
            icon: <Rocket className="text-purple-400" size={20} />,
            highlights: [
                "Developed 15+ React applications",
                "Migrated legacy systems to MERN",
                "Mentored junior developers"
            ]
        }
    ];

    return (
        <section id="about" className="py-20 bg-gray-900/50 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Column - Introduction */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                            <School className="text-blue-400" size={24} />
                            <span>Who I Am</span>
                        </h3>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                            I'm a passionate <span className="text-blue-300 font-medium">MERN Stack Developer</span> with 5+ years of experience building modern web applications.
                            My journey in web development began when I created my first CRUD app, and I've been hooked on solving
                            real-world problems with code ever since.
                        </p>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                            I specialize in creating <span className="text-purple-300 font-medium">scalable backend architectures</span> with Node.js and MongoDB,
                            coupled with <span className="text-blue-300 font-medium">responsive front-end interfaces</span> using React. My approach combines
                            clean code principles with performance optimization.
                        </p>

                        <p className="text-gray-300 leading-relaxed">
                            When I'm not coding, you'll find me contributing to open-source projects, learning new technologies,
                            or sharing knowledge through tech blogs and community talks.
                        </p>

                        {/* Skills Progress Bars */}
                        <div className="mt-10">
                            <h3 className="text-2xl font-semibold text-white mb-6">My Skills</h3>
                            <div className="space-y-4">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="flex items-center justify-between mb-1">
                                            <div className="flex items-center gap-2">
                                                {skill.icon}
                                                <span className="text-gray-300 font-medium">{skill.name}</span>
                                            </div>
                                            <span className="text-sm text-gray-400">{skill.level}</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: skill.level }}
                                                transition={{ duration: 1, delay: index * 0.1 }}
                                                viewport={{ once: true }}
                                                className={`h-2 rounded-full ${skill.name === "MongoDB" ? "bg-green-500" :
                                                        skill.name === "Express.js" ? "bg-gray-400" :
                                                            skill.name === "React.js" ? "bg-blue-400" :
                                                                skill.name === "Node.js" ? "bg-green-600" :
                                                                    skill.name === "Git" ? "bg-orange-500" : "bg-purple-400"
                                                    }`}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6">My Experience</h3>

                        <div className="space-y-8">
                            {experience.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-blue-500 hover:border-purple-500 transition-all"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-gray-700 rounded-full">
                                            {exp.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-white">{exp.role}</h4>
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-gray-400 mb-3">
                                                <span>{exp.company}</span>
                                                <span className="hidden sm:block">•</span>
                                                <span>{exp.duration}</span>
                                            </div>
                                            <ul className="space-y-2 mt-3">
                                                {exp.highlights.map((highlight, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="text-blue-400 mt-1">▹</span>
                                                        <span className="text-gray-300">{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Education */}
                        <div className="mt-12">
                            <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
                            <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-purple-500">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-gray-700 rounded-full">
                                        <School className="text-blue-400" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-white">B.Sc in Computer Science</h4>
                                        <p className="text-gray-400 mb-3">University of Dhaka | 2015 - 2019</p>
                                        <p className="text-gray-300">
                                            Specialized in Web Technologies and Database Systems. Graduated with Honors.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;