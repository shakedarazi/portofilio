import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { projects } from "@/content/siteData";

export default function Projects() {
    return (
        <Section id="projects" className="pb-12 md:pb-16">
            <div className="text-center mb-12">
                <h2 className="text-2xl font-semibold text-fg tracking-tight">my side projects</h2>
                <p className="mt-2 text-lg text-fg-muted max-w-2xl mx-auto">
                    part of my works that reflect the way I think, and how I approach building software systems.
                </p>
            </div>

            {/* Mobile / tablet: single grid column. Desktop: 3 independent flex columns */}
            <div className="hidden lg:flex gap-6">
                {[0, 1, 2].map((col) => (
                    <div key={col} className="flex flex-col gap-6 flex-1">
                        {projects
                            .filter((_, i) => i % 3 === col)
                            .map((p) => (
                                <ProjectCard key={p.title} project={p} />
                            ))}
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-6 lg:hidden">
                {projects.map((p) => (
                    <ProjectCard key={p.title} project={p} />
                ))}
            </div>

        </Section>
    );
}
