import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/siteData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.headline}`,
  description: siteConfig.subtext,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.headline}`,
    description: siteConfig.subtext,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var mode = localStorage.getItem('theme');
                  if (mode === 'dark' || (!mode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-bg text-fg`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
