import Link from "next/link";
import { bhanjyangVolumesSorted } from "@/lib/bhanjyang-data";

export default function VolumeSidebar({ activeSlug }: { activeSlug?: string }) {
  return (
    <aside className="w-full lg:w-80 shrink-0">
      <h2 className="text-lg font-bold mb-3">Bhanjyang (Annual Magazine)</h2>
      <ul className="border border-gray-200 divide-y divide-gray-200 rounded-sm overflow-hidden">
        {bhanjyangVolumesSorted.map((volume) => {
          const isActive = volume.slug === activeSlug;
          return (
            <li key={volume.slug}>
              <Link
                href={`/bhanjyang/${volume.slug}`}
                className={
                  "block px-4 py-3 text-sm transition-colors " +
                  (isActive
                    ? "bg-green-700 text-white"
                    : "bg-white text-gray-800 hover:bg-gray-100")
                }
              >
                {volume.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}