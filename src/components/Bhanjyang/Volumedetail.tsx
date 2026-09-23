import Image from "next/image";
import BhanjyangLayout from "@/components/Bhanjyang/BhanjyangLayout";
import type { BhanjyangVolume } from "@/lib/bhanjyang-data";

export default function VolumeDetail({ volume }: { volume: BhanjyangVolume }) {
  return (
    <BhanjyangLayout title={volume.title} activeSlug={volume.slug}>
      <div className="flex flex-col items-start gap-5">
        {/* Render Cover Image if available */}
        {volume.coverImage && (
          <div className="border border-gray-200 rounded-sm overflow-hidden shadow-sm">
            <Image
              src={volume.coverImage}
              alt={volume.title}
              width={500}
              height={650}
              className="w-full h-auto object-cover max-w-md"
              priority
            />
          </div>
        )}

        {/* Render Download Button below the image (or standalone if no image exists) */}
        {volume.pdfUrl || volume.coverImage ? (
          <a
            href={volume.pdfUrl || "#"}
            download
            className="inline-flex items-center gap-2 rounded bg-[#00c02c] px-5 py-2.5 text-white font-medium hover:bg-green-700 transition-colors shadow-sm"
          >
            <DownloadIcon />
            <span>{volume.title}</span>
          </a>
        ) : (
          <p className="text-gray-500">
            This issue isn&apos;t available online yet.
          </p>
        )}
      </div>
    </BhanjyangLayout>
  );
}

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}