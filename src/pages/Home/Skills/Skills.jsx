import { motion } from "framer-motion";
import { Server } from "lucide-react";
import { Wrench } from "lucide-react";
import { Code } from "lucide-react";
import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaHtml5,
    FaCss3Alt,
    FaFilePowerpoint,
} from "react-icons/fa";
import {
    SiJavascript,
    SiNextdotjs,
    SiTailwindcss,
    SiFigma,
    SiVercel,
    SiFirebase,
    SiMongodb,
    SiExpress,
    SiVite,
    SiReactrouter,
    SiAxios,
    SiJsonwebtokens,
    SiReactquery,
    SiEslint,
    SiPrettier,
    SiAdobephotoshop,
    SiAdobeillustrator,
} from "react-icons/si";

const ShadCNIcon = ({ size = 28, className = "" }) => (
    <svg
        className={className}
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect width="32" height="32" rx="6" fill="currentColor" />
        <text
            x="16"
            y="21"
            textAnchor="middle"
            fontSize="10"
            fontWeight="700"
            fill="white"
            fontFamily="Arial, sans-serif"
            letterSpacing="0.05em"
        >
            ShadCN
        </text>
    </svg>
);

const categories = [
    {
        title: "Frontend",
        icon: <Code className="w-6 h-6" />,
        description: "Technologies for building interactive user interfaces",
        color: "blue",
        gradient: "from-blue-500 to-cyan-500",
        skills: [
            { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
            { name: "React", icon: <FaReact className="text-sky-500" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
            { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
            { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
            { name: "React Query", icon: <SiReactquery className="text-red-500" /> },
            { name: "React Router", icon: <SiReactrouter className="text-pink-600" /> },
            { name: "Vite", icon: <SiVite className="text-purple-400" /> },
            { name: "Axios", icon: <SiAxios className="text-indigo-500" /> },
            { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
            { name: "ShadCN UI", icon: <ShadCNIcon className="text-cyan-500" /> },
        ],
    },
    {
        title: "Backend",
        icon: <Server className="w-6 h-6" />,
        description: "Server-side technologies, databases, and deployment tools",
        color: "green",
        gradient: "from-green-500 to-emerald-700",
        skills: [
            { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
            { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
            { name: "JWT", icon: <SiJsonwebtokens className="text-green-400" /> },
            { name: "Firebase", icon: <SiFirebase className="text-amber-500" /> },
            { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
        ],
    },
    {
        title: "Tools",
        icon: <Wrench className="w-6 h-6" />,
        description: "Design, documentation, testing, and productivity tools",
        color: "purple",
        gradient: "from-purple-500 to-pink-600",
        skills: [
            { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
            { name: "ESLint", icon: <SiEslint className="text-purple-500" /> },
            { name: "Prettier", icon: <SiPrettier className="text-amber-700" /> },
            { name: "PowerPoint", icon: <FaFilePowerpoint className="text-red-600" /> },
            { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-800" /> },
            { name: "Illustrator", icon: <SiAdobeillustrator className="text-orange-500" /> },
        ],
    },
];

const SkillCard = ({ skill }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="relative group"
        >
            <div className="flex flex-col items-center p-6 rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden">
                <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 group-hover:bg-white dark:group-hover:bg-gray-700 transition-colors duration-300">
                        <div className="text-3xl">{skill.icon}</div>
                    </div>
                    <span className="text-sm font-medium text-center text-gray-800 dark:text-gray-200">
                        {skill.name}
                    </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-100 dark:to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="w-full py-24 dark:bg-black">
            <div className="w-11/12 max-w-[1920px] mx-auto ">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="heading">
                        <span className="gradient-text">My Expertise</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        The tools and technologies I use to build modern, scalable web applications
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
                </motion.div>

                {/* Stats Bar */}
                <div className="flex justify-center gap-4 md:gap-6 lg:gap-8 mb-12">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">18+</div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm">Technologies</div>
                    </div>
                    <div className="w-px h-12 bg-gray-300 dark:bg-gray-700" />
                    <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">3</div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm">Specialties</div>
                    </div>
                    <div className="w-px h-12 bg-gray-300 dark:bg-gray-700" />
                    <div className="text-center">
                        <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">100%</div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm">Passion</div>
                    </div>
                </div>

                <div className="space-y-16">
                    {categories.map((category, categoryIdx) => (
                        <motion.div
                            key={categoryIdx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: categoryIdx * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >


                            {/* Category Header */}
                            <div className="relative mb-12">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.gradient} shadow-lg`}>
                                        <div className="text-white">
                                            {category.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white md:mb-2">
                                            {category.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-lg max-w-2xl">
                                            {category.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Decorative Line */}
                                <div className="absolute -bottom-4 left-0 w-full h-px bg-gradient-to-r from-gray-300 dark:from-gray-700 to-transparent" />
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-6 xl:gap-10">
                                {category.skills.map((skill, skillIdx) => (
                                    <SkillCard key={skillIdx} skill={skill} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;