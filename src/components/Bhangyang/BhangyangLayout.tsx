import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import Topbar from "@/components/HomePage/TopBar";
import BhanjyangVol43Breadcrumb from "./BhangyangBreadCrumb";
import BhanjyangVol43Sidebar from "./BhangyangSidebar";

export default function BhanjyangVol43Layout({
  title,
  crumbLabel,
  active,
  children,
}: {
  title: string;
  /** Text shown as the last breadcrumb item, if it should read differently
   * from the page heading. Defaults to `title`. */
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

      <BhanjyangVol43Breadcrumb
        trail={[
          { label: "Home", href: "/" },
          {
            label: "Bhanjyang ( Annual Magazine )",
            href: "/bhanjyang",
          },
          {
            label: crumbLabel ?? title,
          },
        ]}
      />

      <main className="bg-white">
        <div className="max-w-[1200px] mx-auto px-4 py-14 grid md:grid-cols-[1fr_360px] gap-x-20 gap-y-10 items-start">
          {/* Main Content */}
          <div>
            <h1 className="ca-page-title mb-6 text-[#2f9e44]">
              {title}
            </h1>

            {children}
          </div>

          {/* Sidebar */}
          <BhanjyangVol43Sidebar active={active} />
        </div>
      </main>

      <Footer />
    </>
  );
}