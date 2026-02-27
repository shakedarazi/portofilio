import Image from "next/image";
import { siteConfig } from "@/content/siteData";

export default function Hero() {
    return (
        <section id="about" className="pt-28 pb-20 md:pt-36 md:pb-28 bg-bg">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
                {/* Left column */}
                <div className="flex-1 text-center md:text-left">
                    {/* Badge */}
                    {siteConfig.badge && (
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
                            {siteConfig.badge}
                        </span>
                    )}

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-fg">
                        {siteConfig.headline}{" "}
                        <span className="text-primary">{siteConfig.headlineAccent}</span>
                    </h1>

                    {/* Subtext */}
                    <p className="mt-6 text-2xl text-fg-muted max-w-xl leading-relaxed">
                        Software engineer focused on backend systems.
                        <br />
                        I build services and care about how they actually behave — how they execute, fail, and recover — designing them to be observable, predictable, and easy to reason about.
                        <br />
                        Currently completing a B.Sc. in Computer Science.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                        <a
                            href="#projects"
                            className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
                        >
                            View Projects
                        </a>

                    </div>
                </div>

                {/* Right column — profile image */}
                <div className="flex-shrink-0">
                    <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden shadow-md ring-2 ring-border/25">
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
