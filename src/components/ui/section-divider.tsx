export function SectionDivider() {
  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
      <div className="relative w-full border-t border-border/50">
        <span className="absolute -top-[7px] -left-1 font-mono text-[10px] text-muted-foreground/40 select-none leading-none">
          +
        </span>
        <span className="absolute -top-[7px] -right-1 font-mono text-[10px] text-muted-foreground/40 select-none leading-none">
          +
        </span>
      </div>
    </div>
  );
}
