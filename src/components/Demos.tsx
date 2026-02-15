"use client";

import SectionWrapper from "./SectionWrapper";

export default function Demos() {
    return (
        <SectionWrapper id="demos">
            <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden group">
                {/* Animated glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/5 via-transparent to-[var(--accent-secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-6 relative z-10">
                    Interactive Demos
                </h2>
                <p className="text-[var(--text-secondary)] max-w-xl mx-auto mb-10 text-lg relative z-10">
                    Experience the models live. Interactive web apps to demonstrate algorithmic concepts in real–time.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                    {[
                        "Regression Dashboard",
                        "Customer Clusters",
                        "Model Playground"
                    ].map((demo, i) => (
                        <button key={i} className="bg-white/[0.03] border border-white/[0.08] px-6 py-4 rounded-xl text-[var(--text-secondary)] font-medium hover:text-[var(--accent)] hover:border-[var(--accent)]/30 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] transition-all backdrop-blur-sm">
                            {demo} <span className="text-[var(--text-muted)] block text-xs font-mono mt-1">Try Now →</span>
                        </button>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
