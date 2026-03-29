import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import Hero from "../components/Hero.jsx";
import ToursSection from "../components/ToursSection";
import MapComponent from "../components/map.jsx";
<<<<<<< HEAD
import Contact from "../components/contact.jsx";

=======
import ToursWaterSection from "../components/ActivityCards-one";
import ToursDesertSection from "../components/ActivityCards-two";
>>>>>>> main

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ToursSection />
      <ToursWaterSection />
      <ToursDesertSection />  
      <MapComponent />
      <Footer />
    </>
  );
}
