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
            client: "https://github.com/yourname/hallpoint-client",
            server: "https://github.com/yourname/hallpoint-server"
        },
        tech: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "TailwindCSS",
            "TanStack Query",
            "JWT",
            "Firebase",
        ],
    },
    {
        title: "AltPick",
        description: "A full-stack product recommendation platform where users query and receive suggestions from the community with voting features.",
        image: project1Img,
        links: {
            live: "https://altpick.example.com",
            client: "https://github.com/yourname/altpick-client",
            server: "https://github.com/yourname/altpick-server"
        },
        tech: [
            "Next.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "TailwindCSS",
            "JWT",
            "TanStack Query",
        ],
    },
    {
        title: "JobTrack",
        description: "Track job applications with filters, analytics, admin panel, and full role-based dashboards.",
        image: project2Img,
        links: {
            live: "https://jobtrack.example.com",
            client: "https://github.com/yourname/jobtrack-client",
            server: "https://github.com/yourname/jobtrack-server"
        },
        tech: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "TailwindCSS",
            "Framer Motion",
            "JWT",
        ],
    },
];

const Projects = () => {
    return (
        <div className=" bg-gray-300 dark:bg-slate-900">
            <section className="py-20 px-4 max-w-7xl mx-auto" id="projects">
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
                </motion.div>

                <div className="space-y-16">
                    {projects.map((project, index) => {
                        const isEven = index % 2 === 1;

                        return (
                            <motion.div
                                key={index}
                                className="relative"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                {/* Project card container */}
                                <div className={`flex overflow-hidden flex-col lg:flex-row ${isEven ? "lg:flex-row-reverse" : ""} gap-8 lg:gap-12 bg-white dark:bg-gray-900 rounded-2xl shadow-lg dark:shadow-gray-900/30 border border-gray-100 dark:border-gray-700`}>
                                    {/* Image container */}
                                    <div className="w-full lg:w-1/2 bg-gray-600 dark:bg-gray-800 p-6">
                                        <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="w-full lg:w-1/2 flex flex-col justify-between p-6">
                                        <div>
                                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-3">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 mb-5">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.tech.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-medium px-3 py-1.5 rounded-full"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Links */}
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <a
                                                href={project.links.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white rounded-lg transition-colors"
                                            >
                                                Live Demo
                                                <ArrowUpRight className="w-4 h-4" />
                                            </a>
                                            <a
                                                href={project.links.client}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                                            >
                                                <Github className="w-4 h-4" />
                                                Client Code
                                            </a>
                                            <a
                                                href={project.links.server}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                                            >
                                                <Github className="w-4 h-4" />
                                                Server Code
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Separator */}
                                {index < projects.length - 1 && (
                                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Projects;