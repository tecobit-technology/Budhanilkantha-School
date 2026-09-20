import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import Breadcrumb from "@/components/AboutUs/BreadCrumb";
import AboutUsSidebar from "@/components/AboutUs/AboutUsSideBar";

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
      {/* Banner with navbar overlaid (matches homepage hero styling) */}
      <section className="relative isolate min-h-[300px]">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Images/hero.jpg')",
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
        <div className="max-w-[1280px] mx-auto px-6 py-14 grid md:grid-cols-[1fr_320px] gap-12 items-start">
          <div>
            <h1 className="text-[28px] font-semibold text-[#2f9e44] mb-6">
              {title}
            </h1>
            {children}
          </div>

          <AboutUsSidebar active={active} />
        </div>
      </main>

      <Footer />
    </>
  );
}
