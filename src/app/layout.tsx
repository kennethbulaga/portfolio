import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Spectral } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ClickBurst } from "@/components/ui/click-burst";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spectralSerif = Spectral({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kennethbulaga.dev"),
  title: {
    default: "Kenneth Bulaga — Full-stack Developer",
    template: "%s | Kenneth Bulaga",
  },
  description:
    "Full-stack developer building web applications and internal tools that turn slow, manual processes into fast, dependable software with Next.js, TypeScript, and PostgreSQL.",
  keywords: [
    "Kenneth Bulaga",
    "Full-stack Developer",
    "Full-Stack Developer",
    "Junior Software Developer",
    "Web Developer",
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
    title: "Kenneth Bulaga — Full-stack Developer",
    description:
      "Full-stack developer building web applications and internal tools that turn slow, manual processes into fast, dependable software with Next.js, TypeScript, and PostgreSQL.",
    siteName: "Kenneth Bulaga Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenneth Bulaga — Full-stack Developer",
    description:
      "Full-stack developer building practical web applications with Next.js, TypeScript, and Supabase.",
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
    { media: "(prefers-color-scheme: light)", color: "#fcfcfb" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f11" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://kennethbulaga.dev/#website",
        url: "https://kennethbulaga.dev",
        name: "Kenneth Bulaga Portfolio",
        inLanguage: "en",
        publisher: { "@id": "https://kennethbulaga.dev/#person" },
      },
      {
        "@type": "Person",
        "@id": "https://kennethbulaga.dev/#person",
        name: "Kenneth Bulaga",
        jobTitle: "Full-stack Developer",
        url: "https://kennethbulaga.dev",
        image: "https://kennethbulaga.dev/profile/avatar.webp",
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
          "https://www.linkedin.com/in/kenneth-bulaga/",
        ],
        knowsAbout: [
          "Next.js",
          "React",
          "TypeScript",
          "PostgreSQL",
          "Supabase",
          "Real-Time Systems",
          "Tailwind CSS",
          "Cloud & Serverless Deployment",
        ],
      },
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
        className={`${geistSans.variable} ${geistMono.variable} ${spectralSerif.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClickBurst />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
