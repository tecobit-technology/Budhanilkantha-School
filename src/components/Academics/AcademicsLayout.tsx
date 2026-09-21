import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import Topbar from "@/components/HomePage/TopBar";
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
        <section className="relative isolate min-h-[300px]">
              <div
                className="absolute inset-0 -z-10 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/Images/hero.jpg')",
                }}
              />
              <div className="absolute inset-0 -z-10 bg-black/40" />
      
              <Topbar />
              <Navbar />
            </section>

      <AcademicsBreadcrumb
        trail={[
          { label: "Home", href: "/" },
          { label: "Academics", href: "/academics" },
          { label: crumbLabel ?? title },
        ]}
      />

      <main className="bg-white">
      <div className="max-w-[1120px] ml-auto mr-0 px-6 py-14">
          <div className="grid grid-cols-[1fr_260px] gap-16 items-start">
          <div>
            
            <h1 className="text-[28px] font-semibold text-[#2f9e44] mb-6">
              {title}
            </h1>
            {children}
          </div>

          <AcademicsSidebar active={active} />
        </div>
        </div>
      </main>

      <Footer />
    </>
  );
}