import { useEffect, useState } from "react";
import { Link } from "react-router"; // Assuming you're using react-router-dom for app routing (if not, you can remove this)
import { Menu, Code2 } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { motion } from "framer-motion";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("banner");

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    const navLinks = [
        { name: "Home", id: "banner" },
        { name: "About", id: "about" },
        { name: "Skills", id: "skills" },
        { name: "Projects", id: "projects" },
        { name: "Contact", id: "contact" },
    ];

    // Detect section in view using IntersectionObserver
    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        if (!sections) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-50% 0px -50% 0px", // Trigger when section is roughly in the middle of viewport
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <section
            id="navbar"
            className="bg-blue-800 dark:bg-black w-full border-b sticky top-0 z-50 shadow-sm"
        >
            <div className="w-11/12 mx-auto max-w-[1920px] py-3 flex items-center justify-between">
                {/* Logo */}
                <Link
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-xl font-bold tracking-tight text-primary flex items-center gap-3"
                    to={`/`}
                >
                    <motion.div
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        className="p-2 bg-blue-600/20 rounded-lg"
                    >
                        <Code2 className="text-blue-400" size={24} />
                    </motion.div>
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white dark:bg-gradient-to-r dark:from-purple-600 dark:to-blue-500">
                        RAZU
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6 items-center">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.id)}
                            className={`transition-all ${activeSection === link.id
                                ? "underline font-bold text-white"
                                : "text-gray-300 hover:text-white"
                                }`}
                        >
                            {link.name}
                        </button>
                    ))}
                    <a
                        href="https://drive.google.com/file/d/1jd16Ah_ky0umhWDrs8sb8jiSpgMrTgIb/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="bg-white dark:bg-gradient-to-r dark:from-purple-700 dark:to-blue-700 dark:text-white text-black px-4 py-2 rounded-sm cursor-pointer">
                            Resume
                        </button>
                    </a>

                    {/* Theme Toggle */}
                    <ModeToggle />
                </nav>

                {/* Mobile Menu */}
                <div className="md:hidden flex items-center gap-2">
                    <ModeToggle />
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu size={20} />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-64">
                            <div className="mt-6 flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <button
                                        key={link.name}
                                        onClick={() => {
                                            scrollToSection(link.id);
                                        }}
                                        className={`ml-6 text-left transition-all ${activeSection === link.id
                                            ? "underline font-bold text-black dark:text-white"
                                            : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                                            }`}
                                    >
                                        {link.name}
                                    </button>
                                ))}
                                <a
                                    href="https://drive.google.com/file/d/1jd16Ah_ky0umhWDrs8sb8jiSpgMrTgIb/view?usp=sharing"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="dark:bg-gradient-to-r dark:from-purple-700 dark:to-blue-700 text-white bg-black ml-6 px-4 py-2 rounded-sm cursor-pointer">
                                        Resume
                                    </button>
                                </a>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </section>
    );
}
