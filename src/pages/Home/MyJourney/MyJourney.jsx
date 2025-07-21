import React from "react";
import { motion } from "framer-motion";
import './MyJourney.css'
import {
    Code2,
    Cpu,
    Smartphone,
    Laptop,
    Globe,
    School,
    BookOpen,
    Rocket,
    Wrench,
    Monitor,
    HeartPulse,
    Lightbulb,
    Clock,
    User
} from "lucide-react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

const AboutMe = () => {
    // Animation state
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isInView) {
            setIsVisible(true)
        }
    }, [isInView]);



    const timeline = [
        {
            icon: <Wrench size={20} className="text-blue-400" />,
            title: "Mechanical Engineering Diploma",
            year: "2014",
            description: "Graduated from Bangladesh Sweden Polytechnic Institute",
            highlight: "Built strong problem-solving foundation"
        },
        {
            icon: <Monitor size={20} className="text-purple-400" />,
            title: "Tech Entrepreneurship",
            year: "2014-2019",
            description: "Ran successful computer services business",
            highlight: "Mastered Office, Adobe & client management"
        },
        {
            icon: <Globe size={20} className="text-green-400" />,
            title: "Web Development Discovery",
            year: "2020",
            description: "Inspired by Jhankar Mahbub's programming videos",
            highlight: "Life-changing moment"
        },
        {
            icon: <BookOpen size={20} className="text-yellow-400" />,
            title: "Self-Taught Fundamentals",
            year: "2020-2021",
            description: "Built 20+ projects with HTML, CSS, JavaScript",
            highlight: "500+ hours of coding"
        },
        {
            icon: <Rocket size={20} className="text-red-400" />,
            title: "Programming Hero",
            year: "2021",
            description: "Completed MERN stack development course",
            highlight: "Professional transformation"
        }
    ];

    const personalTraits = [
        {
            icon: <HeartPulse size={18} className="text-pink-500" />,
            title: "Passionate",
            description: "Deep love for technology and coding"
        },
        {
            icon: <Lightbulb size={18} className="text-yellow-500" />,
            title: "Innovative",
            description: "Always exploring new solutions"
        },
        {
            icon: <Clock size={18} className="text-blue-500" />,
            title: "Persistent",
            description: "Never give up attitude"
        },
        {
            icon: <User size={18} className="text-green-500" />,
            title: "Adaptable",
            description: "From mechanical to software effortlessly"
        }
    ];



    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
            {/* Background elements */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.05 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-500 blur-3xl dark:opacity-10"
            />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.05 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-purple-500 blur-3xl dark:opacity-10"
            />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.05 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-green-500 blur-3xl dark:opacity-10"
            />

            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    {/* <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Journey</span>
                    </h2> */}

                    <h2 class="heading">
                        <span class="gradient-text">My Journey</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        From turning wrenches to writing code - a story of passion and transformation
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8">


                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                        id="animate-border"
                        className="lg:w-2/5 relative z-50 glass-card p-1 rounded-3xl animate-border"
                    >

                        <div className="bg-white dark:bg-slate-900 border border-gray-800 p-8 rounded-2xl shadow-xl h-full">
                            <div className="text-center mb-8">
                                <motion.div
                                    whileHover={{ scale: 1.05, rotate: 2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-700 to-purple-900 flex items-center justify-center mb-6 shadow-lg"
                                >
                                    <Code2 size={60} className="text-white" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Tech Enthusiast</h3>
                                <p className="text-blue-500 dark:text-blue-400 font-medium">Since Childhood</p>
                                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
                            </div>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-black/5 border border-gray-800 rounded-xl">
                                    <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                        <Laptop size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">First Computer</h4>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            Acer laptop with Windows Vista - my gateway to digital world
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-black/5 border border-gray-800 rounded-xl">
                                    <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                                        <Smartphone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Tech Fascination</h4>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            From Nokia 3310 to smartphones - always loved gadgets
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-black/5 border border-gray-800 rounded-xl">
                                    <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                                        <Globe size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Internet Journey</h4>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            From 2G night packs to 4G - witnessed digital revolution
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                    <User size={20} className="text-blue-500" />
                                    Personal Traits
                                </h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {personalTraits.map((trait, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ y: -3 }}
                                            className="bg-white dark:bg-gray-700/20 p-3 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm"
                                        >
                                            <div className="flex items-center gap-2 mb-1">
                                                {trait.icon}
                                                <span className="font-medium text-gray-900 dark:text-white text-sm">{trait.title}</span>
                                            </div>
                                            <p className="text-gray-500 dark:text-gray-400 text-xs">{trait.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        id="animate-border"
                        className="lg:w-3/5 relative z-50 glass-card p-1 rounded-3xl max-w-6xl animate-border"
                    >


                        <div className="bg-white dark:bg-slate-900 border border-gray-800 p-8 rounded-2xl shadow-xl dark:border-gray-700 h-full">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Transformation</span>
                            </h3>

                            <div className="space-y-6 mb-8">
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Growing up in the 90s, I was fascinated by technology - from taking apart radios to mastering every feature of early Nokia phones. My passion truly ignited when I received my first Acer laptop, which became my gateway to the digital world.
                                </p>

                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    After earning my <span className="font-medium text-gray-900 dark:text-white">Mechanical Engineering Diploma</span> in 2014, I followed my true calling into technology, starting a computer services business where I honed my skills for five years while helping local clients.
                                </p>

                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    A 2020 encounter with <span className="font-medium text-gray-900 dark:text-white">Jhankar Mahbub's</span> programming tutorials sparked my web development journey. Countless hours of self-study led me to enroll in <span className="font-medium text-gray-900 dark:text-white">Programming Hero's</span> MERN stack course in 2021, completing my transition into professional development.
                                </p>

                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Today, I continue to grow as a developer, combining my engineering problem-solving skills with a passion for creating digital solutions.
                                </p>
                            </div>


                            <div className="relative">
                                <div className="absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-blue-400 to-purple-500 dark:opacity-30"></div>

                                <div className="space-y-8 pl-12">
                                    {timeline.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="relative"
                                        >
                                            <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-700 to-purple-900 flex items-center justify-center shadow-md">
                                                {item.icon}
                                            </div>
                                            <div className="bg-gray-50 dark:bg-black/5 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                                                    <h4 className="font-bold text-gray-900 dark:text-white">{item.title}</h4>
                                                    <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full">
                                                        {item.year}
                                                    </span>
                                                </div>
                                                <p className="text-gray-600 dark:text-gray-400 mb-3">{item.description}</p>
                                                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                    <Lightbulb size={14} className="text-yellow-500" />
                                                    <span>{item.highlight}</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
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