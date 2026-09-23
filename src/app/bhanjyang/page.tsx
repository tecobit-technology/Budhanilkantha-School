import { redirect } from "next/navigation";
import { latestBhanjyangVolume } from "@/lib/bhanjyang-data";

export default function BhanjyangPage() {
  redirect(`/bhanjyang/${latestBhanjyangVolume.slug}`);
}