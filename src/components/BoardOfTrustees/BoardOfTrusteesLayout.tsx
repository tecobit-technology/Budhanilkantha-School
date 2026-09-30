import Navbar from "@/components/HomePage/Navbar";
import Tobar from "@/components/HomePage/TopBar";
import Footer from "@/components/HomePage/Footer";
import BoardOfTrusteesBreadcrumb from "@/components/BoardOfTrustees/BoardOfTrusteesBreadCrumb";
import BoardOfTrusteesSidebar from "@/components/BoardOfTrustees/BoardOfTrusteesSideBar";
import Reveal from "@/components/Reveal";

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
      <section className="relative isolate min-h-[300px]">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Images/hero.png')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-black/40" />
     
        <Navbar />
      </section>

      <BoardOfTrusteesBreadcrumb
        trail={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about-us" },
          { label: crumbLabel ?? title },
        ]}
      />

      <main className="bg-white">
        <div className="max-w-[1040px] mx-auto px-4 py-14 grid md:grid-cols-[1fr_280px] gap-x-24 gap-y-10 items-start">
          <Reveal direction="right">
            <h1 className="ca-page-title mb-6 text-[#2f9e44]">
              {title}
            </h1>
            {children}
          </Reveal>

          <Reveal direction="left" delay={120}>
            <BoardOfTrusteesSidebar active={active} />
          </Reveal>
        </div>
      </main>

      <Footer />
    </>
  );
}