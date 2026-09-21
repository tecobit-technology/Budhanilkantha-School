"use client";

import { useEffect, useRef, useState } from "react";
import { embeds } from "@/lib/site-data";

/**
 * Facebook's Page Plugin iframe relies on third-party cookies. Browsers with
 * strict cross-site tracking protection (Safari's "Prevent Cross-Site
 * Tracking", most notably on http://localhost) silently block it, leaving a
 * blank/loading box. We give it a few seconds, then fall back to a simple
 * card that links straight to the real page so the section never looks dead.
 */
function FacebookEmbed() {
  const [blocked, setBlocked] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => setBlocked(true), 4000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (blocked) {
    return (
      <a
        href={embeds.facebookPageUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-[430px] w-full flex-col items-center justify-center gap-3 rounded-sm border border-[#e2e6ee] bg-[#f5f7fb] px-6 text-center transition-colors hover:bg-[#eef1f8]"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1877f2] text-2xl font-bold text-white">
          f
        </span>
        <span className="text-[15px] font-bold text-[#1c2340]">
          Budhanilkantha School
        </span>
        <span className="text-[13px] text-[#5b6478]">
          The Facebook feed couldn&apos;t load in this browser. Tap to view
          the page on Facebook instead.
        </span>
      </a>
    );
  }

  return (
    <div className="h-[430px] w-full overflow-hidden rounded-sm border border-[#e2e6ee]">
      <iframe
        src={embeds.facebookPage}
        title="Budhanilkantha School on Facebook"
        className="h-full w-full"
        style={{ border: 0 }}
        scrolling="no"
        allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
        loading="lazy"
        onLoad={() => {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
        }}
      />
    </div>
  );
}

export default function StayConnected() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1100px] gap-10 px-4 lg:grid-cols-3">
        <div>
          <h2 className="mb-8 text-[28px] font-bold text-[#1c2340]">Upcoming Events</h2>
          <div className="h-[430px] w-full overflow-hidden rounded-sm border border-[#e2e6ee]">
            <iframe
              src={embeds.googleCalendar}
              title="Upcoming events calendar"
              className="h-full w-full"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-[28px] font-bold text-[#2c4b8f]">Facebook</h2>
          <FacebookEmbed />
        </div>

        <div>
          <h2 className="mb-8 text-[28px] font-bold text-[#d3151f]">Youtube</h2>
          <div className="aspect-video w-full overflow-hidden rounded-sm bg-black">
            <iframe
              src={embeds.youtube}
              title="Budhanilkantha School on YouTube"
              className="h-full w-full"
              style={{ border: 0 }}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}