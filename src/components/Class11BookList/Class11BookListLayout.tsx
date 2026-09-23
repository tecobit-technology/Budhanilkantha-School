import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import Class11BookListBreadcrumb from "@/components/Class11BookList/Class11BookListBreadCrumb";
import Class11BookListSidebar from "@/components/Class11BookList/Class11BookListSidebar";
import TopBar from "../HomePage/TopBar";

export default function Class11BookListLayout({
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
        <TopBar />
        <Navbar />
      </section>
      

      <Class11BookListBreadcrumb
        trail={[
          { label: "Home", href: "/" },
          { label: "Notice", href: "/notice" },
          { label: crumbLabel ?? title },
        ]}
      />

      <main className="bg-white">
        {/* The Notice list runs two columns wide, so this section gets a
            wider right-hand rail than the single-column About Us / Academics
            sidebars (320px there vs. 560px here). */}
        <div className="max-w-[1280px] mx-auto px-6 py-14 grid md:grid-cols-[1fr_560px] gap-12 items-start">
          <div>
            <h1 className="text-[22px] font-semibold text-[#2f9e44] mb-6">
              {title}
            </h1>
            {children}
          </div>

          <Class11BookListSidebar active={active} />
        </div>
      </main>

      <Footer />
    </>
  );
}
