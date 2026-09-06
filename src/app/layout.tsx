import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kennethbulaga.dev"),
  title: {
    default: "Kenneth Bulaga — Full-Stack Software Engineer",
    template: "%s | Kenneth Bulaga",
  },
  description:
    "Full-stack software engineer specializing in scalable web architectures, real-time data pipelines, and automated workflows using Next.js, TypeScript, and modern PostgreSQL systems. Serving 5,500+ active users.",
  keywords: [
    "Kenneth Bulaga",
    "Kenzo",
    "Full-Stack Software Engineer",
    "Software Engineer",
    "Full-Stack Engineer",
    "Full-Stack Developer",
    "Web Developer",
    "React Native",
    "Next.js 16",
    "React 19",
    "Tailwind CSS v4",
    "Supabase",
    "PostgreSQL",
    "Davao Developer",
    "JP Connect",
    "OWWA CSMR",
    "Independent Contractor",
  ],
  authors: [{ name: "Kenneth Bulaga", url: "https://github.com/kennethbulaga" }],
  creator: "Kenneth Bulaga",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kennethbulaga.dev",
    title: "Kenneth Bulaga — Full-Stack Software Engineer",
    description:
      "Full-stack software engineer specializing in scalable web architectures, real-time data pipelines, and automated workflows using Next.js, TypeScript, and modern PostgreSQL systems.",
    siteName: "Kenneth Bulaga Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenneth Bulaga — Full-Stack Software Engineer",
    description:
      "Full-stack software engineer building production web and mobile architectures with Next.js, TypeScript, React Native, and Supabase.",
    creator: "@kenzodev69",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kenneth Bulaga",
    alternateName: "Kenzo",
    jobTitle: "Full-Stack Systems Engineer",
    url: "https://kennethbulaga.dev",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Davao City",
      addressCountry: "PH",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "St. John Paul II College of Davao",
    },
    sameAs: [
      "https://github.com/kennethbulaga",
      "https://linkedin.com/in/kennethbulaga",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "High-Concurrency Architecture",
      "Tailwind CSS",
      "Zero-Cost Cloud Infrastructure",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
