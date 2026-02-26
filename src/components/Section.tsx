interface SectionProps {
    id: string;
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
    alt?: boolean;
}

export default function Section({
    id,
    title,
    subtitle,
    children,
    className = "",
    alt = false,
}: SectionProps) {
    return (
        <section
            id={id}
            className={`py-20 md:py-28 ${alt ? "bg-bg-alt" : "bg-bg"} ${className}`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {title && (
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-fg">{title}</h2>
                        {subtitle && (
                            <p className="mt-3 text-fg-muted max-w-2xl mx-auto">{subtitle}</p>
                        )}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}
