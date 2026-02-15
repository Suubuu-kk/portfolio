"use client";

import SectionWrapper from "./SectionWrapper";

export default function Teaching() {
    return (
        <SectionWrapper id="teaching">
            <div className="mb-12">
                <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest mb-2 block">Pedagogy</span>
                <h2 className="text-3xl font-bold text-[var(--text-primary)] tracking-tight">Teaching Experience</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
                {[
                    { code: "MM 656", title: "Simulation & Optimization", students: "50+" },
                    { code: "MM 217", title: "Data Analysis", students: "60+" },
                    { code: "ELECTIVE", title: "Predictive Analytics", students: "40+" }
                ].map((course, i) => (
                    <div key={i} className="glass-card p-6 group">
                        <div className="flex items-center justify-between mb-4">
                            <span className="font-mono text-xs text-[var(--accent)] bg-[var(--accent)]/10 px-2.5 py-1 rounded-lg border border-[var(--accent)]/20">{course.code}</span>
                            <span className="text-[var(--text-muted)] text-xs font-bold">{course.students} Students</span>
                        </div>
                        <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                            {course.title}
                        </h3>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                            Led practical labs and mentored graduate students in applied statistical methods.
                        </p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
