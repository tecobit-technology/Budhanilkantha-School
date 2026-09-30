import ClassFiveScholarshipNotice2083Layout from "@/components/ClassFiveScholarshipNotice2083/ClassFiveScholarshipNotice2083Layout";

export default function ClassFiveScholarshipNotice2083() {
  return (
    <ClassFiveScholarshipNotice2083Layout
      title="Class 5 Scholarship Notice for the A/Y, 2083"
      active="Class 5 Scholarship Notice for the A/Y, 2083"
    >
      <div className="text-[15px] leading-[1.9] text-neutral-700">
        {/*
          NOTE: transcribed from a screenshot of the live page. Devanagari
          OCR from an image is error-prone — check this against the real
          notice before publishing, especially dates and figures.
        */}
        <h2 className="ca-subheading text-center">
          सूचना
        </h2>

        <p className="text-justify">
          बूढानीलकण्ठ स्कूल, काठमाडौं र साझेदारी कार्यक्रम-अन्तर्गतका
          तपसिलमा उल्लेखित विद्यालयहरूमा शैक्षिक सत्र २०८३ देखि कक्षा ५ मा
          छात्रवृत्तिमा अध्ययन गर्न इच्छुक विद्यार्थीहरूको लागि छात्रवृत्ति
          छनोट परीक्षा सम्बन्धी देहाय बमोजिमका शर्तहरूको अधीनमा रही
          तोकिएको मितिमा परीक्षा सञ्चालन गरिने व्यहोरा सम्बन्धित सबैलाई
          यस सूचनाद्वारा जानकारी गराइन्छ ।
        </p>

        <p className="text-justify">
          विस्तृत विवरण (सङ्ख्या, मापदण्ड, परीक्षा केन्द्र, निवेदनको अन्तिम
          मिति र अन्य शर्तहरू) मा रहेको छ; रुचि भएका अभिभावकहरूले निर्धारित
          समयभित्र आवेदन गर्नुहुन अनुरोध छ।
        </p>

        <div className="mt-6">
          {/* Replace href with the real PDF/document path once it's hosted. */}
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#2f9e44] text-white text-[13.5px] font-medium px-4 py-2.5 rounded hover:bg-[#278239] transition-colors"
          >
            <span aria-hidden="true">⬇</span>
            Class 5 Scholarship Notice for the A/Y, 2083
          </a>
        </div>
      </div>
    </ClassFiveScholarshipNotice2083Layout>
  );
}