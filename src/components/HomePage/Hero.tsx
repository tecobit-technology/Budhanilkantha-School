import Image from "next/image";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[950px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Images/hero.jpg"
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

      {/* Hero Content */}
      <div className="mx-auto max-w-[1200px] px-6 pt-[220px]">
  <h1 className="text-[28px] font-bold leading-tight text-white drop-shadow-lg md:text-[36px] lg:text-[48px]">
    Center of Excellence
  </h1>
</div>
    </section>
  );
}