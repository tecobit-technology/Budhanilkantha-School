"use client";

import Link from "next/link";
import { useState } from "react";
import { contact, loginLinks, socials } from "@/lib/site-data";

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-3.5 w-3.5 shrink-0"
    >
      <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1l-2.2 2.3z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-3.5 w-3.5 shrink-0"
    >
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-3.5 w-3.5 shrink-0"
    >
      <path d="M12 2a7 7 0 0 0-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M15.1 8.4h-2.2V7c0-.7.5-.9.8-.9h1.4V3.6h-2c-2.3 0-2.8 1.7-2.8 2.8v2H9v2.6h1.3V20h2.6v-9h2l.2-2.6z" />
    </svg>
  );
}

function YoutubeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15.2V8.8l5.2 3.2-5.2 3.2z" />
    </svg>
  );
}

export default function TopBar() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div  className="relative z-30 bg-transparent text-white">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-4 py-3 text-[12px] font-semibold lg:flex-row lg:items-center lg:justify-between lg:gap-6">
        
        {/* LEFT SIDE */}
        <div className="space-y-1.5">
          {/* Phone */}
          <p className="flex items-start gap-2">
            <span className="mt-0.5">
              <PhoneIcon />
            </span>

            <span>{contact.accountLine}</span>
          </p>

          {/* Email + Address */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 hover:underline"
            >
              <MailIcon />
              <span>{contact.email}</span>
            </a>

            <span className="flex items-center gap-2">
              <PinIcon />
              <span>{contact.address}</span>
            </span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          
          {/* Apply Online */}
          <Link
            href="/ApplyOnline"
            className="rounded-sm border border-[#3aa94f] px-4 py-2 text-[12px] font-bold text-[#4bd063] transition-colors hover:bg-[#3aa94f] hover:text-white"
          >
            Apply Online
          </Link>

          {/* Login */}
          <div
            className="relative"
            onMouseEnter={() => setLoginOpen(true)}
            onMouseLeave={() => setLoginOpen(false)}
          >
            <button
              type="button"
              aria-expanded={loginOpen}
              onClick={() => setLoginOpen((v) => !v)}
              className="flex items-center gap-1 py-2 font-bold"
            >
              Login

              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3 w-3"
              >
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>

            {loginOpen && (
              <div className="absolute right-0 top-full w-44 overflow-hidden rounded-sm bg-white py-1 text-[13px] font-normal text-[#2b2b2b] shadow-lg">
                {loginLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block px-4 py-2 hover:bg-[#f2f2f2]"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={socials.facebook}
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>

            <a
              href={socials.youtube}
              aria-label="YouTube"
              target="_blank"
              rel="noreferrer"
            >
              <YoutubeIcon className="h-4 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}