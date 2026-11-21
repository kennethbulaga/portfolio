import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/sections/Navbar";
import { Projects } from "@/components/sections/Projects";
import { Footer } from "@/components/sections/Footer";
import { flagshipProjects, shippingSoonProjects } from "@/data/portfolio";

interface SystemDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [
    ...flagshipProjects.map((p) => ({ slug: p.id })),
    ...shippingSoonProjects.map((p) => ({ slug: p.id })),
  ];
}

export async function generateMetadata({
  params,
}: SystemDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const flagship = flagshipProjects.find((p) => p.id === slug);
  const upcoming = shippingSoonProjects.find((p) => p.id === slug);
  const item = flagship || upcoming;

  if (!item) {
    return { title: "System Not Found" };
  }

  const description = flagship ? flagship.description : upcoming!.description;

  return {
    title: item.title,
    description,
    alternates: { canonical: `/systems/${slug}` },
    openGraph: {
      type: "website",
      siteName: "Kenneth Bulaga Portfolio",
      title: `${item.title} | Kenneth Bulaga`,
      description,
      url: `/systems/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@kenzodev69",
      title: `${item.title} | Kenneth Bulaga`,
      description,
    },
  };
}

export default async function SystemDetailPage({
  params,
}: SystemDetailPageProps) {
  const { slug } = await params;
  const exists =
    flagshipProjects.some((p) => p.id === slug) ||
    shippingSoonProjects.some((p) => p.id === slug);

  if (!exists) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Navbar />

      <main
        id="main-content"
        className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 xl:px-10 pt-4 pb-6 sm:py-8 lg:pt-7 lg:pb-12"
      >
        <div className="max-w-[980px] mx-auto flex flex-col gap-10 sm:gap-12">
          <Projects projectId={slug} />
          <Footer />
        </div>
      </main>
    </div>
  );
}
