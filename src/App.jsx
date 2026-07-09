import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import WhoWeAre from './components/WhoWeAre.jsx';
import Services from './components/Services.jsx';
import Showreel from './components/Showreel.jsx';
import SelectedProjects from './components/SelectedProjects.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="dystopic-root">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <Services />
      <Showreel />
      <SelectedProjects />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}
