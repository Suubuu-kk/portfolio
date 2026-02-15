"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#teaching", label: "Teaching" },
    { href: "#demos", label: "Demos" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initial = saved || (systemDark ? "dark" : "light");
        setTheme(initial);
        document.documentElement.classList.toggle("dark", initial === "dark");
    }, []);

    const toggleTheme = () => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        localStorage.setItem("theme", next);
        document.documentElement.classList.toggle("dark", next === "dark");
    };

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-[rgba(5,5,16,0.7)] dark:bg-[rgba(5,5,16,0.7)] bg-[rgba(255,255,255,0.7)] backdrop-blur-xl border-b border-white/[0.06] dark:border-white/[0.06] h-[52px]"
                : "bg-transparent h-[64px]"
                }`}
        >
            <div className="max-w-6xl mx-auto h-full flex items-center justify-between px-6 md:px-12">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--accent-secondary)] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
                        K
                    </div>
                </a>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-8 h-full">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-[13px] font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors tracking-wide"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-3">
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="w-8 h-8 rounded-full border border-white/[0.08] dark:border-white/[0.08] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-all"
                        aria-label="Toggle Theme"
                    >
                        {theme === "dark" ? (
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        ) : (
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        )}
                    </button>

                    <a
                        href="#contact"
                        className="hidden sm:inline-flex text-xs font-semibold text-[var(--accent)] border border-[var(--accent)]/30 px-4 py-2 rounded-full hover:bg-[var(--accent)]/10 hover:border-[var(--accent)]/50 transition-all"
                    >
                        Let&apos;s Talk
                    </a>
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16" />
                        </svg>
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-[rgba(5,5,16,0.95)] backdrop-blur-2xl absolute top-[52px] left-0 right-0 border-t border-white/[0.06] z-40"
                    >
                        <div className="flex flex-col px-12 py-12 gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-[22px] font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
