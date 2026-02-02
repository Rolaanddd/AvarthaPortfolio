import TeamSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import EnvironmentalHero from "./components/EnvironmentalHero";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import OurClients from "./components/OurClients";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <EnvironmentalHero />

      <ServicesSection />
      <OurClients />
      <TeamSection />
      <ContactSection />

      <Footer />
    </div>
  );
}
