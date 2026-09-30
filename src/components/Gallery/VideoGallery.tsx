"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { videoItems } from "@/lib/gallery-data";
import Navbar from "../HomePage/Navbar";

import Footer from "../HomePage/Footer";

export default function VideoGallery() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(videoItems.map((v) => v.category)))],
    []
  );
  const [active, setActive] = useState("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? videoItems : videoItems.filter((v) => v.category === active)),
    [active]
  );
  const openVideo = filtered.find((v) => v.id === openId) ?? null;

  useEffect(() => {
    if (!openId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openId]);

  return (
    <>
     <div className="bg-gradient-to-b from-[#a8a8a8] to-white">
         
           <Navbar galleryMode />
          </div>
    <section className="mx-auto max-w-[1200px] px-4 pt-36 pb-10 sm:px-6 md:pt-40 md:pb-14">
      {/* Filter tabs */}
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

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-[#666]">No videos in this category yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((video) => (
            <button
              key={video.id}
              type="button"
              onClick={() => setOpenId(video.id)}
              className="group text-left focus:outline-none"
            >
              <div className="relative aspect-video overflow-hidden rounded-sm bg-[#222]">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/40">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#3aa94f]/90 text-white shadow-lg transition-transform group-hover:scale-110">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-6 w-6">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>
              </div>
              <p className="mt-2 text-[15px] font-semibold text-[#1c2340] group-hover:text-[#3aa94f]">
                {video.title}
              </p>
            </button>
          ))}
        </div>
      )}

      {/* Modal player */}
      {openVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpenId(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpenId(null)}
            className="absolute right-4 top-4 text-3xl leading-none text-white/80 hover:text-white"
          >
            &times;
          </button>

          <div
            className="aspect-video w-full max-w-3xl overflow-hidden rounded-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              key={openVideo.id}
              src={`https://www.youtube.com/embed/${openVideo.youtubeId}?autoplay=1`}
              title={openVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
            
          </div>
          
        </div>
      )}
    </section>
    <section className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 md:py-14">
            {/* ...rest unchanged... */}
          </section>
          <Footer />
    </>
  );
  
}