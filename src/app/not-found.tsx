import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-8xl sm:text-9xl font-semibold tracking-[-0.03em] text-foreground/10 tabular-nums select-none">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] text-foreground -mt-16 relative text-balance">
            Page Not Found
          </h2>
        </div>

        <p className="text-muted-foreground max-w-md mx-auto text-pretty">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link href="/" className="btn btn-dark">
            <Home size={16} strokeWidth={1.5} />
            <span>Back to Home</span>
          </Link>
          <Link href="/#projects" className="btn btn-light">
            <ArrowLeft size={16} strokeWidth={1.5} />
            <span>View Projects</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
