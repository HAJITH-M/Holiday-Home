import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/NavBar/Navbar";
import HeroCarousal from "./components/HeroCarousal/HeroCarousal";
import CarouselHero from "./components/HeroCarousal/HeroCarousal";
import MapComponent from "./components/MapComponent/MapComponent";
import CardComponent from "./components/CardComponent/CardComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";

AOS.init();

const App = () => {
  return (
    <>
      <Navbar />
      <CarouselHero />
      <MapComponent />
      <CardComponent />
      <FooterComponent />
    </>
  );
};

export default App;
