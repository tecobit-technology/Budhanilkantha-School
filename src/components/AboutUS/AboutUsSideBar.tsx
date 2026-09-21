import Link from "next/link";

export const ABOUT_US_PAGES = [
  { label: "History", href: "/about-us/history" },
  { label: "School Profile", href: "/about-us/school-profile" },
  { label: "Board Of Trustees (BOT)", href: "/about-us/board-of-trustees" },
  {
    label: "School Management Committee",
    href: "/about-us/school-management-committee",
  },
  {
    label: "Senior Management Team (SMT)",
    href: "/about-us/senior-management-team",
  },
  { label: "FOBS (Parents' Body)", href: "/about-us/fobs" },
  { label: "SEBS (Alumni)", href: "/about-us/sebs" },
];

export default function AboutUsSidebar({ active }: { active: string }) {
  return (
    <div>
      <h2 className="text-[17px] font-semibold text-[#16253d] mb-4">
        About Us
      </h2>
      <div className="flex flex-col gap-2">
        {ABOUT_US_PAGES.map((p) => {
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
            </Link>
          );
        })}
      </div>
    </div>
  );
}
