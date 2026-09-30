"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/HomePage/Navbar";
import TopBar from "@/components/HomePage/TopBar";

export default function PageBanner({
  title,
  image = "/Images/hero.png",
  video,
  minHeightClass = "min-h-[420px]",
  titlePaddingClass = "pt-[100px]",
}: {
  title: string;
  image?: string;
  video?: string;
  minHeightClass?: string;
  titlePaddingClass?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = true;
    el.loop = true;
    el.playsInline = true;

    const play = () => {
      el.play().catch(() => undefined);
    };
    const restart = () => {
      if (el.ended || (el.duration && el.currentTime >= el.duration - 0.05)) {
        el.currentTime = 0;
      }
      play();
    };
    const onVisibilityChange = () => {
      if (!document.hidden) restart();
    };
    const onPause = () => {
      if (!el.ended && !document.hidden) restart();
    };

    play();
    el.addEventListener("canplay", play);
    el.addEventListener("ended", restart);
    el.addEventListener("pause", onPause);
    el.addEventListener("stalled", play);
    el.addEventListener("emptied", play);
    document.addEventListener("visibilitychange", onVisibilityChange);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) restart();
      },
      { threshold: 0.01 }
    );
    observer.observe(el);

    return () => {
      el.removeEventListener("canplay", play);
      el.removeEventListener("ended", restart);
      el.removeEventListener("pause", onPause);
      el.removeEventListener("stalled", play);
      el.removeEventListener("emptied", play);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      observer.disconnect();
    };
  }, [video]);

  return (
    <section className={`relative isolate overflow-hidden ${minHeightClass}`}>
      {/* Background Video or Image */}
      {video ? (
        <video
          ref={videoRef}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={image}
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          priority
        />
      )}


      {/* Dark Overlay (image banners only, keeps the video clean) */}
      {!video && <div className="absolute inset-0 -z-10 bg-black/40" />}

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