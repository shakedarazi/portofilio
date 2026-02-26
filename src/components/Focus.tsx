import Section from "./Section";
import { focusPillars } from "@/content/siteData";

export default function Focus() {
    return (
        <Section
            id="focus"
            title="Core Focus Areas"
            subtitle="Disciplines I build expertise in — backend-first, security-aware, performance-driven."
            alt
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {focusPillars.map((p) => (
                    <div
                        key={p.title}
                        className="bg-bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                    >
                        <div className="text-3xl mb-3">{p.icon}</div>
                        <h3 className="text-lg font-semibold text-fg">{p.title}</h3>
                        <p className="text-sm text-fg-muted mt-1">{p.description}</p>
                        <ul className="mt-4 space-y-1.5">
                            {p.highlights.map((h, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-fg-muted">
                                    <span className="text-primary mt-0.5">▸</span>
                                    {h}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}
