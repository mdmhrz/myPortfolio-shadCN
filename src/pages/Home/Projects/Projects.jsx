import React, { useState } from "react";
import {
    Sparkles,
    Star,
    ArrowUpRight,
    Zap,
    Palette
} from "lucide-react";
import hallPointImg from '/projects/hallpoint.png'
import altPickImg from '/projects/altpick.png'
import jobTrackImg from '/projects/jobtrack.png'
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { useEffect } from "react";

// Mock images for demonstration
// const projects = [
//     {
//         id: 1,
//         title: "HallPoint",
//         description: "HallPoint is a hostel management system where students can manage meal memberships and track activities, while admins oversee requests and upcoming meals through an intuitive dashboard.",
//         briefDescription: "HallPoint streamlines hostel operations by enabling students to manage their meal memberships effortlessly, including purchasing and upgrading options. The system features comprehensive dashboards tailored for students and administrators, offering real-time tracking of meal requests, upcoming meal schedules, and user activities. This centralized platform enhances communication, simplifies meal management, and improves the overall hostel experience for everyone involved.",
//         image: hallPointImg,
//         category: "Full Stack",
//         status: "Live",
//         links: {
//             live: "https://hall-point.web.app/",
//             client: "https://github.com/mdmhrz/hall-point-client",
//         },
//         tech: [
//             "React", "Node.js", "Express.js", "MongoDB", "TailwindCSS",
//             "TanStack Query", "JWT", "Firebase", "Stripe", "SSLCOMMERZ"
//         ],
//         stats: {
//             users: "500+",
//             uptime: "99.9%",
//             features: 25
//         }
//     },
//     {
//         id: 2,
//         title: "AltPick",
//         description: "AltPick is a community-driven platform where users share product recommendations, vote on suggestions, and help others make informed purchasing decisions.",
//         briefDescription: "AltPick is a collaborative product recommendation platform designed to connect users seeking advice with a community of contributors. Users can post product queries, receive tailored recommendations, and vote on the best suggestions. The platform promotes engagement through a transparent voting system, fostering trust and credibility in shared recommendations. With an intuitive interface and real-time updates, AltPick makes discovering the right products faster, easier, and more reliable.",
//         image: altPickImg,
//         category: "Web App",
//         status: "Live",
//         links: {
//             live: "https://altpick-b57eb.web.app/",
//             client: "https://github.com/mdmhrz/alt-pick-client",
//         },
//         tech: [
//             "React", "Node.js", "Express.js", "MongoDB", "JWT",
//             "React-Router", "TailwindCSS", "Axios", "Lottie-Animation"
//         ],
//         stats: {
//             users: "200+",
//             votes: "1.2k",
//             products: 150
//         }
//     },
//     {
//         id: 3,
//         title: "JobTrack",
//         description: "JobTrack is a platform that helps users track job applications, monitor progress, and view analytics through a clean, user-friendly dashboard.",
//         briefDescription: "JobTrack is a job application tracking system designed to keep users organized throughout their career search. It allows users to log and categorize applications, monitor their progress, and view detailed analytics on application trends. With a responsive interface, smooth animations, and an integrated admin panel, JobTrack provides both job seekers and administrators with valuable insights, helping streamline the job-hunting process and improve decision-making.",
//         image: jobTrackImg,
//         category: "Productivity",
//         status: "Live",
//         links: {
//             live: "https://job-track-53365.web.app/",
//             client: "https://github.com/mdmhrz/job-track",
//         },
//         tech: [
//             "React", "React-Router", "React-Icons", "TailwindCSS",
//             "Firebase-Auth", "Framer-motion", "React-Helmet-Async"
//         ],
//         stats: {
//             applications: "50+",
//             companies: "30+",
//             success: "85%"
//         }
//     },
// ];



const Projects = () => {
    const [projects, setProject] = useState([]);
    useEffect(() => {
        fetch('./projects.json').then(res => res.json()).then(result => setProject(result))
    }, [])

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