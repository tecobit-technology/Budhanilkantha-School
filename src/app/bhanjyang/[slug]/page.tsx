import { notFound } from "next/navigation";
import VolumeDetail from "@/components/Bhanjyang/Volumedetail";
import {
  bhanjyangVolumes,
  getBhanjyangVolume,
} from "@/lib/bhanjyang-data";

export function generateStaticParams() {
  return bhanjyangVolumes.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const volume = getBhanjyangVolume(slug);
  return { title: volume ? `${volume.title} | Bhanjyang` : "Bhanjyang" };
}

export default async function VolumePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const volume = getBhanjyangVolume(slug);

  if (!volume) notFound();

  return <VolumeDetail volume={volume} />;
}