import Image from "next/image";
import { siteConfig } from "@/content/siteData";

export default function Hero() {
    return (
        <section id="about" className="pt-28 pb-20 md:pt-36 md:pb-28 bg-bg">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
                {/* Left column */}
                <div className="flex-1 text-center md:text-left">
                    {/* Badge */}
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        {siteConfig.badge}
                    </span>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-fg">
                        {siteConfig.headline}{" "}
                        <span className="text-primary">{siteConfig.headlineAccent}</span>
                    </h1>

                    {/* Subtext */}
                    <p className="mt-6 text-lg text-fg-muted max-w-xl leading-relaxed">
                        {siteConfig.subtext}
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                        <a
                            href="#projects"
                            className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
                        >
                            View Projects
                        </a>
                        <a
                            href={siteConfig.cvUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-lg border border-border text-fg font-medium hover:bg-bg-alt transition-colors"
                        >
                            Download CV (PDF)
                        </a>
                    </div>
                </div>

                {/* Right column — profile image */}
                <div className="flex-shrink-0">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-2 border-border">
                        <Image
                            src={siteConfig.profileImage}
                            alt={`${siteConfig.name} profile photo`}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
