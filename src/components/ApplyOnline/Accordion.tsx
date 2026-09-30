"use client";

import Link from "next/link";
import { useState } from "react";

export type AccordionItem = {
  id: string;
  title: string;
  content?: string;
  action?: { label: string; href: string };
};

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="border border-neutral-300 bg-white">
      {items.map((item, i) => {
        const open = openId === item.id;
        return (
          <div
            key={item.id}
            className={i > 0 ? "border-t border-neutral-300" : undefined}
          >
            <button
              type="button"
              aria-expanded={open}
              aria-controls={`acc-${item.id}`}
              onClick={() => setOpenId(open ? null : item.id)}
              className={`flex w-full items-center justify-between gap-6 px-3 py-3 text-left text-[13px] font-extrabold uppercase tracking-[0.06em] transition-colors md:text-[15px] ${
                open
                  ? "bg-[#B7012C] text-white"
                  : "text-[#B7012C] hover:bg-[#B7012C] hover:text-white"
              }`}
            >
              <span>{item.title}</span>

              {/* + / – icon */}
              <span aria-hidden className="relative h-4 w-4 shrink-0">
                <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
                <span
                  className={`absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current transition-transform duration-300 ${
                    open ? "scale-y-0" : ""
                  }`}
                />
              </span>
            </button>

            {/* Animated panel */}
            <div
              id={`acc-${item.id}`}
              role="region"
              aria-hidden={!open}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="space-y-4 px-3 py-5 text-[15px] leading-7 text-neutral-700">
                  {item.content && <p>{item.content}</p>}
                  {item.action && (
                    <Link
                      href={item.action.href}
                      tabIndex={open ? 0 : -1}
                      className="inline-block bg-[#B7012C] px-7 py-3 text-[13px] uppercase tracking-[0.25em] text-white transition hover:bg-[#062A5B]"
                    >
                      {item.action.label}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}