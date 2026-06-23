import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  accent?: "build" | "grow" | "default";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  accent = "default",
}: SectionHeadingProps) {
  const dotColor =
    accent === "build" ? "bg-build" : accent === "grow" ? "bg-grow" : "bg-ink/50";
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center mx-auto max-w-2xl" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="eyebrow">
          <span className={cn("size-1.5 rounded-full", dotColor)} />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-muted leading-relaxed max-w-xl">{description}</p>
      )}
    </Reveal>
  );
}
