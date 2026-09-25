import Image from "next/image";
import Link from "next/link";
import team from "../images/team.jpg";

export default function ServicesHero() {
  return (
    <section className="overflow-hidden bg-slate-950">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:py-24 lg:px-8 lg:py-28">
        {/* Eyebrow */}
        <span className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          Our Services
        </span>

        {/* Heading */}
        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Digital Solutions Built to Scale Your{" "}
          <span className="text-[#d73d00]">Local Business.</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
          We don&apos;t just build websites or set up bots. We implement
          complete, hands-free systems that capture leads, rank your business
          locally, and automate your operations on a simple monthly plan.
        </p>

        {/* Human Element */}
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* Team Avatar */}
          <div className="flex -space-x-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-slate-950 bg-slate-800">
              <Image
                src={team}
                alt="Local Lift Digital technical team"
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>

            <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-slate-950 bg-slate-800">
              <Image
                src={team}
                alt=""
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>

            <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-slate-950 bg-slate-800">
              <Image
                src={team}
                alt=""
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Caption */}
          <div className="flex items-center gap-2">
            <span
              className="relative flex h-2.5 w-2.5"
              aria-hidden="true"
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-600 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-600" />
            </span>

            <p className="text-sm font-semibold text-slate-300">
              Engineered and managed daily by real local specialists.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <Link
            href="#pricing"
            className="inline-flex items-center justify-center rounded-lg bg-[#d73d00] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#b63200] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            View Our Service Plans
            <span className="ml-2 text-base" aria-hidden="true">
              →
            </span>
          </Link>
        </div>

        {/* Supporting Copy */}
        <p className="mt-4 text-xs font-medium text-[#61799b]">
          Simple plans. Dedicated support. No complicated contracts.
        </p>
      </div>
    </section>
  );
}