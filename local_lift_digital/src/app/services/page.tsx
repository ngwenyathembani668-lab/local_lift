import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ServicesHero from "../../../components/ServicesHero";
import WebServices from "../../../components/WebServices";
import GrowthServices from "../../../components/GrowthServices";
import HowWeDeliver from "../../../components/HowWeDeliver";
import ServicesCTA from "../../../components/ServicesCTA";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <ServicesHero />
      <WebServices />
      <GrowthServices />
      <HowWeDeliver />
      <ServicesCTA />
      <Footer />
    </main>
  );
}
