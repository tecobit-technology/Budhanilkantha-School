"use client";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { photoItems } from "@/lib/gallery-data";
import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import Reveal from "@/components/Reveal";

export default function PhotoGallery() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(photoItems.map((p) => p.category)))],
    []
  );

  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      active === "All"
        ? photoItems
        : photoItems.filter((p) => p.category === active),
    [active]
  );

  const close = () => {
    setLightboxIndex(null);
  };

  const showPrev = () => {
    setLightboxIndex((i) =>
      i === null
        ? null
        : (i - 1 + filtered.length) % filtered.length
    );
  };

  const showNext = () => {
    setLightboxIndex((i) =>
      i === null
        ? null
        : (i + 1) % filtered.length
    );
  };

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }

      if (e.key === "ArrowLeft") {
        showPrev();
      }

      if (e.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", onKey);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxIndex, filtered.length]);

  return (
    <>
      {/* =========================
          NAVBAR
      ========================== */}
      <div className="bg-gradient-to-b from-[#777777] via-[#b5b5b5] to-white">
       <Navbar galleryMode />
      </div>

      {/* =========================
          GALLERY
      ========================== */}
      <section className="mx-auto max-w-[1200px] px-4 pt-36 pb-10 sm:px-6 md:pt-40 md:pb-14">

        {/* Filter Tabs */}
        <Reveal>
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`rounded-sm border px-4 py-1.5 text-sm font-medium transition-colors ${
                  active === cat
                    ? "border-[#3aa94f] bg-[#3aa94f] text-white"
                    : "border-[#ddd] text-[#444] hover:border-[#3aa94f] hover:text-[#3aa94f]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* =========================
            PHOTO GRID
        ========================== */}
        {filtered.length === 0 ? (
          <p className="text-[#666]">
            No photos in this category yet.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
            {filtered.map((photo, i) => (
              <Reveal
                key={photo.id}
                delay={Math.min(i, 11) * 60}
                duration={500}
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="group relative block aspect-square w-full overflow-hidden rounded-sm bg-[#eee] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3aa94f]"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-end bg-black/0 p-2 transition-colors group-hover:bg-black/30">
                    <span className="translate-y-2 text-xs font-medium text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      {photo.alt}
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        )}

        {/* =========================
            LIGHTBOX
        ========================== */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={close}
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              type="button"
              aria-label="Close"
              onClick={close}
              className="absolute right-4 top-4 z-10 text-3xl leading-none text-white/80 transition-colors hover:text-white"
            >
              &times;
            </button>

            {/* Previous Button */}
            <button
              type="button"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-4xl text-white/70 transition-colors hover:text-white sm:left-6"
            >
              &#8249;
            </button>

            {/* Image */}
            <div
              className="relative h-[70vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-4xl text-white/70 transition-colors hover:text-white sm:right-6"
            >
              &#8250;
            </button>

            {/* Image Counter / Caption */}
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-sm text-white/70">
              {filtered[lightboxIndex].alt} —{" "}
              {lightboxIndex + 1} / {filtered.length}
            </p>
          </div>
        )}
      </section>

      {/* =========================
          FOOTER
      ========================== */}
      <Footer />
    </>
  );
}
