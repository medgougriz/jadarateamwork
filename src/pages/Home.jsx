import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import Hero from "../components/Hero.jsx";
import ToursSection from "../components/ToursSection";
import MapComponent from "../components/map.jsx";
import Contact from "../components/contact.jsx";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ToursSection />
      <MapComponent />
      <Footer />
    </>
  );
}
