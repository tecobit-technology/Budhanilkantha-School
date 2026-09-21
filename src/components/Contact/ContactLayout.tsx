import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import Topbar from "@/components/HomePage/TopBar";
import ContactBreadcrumb from "@/components/Contact/ContactBreadCrumb";

export default function ContactLayout({
  title,
  crumbLabel,
  children,
}: {
  title: string;
  /** Text shown as the last breadcrumb item, if it should read differently
   *  from the page heading. Defaults to `title`. */
  crumbLabel?: string;
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

      <ContactBreadcrumb
        trail={[
          { label: "Home", href: "/" },
          { label: crumbLabel ?? title },
        ]}
      />

      <main className="bg-white">
        <div className="max-w-[1040px] mx-auto px-4 py-14">
          <h1 className="text-[28px] font-semibold text-[#2f9e44] mb-8">
            {title}
          </h1>
          {children}
        </div>
      </main>

      <Footer />
    </>
  );
}
