import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import Topbar from "@/components/HomePage/TopBar";
<<<<<<< HEAD
import AcademicsBreadcrumb from "@/components/Academics/AcademicsBreadcrumb";
=======
import AcademicsBreadcrumb from "@/components/Academics/AcademicsBreadCrumb";
>>>>>>> f238de886d48e20a38f258baef05dd59a0ab26bf
import AcademicsSidebar from "@/components/Academics/AcademicsSidebar";

export default function AcademicsLayout({
  title,
<<<<<<< HEAD
  crumbLabel,
=======
>>>>>>> f238de886d48e20a38f258baef05dd59a0ab26bf
  active,
  children,
}: {
  title: string;
<<<<<<< HEAD
  /** Text shown as the last breadcrumb item, if it should read differently
   *  from the page heading. Defaults to `title`. */
  crumbLabel?: string;
=======
  /** Slug of the department highlighted in the sidebar. */
>>>>>>> f238de886d48e20a38f258baef05dd59a0ab26bf
  active: string;
  children: React.ReactNode;
}) {
  return (
    <>
<<<<<<< HEAD
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
=======
      <section className="relative isolate min-h-[300px]">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: "url('/Images/hero.jpg')" }}
        />
        <div className="absolute inset-0 -z-10 bg-black/40" />
        <Topbar />
        <Navbar />
      </section>
>>>>>>> f238de886d48e20a38f258baef05dd59a0ab26bf

      <AcademicsBreadcrumb
        trail={[
          { label: "Home", href: "/" },
          { label: "Academics", href: "/academics" },
<<<<<<< HEAD
          { label: crumbLabel ?? title },
=======
          { label: title },
>>>>>>> f238de886d48e20a38f258baef05dd59a0ab26bf
        ]}
      />

      <main className="bg-white">
<<<<<<< HEAD
      <div className="max-w-[1120px] ml-auto mr-0 px-6 py-14">
          <div className="grid grid-cols-[1fr_260px] gap-16 items-start">
          <div>
            
=======
        <div className="max-w-[1040px] mx-auto px-4 py-14 grid md:grid-cols-[1fr_280px] gap-x-24 gap-y-10 items-start">
          <div>
>>>>>>> f238de886d48e20a38f258baef05dd59a0ab26bf
            <h1 className="text-[28px] font-semibold text-[#2f9e44] mb-6">
              {title}
            </h1>
            {children}
          </div>

          <AcademicsSidebar active={active} />
        </div>
<<<<<<< HEAD
        </div>
=======
>>>>>>> f238de886d48e20a38f258baef05dd59a0ab26bf
      </main>

      <Footer />
    </>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> f238de886d48e20a38f258baef05dd59a0ab26bf
