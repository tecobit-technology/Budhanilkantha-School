import Link from "next/link";
import VideoEmbed from "./Videoembed";

export default function ApplyIntro({
  heading,
  paragraphs,
  video,
  portalHref,
  portalLabel,
}: {
  heading: string;
  paragraphs: string[];
  video: string;
  portalHref: string;
  portalLabel: string;
}) {
  return (
    // lg:pt-[300px] pushes the text below the slanted hero edge
    <div id="ready" className="scroll-mt-28 pt-4 lg:pt-[300px]">
      <h2 className="text-[clamp(2rem,3.4vw,2.75rem)] font-extrabold uppercase leading-tight text-[#062A5B]">
        {heading}
      </h2>

      <div className="mt-5 space-y-6 text-[16px] leading-7 text-neutral-800">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <Link
        href={portalHref}
        className="mt-14 inline-block bg-[#B7012C] px-8 py-4 text-[13px] uppercase tracking-[0.25em] text-white transition hover:bg-[#062A5B]"
      >
        {portalLabel}
      </Link>

      <VideoEmbed src={video} title="Campus video" className="mt-16" />
    </div>
  );
}