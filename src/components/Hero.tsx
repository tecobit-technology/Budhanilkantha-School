import Image from "next/image";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[560px] lg:min-h-[640px]">
      <Image
        src="/images/hero-campus.jpg"
        alt="Budhanilkantha School campus"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      {/* Readability wash over the photo */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/35 via-black/10 to-black/25" />

      <TopBar />
      <Navbar />

      <div className="mx-auto flex max-w-[1200px] items-center px-4 pb-24 pt-16 lg:pt-28">
        <h1 className="text-[40px] font-extrabold leading-tight tracking-tight text-white drop-shadow-md sm:text-[52px] lg:text-[60px]">
          Center of Excellence
        </h1>
      </div>
    </section>
  );
}