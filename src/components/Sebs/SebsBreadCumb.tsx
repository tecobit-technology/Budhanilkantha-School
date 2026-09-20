import Link from "next/link";

export default function SebsBreadcrumb({
  trail,
}: {
  trail: { label: string; href?: string }[];
}) {
  return (
    <div className="bg-neutral-50 border-b border-neutral-100">
      <div className="max-w-[1280px] mx-auto px-6 py-3 flex items-center gap-2 text-[13.5px]">
        {trail.map((item, i) => (
          <span key={item.label} className="flex items-center gap-2">
            {i > 0 && <span className="text-neutral-300">/</span>}
            {item.href ? (
              <Link
                href={item.href}
                className="text-[#2f9e44] hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-neutral-600">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
