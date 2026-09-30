"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal, { RevealGroup } from "@/components/Reveal";
import { pillars } from "@/lib/site-data";

export default function Pillars() {
  const [active, setActive] = useState(pillars[0].id);
  const activePillar = pillars.find((p) => p.id === active) ?? pillars[0];

  return (
    <section className="bg-[#f5f5f3] py-20 lg:py-24">
      <div className="mx-auto max-w-[1100px] px-4">
        <Reveal>
          <h2 className="ca-eyebrow mb-10 text-center text-ca-navy">
            What We Stand For
          </h2>
        </Reveal>

        <RevealGroup className="grid gap-3 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <button
              key={pillar.id}
              type="button"
              onClick={() => setActive(pillar.id)}
              aria-pressed={active === pillar.id}
              className={`group relative block aspect-[4/3] w-full overflow-hidden rounded-sm text-left transition-all duration-300 ${
                active === pillar.id
                  ? "ring-4 ring-[#B7012C] ring-offset-2 ring-offset-[#f5f5f3]"
                  : "ring-0"
              }`}
            >
              <Image
                src={pillar.image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 360px"
                className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                  active === pillar.id ? "" : "brightness-90"
                }`}
              />
              <div
                className={`absolute inset-0 transition-colors ${
                  active === pillar.id ? "bg-black/20" : "bg-black/45"
                }`}
              />
              <span className="absolute bottom-4 left-5 text-[13px] font-bold uppercase tracking-wide text-white">
                {pillar.label}
              </span>
            </button>
          ))}
        </RevealGroup>

        <Reveal className="mx-auto mt-12 max-w-[720px] text-center">
          <h3 className="ca-section-title mb-4 text-ca-navy">
            {activePillar.heading}
          </h3>
          <p className="ca-body">{activePillar.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
