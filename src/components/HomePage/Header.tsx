"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { contact, navItems, socials } from "@/lib/site-data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-3 lg:py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Images/logo.png"
            alt="Crestwood Academy logo"
            width={48}
            height={48}
            className="h-11 w-11 rounded-sm bg-white/90 p-1 lg:h-12 lg:w-12"
          />
          <span
            className={`font-display text-[15px] font-bold uppercase leading-tight tracking-wide lg:text-[17px] ${
              scrolled ? "text-ca-navy" : "text-white"
            }`}
          >
            Crestwood
            <br />
            Academy
          </span>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href={item.href}
                className={`py-3 text-[13px] font-bold uppercase tracking-wide transition-opacity hover:opacity-70 ${
                  scrolled ? "text-ca-navy" : "text-white"
                }`}
              >
                {item.label}
              </Link>
              {item.children && openMenu === item.label && (
                <div className="absolute left-0 top-full min-w-[220px] rounded-sm bg-white py-2 shadow-xl">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-[13px] text-ca-navy hover:bg-[#f2f2f2] hover:text-[#B7012C]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={`tel:${contact.phones[0].number}`}
            className={`hidden text-[13px] font-semibold lg:block ${
              scrolled ? "text-ca-navy" : "text-white"
            }`}
          >
            {contact.phones[0].number}
          </a>
          <Link
            href="/admission/apply"
            className="rounded-sm bg-[#B7012C] px-5 py-2.5 text-[12px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#7A0620]"
          >
            Apply Now
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className={`flex h-9 w-9 items-center justify-center rounded-sm border xl:hidden ${
              scrolled ? "border-ca-navy/40 text-ca-navy" : "border-white/50 text-white"
            }`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              {mobileOpen ? (
                <path d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4l-6.3 6.3-1.4-1.4L9.2 12 2.9 5.7l1.4-1.4 6.3 6.3 6.3-6.3z" />
              ) : (
                <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="max-h-[75vh] overflow-y-auto bg-white shadow-xl xl:hidden">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-[#eee]">
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 px-4 py-3 text-[14px] font-bold uppercase tracking-wide text-ca-navy"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    type="button"
                    aria-label={`Toggle ${item.label} submenu`}
                    onClick={() =>
                      setMobileSub((s) => (s === item.label ? null : item.label))
                    }
                    className="px-4 py-3 text-ca-navy"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  </button>
                )}
              </div>
              {item.children && mobileSub === item.label && (
                <div className="bg-[#fafafa] pb-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-7 py-2 text-[13px] text-[#444]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex items-center gap-4 px-4 py-4">
            <a href={socials.facebook} aria-label="Facebook" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-ca-navy">
                <path d="M15.1 8.4h-2.2V7c0-.7.5-.9.8-.9h1.4V3.6h-2c-2.3 0-2.8 1.7-2.8 2.8v2H9v2.6h1.3V20h2.6v-9h2l.2-2.6z" />
              </svg>
            </a>
            <a href={socials.youtube} aria-label="YouTube" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-ca-navy">
                <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15.2V8.8l5.2 3.2-5.2 3.2z" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}