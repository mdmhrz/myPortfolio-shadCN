import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaHtml5,
    FaCss3Alt,
    FaFilePdf,
    FaFileWord,
    FaFileExcel,
    FaFilePowerpoint,  // valid react-icons/fa icon for Acrobat
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
    SiRedux,
    SiReactrouter,
    SiAxios,
    SiJsonwebtokens,
    SiReactquery,
    SiJest,
    SiStorybook,
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
        title: "Core Technologies",
        description: "Fundamental technologies I build with",
        skills: [
            { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
            { name: "React", icon: <FaReact className="text-sky-500" /> },
            { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
        ],
    },
    {
        title: "Frontend Development",
        description: "Technologies for building user interfaces",
        skills: [
            { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
            { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
            { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
            { name: "React Query", icon: <SiReactquery className="text-red-500" /> },
            { name: "React Router", icon: <SiReactrouter className="text-pink-600" /> },
            { name: "Vite", icon: <SiVite className="text-purple-400" /> },
        ],
    },
    {
        title: "Backend & Databases",
        description: "Server-side and data management technologies",
        skills: [
            { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
            { name: "JWT", icon: <SiJsonwebtokens className="text-green-400" /> },
        ],
    },
    {
        title: "DevOps & Deployment",
        description: "Tools for deployment and infrastructure",
        skills: [
            { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
            { name: "Firebase", icon: <SiFirebase className="text-amber-500" /> },
            { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        ],
    },
    {
        title: "UI & Developer Tools",
        description: "Libraries and tools for development workflow",
        skills: [
            { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
            { name: "Axios", icon: <SiAxios className="text-indigo-500" /> },
            { name: "ShadCN UI", icon: <ShadCNIcon className="text-cyan-500" /> },
            { name: "Jest", icon: <SiJest className="text-red-600" /> },
            { name: "Storybook", icon: <SiStorybook className="text-pink-500" /> },
            { name: "ESLint", icon: <SiEslint className="text-purple-500" /> },
            { name: "Prettier", icon: <SiPrettier className="text-amber-700" /> },
        ],
    },
    {
        title: "Additional Tools & Software",
        description: "Professional tools for documentation, design, and presentations",
        skills: [
            { name: "Microsoft Word", icon: <FaFileWord className="text-blue-700" /> },
            { name: "Microsoft Excel", icon: <FaFileExcel className="text-green-600" /> },
            { name: "PowerPoint", icon: <FaFilePowerpoint className="text-red-600" /> },
            { name: "Adobe Photoshop", icon: <SiAdobephotoshop className="text-blue-800" /> },
            { name: "Adobe Illustrator", icon: <SiAdobeillustrator className="text-orange-500" /> },
            { name: "Adobe Acrobat", icon: <FaFilePdf className="text-red-700" /> },
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
            <div className="flex flex-col items-center p-5 rounded-xl border border-border bg-card hover:bg-accent transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden">
                <div className="relative z-10 flex flex-col items-center">
                    <div className="mb-3 text-3xl">{skill.icon}</div>
                    <span className="text-sm font-medium text-center">{skill.name}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:via-primary/10 group-hover:to-primary/5 transition-all duration-500 opacity-0 group-hover:opacity-100" />
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="heading">
                        <span className="gradient-text">Technical Expertise</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        The tools and technologies I use to build modern, scalable web applications
                    </p>
                </motion.div>

                <div className="space-y-20">
                    {categories.map((category, categoryIdx) => (
                        <motion.div
                            key={categoryIdx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: categoryIdx * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold mb-2 relative inline-block">
                                    <span className="relative z-10">{category.title}</span>
                                    <span className="absolute bottom-0 left-0 w-full h-1.5 bg-primary/20 rounded-full -z-0" />
                                </h3>
                                <p className="text-muted-foreground">{category.description}</p>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
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
