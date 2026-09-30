import Accordion, { type AccordionItem } from "./Accordion";

export default function ImportantDates({
  heading,
  items,
}: {
  heading: string;
  items: AccordionItem[];
}) {
  return (
    <section id="dates" className="scroll-mt-28 mx-auto max-w-[1248px] px-6 py-20">
      <h2 className="mb-10 text-[clamp(1.75rem,3.4vw,2.75rem)] font-extrabold uppercase text-[#062A5B]">
        {heading}
      </h2>
      <Accordion items={items} />
    </section>
  );
}