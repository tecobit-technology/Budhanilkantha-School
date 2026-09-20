import Image from "next/image";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[560px] lg:min-h-[640px]">
      {/* Hero background */}
      <Image
        src="/Images/hero.jpg"
        alt="Budhanilkantha School campus"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-black/30" />

      {/* Top contact bar */}
      <TopBar />

      {/* Main navigation */}
      <Navbar />

      {/* Hero title */}
      <div className="mx-auto flex max-w-[1200px] items-center px-4 pb-24 pt-36 lg:pt-40">
        <h1 className="text-[40px] font-extrabold leading-tight tracking-tight text-white drop-shadow-md sm:text-[52px] lg:text-[60px]">
          Center of Excellence
        </h1>
      </div>
    </section>
  );
}