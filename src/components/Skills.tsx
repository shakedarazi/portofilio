import Section from "./Section";
import { skillCategories, education } from "@/content/siteData";

export default function Skills() {
    return (
        <Section
            id="skills"
            title="Skills & Education"
            subtitle="Tools and technologies I work with, and academic background."
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((cat) => (
                    <div
                        key={cat.label}
                        className="bg-bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                    >
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                            {cat.label}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {cat.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 rounded-full text-sm font-medium bg-bg-alt text-fg-muted border border-border hover:border-primary/40 hover:text-primary transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Education */}
            {education.length > 0 && (
                <div className="mt-10 flex flex-wrap gap-6 justify-center">
                    {education.map((edu, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-4 bg-bg-card rounded-xl border border-border px-6 py-4 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                        >
                            <span className="text-2xl">🎓</span>
                            <div>
                                <h4 className="text-base font-semibold text-fg">{edu.degree}</h4>
                                <p className="text-sm text-fg-muted">
                                    {edu.school} · <span className="text-primary font-medium">{edu.period}</span>
                                </p>
                                {edu.note && (
                                    <p className="text-xs text-fg-muted mt-1 italic">{edu.note}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </Section>
    );
}
