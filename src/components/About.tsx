"use client";

import SectionWrapper from "./SectionWrapper";

export default function About() {
    return (
        <SectionWrapper id="about">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">
                {/* Bio Card - Spans 2 */}
                <div className="glass-card p-8 md:col-span-2 lg:row-span-2 flex flex-col justify-between">
                    <div>
                        <span className="text-[var(--accent)] font-mono text-xs uppercase tracking-widest mb-4 block">Bio</span>
                        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6 leading-tight">
                            More than a researcher. <br />
                            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] bg-clip-text text-transparent">I am a product builder.</span>
                        </h2>
                        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                            With an M.Tech from IIT Bombay and 2.5 years at Jindal Stainless, I specialize in applied analytics
                            and machine learning. My work isn&apos;t just about training models—it&apos;s about deploying
                            robust systems that solve real business problems at scale.
                        </p>
                    </div>
                    <div className="flex gap-2 mt-4 flex-wrap">
                        {["Python", "PyTorch", "SQL", "Docker", "AWS"].map((skill) => (
                            <span key={skill} className="bg-[var(--accent)]/10 text-[var(--accent)] px-3 py-1 text-xs rounded-full border border-[var(--accent)]/20 font-mono">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Stat Card */}
                <div className="glass-card p-8 flex flex-col justify-center items-center text-center group">
                    <span className="text-6xl font-bold bg-gradient-to-b from-[var(--accent)] to-[var(--accent-secondary)] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">150+</span>
                    <span className="text-[var(--text-muted)] font-mono text-xs uppercase tracking-widest">Students Mentored</span>
                </div>

                {/* Experience Timeline */}
                <div className="glass-card p-8">
                    <span className="text-[var(--accent)] font-mono text-xs uppercase tracking-widest mb-6 block">Experience</span>
                    <ul className="space-y-6">
                        <li className="relative pl-6 border-l border-[var(--accent)]/30">
                            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-[var(--accent)] rounded-full shadow-lg shadow-cyan-500/50" />
                            <div className="text-[var(--text-primary)] font-bold text-sm">Jindal Stainless</div>
                            <div className="text-[var(--text-muted)] text-xs">2.5 Years • Present</div>
                        </li>
                        <li className="relative pl-6 border-l border-[var(--accent-secondary)]/30">
                            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-[var(--accent-secondary)] rounded-full shadow-lg shadow-purple-500/50" />
                            <div className="text-[var(--text-primary)] font-bold text-sm">M.Tech</div>
                            <div className="text-[var(--text-muted)] text-xs">IIT Bombay</div>
                        </li>
                    </ul>
                </div>

                {/* Core Stack */}
                <div className="glass-card p-8 md:col-span-2 flex items-center justify-between flex-wrap gap-4">
                    <span className="text-[var(--accent)] font-mono text-xs uppercase tracking-widest">Core Stack</span>
                    <div className="flex gap-6 text-[var(--text-secondary)] font-semibold text-sm flex-wrap">
                        {["TensorFlow", "Scikit-Learn", "FastAPI", "Docker", "AWS"].map((tech, i) => (
                            <span key={i} className="hover:text-[var(--accent)] transition-colors cursor-default">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
