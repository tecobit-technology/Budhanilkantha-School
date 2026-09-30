import type { Metadata } from "next";
import { applyPage } from "@/lib/site-data";
import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import ApplyHero from "@/components/ApplyOnline/Applyhero";
import ApplySidebar from "@/components/ApplyOnline/Applysidebar";
import ApplyIntro from "@/components/ApplyOnline/Applyintro";
import ImportantDates from "@/components/ApplyOnline/Importantdates";
import ApplySteps from "@/components/ApplyOnline/Applysteps";
import ApplyFaq from "@/components/ApplyOnline/Applyfaq";
import AdmissionDayCta from "@/components/ApplyOnline/Admissiondaycta";

export const metadata: Metadata = {
  title: "Apply Online | Crestwood Academy",
};

export default function ApplyOnlinePage() {
  const p = applyPage;

  return (
    <>
      <Navbar />
      <main>
      <ApplyHero heading={p.hero.heading} image={p.hero.image} />

      {/* Sidebar overlaps the bottom of the hero */}
      <div className="relative z-10 mx-auto -mt-20 grid max-w-[1248px] items-start gap-10 px-6 lg:-mt-[200px] lg:grid-cols-[450px_1fr] lg:gap-[100px]">
        <ApplySidebar
          title={p.sidebarTitle}
          links={p.sidebarLinks}
          portalHref={p.portalHref}
          portalLabel={p.portalLabel}
        />
        <ApplyIntro
          heading={p.intro.heading}
          paragraphs={p.intro.paragraphs}
          video={p.intro.video}
          portalHref={p.portalHref}
          portalLabel={p.portalLabel}
        />
      </div>

      <ImportantDates heading={p.dates.heading} items={p.dates.items} />
      <ApplySteps heading={p.steps.heading} items={p.steps.items} />
      <ApplyFaq heading={p.faq.heading} image={p.faq.image} items={p.faq.items} />
      <AdmissionDayCta
        eyebrow={p.admissionDay.eyebrow}
        text={p.admissionDay.text}
        cta={p.admissionDay.cta}
      />
      </main>
      <Footer />
    </>
  );
}