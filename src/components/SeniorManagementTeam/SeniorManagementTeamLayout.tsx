import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import TopBar from "@/components/HomePage/TopBar";
import SeniorManagementTeamBreadcrumb from "@/components/SeniorManagementTeam/SeniorManagementTeamBreadCrumb";
import SeniorManagementTeamSidebar from "@/components/SeniorManagementTeam/SeniorManagementTeamSidebar";
import Reveal from "@/components/Reveal";

export default function SeniorManagementTeamLayout({
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
                 backgroundImage: "url('/Images/hero.png')",
               }}
             />
             <div className="absolute inset-0 -z-10 bg-black/40" />
           
             <Navbar />
           </section>
     
      <SeniorManagementTeamBreadcrumb
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
            <SeniorManagementTeamSidebar active={active} />
          </Reveal>
        </div>
      </main>

      <Footer />
    </>
  );
}
