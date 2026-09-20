import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import AcademicsBreadcrumb from "@/components/Academics/AcademicsBreadcrumb";
import AcademicsSidebar from "@/components/Academics/AcademicsSidebar";

export default function AcademicsLayout({
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
      <Navbar />

      <div
        className="h-[280px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://picsum.photos/seed/bnks-hero-academics/1600/900')",
        }}
      />

      <AcademicsBreadcrumb
        trail={[
          { label: "Home", href: "/" },
          { label: "Academics", href: "/academics" },
          { label: crumbLabel ?? title },
        ]}
      />

      <main className="bg-white">
        <div className="max-w-[1280px] mx-auto px-6 py-14 grid md:grid-cols-[1fr_320px] gap-12 items-start">
          <div>
            <h1 className="text-[28px] font-semibold text-[#2f9e44] mb-6">
              {title}
            </h1>
            {children}
          </div>

          <AcademicsSidebar active={active} />
        </div>
      </main>

      <Footer />
    </>
  );
}