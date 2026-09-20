import Image from "next/image";
import Link from "next/link";
import { introduction } from "@/lib/site-data";

export default function Introduction() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-[1100px] items-start gap-10 px-4 lg:grid-cols-2 lg:gap-14">
        <div className="space-y-5 text-[15px] leading-[1.9] text-[#3d3d3d]">
          {introduction.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}

          <Link
            href={introduction.href}
            className="inline-block rounded-sm bg-[#3aa94f] px-6 py-3 text-[14px] font-bold text-white transition-colors hover:bg-[#3f2c8f]"
          >
            Read More
          </Link>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={introduction.image}
            alt={introduction.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 520px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}