"use client";

import SectionWrapper from "./SectionWrapper";

export default function Newsletter() {
    return (
        <SectionWrapper id="newsletter">
            <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
                {/* Gradient glow behind */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-gradient-to-b from-[var(--accent)]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4 relative z-10">
                    Get the ML Teaching Syllabus
                </h2>
                <p className="text-[var(--text-secondary)] mb-8 max-w-lg mx-auto relative z-10">
                    Download the complete curriculum I use to teach machine learning to over 150+ students at IIT Bombay.
                </p>

                <div className="flex justify-center relative z-10">
                    <button className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] text-white font-bold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-shadow">
                        Download PDF
                    </button>
                </div>
            </div>
        </SectionWrapper>
    );
}
