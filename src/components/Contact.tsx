"use client";

import Section from "./Section";
import { siteConfig } from "@/content/siteData";

function MapPinIcon() {
    return (
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
    );
}

function MailIcon() {
    return (
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
    );
}

export default function Contact() {
    return (
        <Section
            id="contact"
            title="Get in Touch"
            subtitle="Have a project idea, or just want to connect? Reach out."
            alt
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left — Info */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold text-fg mb-4">Contact Information</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <MailIcon />
                                <div>
                                    <p className="text-sm text-fg-muted">Email</p>
                                    <a
                                        href={`mailto:${siteConfig.email}`}
                                        className="text-sm font-medium text-fg hover:text-primary transition-colors"
                                    >
                                        {siteConfig.email}
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPinIcon />
                                <div>
                                    <p className="text-sm text-fg-muted">Location</p>
                                    <p className="text-sm font-medium text-fg">{siteConfig.location}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                <div>
                                    <p className="text-sm text-fg-muted">LinkedIn</p>
                                    <a
                                        href={siteConfig.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-medium text-fg hover:text-primary transition-colors"
                                    >
                                        linkedin.com/in/shakedarazi
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <div>
                                    <p className="text-sm text-fg-muted">GitHub</p>
                                    <a
                                        href={siteConfig.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-medium text-fg hover:text-primary transition-colors"
                                    >
                                        github.com/shakedArazi
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <a
                            href={`mailto:${siteConfig.email}`}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors"
                        >
                            <MailIcon />
                            Send an Email Directly
                        </a>
                    </div>
                </div>

                {/* Right — Form (visual only) */}
                <div className="bg-bg-card rounded-xl border border-border p-6">
                    <h3 className="text-lg font-semibold text-fg mb-4">Send a Message</h3>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-4"
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-fg-muted mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your name"
                                className="w-full px-4 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-fg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-fg-muted mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-fg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-fg-muted mb-1">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                placeholder="What's this about?"
                                className="w-full px-4 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-fg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-fg-muted mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                placeholder="Your message..."
                                className="w-full px-4 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-fg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </Section>
    );
}
