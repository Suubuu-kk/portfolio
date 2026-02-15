"use client";

const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/kanhaiyakumar_" },
    { name: "GitHub", href: "https://github.com/ikanhaiyakumar" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/-kanhaiya/" },
];

export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/[0.06]">
            <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="text-[var(--text-primary)] font-semibold">Kanhaiya Kumar</p>
                    <p className="text-[var(--text-muted)] text-sm mt-1">
                        Architecting Intelligence at Scale.
                    </p>
                </div>

                <div className="flex gap-6">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors text-sm font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
