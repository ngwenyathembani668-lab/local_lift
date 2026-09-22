import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-300">
            Our Services
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Growth-focused digital services built for local businesses.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            We help businesses turn more local traffic into reliable leads with
            conversion-focused websites, SEO, and AI-powered customer support.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
