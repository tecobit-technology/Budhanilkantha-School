"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
import { latestNews, ourEvents } from "@/lib/site-data";

function NewsSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || latestNews.length < 2) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % latestNews.length),
      6000
    );
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative aspect-[16/11] w-full overflow-hidden bg-[#333]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {latestNews.map((item, i) => (
        <article
          key={item.title}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-700 ${
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

export default function NewsAndEvents() {
  return (
    <section className="bg-[#eeeeee] py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1100px] gap-10 px-4 lg:grid-cols-2 lg:gap-14">
        <Reveal direction="right">
          <h2 className="ca-section-title mb-8 text-ca-navy">Latest News</h2>
          <NewsSlider />
        </Reveal>

        <Reveal direction="left">
          <h2 className="ca-section-title mb-8 text-ca-navy">Our Events</h2>
          <div className="space-y-6">
            {ourEvents.map((event) => (
              <Link
                key={event.title}
                href={event.href}
                className="relative block aspect-[16/11] w-full overflow-hidden"
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
