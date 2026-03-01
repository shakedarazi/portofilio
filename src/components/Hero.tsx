import Image from "next/image";
import { siteConfig } from "@/content/siteData";

export default function Hero() {
    return (
        <section id="about" className="pt-28 pb-20 md:pt-36 md:pb-28 bg-bg">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
                {/* Left column */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight text-fg">
                        Shaked Arazi
                    </h1>

                    <p className="mt-4 text-lg text-fg-muted max-w-xl leading-relaxed">
                        Software engineer focused on backend systems.
                        I build services and care about how they actually behave — how they execute, fail, and recover — designing them to be observable, predictable, and easy to reason about.
                        Currently completing a B.Sc. in Computer Science.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
                        <a
                            href="#projects"
                            className="px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors"
                        >
                            View Projects
                        </a>
                        <a
                            href="#experience"
                            className="px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors"
                        >
                            View Background
                        </a>
                    </div>
                </div>

                {/* Right column — profile image */}
                <div className="flex-shrink-0">
                    <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden ring-1 ring-border">
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
