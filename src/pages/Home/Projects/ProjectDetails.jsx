import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ExternalLink,
    Github,
    ChevronLeft,
    ChevronRight,
    Sparkles,
    Code2,
    Zap,
    Target,
    TrendingUp,
    ArrowUpRight,
    Star,
    Eye,
    Activity,
    Layers,
    Cpu,
    Shield,
    Rocket
} from "lucide-react";
import { Link, useLoaderData, useParams } from "react-router";

const ProjectDetails = () => {
    const projectsData = useLoaderData();
    const { id } = useParams();
    const projectIndex = Math.max(0, Math.min(parseInt(id) - 1 || 0, projectsData.length - 1));
    const [currentProject, setCurrentProject] = useState(projectIndex);
    const [activeSection, setActiveSection] = useState('overview');
    const project = projectsData[currentProject];

    const nextProject = () => {
        setCurrentProject((prev) => (prev + 1) % projectsData.length);
        setActiveSection('overview');
    };

    const prevProject = () => {
        setCurrentProject((prev) => (prev - 1 + projectsData.length) % projectsData.length);
        setActiveSection('overview');
    };

    const sections = [
        { id: 'overview', label: 'Overview', icon: <Eye size={16} /> },
        { id: 'tech', label: 'Tech Stack', icon: <Layers size={16} /> },
        { id: 'challenges', label: 'Challenges', icon: <Shield size={16} /> },
        { id: 'improvements', label: 'Improvements', icon: <Target size={16} /> },
        { id: 'future', label: 'Roadmap', icon: <Rocket size={16} /> }
    ];

    const stats = [
        { label: 'Technologies', value: project.tech.length, icon: <Cpu size={20} /> },
        { label: 'Challenges Solved', value: project.challenges.length, icon: <Zap size={20} /> },
        { label: 'Future Features', value: project.futurePlans.length, icon: <TrendingUp size={20} /> }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-black dark:via-gray-950 dark:to-gray-900 py-12 px-4">
            {/* Floating Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/5 dark:bg-blue-400/3 rounded-full blur-3xl animate-float-slow"></div>
                <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-500/5 dark:bg-purple-400/3 rounded-full blur-3xl animate-float"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Project Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between mb-8"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, x: -5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={prevProject}
                        className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg transition-all text-gray-700 dark:text-gray-300"
                    >
                        <ChevronLeft size={18} />
                        Previous
                    </motion.button>

                    <div className="flex items-center gap-3">
                        {projectsData.map((_, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.2 }}
                                onClick={() => {
                                    setCurrentProject(index);
                                    setActiveSection('overview');
                                }}
                                className={`w-3 h-3 rounded-full transition-all ${index === currentProject
                                    ? 'bg-blue-600 dark:bg-blue-400 scale-125'
                                    : 'bg-gray-300 dark:bg-gray-600'
                                    }`}
                            />
                        ))}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={nextProject}
                        className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg transition-all text-gray-700 dark:text-gray-300"
                    >
                        Next
                        <ChevronRight size={18} />
                    </motion.button>
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentProject}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.5 }}
                        className="grid lg:grid-cols-3 gap-8"
                    >
                        {/* Left Column - Project Info */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Hero Section */}
                            <div className="relative group">
                                {/* Glow Effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                                {/* Main Card */}
                                <div className="relative bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl  shadow-2xl overflow-hidden">
                                    {/* Project Image */}
                                    <div className="relative h-80 md:h-96 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="absolute top-4 left-4 flex items-center gap-3 mb-3 bg-black/80 px-4 py-2 rounded-2xl">
                                        <Sparkles className="text-yellow-500 animate-pulse" size={18} />
                                        <span className="text-yellow-500 text-xs font-medium tracking-wider">FEATURED PROJECT</span>
                                    </div>

                                </div>
                            </div>

                            <div className="">

                                <h1 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-2 leading-tight">
                                    {project.title}
                                </h1>
                                <p className="text-gray-500 dark:text-blue-100 text-lg md:text-xl font-medium max-w-2xl">
                                    {project.description}
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <motion.a
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    href={project.links.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:from-blue-700 hover:to-purple-700"
                                >
                                    <ExternalLink size={20} />
                                    View Live Project
                                    <ArrowUpRight size={18} />
                                </motion.a>

                                <motion.a
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    href={project.links.client}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl font-semibold transition-all shadow hover:shadow-md"
                                >
                                    <Github size={20} />
                                    View Source
                                </motion.a>

                                {project.links.server && (
                                    <motion.a
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        href={project.links.server}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl font-semibold transition-all shadow hover:shadow-md"
                                    >
                                        <Code2 size={20} />
                                        Server Code
                                    </motion.a>
                                )}
                            </div>

                            {/* Content Sections */}
                            <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-lg">
                                {/* Section Navigation */}
                                <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 dark:border-gray-800 pb-2">
                                    {sections.map((section) => (
                                        <motion.button
                                            key={section.id}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setActiveSection(section.id)}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-medium ${activeSection === section.id
                                                ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 shadow-inner'
                                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                                                }`}
                                        >
                                            {section.icon}
                                            {section.label}
                                        </motion.button>
                                    ))}
                                </div>

                                {/* Section Content */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeSection}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {activeSection === 'overview' && (
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                                    Project Overview
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                                                    {project.briefDescription}
                                                </p>
                                            </div>
                                        )}

                                        {activeSection === 'tech' && (
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                                    Technology Stack
                                                </h3>
                                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                                    {project.tech.map((tech, index) => (
                                                        <motion.div
                                                            key={index}
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                                            className="p-3 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 text-center font-medium text-gray-700 dark:text-gray-300 hover:shadow-md transition-all hover:-translate-y-1"
                                                        >
                                                            {tech}
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {activeSection === 'challenges' && (
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                                    Technical Challenges
                                                </h3>
                                                <div className="space-y-4">
                                                    {project.challenges.map((challenge, index) => (
                                                        <motion.div
                                                            key={index}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                                            className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg hover:shadow-md"
                                                        >
                                                            <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                                                                <Zap className="text-red-600 dark:text-red-400" size={20} />
                                                            </div>
                                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                                                {challenge}
                                                            </p>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {activeSection === 'improvements' && (
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                                    Potential Improvements
                                                </h3>
                                                <div className="space-y-4">
                                                    {project.potentialImprovements.map((improvement, index) => (
                                                        <motion.div
                                                            key={index}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                                            className="flex items-start gap-4 p-4 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg hover:shadow-md"
                                                        >
                                                            <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                                                                <Target className="text-yellow-600 dark:text-yellow-400" size={20} />
                                                            </div>
                                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                                                {improvement}
                                                            </p>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {activeSection === 'future' && (
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                                    Development Roadmap
                                                </h3>
                                                <div className="space-y-4">
                                                    {project.futurePlans.map((plan, index) => (
                                                        <motion.div
                                                            key={index}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                                            className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg hover:shadow-md"
                                                        >
                                                            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                                                                <Rocket className="text-green-600 dark:text-green-400" size={20} />
                                                            </div>
                                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                                                {plan}
                                                            </p>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                                {/* Add this near the end of the component, before the closing </div> */}

                            </div>

                        </div>

                        {/* Right Column - Stats & Info */}
                        <div className="space-y-6">
                            {/* Back to home button */}
                            <motion.div
                                className="flex items-center justify-start"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Link
                                    to="/"
                                    className="flex w-full text-gray-900 items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                                >
                                    <ChevronLeft size={20} />
                                    <span className="">Back to Home</span>
                                </Link>
                            </motion.div>
                            {/* Project Stats */}
                            <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-lg">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                    <Activity className="text-blue-600 dark:text-blue-400" size={24} />
                                    Project Stats
                                </h3>
                                <div className="space-y-4">
                                    {stats.map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.02 }}
                                            className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:shadow-md"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                                                    {stat.icon}
                                                </div>
                                                <span className="font-medium text-gray-700 dark:text-gray-300">
                                                    {stat.label}
                                                </span>
                                            </div>
                                            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                                {stat.value}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-lg">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                                    Quick Links
                                </h3>
                                <div className="space-y-3">
                                    <motion.a
                                        whileHover={{ x: 5 }}
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-950/30 hover:bg-blue-100 dark:hover:bg-blue-950/50 rounded-xl transition-all group"
                                    >
                                        <ExternalLink className="text-blue-600 dark:text-blue-400" size={20} />
                                        <span className="font-medium text-gray-700 dark:text-gray-300">Live Demo</span>
                                        <ArrowUpRight className="text-blue-600 dark:text-blue-400 ml-auto group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
                                    </motion.a>

                                    <motion.a
                                        whileHover={{ x: 5 }}
                                        href={project.links.client}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all group"
                                    >
                                        <Github className="text-gray-600 dark:text-gray-400" size={20} />
                                        <span className="font-medium text-gray-700 dark:text-gray-300">Client Code</span>
                                        <ArrowUpRight className="text-gray-600 dark:text-gray-400 ml-auto group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
                                    </motion.a>

                                    {project.links.server && (
                                        <motion.a
                                            whileHover={{ x: 5 }}
                                            href={project.links.server}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all group"
                                        >
                                            <Code2 className="text-gray-600 dark:text-gray-400" size={20} />
                                            <span className="font-medium text-gray-700 dark:text-gray-300">Server Code</span>
                                            <ArrowUpRight className="text-gray-600 dark:text-gray-400 ml-auto group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
                                        </motion.a>
                                    )}
                                </div>
                            </div>

                            {/* Tech Highlights */}
                            <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-lg">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                    <Cpu className="text-purple-600 dark:text-purple-400" size={24} />
                                    Key Technologies
                                </h3>
                                <div className="space-y-3">
                                    {project.tech.slice(0, 5).map((tech, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ x: 5 }}
                                            className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
                                        >
                                            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                                                <Star size={16} />
                                            </div>
                                            <span className="font-medium text-gray-700 dark:text-gray-300">{tech}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Add these keyframes to your global CSS */}
            <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-1deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
};

export default ProjectDetails;