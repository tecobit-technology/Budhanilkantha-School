import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import Breadcrumb from "@/components/AboutUS/BreadCrumb";
import AboutUsSidebar from "@/components/AboutUS/AboutUsSideBar";
import Reveal from "@/components/Reveal";

export default function AboutUsPageLayout({
  title,
  active,
  children,
}: {
  title: string;
  active: string;
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Banner with top bar + navbar overlaid */}
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

      <Breadcrumb
        trail={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about-us" },
          { label: title },
        ]}
      />

      <main className="bg-white">
        <div className="max-w-[1120px] mx-auto px-6 py-14">
          <div className="grid grid-cols-[1fr_260px] gap-16 items-start">
            {/* Main Content */}
            <Reveal direction="right" className="min-w-0">
              <h1 className="ca-page-title text-justify mb-7">
                {title}
              </h1>

              {children}
            </Reveal>

            {/* Sidebar */}
            <Reveal direction="left" delay={120}>
              <AboutUsSidebar active={active} />
            </Reveal>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}