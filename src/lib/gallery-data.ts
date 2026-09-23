// Replace these with real content (or fetch from your CMS/API).
// `category` is used to power the filter tabs on each gallery page.

export type PhotoItem = {
  id: string;
  src: string;
  alt: string;
  category: string;
};

export type VideoItem = {
  id: string;
  title: string;
  thumbnail: string;
  youtubeId: string;
  category: string;
};

export const photoItems: PhotoItem[] = [
  { id: "p1", src: "/Images/sport.png", alt: "Annual Sports Day", category: "Sports" },
  { id: "p2", src: "/Images/exhibition.png", alt: "Science Exhibition", category: "Academics" },
  { id: "p3", src: "/Images/cultural.png", alt: "Cultural Program", category: "Events" },
  { id: "p4", src: "/Images/events.jpg", alt: "Graduation Ceremony", category: "Events" },
  { id: "p5", src: "/Images/school.png", alt: "Campus View", category: "Campus" },
  { id: "p6", src: "/Images/classroom.png", alt: "Classroom Session", category: "Academics" },
  { id: "p7", src: "/Images/football.png", alt: "Basketball Match", category: "Sports" },
  { id: "p8", src: "/Images/library.png", alt: "Library", category: "Campus" },
];

export const videoItems: VideoItem[] = [
  {
    id: "v1",
    title: "School Introduction",
    thumbnail: "https://img.youtube.com/vi/uN9dYPZy9e0/maxresdefault.jpg",
    youtubeId: "uN9dYPZy9e0",
    category: "Overview",
  },
  {
    id: "v2",
    title: "Annual Day Highlights",
    thumbnail: "https://img.youtube.com/vi/w3mRKyOA1P0/maxresdefault.jpg",
    youtubeId: "w3mRKyOA1P0",
    category: "Events",
  },
  {
    id: "v3",
    title: "Sports Week Recap",
    thumbnail: "https://img.youtube.com/vi/GGy3OmYCFZM/maxresdefault.jpg",
    youtubeId: "GGy3OmYCFZM",
    category: "Sports",
  },
  {
    id: "v4",
    title: "Campus Tour",
    thumbnail: "https://img.youtube.com/vi/l5bOdBCZsqo/maxresdefault.jpg",
    youtubeId: "l5bOdBCZsqo",
    category: "Overview",
  },
];