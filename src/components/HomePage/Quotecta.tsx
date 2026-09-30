import Link from "next/link";
import Reveal from "@/components/Reveal";
import { quoteCta } from "@/lib/site-data";

export default function QuoteCta() {
  return (
    <section className="bg-white py-20 text-center lg:py-24">
      <Reveal className="mx-auto max-w-[760px] px-4">
        <p className="ca-eyebrow mb-2 text-[#B7012C]">
          Admission
        </p>
        <p className="text-[22px] font-medium italic leading-relaxed text-ca-navy sm:text-[26px]">
          “{quoteCta.quote}”
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {quoteCta.ctas.map((cta, i) => (
            <Link
              key={`${cta.label}-${cta.href}`}
              href={cta.href}
              className={
                i === 1
                  ? "rounded-sm bg-[#B7012C] px-7 py-3.5 text-[13px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-ca-navy"
                  : "rounded-sm border border-ca-navy/40 px-7 py-3.5 text-[13px] font-bold uppercase tracking-wide text-ca-navy transition-colors hover:bg-ca-navy hover:text-white"
              }
            >
              {cta.label}
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
