import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
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

const fungela = localFont({
  src: "../../public/fonts/Angdiva Demo.otf",
  variable: "--font-fungela",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kennethbulaga.dev"),
  title: {
    default: "Kenneth Bulaga — Full-Stack Web & Mobile Developer",
    template: "%s | Kenneth Bulaga",
  },
  description:
    "Full-Stack Web & Mobile Developer building practical web apps, mobile platforms, and institutional systems. Proven production scale with 5,500+ active university users.",
  keywords: [
    "Kenneth Bulaga",
    "Kenzo",
    "Full-Stack Web Developer",
    "Full-Stack Mobile Developer",
    "React Native",
    "Next.js 16",
    "React 19",
    "Tailwind CSS v4",
    "Supabase",
    "Davao Developer",
    "Institutional Software",
    "JP Connect",
    "Freelance Developer",
  ],
  authors: [{ name: "Kenneth Bulaga", url: "https://github.com/kennethbulaga" }],
  creator: "Kenneth Bulaga",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kennethbulaga.dev",
    title: "Kenneth Bulaga — Full-Stack Web & Mobile Developer",
    description:
      "Full-Stack Web & Mobile Developer building practical, accessible platforms and institutional systems. Serving 5,500+ active users.",
    siteName: "Kenneth Bulaga Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenneth Bulaga — Full-Stack Web & Mobile Developer",
    description:
      "Building practical web and mobile applications with Next.js, React Native, and Supabase.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fungela.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
