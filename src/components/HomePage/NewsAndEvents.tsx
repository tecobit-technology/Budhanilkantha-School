"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { latestNews, ourEvents } from "@/lib/site-data";

/**
 * Auto-advances an index every `delayMs`, but only while the slider is
 * actually visible on screen. Scrolling away pauses it; scrolling back
 * to it resumes. Shared by both sliders.
 */
function useAutoSlide(length: number, delayMs = 6000) {
  const [index, setIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % length), delayMs);
    return () => clearInterval(id);
  }, [inView, length, delayMs]);

  return { index, setIndex, ref };
}

function NewsSlider() {
  const { index, setIndex, ref } = useAutoSlide(latestNews.length);

  return (
    <div
      ref={ref}
      className="relative aspect-[16/11] w-full overflow-hidden bg-[#333]"
    >
      {latestNews.map((item, i) => (
        <article
          key={item.title}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-300 ${
            i === index ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <Image
            src={item.image}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 520px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative flex h-full flex-col gap-2 p-4 text-white">
            <Link href={item.href} className="text-[15px] font-bold hover:underline">
              {item.title}
            </Link>
            <p className="text-[13px] text-white/80">
              Date of publication: {item.publishedOn}
            </p>
            <p className="text-[14px] leading-[1.75] text-justify">{item.excerpt}</p>
          </div>
        </article>
      ))}

      {latestNews.length > 1 && (
        <div className="absolute bottom-3 right-4 flex gap-2">
          {latestNews.map((item, i) => (
            <button
              key={item.title}
              type="button"
              aria-label={`Show news item ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === index ? "bg-white" : "bg-white/45"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function EventsSlider() {
  const { index, setIndex, ref } = useAutoSlide(ourEvents.length);

  return (
    <div
      ref={ref}
      className="relative aspect-[16/11] w-full overflow-hidden bg-[#333]"
    >
      {ourEvents.map((event, i) => (
        <Link
          key={event.title}
          href={event.href}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-300 ${
            i === index ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(max-width: 1024px) 100vw, 520px"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
          <span className="absolute bottom-4 left-5 text-[15px] font-bold text-white">
            {event.title}
          </span>
        </Link>
      ))}

      {ourEvents.length > 1 && (
        <div className="absolute bottom-3 right-4 flex gap-2">
          {ourEvents.map((event, i) => (
            <button
              key={event.title}
              type="button"
              aria-label={`Show event ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === index ? "bg-white" : "bg-white/45"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function NewsAndEvents() {
  return (
    <section className="bg-[#eeeeee] py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1100px] gap-10 px-4 lg:grid-cols-2 lg:gap-14">
        <div>
          <h2 className="mb-8 text-[30px] font-bold text-[#1c2340]">Latest News</h2>
          <NewsSlider />
        </div>

        <div>
          <h2 className="mb-8 text-[30px] font-bold text-[#1c2340]">Our Events</h2>
          <EventsSlider />
        </div>
      </div>
    </section>
  );
}