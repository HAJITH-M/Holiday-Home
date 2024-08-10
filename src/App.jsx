import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/NavBar/Navbar';
import HeroCarousal from './components/HeroCarousal/HeroCarousal';
import CarouselHero from './components/HeroCarousal/HeroCarousal';

AOS.init();


const App=()=> {
  return (
    <>
    <Navbar/>
<CarouselHero/>
    </>
  )
}

export default App