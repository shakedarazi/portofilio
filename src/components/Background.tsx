import Section from "./Section";
import { focusPillars, experience } from "@/content/siteData";

export default function Background() {
    return (
        <Section
            id="experience"
            title="Experience & Focus"
            subtitle="Professional background and the engineering disciplines I build expertise in."
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* ── Work Experience ── */}
                <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-7">
                        Work Experience
                    </p>
                    <div className="space-y-8">
                        {experience.map((exp, i) => (
                            <div key={i} className="relative pl-6 border-l-2 border-primary/30">
                                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-bg" />
                                {exp.period && <p className="text-xs font-medium text-primary">{exp.period}</p>}
                                <h4 className="text-base font-semibold text-fg mt-0.5">{exp.role}</h4>
                                <p className="text-sm text-fg-muted">{exp.company}</p>
                                <ul className="mt-2.5 space-y-1.5">
                                    {exp.bullets.map((b, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm text-fg-muted">
                                            <span className="text-primary mt-0.5 shrink-0">▸</span>
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Core Focus Areas ── */}
                <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-7">
                        Core Focus Areas
                    </p>
                    <div className="flex flex-col gap-4">
                        {focusPillars.map((p) => (
                            <div
                                key={p.title}
                                className="rounded-xl border border-border bg-bg-card p-5 hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="text-xl mb-2">{p.icon}</div>
                                <h4 className="text-sm font-semibold text-fg">{p.title}</h4>
                                <p className="text-sm text-fg-muted mt-1.5 leading-relaxed">{p.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </Section>
    );
}
