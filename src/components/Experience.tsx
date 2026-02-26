import Section from "./Section";
import { experience, education } from "@/content/siteData";

export default function Experience() {
    return (
        <Section
            id="experience"
            title="Experience & Education"
            subtitle="Production operations, incident response, and academic foundations."
            alt
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Work Timeline */}
                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">
                        Work Experience
                    </h3>
                    <div className="space-y-8">
                        {experience.map((exp, i) => (
                            <div key={i} className="relative pl-6 border-l-2 border-primary/30">
                                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-bg-alt" />
                                <p className="text-xs font-medium text-primary">{exp.period}</p>
                                <h4 className="text-lg font-semibold text-fg mt-1">{exp.role}</h4>
                                <p className="text-sm text-fg-muted">{exp.company}</p>
                                <ul className="mt-3 space-y-1.5">
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
                </div>

                {/* Education */}
                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">
                        Education
                    </h3>
                    <div className="space-y-6">
                        {education.map((edu, i) => (
                            <div
                                key={i}
                                className="bg-bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                            >
                                <p className="text-xs font-medium text-primary">{edu.period}</p>
                                <h4 className="text-lg font-semibold text-fg mt-1">{edu.degree}</h4>
                                <p className="text-sm text-fg-muted">{edu.school}</p>
                                {edu.note && (
                                    <p className="text-sm text-fg-muted mt-2 italic">{edu.note}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
