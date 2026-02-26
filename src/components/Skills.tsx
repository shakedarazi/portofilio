import Section from "./Section";
import { skillCategories } from "@/content/siteData";

export default function Skills() {
    return (
        <Section
            id="skills"
            title="Technical Skills"
            subtitle="Tools and technologies I work with regularly."
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
        </Section>
    );
}
