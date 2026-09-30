import Link from "next/link";
import Reveal from "@/components/Reveal";
import { welcome } from "@/lib/site-data";

export default function Welcome() {
  return (
    <section id="site-main" className="bg-white py-20 lg:py-28">
      <Reveal className="mx-auto max-w-[820px] px-4 text-center">
        <p className="ca-eyebrow mb-3 text-[#B7012C]">
          {welcome.eyebrow}
        </p>
        <div className="ca-body space-y-5">
          {welcome.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {welcome.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-bold uppercase tracking-wide text-ca-navy underline decoration-[#B7012C] decoration-2 underline-offset-8 transition-colors hover:text-[#B7012C]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
