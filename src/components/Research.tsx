"use client";

import SectionWrapper from "./SectionWrapper";

export default function Research() {
    return (
        <SectionWrapper id="research">
            <div className="flex items-end justify-between mb-12 border-b border-white/[0.06] pb-6">
                <h2 className="text-3xl font-bold text-[var(--text-primary)] tracking-tight">Research & Certifications</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
                {/* DeepLearning.AI */}
                <div className="glass-card p-8 flex items-center gap-6 group">
                    <div className="w-16 h-16 bg-[var(--accent)]/10 text-[var(--accent)] rounded-2xl flex items-center justify-center border border-[var(--accent)]/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">DeepLearning.AI</h3>
                        <p className="text-[var(--text-secondary)] text-sm mb-2">Machine Learning Specialization</p>
                        <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">Top 5% Score</span>
                    </div>
                </div>

                {/* Eureka */}
                <div className="glass-card p-8 flex items-center gap-6 group">
                    <div className="w-16 h-16 bg-[var(--accent-secondary)]/10 text-[var(--accent-secondary)] rounded-2xl flex items-center justify-center border border-purple-500/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">Eureka &apos;23</h3>
                        <p className="text-[var(--text-secondary)] text-sm mb-2">Zonalist Winner</p>
                        <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-lg border border-purple-500/20">Awarded</span>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
