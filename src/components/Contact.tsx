"use client";

import SectionWrapper from "./SectionWrapper";

export default function Contact() {
    return (
        <SectionWrapper id="contact">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight">
                        <span className="text-[var(--text-primary)]">Let&apos;s Build</span> <br />
                        <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] bg-clip-text text-transparent">Something Great.</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] text-lg max-w-md leading-relaxed mb-8">
                        I&apos;m always open to discussing new opportunities, research collaborations, or the future of AI.
                    </p>

                    <div className="flex flex-col gap-4">
                        <div>
                            <a href="mailto:kanhaiya.kumar@iitb.ac.in" className="text-xl font-medium text-[var(--accent)] hover:text-[var(--accent-secondary)] transition-colors">
                                kanhaiya.kumar@iitb.ac.in
                            </a>
                        </div>
                        <div>
                            <span className="text-[var(--text-muted)] text-xs font-mono uppercase tracking-widest mb-2 block">Connect</span>
                            <div className="flex gap-4">
                                <a href="https://www.linkedin.com/in/-kanhaiya/" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">LinkedIn</a>
                                <a href="https://github.com/ikanhaiyakr" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">GitHub</a>
                                <a href="https://twitter.com/kanhaiyakumar_" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">Twitter</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-card p-8">
                    <form className="flex flex-col gap-4 relative z-10">
                        <div>
                            <label className="text-[var(--text-muted)] text-xs font-mono uppercase tracking-widest mb-2 block">Name</label>
                            <input type="text" className="w-full bg-white/[0.03] border border-white/[0.08] p-4 rounded-xl text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]/50 focus:shadow-[0_0_20px_rgba(0,212,255,0.08)] transition-all backdrop-blur-sm placeholder:text-[var(--text-muted)]" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="text-[var(--text-muted)] text-xs font-mono uppercase tracking-widest mb-2 block">Message</label>
                            <textarea rows={4} className="w-full bg-white/[0.03] border border-white/[0.08] p-4 rounded-xl text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]/50 focus:shadow-[0_0_20px_rgba(0,212,255,0.08)] transition-all backdrop-blur-sm placeholder:text-[var(--text-muted)]" placeholder="Let&apos;s collaborate..." />
                        </div>
                        <button className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-shadow">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </SectionWrapper>
    );
}
