import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { introduction } from "@/lib/site-data";

export default function Introduction() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-[1100px] items-start gap-10 px-4 lg:grid-cols-2 lg:gap-14">
        <Reveal direction="right" className="ca-body space-y-5">
          {introduction.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}

          <Link
            href={introduction.href}
            className="inline-block rounded-sm bg-[#B7012C] px-6 py-3 text-[14px] font-bold text-white transition-colors hover:bg-[#7A0620]"
          >
            Read More
          </Link>
        </Reveal>

        <Reveal direction="left" className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={introduction.image}
            alt={introduction.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 520px"
            className="object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
