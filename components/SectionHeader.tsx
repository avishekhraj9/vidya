interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  title,
  subtitle,
  align = "center"
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-8 ${alignment}`}>
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">
        {subtitle ?? "Vidya GS"}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

