
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navItems, ourEvents, socials } from "@/lib/site-data";

const CRIMSON = "bg-[#B7012C] hover:bg-[#7A0620]";

function SearchIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" strokeLinecap="round" />
    </svg>
  );
}

function BurgerIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-7 w-7"
    >
      <path d="M2 6h20M2 12h20M2 18h20" />
    </svg>
  );
}

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="flex items-center gap-3"
      aria-label="Crestwood Academy home"
    >
      <Image
        src="/Images/logo.png"
        alt="Crestwood Academy logo"
        width={48}
        height={48}
        className="h-11 w-11 rounded-sm bg-white/90 p-1"
      />

      <span className="border-l border-white/60 pl-3 font-display text-[17px] font-semibold uppercase leading-[1.1] tracking-[0.06em] text-white">
        Crestwood
        <br />
        Academy
      </span>
    </Link>
  );
}

export default function Navbar({
  galleryMode = false,
}: {
  galleryMode?: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const prev = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  const promo = ourEvents?.[0];

  const socialBtn =
    "flex h-9 w-9 items-center justify-center rounded-full border border-white/70 text-white transition-colors hover:bg-white hover:text-[#00224A]";

  return (
    <>
      {/* =========================
          MAIN NAVBAR
      ========================== */}
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          scrolled
            ? "bg-[#00224A] shadow-md"
            : galleryMode
              ? "bg-gradient-to-b from-[#777777] via-[#b5b5b5]/90 to-transparent"
              : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 lg:pl-[7%] lg:pr-[calc(4rem+5%)]">
          <Logo />

          <div className="flex items-center gap-3">
            <Link
              href="/ApplyOnline"
              className={`${CRIMSON} px-6 py-3 text-[13px] font-medium uppercase tracking-[0.2em] text-white transition-colors sm:px-8`}
            >
              Apply Now
            </Link>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 items-center justify-center border border-white/50 text-white lg:hidden"
            >
              <BurgerIcon />
            </button>
          </div>
        </div>
      </header>

      {/* =========================
          SLIDING MENU
      ========================== */}
      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-screen transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          open
            ? "translate-x-0"
            : "translate-x-full lg:translate-x-[calc(100%_-_4rem)]"
        }`}
      >
        {/* =========================
            MENU RAIL
        ========================== */}
        <div
          className={`relative hidden w-16 shrink-0 flex-col items-center text-white transition-colors duration-500 lg:flex ${
            open ? "bg-[#00224A]/60" : "bg-[#00224A]"
          }`}
        >
          <button
            type="button"
            aria-label="Search"
            onClick={() => {
              setOpen(true);

              setTimeout(() => {
                searchRef.current?.focus();
              }, 550);
            }}
            className={`mt-5 p-2 transition-opacity hover:opacity-70 ${
              open ? "pointer-events-none opacity-0" : ""
            }`}
          >
            <SearchIcon className="h-[18px] w-[18px]" />
          </button>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="my-auto flex flex-col items-center gap-1 transition-opacity hover:opacity-70"
          >
            <BurgerIcon />

            <span className="text-[9px] font-semibold uppercase tracking-[0.15em]">
              Menu
            </span>
          </button>
        </div>

        {/* =========================
            MENU CONTENT
        ========================== */}
        <div
          aria-hidden={!open}
          className={`relative flex-1 overflow-hidden bg-[#00224A] ${
            open ? "visible" : "invisible"
          }`}
          style={{
            transitionProperty: "visibility",
            transitionDuration: "0s",
            transitionDelay: open ? "0s" : "0.5s",
          }}
        >
          {/* Photo */}
          <Image
            src="/Images/school.png"
            alt=""
            fill
            sizes="100vw"
            className="hidden object-cover lg:block"
          />

          <div className="absolute inset-0 bg-[#00224A]/70 lg:bg-[#00224A]/75" />

          <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-[#00224A] lg:block" />

          <div className="relative h-full overflow-y-auto">
            <div className="flex min-h-full flex-col px-5 py-6 lg:px-[5%]">
              {/* =========================
                  MENU TOP ROW
              ========================== */}
              <div className="mb-8 flex items-center justify-between lg:mb-12">
                <Logo onClick={close} />

                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={close}
                  className="flex h-9 w-9 items-center justify-center border border-white/70 text-white transition-colors hover:bg-white hover:text-[#00224A]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4"
                  >
                    <path d="M5 5l14 14M19 5 5 19" />
                  </svg>
                </button>
              </div>

              {/* =========================
                  DESKTOP NAVIGATION
              ========================== */}
              <nav
                className="hidden gap-x-8 lg:grid"
                style={{
                  gridTemplateColumns: `repeat(${Math.min(
                    navItems.length,
                    5
                  )}, minmax(0, 1fr))`,
                }}
              >
                {navItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      onClick={close}
                      className="mb-5 block font-display text-[22px] font-extrabold uppercase tracking-wide text-white transition-opacity hover:opacity-80"
                    >
                      {item.label}
                    </Link>

                    <ul>
                      {item.children?.map((child, i) => (
                        <li
                          key={`${item.label}-${child.href}-${i}`}
                          className="border-b border-white/30"
                        >
                          <Link
                            href={child.href}
                            onClick={close}
                            className="block py-2.5 text-[14px] text-white transition-opacity hover:opacity-70"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>

              {/* =========================
                  MOBILE NAVIGATION
              ========================== */}
              <nav className="lg:hidden">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-white/20"
                  >
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={close}
                        className="flex-1 py-3.5 font-display text-[18px] font-bold uppercase tracking-wide text-white"
                      >
                        {item.label}
                      </Link>

                      {item.children && (
                        <button
                          type="button"
                          aria-label={`Toggle ${item.label} submenu`}
                          onClick={() =>
                            setMobileSub((s) =>
                              s === item.label ? null : item.label
                            )
                          }
                          className="p-3 text-white"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className={`h-5 w-5 transition-transform ${
                              mobileSub === item.label
                                ? "rotate-180"
                                : ""
                            }`}
                          >
                            <path d="M7 10l5 5 5-5z" />
                          </svg>
                        </button>
                      )}
                    </div>

                    {item.children && mobileSub === item.label && (
                      <ul className="pb-3 pl-3">
                        {item.children.map((child, i) => (
                          <li key={`${item.label}-${child.href}-${i}`}>
                            <Link
                              href={child.href}
                              onClick={close}
                              className="block py-2 text-[14px] text-white/85"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </nav>

              {/* =========================
                  BOTTOM ROW
              ========================== */}
              <div className="mt-auto flex flex-col gap-8 pt-10 lg:flex-row lg:items-end lg:justify-between">
                {promo ? (
                  <Link
                    href={promo.href}
                    onClick={close}
                    className="hidden w-[230px] text-white lg:block"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
                      <Image
                        src={promo.image}
                        alt=""
                        fill
                        sizes="230px"
                        className="object-cover"
                      />
                    </div>

                    <p className="mt-4 font-display text-[20px] font-bold">
                      {promo.title}
                    </p>
                  </Link>
                ) : (
                  <span />
                )}

                <div className="flex flex-col items-stretch gap-6 lg:items-end">
                  {/* Socials */}
                  <div className="flex items-center gap-4">
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-white">
                      Follow us
                    </span>

                    <a
                      href={socials.facebook}
                      aria-label="Facebook"
                      target="_blank"
                      rel="noreferrer"
                      className={socialBtn}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path d="M15.1 8.4h-2.2V7c0-.7.5-.9.8-.9h1.4V3.6h-2c-2.3 0-2.8 1.7-2.8 2.8v2H9v2.6h1.3V20h2.6v-9h2l.2-2.6z" />
                      </svg>
                    </a>

                    <a
                      href={socials.youtube}
                      aria-label="YouTube"
                      target="_blank"
                      rel="noreferrer"
                      className={socialBtn}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15.2V8.8l5.2 3.2-5.2 3.2z" />
                      </svg>
                    </a>
                  </div>

                  {/* Search */}
                  <form
                    action="/search"
                    method="get"
                    className="flex items-end gap-4 lg:w-[420px]"
                  >
                    <span className="font-display text-[22px] font-extrabold uppercase tracking-wide text-white">
                      Search
                    </span>

                    <div className="flex flex-1 items-center border-b border-white/50">
                      <input
                        ref={searchRef}
                        type="text"
                        name="q"
                        placeholder="Keyword"
                        className="w-full bg-transparent py-2 text-[14px] text-white placeholder:text-white/50 focus:outline-none"
                      />

                      <button
                        type="submit"
                        aria-label="Submit search"
                        className="text-white/70 hover:text-white"
                      >
                        <SearchIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </form>

                  {/* Apply */}
                  <Link
                    href="/ApplyOnline"
                    onClick={close}
                    className={`${CRIMSON} px-10 py-4 text-center text-[13px] font-medium uppercase tracking-[0.25em] text-white transition-colors lg:self-end`}
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

