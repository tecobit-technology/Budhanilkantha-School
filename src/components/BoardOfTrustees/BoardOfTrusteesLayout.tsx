import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import BoardOfTrusteesBreadcrumb from "@/components/BoardOfTrustees/BoardOfTrusteesBreadCrumb";
import BoardOfTrusteesSidebar from "@/components/BoardOfTrustees/BoardOfTrusteesSideBar";

export default function BoardOfTrusteesLayout({
  title,
  crumbLabel,
  active,
  children,
}: {
  title: string;
  /** Text shown as the last breadcrumb item, if it should read differently
   *  from the page heading (e.g. heading "Board Of Trustees (BOT)",
   *  breadcrumb "Board of trustee"). Defaults to `title`. */
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
    backgroundImage: "url('/Images/hero.jpg')",        }}
      />

      <BoardOfTrusteesBreadcrumb
        trail={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about-us" },
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

          <BoardOfTrusteesSidebar active={active} />
        </div>
      </main>

      <Footer />
    </>
  );
}
