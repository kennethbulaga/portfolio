import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Education } from "@/components/sections/Education";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Credentials & Education",
  description:
    "Verified government certificates of recognition, national hackathon awards, academic degree, and student leadership records.",
  alternates: { canonical: "/credentials" },
};

export default function CredentialsPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Navbar />

      <main
        id="main-content"
        className="flex-1 min-w-0 px-4 sm:px-6 lg:px-10 xl:px-14 py-6 sm:py-10 lg:py-12"
      >
        <div className="max-w-[980px] mx-auto flex flex-col gap-8">
          <div className="pt-2 sm:pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Home</span>
            </Link>
          </div>

          <Education />

          <Footer />
        </div>
      </main>
    </div>
  );
}
