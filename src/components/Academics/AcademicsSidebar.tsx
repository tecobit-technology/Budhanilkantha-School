import Link from "next/link";
import { departments } from "@/lib/academics-data";

export default function AcademicsSidebar({ active }: { active: string }) {
  return (
    <div>
      <h2 className="text-[17px] font-semibold text-[#16253d] mb-4">
        Academics
      </h2>
      <div className="flex flex-col">
        {departments.map((d) => {
          const isActive = d.slug === active;
          return (
            <Link
              key={d.slug}
              href={`/academics/${d.slug}`}
              className={`block px-5 py-3 text-[14px] border transition-colors ${
                isActive
                  ? "border-[#2f9e44] bg-[#2f9e44] text-white font-medium"
                  : "border-neutral-200 text-neutral-700 hover:border-[#2f9e44] hover:text-[#2f9e44]"
              }`}
            >
              {d.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}