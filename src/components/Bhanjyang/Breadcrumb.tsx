import Link from "next/link";

type Crumb = {
  label: string;
  href?: string; // omit href on the final/current crumb
};

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-gray-100 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-3 text-sm">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <span key={`${item.label}-${i}`}>
              {item.href && !isLast ? (
                <Link href={item.href} className="text-green-700 hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-gray-500" : "text-green-700"}>
                  {item.label}
                </span>
              )}
              {!isLast && <span className="mx-2 text-gray-400">/</span>}
            </span>
          );
        })}
      </div>
    </nav>
  );
}