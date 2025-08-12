import { motion } from 'framer-motion';
import { useState } from 'react';
import {
    Github,
    ChevronDown,
    ChevronUp,
    Sparkles,
    Heart,
    Share2,
    ArrowUpRight,
    Code2,
    Play,
    Layers,
} from "lucide-react";



const ProjectCard = ({ project, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const categoryColors = {
        "Full Stack": "from-emerald-500 to-teal-500",
        "Web App": "from-blue-500 to-indigo-500",
        "Productivity": "from-purple-500 to-pink-500"
    };

    return (
        <div className="group relative">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-700"></div>

            <div className="relative bg-white dark:bg-black border border-gray-200/50 dark:border-gray-800/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                {/* Image Section with Enhanced Overlay */}
                <div className="relative h-64 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                        <div className={`px-4 py-2 bg-gradient-to-r ${categoryColors[project.category]} rounded-full text-white text-sm font-bold shadow-lg`}>
                            {project.category}
                        </div>
                    </div>




                </div>

                {/* Content Section */}
                <div className="p-8 relative bg-neutral-700/5 dark:bg-slate-900">
                    {/* Title Overlay */}
                    <div className="mb-6">
                        <h3 className="text-3xl font-black dark:text-white mb-1 leading-tight">
                            {project.title}
                        </h3>
                        <p className="dark:text-blue-200 font-medium">
                            {project.description}
                        </p>
                    </div>

                    {/* Quick Actions */}
                    <div className="flex gap-3 mb-6">
                        <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-400 dark:hover:border-blue-400 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <ArrowUpRight size={20} />
                        </a>
                        <a
                            href={project.links.client}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-400 dark:hover:border-blue-400 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <Github size={20} />
                        </a>
                    </div>

                    {/* Expand Toggle */}
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center justify-center gap-2 w-full py-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors duration-300"
                    >
                        {isExpanded ? (
                            <>
                                <ChevronUp size={20} />
                                Show Less Details
                            </>
                        ) : (
                            <>
                                <ChevronDown size={20} />
                                Show More Details
                            </>
                        )}
                    </button>

                    {/* Expanded Content */}
                    {isExpanded && (
                        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 space-y-6">


                            {/* Enhanced Tech Stack */}
                            <div>
                                <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-4">
                                    <Code2 className="text-purple-600 dark:text-purple-400" size={20} />
                                    Technology Stack
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {project.tech.map((tech, i) => (
                                        <div
                                            key={i}
                                            className="group relative p-2 py-px bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950/30 rounded-xl border border-gray-200 dark:border-gray-700 text-center font-semibold text-gray-700 dark:text-gray-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <span className="relative z-10 text-sm">{tech}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* More Details Link */}
                            <div className="pt-4">
                                <a
                                    href={`/project/${project.id}`}
                                    className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-900 to-black dark:from-white dark:to-gray-100 text-white dark:text-black rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <span>View Full Details</span>
                                    <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;