import Link from "next/link";

type SidebarLink = { label: string; href: string; active?: boolean };

export default function ApplySidebar({
  title,
  links,
  portalHref,
  portalLabel,
}: {
  title: string;
  links: SidebarLink[];
  portalHref: string;
  portalLabel: string;
}) {
  return (
    // sticky: stays under the navbar while the right column scrolls
    <aside className="lg:sticky lg:top-28">
      <div className="bg-[#B7012C] px-8 pb-28 pt-12 text-white [clip-path:polygon(0_0,100%_0,100%_calc(100%-70px),0_100%)] md:px-10">
        <h2 className="mb-8 text-[clamp(2rem,3vw,2.75rem)] font-extrabold leading-none">
          {title}
        </h2>

        <nav aria-label="Admission">
          <ul>
            {links.map((link) => (
              <li key={link.label} className="border-b border-white">
                <Link
                  href={link.href}
                  className="flex items-center gap-3 py-3 text-[18px] font-bold transition hover:opacity-80"
                >
                  {link.active && (
                    <span aria-hidden className="h-[6px] w-[6px] bg-white" />
                  )}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href={portalHref}
          className="mt-14 inline-block bg-[#062A5B] px-7 py-4 text-[13px] uppercase tracking-[0.25em] transition hover:bg-white hover:text-[#062A5B]"
        >
          {portalLabel}
        </Link>
      </div>
    </aside>
  );
}