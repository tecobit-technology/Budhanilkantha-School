import Image from "next/image";
import Accordion, { type AccordionItem } from "./Accordion";

export default function ApplyFaq({
  heading,
  image,
  items,
}: {
  heading: string;
  image: string;
  items: AccordionItem[];
}) {
  return (
    <section id="faqs" className="scroll-mt-28 mx-auto max-w-[1248px] px-6 py-16">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,720px)_370px] lg:justify-between">
        <div>
          <h2 className="mb-10 text-[clamp(1.75rem,3.4vw,2.75rem)] font-extrabold uppercase text-[#062A5B]">
            {heading}
          </h2>
          <Accordion items={items} />
        </div>

        <div className="relative hidden aspect-[370/410] w-full overflow-hidden rounded-sm lg:block">
          <Image src={image} alt="" fill sizes="370px" className="object-cover" />
        </div>
      </div>
    </section>
  );
}