import Section from "./Section";
import { experience } from "@/content/siteData";

export default function Experience() {
    return (
        <Section
            id="experience"
            title="Work Experience"
            subtitle="Production operations, incident response, and technical leadership."
            alt
        >
            <div className="max-w-3xl mx-auto space-y-6">
                {experience.map((exp, i) => (
                    <div key={i} className="relative pl-6 border-l-2 border-primary/30">
                        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-bg-alt" />
                        <p className="text-xs font-medium text-primary">{exp.period}</p>
                        <h4 className="text-lg font-semibold text-fg mt-1">{exp.role}</h4>
                        <p className="text-sm text-fg-muted">{exp.company}</p>
                        <ul className="mt-2 space-y-1">
                            {exp.bullets.map((b, j) => (
                                <li key={j} className="flex items-start gap-2 text-sm text-fg-muted">
                                    <span className="text-primary mt-0.5">▸</span>
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}
