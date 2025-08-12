import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import hallPointImg from "../../../assets/projects/hallpoint.png";
import project1Img from "../../../assets/projects/altpick.png";
import project2Img from "../../../assets/projects/jobtrack.png";
import { Link } from "react-router";

const projects = [
    {
        id: 1,
        title: "HallPoint",
        description: "Hostel management system with meal tracking, delivery, and admin dashboard.",
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
        id: 2,
        title: "AltPick",
        description: "Product recommendation platform with community voting features.",
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
        id: 3,
        title: "JobTrack",
        description: "Job application tracker with analytics and admin panel.",
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

const ProjectCard = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-800"
            whileHover={{ y: -5 }}
        >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                    {project.title}
                </h3>
            </div>

            {/* Basic Info */}
            <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                </p>

                {/* View More Button */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium mb-4 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                    {isExpanded ? (
                        <>
                            <ChevronUp size={16} />
                            Show Less
                        </>
                    ) : (
                        <>
                            <ChevronDown size={16} />
                            View Details
                        </>
                    )}
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        {/* Tech Stack */}
                        <div className="mb-6">
                            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                                TECH STACK
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Links */}
                        <div className="flex items-center justify-between">

                            <div className="flex gap-3">
                                <a
                                    href={project.links.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
                                >
                                    <ExternalLink size={16} />

                                </a>
                                <a
                                    href={project.links.client}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors text-sm font-medium"
                                >
                                    <Github size={16} />

                                </a>
                            </div>
                            <div>
                                <Link to={`/project/${project.id}`} className="px-4 rounded-2xl py-2 bg-black dark:bg-white text-white dark:text-black">more</Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section className="py-20 px-4 bg-gray-100 dark:bg-black" id="projects">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        My Projects
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                        Explore my work - click on any project to see more details
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full" />
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;