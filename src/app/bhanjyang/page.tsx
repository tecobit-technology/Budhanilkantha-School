import { redirect } from "next/navigation";
import { latestBhanjyangVolume } from "@/lib/bhanjyang-data";

export default function BhanjyangRootPage() {
  redirect(`/bhanjyang/${latestBhanjyangVolume.slug}`);
}