import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import SchoolProfileBreadcrumb from "./SchoolProfileBreadCrump";
import SchoolProfileSidebar from "./SchoolProfileSideBar";

export default function SchoolProfileLayout({
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
      <Navbar />

      <div
        className="h-[280px] bg-cover bg-center"
        style={{
           backgroundImage: "url('/Images/hero.jpg')",
        }}
      />

      <SchoolProfileBreadcrumb
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

          <SchoolProfileSidebar active={active} />
        </div>
      </main>

      <Footer />
    </>
  );
}
