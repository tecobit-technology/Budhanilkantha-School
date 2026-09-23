import PageBanner from "@/components/PageBanner";

export default function GalleryHero({ title }: { title: string }) {
  return <PageBanner title={title} minHeightClass="min-h-[420px]" titlePaddingClass="pt-[100px]" />;
}