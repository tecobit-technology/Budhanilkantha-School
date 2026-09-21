import NoticeLayout from "./NoticeLayout";

export default function ClassFiveScholarshipResult() {
  return (
    <NoticeLayout
      title="Class 5 Scholarship Result, 2082 B.S."
      active="Class 5 Scholarship Result, 2082 B.S."
    >
      <div className="ml-6 text-[15px] leading-[1.9] text-neutral-700">
        <h2 className="text-center text-[19px] font-semibold text-neutral-800 mb-4">
          सूचना
        </h2>

        <p className="text-justify font-semibold">
          बूढानीलकण्ठ स्कूल, काठमाडौं र साझेदारी कार्यक्रम-अन्तर्गतका
          तपसिलमा उल्लेखित विद्यालयहरूमा शैक्षिक सत्र २०८२ देखि कक्षा ५ मा
          छात्रवृत्तिमा अध्ययन गर्न २०८२ चैत्र २३ गते लिइएको छात्रवृत्ति
          छनोट परीक्षाको लिखित नतिजा र सम्बन्धित निकायहरूका सिफारिसका
          आधारमा छात्रवृत्ति छनोट समितिको मिति २०८२ वैशाख १६ गतेको
          बैठकको निर्णय अनुसार निम्न विद्यार्थीहरू छनोट भएको व्यहोरा
          सम्बन्धित सबैलाई सूचित गरिन्छ ।
        </p>

        <div className="mt-6">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#2f9e44] text-white text-[13.5px] font-bold px-4 py-2.5 rounded hover:bg-[#278239] transition-colors"
          >
            <span aria-hidden="true">⬆</span>
            Class 5 Scholarship Result, 2082 B.S.
          </a>
        </div>
      </div>
    </NoticeLayout>
  );
}
