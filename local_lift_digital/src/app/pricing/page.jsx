import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import PricingHero from "../../../components/PricingHero";
import PricingPlans from "../../../components/PricingPlans";
import ManagedValue from "../../../components/ManagedValue";
import PricingFAQ from "../../../components/PricingFAQ";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <PricingHero />
      <PricingPlans />
      <ManagedValue />
      <PricingFAQ />
      <Footer />
    </main>
  );
}