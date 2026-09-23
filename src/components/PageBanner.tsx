import Image from "next/image";
import Navbar from "@/components/HomePage/Navbar";
import TopBar from "@/components/HomePage/TopBar";

export default function PageBanner({
  title,
  image = "/Images/hero.jpg",
  minHeightClass = "min-h-[420px]",
  titlePaddingClass = "pt-[100px]",
}: {
  title: string;
  image?: string;
  minHeightClass?: string;
  titlePaddingClass?: string;
}) {
  return (
    <section className={`relative isolate overflow-hidden ${minHeightClass}`}>
      {/* Background Image */}
      <Image
        src={image}
        alt="Budhanilkantha School campus"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/40" />

      {/* Top Contact Bar */}
      <TopBar />

      {/* Navigation */}
      <Navbar />

      {/* Title */}
      <div className={`mx-auto max-w-[1200px] px-6 ${titlePaddingClass}`}>
        <h1 className="text-[28px] font-bold leading-tight text-white drop-shadow-lg md:text-[36px] lg:text-[48px]">
          {title}
        </h1>
      </div>
    </section>
  );
}