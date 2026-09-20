import Footer from "@/components/HomePage/Footer";
import Hero from "@/components/HomePage/Hero";
import Introduction from "@/components/HomePage/Introduction";
import NewsAndEvents from "@/components/HomePage/NewsAndEvents";
import NoticeTicker from "@/components/HomePage/NoticeTicker";
import StayConnected from "@/components/HomePage/StayConnected";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <NoticeTicker />
      <Introduction />
      <NewsAndEvents />
      <StayConnected />
      <Footer />
    </main>
  );
}