import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import Activity1 from "../components/Activity-one";
import Gallery from "../components/Gallery.jsx";
import BookingForm2 from "../components/bookingform2.jsx";
// import Guide from "../components/guidecard.jsx";

export default function Quad() {
  return (
    <>
      <Navbar />
      <Gallery /> 
      <BookingForm2 />
      <Activity1 />
      
      <Footer />
    </>
  );
}
