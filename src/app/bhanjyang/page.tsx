<<<<<<< HEAD
import BhanjyangVol43 from "@/components/Bhangyang/Bhangyang";

// Next.js requires this file to be named "page.tsx" so the App Router can
// find the /bhanjyang/vol-43-2020 route. Keep this file to exactly this:
// import the section's content component and render it — nothing else.
export default function Page() {
  return <BhanjyangVol43 />;
}
=======
import { redirect } from "next/navigation";
import { latestBhanjyangVolume } from "@/lib/bhanjyang-data";

export default function BhanjyangPage() {
  redirect(`/bhanjyang/${latestBhanjyangVolume.slug}`);
}
>>>>>>> b8fc9d8f5fc12b55374176c23626c4b156ecf66b
