"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    id?: string;
    className?: string;
}

export default function SectionWrapper({
    children,
    id,
    className = "",
}: SectionWrapperProps) {
    return (
        <section id={id} className={`py-20 md:py-24 relative overflow-hidden ${className}`}>
            <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
}
