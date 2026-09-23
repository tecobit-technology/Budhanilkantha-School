import Link from "next/link";
import Image from "next/image";
import type { BhanjyangVolume } from "@/lib/bhanjyang-data";

export default function VolumeCard({ volume }: { volume: BhanjyangVolume }) {
  return (
    <Link
      href={`/bhanjyang/${volume.slug}`}
      className="group block border border-gray-200 rounded-sm overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-[3/4] bg-gray-100">
        {volume.coverImage ? (
          <Image
            src={volume.coverImage}
            alt={volume.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
            sizes="(max-width: 768px) 50vw, 220px"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400 text-sm px-3 text-center">
            {volume.title}
          </div>
        )}
      </div>
      <div className="p-3">
        <p className="text-sm font-medium text-gray-800 group-hover:text-green-700">
          {volume.title}
        </p>
      </div>
    </Link>
  );
}