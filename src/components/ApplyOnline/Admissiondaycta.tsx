import Link from "next/link";

export default function AdmissionDayCta({
  eyebrow,
  text,
  cta,
}: {
  eyebrow: string;
  text: string;
  cta: { label: string; href: string };
}) {
  return (
    <section id="admission-day" className="scroll-mt-28 px-6 py-24 text-center">
      <p className="text-[14px] font-extrabold uppercase tracking-[0.25em] text-[#062A5B]">
        {eyebrow}
      </p>
      {/* serif font: add e.g. EB Garamond via next/font and map it to font-serif */}
      <p className="mx-auto mt-4 max-w-[600px] font-serif text-[22px] font-semibold leading-snug text-[#062A5B]">
        {text}
      </p>
      <Link
        href={cta.href}
        className="mt-8 inline-block bg-[#062A5B] px-8 py-4 text-[13px] uppercase tracking-[0.25em] text-white transition hover:bg-[#B7012C]"
      >
        {cta.label}
      </Link>
    </section>
  );
}