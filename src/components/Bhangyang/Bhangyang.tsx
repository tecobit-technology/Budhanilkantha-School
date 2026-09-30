import BhanjyangVol43Layout from "./BhangyangLayout";
import Image from "next/image";

export default function BhanjyangVol43() {
  return (
    <BhanjyangVol43Layout
      title="Bhanjyang Vol._43, 2020"
      active="Bhanjyang Vol.43, 2020"
    >
      <div className="max-w-[500px]">
        {/* Real scanned cover of the magazine */}
        <div className="relative w-full aspect-[3/4] overflow-hidden rounded shadow-sm">
          <Image
            src="/Images/bhanjyang.png"
            alt="Cover of Bhanjyang, Crestwood Academy Annual Magazine, Volume 43"
            fill
            sizes="500px"
            className="object-cover"
          />
        </div>

        {/* Download Button */}
        <div className="mt-6">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#2f9e44] text-white text-[13.5px] font-medium px-4 py-2.5 rounded hover:bg-[#278239] transition-colors"
          >
            <span aria-hidden="true">⬇</span>
            Bhanjyang Vol._43, 2020
          </a>
        </div>
      </div>
    </BhanjyangVol43Layout>
  );
}