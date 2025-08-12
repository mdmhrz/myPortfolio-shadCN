import { Link } from "react-router";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle"; // your ModeToggle path
import { Code2 } from "lucide-react";
import { motion } from "framer-motion";


export default function Navbar() {
    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    const navLinks = [
        { name: "Home", href: "/", id: 'banner' },
        { name: "About", href: "/about", id: 'about' },
        { name: "Skills", href: "/skills", id: 'skills' },
        { name: "Projects", href: "/projects", id: 'projects' },
        { name: "Contact", href: "/contact", id: 'contact' },
    ];

    return (
        <section id="navbar" className="w-full border-b bg-background sticky top-0 z-50 shadow-sm">
            <div className="w-11/12 mx-auto max-w-[1920px] py-3 flex items-center justify-between">
                {/* Logo */}
                <Link to={`/`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-xl font-bold tracking-tight text-primary">
                    <div className="flex items-center gap-3">
                        <motion.div
                            whileHover={{ rotate: 15, scale: 1.1 }}
                            className="p-2 bg-blue-600/20 rounded-lg"
                        >
                            <Code2 className="text-blue-400" size={24} />
                        </motion.div>
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-purple-600 dark:to-blue-500">Razu.dev</span>

                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            // to={link.href}
                            onClick={() => scrollToSection(link.id)}
                            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white  transition"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a href="https://drive.google.com/file/d/1jd16Ah_ky0umhWDrs8sb8jiSpgMrTgIb/view?usp=sharing"
                        target="_blank"><button className="bg-gradient-to-r from-purple-700 to-blue-700 text-white px-4 py-2 rounded-sm cursor-pointer">Resume</button></a>

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
                                    <Link
                                        key={link.name}
                                        // to={link.href}
                                        onClick={() => scrollToSection(link.id)}
                                        className="ml-6 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white  transition"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <a href="https://drive.google.com/file/d/1jd16Ah_ky0umhWDrs8sb8jiSpgMrTgIb/view?usp=sharing"
                                    target="_blank"><button className="bg-gradient-to-r from-purple-700 to-blue-700 text-white ml-6 px-4 py-2 rounded-sm cursor-pointer">Resume</button></a>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </section>
    );
}
