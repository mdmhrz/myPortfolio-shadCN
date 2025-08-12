import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import hallPointImg from "../../../assets/projects/hallpoint.png";
import project1Img from "../../../assets/projects/altpick.png";
import project2Img from "../../../assets/projects/jobtrack.png";

const projects = [
    {
        title: "HallPoint",
        description: "A hostel management system with meal tracking, rider delivery, admin dashboard, and user earnings system.",
        image: hallPointImg,
        links: {
            live: "https://hall-point.web.app/",
            client: "https://github.com/mdmhrz/hall-point-client",
        },
        tech: [
            "React", "Node.js", "Express.js", "MongoDB", "TailwindCSS",
            "TanStack Query", "JWT", "Firebase", "Stripe", "SSLCOMMERZ"
        ],
    },
    {
        title: "AltPick",
        description: "A full-stack product recommendation platform where users query and receive suggestions from the community with voting features.",
        image: project1Img,
        links: {
            live: "https://altpick-b57eb.web.app/",
            client: "https://github.com/mdmhrz/alt-pick-client",
        },
        tech: [
            "React", "Node.js", "Express.js", "MongoDB", "JWT",
            "React-Router", "TailwindCSS", "Axios", "Lottie-Animation"
        ],
    },
    {
        title: "JobTrack",
        description: "Track job applications with filters, analytics, admin panel, and full role-based dashboards.",
        image: project2Img,
        links: {
            live: "https://job-track-53365.web.app/",
            client: "https://github.com/mdmhrz/job-track",
        },
        tech: [
            "React", "React-Router", "React-Icons", "TailwindCSS",
            "Firebase-Auth", "Framer-motion", "React-Helmet-Async"
        ],
    },
];

const Projects = () => {
    return (
        <div className="bg-white dark:bg-black">
            <section className="py-24 px-4 max-w-7xl mx-auto" id="projects">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="heading">
                        <span className="gradient-text">My Projects</span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-300 max-w-xl mx-auto">
                        Explore real-world full-stack apps built with modern technologies
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
                </motion.div>

                <div className="space-y-28">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="relative group"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.15 }}
                            viewport={{ once: true }}
                        >
                            {/* Decorative element */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

                            <div className="flex flex-col lg:flex-row gap-8 items-center">
                                {/* Image with creative frame */}
                                <div className={`w-full lg:w-7/12 relative ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                                    <div className="relative rounded-xl overflow-hidden border-4 border-white dark:border-gray-900 shadow-2xl">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="absolute -z-10 w-full h-full -bottom-4 -right-4 rounded-xl border-2 border-blue-200 dark:border-blue-900/50"></div>
                                </div>

                                {/* Content */}
                                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:order-2 lg:pr-8" : "lg:order-1 lg:pl-8"}`}>
                                    <div className="relative">
                                        <span className="text-xs font-mono text-blue-600 dark:text-blue-400">
                                            Project {index + 1}/{projects.length}
                                        </span>
                                        <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 mt-1">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Tech stack */}
                                        <div className="mb-8">
                                            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                                                TECH STACK
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-xs font-mono px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Links */}
                                        <div className="flex gap-3">
                                            <a
                                                href={project.links.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-700 hover:from-violet-800 to-blue-700 hover:to-blue-800 text-white rounded-lg transition-all"
                                            >
                                                View Project
                                                <ArrowUpRight className="w-4 h-4" />
                                            </a>
                                            <a
                                                href={project.links.client}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all"
                                            >
                                                <Github className="w-4 h-4" />
                                                Source
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;