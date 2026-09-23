import { Suspense } from "react";
import NoticeLayout from "@/components/Notice/NoticeLayout";
import { NOTICE_LABELS, slugify } from "@/lib/notices-data";

// Prerender every notice that appears in the Notice sidebar so those links
// never hit a "page not found".
export function generateStaticParams() {
  return NOTICE_LABELS.map((label) => ({ slug: slugify(label) }));
}

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NoticePage params={params} />
    </Suspense>
  );
}

async function NoticePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const label =
    NOTICE_LABELS.find((l) => slugify(l) === slug) ??
    slug.replace(/-/g, " ");

  return (
    <NoticeLayout title={label} active={label}>
      <div className="text-[15px] leading-[1.9] text-neutral-700">
        <p className="text-justify">
          विस्तृत विवरण र सम्बन्धित फाइलहरूको लागि कृपया विद्यालयको सूचना
          बोर्ड तथा आधिकारिक निकायबाट प्रकाशित सूचना हेर्नुहोला।
        </p>
      </div>
    </NoticeLayout>
  );
}