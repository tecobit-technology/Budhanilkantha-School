const ID_RE = /^[A-Za-z0-9_-]{11}$/;

export function youtubeIdFromUrl(url: string): string | null {
  if (!url) return null;
  const value = url.trim();

  if (ID_RE.test(value)) return value;

  let parsed: URL;
  try {
    parsed = new URL(value);
  } catch {
    return null;
  }

  const host = parsed.hostname.replace(/^www\./, "");

  if (host === "youtu.be") {
    const id = parsed.pathname.slice(1).split("/")[0];
    return ID_RE.test(id) ? id : null;
  }

  if (host === "youtube.com" || host === "m.youtube.com" || host === "youtube-nocookie.com") {
    const path = parsed.pathname;

    if (path === "/watch") {
      const id = parsed.searchParams.get("v") ?? "";
      return ID_RE.test(id) ? id : null;
    }

    if (path.startsWith("/embed/") || path.startsWith("/shorts/") || path.startsWith("/live/")) {
      const id = path.split("/").filter(Boolean)[1] ?? "";
      return ID_RE.test(id) ? id : null;
    }
  }

  return null;
}

export function youtubeEmbedUrl(url: string, params: Record<string, string> = {}): string | null {
  const id = youtubeIdFromUrl(url);
  if (!id) return null;

  const search = new URLSearchParams({ rel: "0", modestbranding: "1", ...params });
  return `https://www.youtube.com/embed/${id}?${search.toString()}`;
}

export function youtubeThumbnailUrl(url: string): string | null {
  const id = youtubeIdFromUrl(url);
  if (!id) return null;
  return `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
}
