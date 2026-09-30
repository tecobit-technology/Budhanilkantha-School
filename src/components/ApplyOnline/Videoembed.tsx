"use client";

import { useState } from "react";
import { youtubeEmbedUrl, youtubeIdFromUrl } from "@/lib/youtube";

export default function VideoEmbed({
  src,
  title,
  className = "",
}: {
  src: string;
  title: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);

  const id = youtubeIdFromUrl(src);
  const embedUrl = youtubeEmbedUrl(src, playing ? { autoplay: "1" } : {});
  const poster = id
    ? `https://i.ytimg.com/vi/${id}/${posterFailed ? "hqdefault" : "maxresdefault"}.jpg`
    : null;

  if (!embedUrl) {
    return (
      <div className={`aspect-video w-full overflow-hidden bg-neutral-900 ${className}`}>
        <p className="flex h-full items-center justify-center px-6 text-center text-sm text-neutral-300">
          Video unavailable — please check the video link in the site data.
        </p>
      </div>
    );
  }

  return (
    <div className={`relative aspect-video w-full overflow-hidden bg-black ${className}`}>
      {playing ? (
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 h-full w-full"
        >
          {poster && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={poster}
              alt=""
              onError={() => setPosterFailed(true)}
              className="h-full w-full object-cover"
            />
          )}
          <span className="absolute inset-0 bg-black/20 transition group-hover:bg-black/35" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#B7012C] shadow-lg transition group-hover:scale-105 group-hover:bg-[#062A5B]">
            <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-white" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
