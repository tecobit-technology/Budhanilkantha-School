import RationTenderNoticeLayout from "@/components/RationTenderNotice/RationTenderNoticeLayout";

export default function RationTenderNotice() {
  return (
    <RationTenderNoticeLayout title="Ration Tender Notice" active="Ration Tender Notice">
      <div className="text-[15px] leading-[1.9] text-neutral-700">
        {/*
          NOTE: transcribed from a screenshot of the live page. Devanagari
          OCR from an image is error-prone — check this against the real
          notice before publishing, especially the dates and figures
          (1150 students, 250 staff, the Magh-to-Poush date range, and the
          "first published" date 2082/08/22).
        */}
        <div className="text-center font-bold text-[19px] mb-6 leading-snug">
          बूढानीलकण्ठ स्कुल काठमाडौंको खाद्य सामग्रीहरु
          <br />
          आपूर्ति सम्बन्धी बोलपत्र आह्वानको सूचना ।
          <br />
          <span className="text-[16px] font-bold">
            (प्रथम पटक प्रकाशित मिति २०८२/०८/२२)
          </span>
        </div>

        <p className="text-justify">
          यस पूर्ण आवासीय स्कुलमा अध्ययनरत करीव ११५० जना विद्यार्थीहरू तथा
          २५० जना शिक्षक र कर्मचारीहरुको निमित्त २०८२ माघदेखि २०८३ पौष
          मसान्तसम्म खाद्य सामग्रीहरु आपूर्ति गर्न इच्छुक कम्तिमा ३ बर्ष
          तपशिलमा उल्लिखित सामग्रीहरुको आपूर्ति कार्यको अनुभव भएको मध्ये
          कुनै एक आर्थिक बर्षमा तल तोकिए बमोजिमको न्यूनतम बार्षिक कारोबार
          गरेको इजाजत प्राप्त फर्म/कम्पनी/संस्थाले देहाय बमोजिमको
          शर्तहरुको अधिनमा रही बार्षिक खरिद बन्दोबस्त गराउनु पर्ने भएको
          हुँदा बोलपत्रमा उल्लिखित शर्तहरुको अधिनमा रही विद्युतीय बोलपत्र
          (e-GP) प्रणालीबाट रितपूर्वकको बोलपत्र upload गर्नु हुन यो सूचना
          प्रकाशित गरिएको छ ।
        </p>

        <div className="mt-6">
          {/* Replace href with the real PDF/document path once it's hosted. */}
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#2f9e44] text-white text-[13.5px] font-medium px-4 py-2.5 rounded hover:bg-[#278239] transition-colors"
          >
            <span aria-hidden="true">⬇</span>
            Ration Tender Notice
          </a>
        </div>
      </div>
    </RationTenderNoticeLayout>
  );
}
