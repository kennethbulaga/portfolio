import { Navbar, Hero, Projects, Footer } from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Navbar />

      <main className="flex-1 min-w-0 px-4 sm:px-6 lg:px-10 xl:px-14 py-6 sm:py-10 lg:py-12">
        <div className="max-w-[980px] mx-auto flex flex-col gap-14 sm:gap-16">
          <Hero />
          <Projects previewMode />
          <Footer />
        </div>
      </main>
    </div>
  );
}
