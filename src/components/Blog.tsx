"use client";

import SectionWrapper from "./SectionWrapper";

export default function Blog() {
    return (
        <SectionWrapper id="blog">
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold text-[var(--text-primary)] tracking-tight">Writing</h2>
                <a href="#" className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest hover:text-[var(--accent-secondary)] transition-colors">View Archive</a>
            </div>

            <div className="border-t border-white/[0.06]">
                {[
                    { title: "The Bias-Variance Tradeoff Explained for Executives", date: "Coming Soon", tag: "Strategy" },
                    { title: "Why Your Model AUC Doesn\u0027t Matter to Sales Teams", date: "Coming Soon", tag: "Business" },
                    { title: "From Notebook to Production: A Hitchhiker\u0027s Guide", date: "Coming Soon", tag: "Engineering" }
                ].map((post, i) => (
                    <div key={i} className="group py-8 border-b border-white/[0.06] flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-xl cursor-pointer">
                        <div>
                            <h3 className="text-xl font-bold text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors mb-2">
                                {post.title}
                            </h3>
                            <span className="text-xs font-mono text-[var(--accent)] uppercase tracking-widest">{post.tag}</span>
                        </div>
                        <span className="text-[var(--text-muted)] font-mono text-xs whitespace-nowrap">{post.date}</span>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
