import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import Topbar from "@/components/HomePage/TopBar";
import AcademicsBreadcrumb from "@/components/Academics/AcademicsBreadCrumb";
import AcademicsSidebar from "@/components/Academics/AcademicsSidebar";

export default function AcademicsLayout({
  title,
  active,
  children,
}: {
  title: string;
  /** Slug of the department highlighted in the sidebar. */
  active: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="relative isolate min-h-[300px]">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: "url('/Images/hero.jpg')" }}
        />
        <div className="absolute inset-0 -z-10 bg-black/40" />
        <Topbar />
        <Navbar />
      </section>

      <AcademicsBreadcrumb
        trail={[
          { label: "Home", href: "/" },
          { label: "Academics", href: "/academics" },
          { label: title },
        ]}
      />

      <main className="bg-white">
        <div className="max-w-[1040px] mx-auto px-4 py-14 grid md:grid-cols-[1fr_280px] gap-x-24 gap-y-10 items-start">
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
