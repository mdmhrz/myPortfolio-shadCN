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
            year: "2014-2021",
            description: "Ran successful computer services business",
            highlight: "Mastered Office, Adobe & client management"
        },

        {
            icon: <Globe size={20} className="text-green-400" />,
            title: "Self-Taught Web Fundamentals",
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
        <section id="about" className="bg-neutral-100 dark:bg-black w-full">

            <div className="relative py-20 w-11/12 mx-auto max-w-[1920px]">
                <div className="">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >

                        <h2 class="heading">
                            <span class="gradient-text">My Journey</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            From working with tools to crafting code – a journey of passion and transformation

                        </p>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row gap-8 justify-center mx-auto">


                        {/* Left Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                            id="animate-border"
                            className="lg:w-2/5 relative z-50 glass-card dark:p-1 rounded-3xl lg:max-w-3xl animate-border shadow-2xl"
                        >

                            <div className="bg-white dark:bg-black  p-8 rounded-2xl shadow-xl h-full">
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
                                    <div className="flex items-start gap-4 p-4 bg-gray-100 dark:bg-black/5 dark:border border-gray-800 rounded-xl">
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

                                    <div className="flex items-start gap-4 p-4 bg-gray-100 dark:bg-black/5 dark:border border-gray-800 rounded-xl">
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

                                    <div className="flex items-start gap-4 p-4 bg-gray-100 dark:bg-black/5 dark:border border-gray-800 rounded-xl">
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
                            className="lg:w-3/5 relative z-50 glass-card dark:p-1 rounded-3xl max-w-6xl animate-border shadow-2xl"
                        >


                            <div className="bg-white dark:bg-black border-gray-800 p-8 rounded-2xl shadow-xl dark:border-gray-700 h-full">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                    The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Transformation</span>
                                </h3>

                                <div className="space-y-6 mb-8">
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        I’ve been passionate about technology since the 90s, which led me to earn a Mechanical Engineering Diploma in 2014 and later run a computer services business for five years, honing my technical and client service skills.
                                    </p>

                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        In 2022, inspired by <strong>Jhankar Mahbub’s</strong> programming tutorials and the <strong>Programming Hero</strong> MERN stack course, I transitioned into professional web development—blending an engineering mindset with a drive to create impactful digital solutions.
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
                                                <div className="bg-gray-100 dark:bg-black/5 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
                                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                                                        <h4 className="font-bold text-gray-900 dark:text-white">{item.title}</h4>
                                                        <span className="text-sm min-w-[130px] max-w-[130px] flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full">
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
            </div>
        </section>
    );
};

export default AboutMe;