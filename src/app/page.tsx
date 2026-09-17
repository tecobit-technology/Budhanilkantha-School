import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import NewsAndEvents from "@/components/NewsAndEvents";
import NoticeTicker from "@/components/NoticeTicker";
import StayConnected from "@/components/StayConnected";

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