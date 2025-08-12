import React, { useState } from "react";
import {
    Sparkles,
    Star,
    ArrowUpRight,
    Zap,
    Palette
} from "lucide-react";
import hallPointImg from '../../../assets/projects/hallpoint.png'
import altPickImg from '../../../assets/projects/altpick.png'
import jobTrackImg from '../../../assets/projects/jobtrack.png'
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

// Mock images for demonstration
const projects = [
    {
        id: 1,
        title: "HallPoint",
        description: "Hostel management system with meal tracking, delivery, and admin dashboard.",
        briefDescription: "A comprehensive hostel management platform featuring real-time meal tracking, delivery coordination, and administrative tools. Built with modern technologies for optimal performance and user experience.",
        image: hallPointImg,
        category: "Full Stack",
        status: "Live",
        links: {
            live: "https://hall-point.web.app/",
            client: "https://github.com/mdmhrz/hall-point-client",
        },
        tech: [
            "React", "Node.js", "Express.js", "MongoDB", "TailwindCSS",
            "TanStack Query", "JWT", "Firebase", "Stripe", "SSLCOMMERZ"
        ],
        stats: {
            users: "500+",
            uptime: "99.9%",
            features: 25
        }
    },
    {
        id: 2,
        title: "AltPick",
        description: "Product recommendation platform with community voting features.",
        briefDescription: "An innovative product recommendation platform where community members can vote on alternatives and discover better options. Features advanced filtering and personalized recommendations.",
        image: altPickImg,
        category: "Web App",
        status: "Live",
        links: {
            live: "https://altpick-b57eb.web.app/",
            client: "https://github.com/mdmhrz/alt-pick-client",
        },
        tech: [
            "React", "Node.js", "Express.js", "MongoDB", "JWT",
            "React-Router", "TailwindCSS", "Axios", "Lottie-Animation"
        ],
        stats: {
            users: "200+",
            votes: "1.2k",
            products: 150
        }
    },
    {
        id: 3,
        title: "JobTrack",
        description: "Job application tracker with analytics and admin panel.",
        briefDescription: "A powerful job application tracking system with comprehensive analytics, status management, and administrative controls. Helps job seekers organize their application process effectively.",
        image: jobTrackImg,
        category: "Productivity",
        status: "Live",
        links: {
            live: "https://job-track-53365.web.app/",
            client: "https://github.com/mdmhrz/job-track",
        },
        tech: [
            "React", "React-Router", "React-Icons", "TailwindCSS",
            "Firebase-Auth", "Framer-motion", "React-Helmet-Async"
        ],
        stats: {
            applications: "50+",
            companies: "30+",
            success: "85%"
        }
    },
];



const Projects = () => {
    return (
        <section className="py-24 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:bg-black relative overflow-hidden" id="projects">
            {/* Enhanced Background Effects for Dark Theme */}
            <div className="absolute inset-0 dark:bg-black">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-blue-500/5 to-purple-500/5 dark:from-transparent dark:via-blue-500/3 dark:to-purple-500/3"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-3/4 left-1/2 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Heading */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-lg mb-6">
                        <Palette className="text-blue-600 dark:text-blue-400" size={20} />
                        <span className="font-semibold text-gray-700 dark:text-gray-300">Portfolio Showcase</span>
                        <Sparkles className="text-purple-600 dark:text-purple-400" size={20} />
                    </div>
                    <h2 className="heading">
                        <span className="gradient-text">Featured Projects</span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-300 max-w-xl mx-auto">
                        Discover my latest work and explore the technologies, challenges, and innovations behind each project
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
                </motion.div>


                {/* Enhanced Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="transform transition-all duration-700"
                            style={{
                                animationDelay: `${index * 200}ms`,
                                animation: 'fadeInUp 0.8s ease-out forwards'
                            }}
                        >
                            <ProjectCard project={project} index={index} />
                        </div>
                    ))}
                </div>


            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
};

export default Projects;