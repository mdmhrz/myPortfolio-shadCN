import { Link } from "react-router";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle"; // your ModeToggle path
import { Code2 } from "lucide-react";
import { motion } from "framer-motion";
import CustomButton from "../components/ui/CustomButton";

export default function Navbar() {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="w-full border-b bg-background sticky top-0 z-50 shadow-sm">
            <div className="w-11/12 mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-xl font-bold tracking-tight text-primary">
                    <div className="flex items-center gap-3">
                        <motion.div
                            whileHover={{ rotate: 15, scale: 1.1 }}
                            className="p-2 bg-blue-600/20 rounded-lg"
                        >
                            <Code2 className="text-blue-400" size={24} />
                        </motion.div>
                        <span className="text-2xl font-bold text-white ">Razu.dev</span>

                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="text-muted-foreground hover:text-foreground transition"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className="bg-primary px-4 py-2 rounded-sm ">Resume</button>

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
                                        to={link.href}
                                        className="text-base font-medium text-muted-foreground hover:text-foreground"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
