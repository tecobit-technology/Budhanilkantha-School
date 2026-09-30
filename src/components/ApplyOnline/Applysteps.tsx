import Image from "next/image";

type Step = { title: string; image: string };

export default function ApplySteps({
  heading,
  items,
}: {
  heading: string;
  items: Step[];
}) {
  return (
    <section id="steps" className="scroll-mt-28 mx-auto max-w-[1248px] px-6 py-16">
      <h2 className="mb-12 text-[clamp(1.75rem,3.4vw,2.75rem)] font-extrabold uppercase text-[#062A5B]">
        {heading}
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
        {items.map((step, i) => {
          const dark = i % 2 === 0; // navy / light-grey alternating
          return (
            <article key={step.title}>
              <div className="relative aspect-[280/195] w-full">
                <Image
                  src={step.image}
                  alt=""
                  fill
                  sizes="(min-width:1024px) 280px, 50vw"
                  className="object-cover"
                />
              </div>

              <div
                className={`px-5 pb-20 pt-6 [clip-path:polygon(0_0,100%_0,100%_calc(100%-40px),0_100%)] ${
                  dark ? "bg-[#062A5B] text-white" : "bg-neutral-100 text-[#062A5B]"
                }`}
              >
                <p className="text-[20px] font-extrabold uppercase leading-tight">
                  Step {i + 1}:
                  <br />
                  {step.title}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}