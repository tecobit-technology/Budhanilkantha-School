"use client";

import { useEffect, useRef, useState } from "react";
import { embeds } from "@/lib/site-data";

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
          The Facebook feed couldn&apos;t load in this browser. Click here to
          open the page on Facebook.
        </span>
      </a>
    );
  }

  return (
    <div className="h-[430px] w-full overflow-hidden rounded-sm border border-[#e2e6ee] bg-white">
      <iframe
        src={embeds.facebookPage}
        title="Budhanilkantha School Facebook"
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
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Calendar */}
          <div>
            <h2 className="mb-6 text-[24px] font-bold text-[#1c2340]">
              Upcoming Events
            </h2>

            <div className="h-[430px] w-full overflow-hidden rounded-sm border border-[#e2e6ee] bg-white">
              <iframe
                src={embeds.googleCalendar}
                title="Upcoming Events"
                className="h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Facebook */}
          <div>
            <h2 className="mb-6 text-[24px] font-bold text-[#2c4b8f]">
              Facebook
            </h2>

            <FacebookEmbed />
          </div>

          {/* YouTube */}
          <div>
            <h2 className="mb-6 text-[24px] font-bold text-[#d3151f]">
              YouTube
            </h2>

            <div className="h-[430px] w-full overflow-hidden rounded-sm border border-[#e2e6ee] bg-black">
              <iframe
                src={embeds.youtube}
                title="Budhanilkantha School YouTube"
                className="h-full w-full"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}