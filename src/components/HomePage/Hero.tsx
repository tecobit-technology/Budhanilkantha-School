import PageBanner from "@/components/PageBanner";

export default function Hero() {
  return (
    <PageBanner
      title="Center of Excellence"
      video="/Images/herovideo.mp4"
      minHeightClass="min-h-[950px]"
      titlePaddingClass="pt-[220px]"
    />
  );
}