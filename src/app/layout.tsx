import type { Metadata, Viewport } from "next";
import { Figtree, Newsreader } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ClickBurst } from "@/components/ui/click-burst";
import "./globals.css";

const figtreeSans = Figtree({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const newsreaderSerif = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kennethbulaga.dev"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Kenneth Bulaga — Full-Stack Developer",
    template: "%s | Kenneth Bulaga",
  },
  description:
    "Full-Stack Developer shipping JP Connect (7,207 profiles), JP Intrams, and OWWA Region XI CSMR & SPRS reporting platforms with Next.js, TypeScript, and PostgreSQL.",
  keywords: [
    "Kenneth Bulaga",
    "Full-stack Developer",
    "Junior Software Developer",
    "Web Developer",
    "Next.js 16",
    "React 19",
    "Tailwind CSS v4",
    "Supabase",
    "PostgreSQL",
    "Upstash Redis",
    "Davao Developer",
    "JP Connect",
    "OWWA CSMR",
    "Automated Workflows",
  ],
  authors: [{ name: "Kenneth Bulaga", url: "https://github.com/kennethbulaga" }],
  creator: "Kenneth Bulaga",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kennethbulaga.dev",
    title: "Kenneth Bulaga — Full-Stack Developer",
    description:
      "Full-Stack Developer shipping JP Connect (7,207 profiles), JP Intrams, and OWWA Region XI CSMR & SPRS reporting platforms with Next.js, TypeScript, and PostgreSQL.",
    siteName: "Kenneth Bulaga Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Kenneth Bulaga — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenneth Bulaga — Full-Stack Developer",
    description:
      "Full-Stack Developer shipping JP Connect (7,207 profiles), JP Intrams, and OWWA Region XI CSMR & SPRS reporting platforms with Next.js, TypeScript, and PostgreSQL.",
    images: ["/opengraph-image.png"],
    creator: "@kenzodev69",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/logos/kb-logo-dark.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
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
  viewportFit: "cover",
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
          "https://x.com/kenzodev69",
        ],
        knowsAbout: [
          "Next.js",
          "React",
          "TypeScript",
          "PostgreSQL",
          "Supabase",
          "Upstash Redis",
          "Tailwind CSS",
          "Automated Workflows",
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
        className={`${figtreeSans.variable} ${newsreaderSerif.variable} font-sans antialiased`}
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
