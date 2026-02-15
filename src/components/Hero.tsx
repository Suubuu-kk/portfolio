"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="pt-36 pb-24 px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-20"
                >
                    {/* Overline */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded-full px-4 py-1.5 mb-8"
                    >
                        <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                        <span className="text-[var(--accent)] text-xs font-semibold tracking-wider uppercase">Machine Learning Engineer</span>
                    </motion.div>

                    <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6">
                        <span className="text-glow">Architecting</span>
                        <br />
                        <span className="bg-gradient-to-r from-[var(--accent)] via-purple-400 to-[var(--accent-secondary)] bg-clip-text text-transparent">
                            Intelligence
                        </span>
                        <br />
                        <span className="text-[var(--text-muted)]">at Scale.</span>
                    </h1>

                    <p className="text-[var(--text-secondary)] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Transforming raw data into strategic business decisions.
                        From IIT Bombay to Jindal Stainless — building production ML systems.
                    </p>

                    <div className="flex justify-center gap-4">
                        <a href="#projects" className="group relative bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] text-white px-8 py-3.5 rounded-full text-sm font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow">
                            View Projects
                            <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                        <a href="#about" className="text-[var(--text-secondary)] px-8 py-3.5 rounded-full text-sm font-semibold border border-white/10 hover:border-[var(--accent)]/30 hover:text-[var(--accent)] transition-all">
                            Learn more →
                        </a>
                    </div>
                </motion.div>

                {/* Feature Cards Row */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                >
                    {[
                        { icon: "🧠", label: "Deep Learning", sub: "PyTorch • TensorFlow" },
                        { icon: "📊", label: "Analytics", sub: "XGBoost • Scikit-Learn" },
                        { icon: "⚡", label: "Deployment", sub: "FastAPI • Docker • AWS" },
                    ].map((item, i) => (
                        <div key={i} className="glass-card p-6 text-center group cursor-default">
                            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                            <div className="text-[var(--text-primary)] font-semibold text-sm mb-1">{item.label}</div>
                            <div className="text-[var(--text-muted)] text-xs font-mono">{item.sub}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
