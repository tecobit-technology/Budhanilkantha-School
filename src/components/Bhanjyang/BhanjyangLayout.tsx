import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";

import Breadcrumb from "@/components/Bhanjyang/Breadcrumb";
import Volumesidebar from "@/components/Bhanjyang/Volumesidebar";
import Reveal from "@/components/Reveal";

export default function BhanjyangLayout({
  title,
  activeSlug,
  children,
}: {
  title: string;
  /** Slug of the active volume highlighted in the sidebar */
  activeSlug: string;
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Hero Header Section */}
      <section className="relative isolate min-h-[300px]">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: "url('/Images/hero.png')" }}
        />
        <div className="absolute inset-0 -z-10 bg-black/40" />
      
        <Navbar />
      </section>

      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Bhanjyang (Annual Magazine)", href: "/bhanjyang" },
          { label: title },
        ]}
      />

      {/* Main Content & Sidebar Container */}
      <main className="bg-white">
        <div className="max-w-[1040px] mx-auto px-4 py-14 grid md:grid-cols-[1fr_280px] gap-x-24 gap-y-10 items-start">
          <Reveal direction="right">
            <h1 className="ca-page-title mb-6 text-[#2f9e44]">
              {title}
            </h1>
            {children}
          </Reveal>

          <Reveal direction="left" delay={120}>
            <Volumesidebar activeSlug={activeSlug} />
          </Reveal>
        </div>
      </main>

      <Footer />
    </>
  );
}