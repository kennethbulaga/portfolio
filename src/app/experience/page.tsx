import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/sections/Footer";
import { BackHomeLink } from "@/components/ui/back-home-link";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Production software engineering experience across St. John Paul II College of Davao and OWWA Region XI.",
  alternates: { canonical: "/experience" },
  openGraph: {
    type: "website",
    siteName: "Kenneth Bulaga Portfolio",
    title: "Experience | Kenneth Bulaga",
    description:
      "Production software engineering experience across St. John Paul II College of Davao and OWWA Region XI.",
    url: "/experience",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@kenzodev69",
    title: "Experience | Kenneth Bulaga",
    description:
      "Production software engineering experience across St. John Paul II College of Davao and OWWA Region XI.",
  },
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Navbar />

      <main
        id="main-content"
        className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 xl:px-10 pt-4 pb-6 sm:py-8 lg:pt-7 lg:pb-12"
      >
        <div className="max-w-[980px] mx-auto flex flex-col gap-2 sm:gap-4 [&>section]:pt-2 [&>section]:sm:pt-4">
          <div className="lg:pt-1">
            <BackHomeLink />
          </div>

          <Experience />

          <Footer />
        </div>
      </main>
    </div>
  );
}
