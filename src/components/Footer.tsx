import { siteConfig } from "@/content/siteData";

export default function Footer() {
    return (
        <footer className="border-t border-border bg-bg">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-center">
                <span className="text-sm text-fg-muted tracking-wide">
                    {siteConfig.name}
                </span>
            </div>
        </footer>
    );
}
