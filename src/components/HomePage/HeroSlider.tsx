import Link from "next/link";
import { heroSlides } from "@/lib/site-data";

const slide = heroSlides[0];

const videoId = slide.video.split("/").pop();
const heroVideoSrc = `${slide.video}?autoplay=1&mute=1&loop=1&playlist=${videoId}&playsinline=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3`;

export default function HeroSlider() {
  return (
    <section className="relative isolate h-screen min-h-[680px] w-full overflow-hidden bg-[#00224A]">
      {/* HERO BACKGROUND VIDEO */}
      <div className="absolute inset-0 overflow-hidden bg-[#00224A]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`,
          }}
        />
        <iframe
          src={heroVideoSrc}
          title={slide.heading}
          allow="autoplay; encrypted-media; picture-in-picture"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[max(56.25vw,100vh)] w-[max(100vw,177.78vh)] -translate-x-1/2 -translate-y-1/2 border-0"
        />
      </div>

      {/* Left gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center px-6 lg:px-[7%]">
        <div className="max-w-[650px] pt-20">
          <p className="ca-eyebrow mb-4 text-white/90">
            {slide.eyebrow}
          </p>

          <h1 className="max-w-[650px] text-[48px] font-extrabold uppercase leading-[0.94] tracking-[-0.02em] text-white sm:text-[60px] lg:text-[76px]">
            {slide.heading}
          </h1>

          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.8] text-white/85">
            {slide.sub}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={slide.primaryCta.href}
              className="bg-[#B7012C] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#8F0123]"
            >
              {slide.primaryCta.label}
            </Link>

            <Link
              href={slide.secondaryCta.href}
              className="border border-white bg-transparent px-7 py-4 text-[12px] font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-white hover:text-[#00224A]"
            >
              {slide.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>

      {/* SCROLL ARROW */}
      <a
        href="#site-main"
        aria-label="Scroll to content"
        className="absolute bottom-35 left-6 z-20 flex h-14 w-14 items-center justify-center text-white lg:left-[7%]"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-12 w-12"
        >
          <path
            d="M12 4v15M5 12l7 7 7-7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      {/* =====================================================
          LARGE DIAGONAL WHITE SECTION
          ===================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[40%] bg-white"
        style={{
          clipPath:
            "polygon(0 100%, 100% 0%, 100% 100%, 0 100%)",
        }}
      />
    </section>
  );
}
