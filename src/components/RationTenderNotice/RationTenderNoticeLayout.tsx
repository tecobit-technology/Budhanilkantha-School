import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import Topbar from "@/components/HomePage/TopBar";
import RationTenderNoticeBreadcrumb from "@/components/RationTenderNotice/RationTenderNoticeBreadcrumb";
import RationTenderNoticeSidebar from "@/components/RationTenderNotice/RationTenderNoticeSidebar";
import Reveal from "@/components/Reveal";

export default function RationTenderNoticeLayout({
  title,
  crumbLabel,
  active,
  children,
}: {
  title: string;
  /** Text shown as the last breadcrumb item, if it should read differently
   *  from the page heading. Defaults to `title`. */
  crumbLabel?: string;
  active: string;
  children: React.ReactNode;
}) {
  return (
    <>
<section className="relative isolate min-h-[300px]">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Images/hero.png')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-black/40" />
        <Topbar />
        <Navbar />
      </section>

      <RationTenderNoticeBreadcrumb
        trail={[
          { label: "Home", href: "/" },
          { label: "Notice", href: "/notice" },
          { label: crumbLabel ?? title },
        ]}
      />

      <main className="bg-white">
        {/* The Notice list runs two columns wide, so this section gets a
            wider right-hand rail than the single-column About Us / Academics
            sidebars (320px there vs. 560px here). */}
        <div className="max-w-[1280px] mx-auto px-6 py-14 grid md:grid-cols-[1fr_560px] gap-12 items-start">
          <Reveal direction="right">
            <h1 className="ca-page-title mb-6 text-[#2f9e44]">
              {title}
            </h1>
            {children}
          </Reveal>

          <Reveal direction="left" delay={120}>
            <RationTenderNoticeSidebar active={active} />
          </Reveal>
        </div>
      </main>

      <Footer />
    </>
  );
}
