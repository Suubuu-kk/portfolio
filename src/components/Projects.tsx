"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const projects = [
    {
        category: "TIME SERIES",
        title: "Sales Forecasting Engine",
        desc: "XGBoost-based demand prediction system for retail optimization.",
        icon: "📈",
        accentFrom: "from-cyan-500/20",
        accentTo: "to-blue-600/5",
        badge: "New"
    },
    {
        category: "CLUSTERING",
        title: "Customer Segmentation",
        desc: "Unsupervised learning for customer persona generation.",
        icon: "🎯",
        accentFrom: "from-purple-500/20",
        accentTo: "to-violet-600/5",
        badge: "Updated"
    },
    {
        category: "DEPLOYMENT",
        title: "Risk Classification API",
        desc: "Real-time loan scoring deployed with Flask & Docker.",
        icon: "🛡️",
        accentFrom: "from-emerald-500/20",
        accentTo: "to-teal-600/5",
        badge: ""
    },
    {
        category: "VISUALIZATION",
        title: "Automated ML Dashboard",
        desc: "Azure ML integrated with Power BI for business insights.",
        icon: "📊",
        accentFrom: "from-orange-500/20",
        accentTo: "to-amber-600/5",
        badge: ""
    }
];

export default function Projects() {
    return (
        <SectionWrapper id="projects">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
                    The latest. <span className="text-[var(--text-muted)]">Take a look at what&apos;s new.</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {projects.map((p, i) => (
                    <motion.a
                        href="#"
                        key={i}
                        className="glass-card flex flex-col overflow-hidden group"
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {/* Gradient Header */}
                        <div className={`h-44 w-full bg-gradient-to-br ${p.accentFrom} ${p.accentTo} flex items-center justify-center relative`}>
                            <span className="text-5xl group-hover:scale-125 transition-transform duration-500">{p.icon}</span>
                            {/* Subtle glow behind icon */}
                            <div className={`absolute w-24 h-24 bg-gradient-to-br ${p.accentFrom} rounded-full blur-2xl opacity-40`} />
                        </div>

                        <div className="p-7 flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-3">
                                <span className="text-[11px] font-semibold text-[var(--accent)] uppercase tracking-wider font-mono">{p.category}</span>
                                {p.badge && (
                                    <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-full uppercase">
                                        {p.badge}
                                    </span>
                                )}
                            </div>
                            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                                {p.title}
                            </h3>
                            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                                {p.desc}
                            </p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </SectionWrapper>
    );
}
