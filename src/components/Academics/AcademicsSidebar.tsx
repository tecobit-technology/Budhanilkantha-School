import Link from "next/link";
<<<<<<< HEAD

export const ACADEMICS_DEPARTMENT_NAV_PAGES = [
  { label: "Nepali Department", href: "/academics/nepali-department" },
  { label: "English Department", href: "/academics/english-department" },
  { label: "Mathematics Department", href: "/academics/mathematics-department" },
  { label: "Social Science Department", href: "/academics/social-science-department" },
  { label: "Integrated Science Department", href: "/academics/integrated-science-department" },
  { label: "Physics Department", href: "/academics/physics-department" },
  { label: "Biology Department", href: "/academics/biology-department" },
  { label: "Chemistry Department", href: "/academics/chemistry-department" },
  {
    label: "Health & Physical Education Department",
    href: "/academics/health-physical-education-department",
  },
  { label: "Computer Science Department", href: "/academics/computer-science-department" },
  { label: "Art Department", href: "/academics/art-department" },
];
=======
import { departments } from "@/lib/academics-data";
>>>>>>> f238de886d48e20a38f258baef05dd59a0ab26bf

export default function AcademicsSidebar({ active }: { active: string }) {
  return (
    <div>
      <h2 className="text-[17px] font-semibold text-[#16253d] mb-4">
        Academics
      </h2>
<<<<<<< HEAD
      <div className="flex flex-col gap-2">
        {ACADEMICS_DEPARTMENT_NAV_PAGES.map((p) => {
          const isActive = p.label === active;
          return (
            <Link
              key={p.href}
              href={p.href}
              className={`block px-4 py-3 text-[14px] rounded transition-colors ${
                isActive
                  ? "bg-[#2f9e44] text-white font-medium"
                  : "border border-neutral-200 text-neutral-700 hover:border-[#2f9e44] hover:text-[#2f9e44]"
              }`}
            >
              {p.label}
=======
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
>>>>>>> f238de886d48e20a38f258baef05dd59a0ab26bf
            </Link>
          );
        })}
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> f238de886d48e20a38f258baef05dd59a0ab26bf
