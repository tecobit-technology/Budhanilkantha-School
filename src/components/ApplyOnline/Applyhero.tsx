import Image from "next/image";

export default function ApplyHero({
  heading,
  image,
}: {
  heading: string;
  image: string;
}) {
  return (
    <section className="relative min-h-[100svh] overflow-hidden text-white [clip-path:polygon(0_0,100%_0,100%_calc(100%-70px),0_100%)]">
      <Image src={image} alt="" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-[#062A5B]/40" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1248px] items-center px-6 pb-[30svh]">
        <h1 className="text-[clamp(2.25rem,7vw,5.5rem)] font-extrabold uppercase leading-[1.05]">
          {heading}
        </h1>
      </div>
    </section>
  );
}