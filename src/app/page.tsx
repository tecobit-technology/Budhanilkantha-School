// Example homepage (app/page.tsx). Adjust import paths to match your project.
// Key change: <Navbar /> replaces <TopBar /> and <Header />.
import Navbar from "@/components/HomePage/Navbar";
import HeroSlider from "@/components/HomePage/HeroSlider";
import NoticeTicker from "@/components/HomePage/NoticeTicker";
import Welcome from "@/components/HomePage/Welcome";
import Introduction from "@/components/HomePage/Introduction";

import Pillars from "@/components/HomePage/Pillars";
import NewsAndEvents from "@/components/HomePage/NewsAndEvents";
import StayConnected from "@/components/HomePage/StayConnected";
import QuoteCta from "@/components/HomePage/Quotecta";
import Footer from "@/components/HomePage/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider />
        <NoticeTicker />
        <Welcome />
        <Introduction />
       
        <Pillars />
        <NewsAndEvents />
        <StayConnected />
        <QuoteCta />
      </main>
      <Footer />
    </>
  );
}