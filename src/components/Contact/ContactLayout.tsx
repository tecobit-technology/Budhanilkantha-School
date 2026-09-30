import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import ContactBreadcrumb from "@/components/Contact/ContactBreadCrumb";
import Reveal from "@/components/Reveal";

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
          style={{ backgroundImage: "url('/Images/hero.png')" }}
        />
        <div className="absolute inset-0 -z-10 bg-black/40" />
        
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
          <Reveal direction="up">
            <h1 className="ca-page-title mb-8 text-[#2f9e44]">
              {title}
            </h1>
            {children}
          </Reveal>
        </div>
      </main>

      <Footer />
    </>
  );
}
