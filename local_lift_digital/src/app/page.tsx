import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
// import ServicesGrid from "../../components/ServiceGrid";
// import Pricing from "../../components/Pricing";
// import ContactForm from "../../components/ContactForm";
import SocialProof from "../../components/SocialProof";
import CoreOfferings from "../../components/CoreOfferings";
import GrowthTeam from "../../components/GrowthTeam";
import FinalCTA from "../../components/FinalCTA";
import Footer from "../../components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <SocialProof />
      <CoreOfferings />
      <GrowthTeam />
      <FinalCTA />
      <Footer />
      {/* <ServicesGrid /> */}
      {/* <Pricing /> */}
      {/* <ContactForm /> */}
    </main>
  );
}