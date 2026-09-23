export type BhanjyangVolume = {
  /** URL-safe id used in /bhanjyang/archive/[slug] */
  slug: string;
  /** Display title, e.g. "Bhanjyang Vol. 43, 2020" */
  title: string;
  /** Numeric volume number, used for sorting (newest first) */
  volume: number;
  /** Year shown to the user (AD) */
  year: number;
  /** Cover image shown on the volume detail page, for volumes we can preview */
  coverImage?: string;
  /** Downloadable PDF, for older volumes that only have a scanned file */
  pdfUrl?: string;
};

// NOTE: replace coverImage / pdfUrl with real asset paths (e.g. under /public/bhanjyang/)
// as you get them. Volumes with a coverImage render an inline preview; volumes with only
// a pdfUrl render a download button, matching the old site's behaviour.
export const bhanjyangVolumes: BhanjyangVolume[] = [
  {
    slug: "vol-43-2020",
    title: "Bhanjyang Vol. 43, 2020",
    volume: 43,
    year: 2020,
    coverImage: "/Images/bhanjyang.png",
    pdfUrl: "/files/bhanjyang/vol-43-2020.pdf",
  },
  {
    slug: "vol-39-2017",
    title: "Bhanjyang Vol. 39, 2017",
    volume: 39,
    year: 2017,
    pdfUrl: "/files/bhanjyang/vol-39-2017.pdf",
  },
  {
    slug: "vol-38-2016",
    title: "Bhanjyang Vol. 38, 2016",
    volume: 38,
    year: 2016,
    pdfUrl: "/files/bhanjyang/vol-38-2016.pdf",
  },
  {
    slug: "vol-29-2005",
    title: "Bhanjyang Vol. 29, 2005",
    volume: 29,
    year: 2005,
    pdfUrl: "/files/bhanjyang/vol-29-2005.pdf",
  },
  {
    slug: "vol-16-1992",
    title: "Bhanjyang Vol. 16, 1992",
    volume: 16,
    year: 1992,
    pdfUrl: "/files/bhanjyang/vol-16-1992.pdf",
  },
  {
    slug: "vol-8-1984",
    title: "Bhanjyang Vol. 8, 1984",
    volume: 8,
    year: 1984,
    pdfUrl: "/files/bhanjyang/vol-8-1984.pdf",
  },
  {
    slug: "vol-2-1978",
    title: "Bhanjyang Vol. 2, 1978",
    volume: 2,
    year: 1978,
    pdfUrl: "/files/bhanjyang/vol-2-1978.pdf",
  },
];

// Sorted newest first — this drives the sidebar / archive list order.
export const bhanjyangVolumesSorted = [...bhanjyangVolumes].sort(
  (a, b) => b.volume - a.volume
);

export const latestBhanjyangVolume = bhanjyangVolumesSorted[0];

export function getBhanjyangVolume(slug: string) {
  return bhanjyangVolumes.find((v) => v.slug === slug);
}