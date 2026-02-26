import { siteConfig } from "@/content/siteData";

export default function Footer() {
    return (
        <footer className="border-t border-border bg-bg py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-fg-muted">
                    © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                    <a
                        href={siteConfig.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-fg-muted hover:text-primary transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href={siteConfig.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-fg-muted hover:text-primary transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-sm text-fg-muted hover:text-primary transition-colors"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}
