import Link from "next/link";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-300">
              Digital Growth for Local Businesses
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              We Build High-Converting Websites &{" "}
              <span className="text-amber-600">AI Automation</span> for Local
              Businesses.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400 sm:text-xl">
              Stop losing local customers to competitors. Get a complete
              5-page online presence, automated Google My Business
              optimization, and 24/7 AI assistants on a simple monthly plan.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-7 py-3.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                See Monthly Plans
              </Link>

              <Link
                href="/demo"
                className="inline-flex items-center justify-center rounded-lg border border-white px-7 py-3.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-white hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Watch 2-Min Demo
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>

            {/* Trust Badge */}
            <div className="mt-9 flex items-center gap-4">
              <div className="flex shrink-0 items-center pl-2">
                {[
                  {
                    src: "/images/team-member-1.jpg",
                    alt: "Local Lift Digital team member",
                  },
                  {
                    src: "/images/team-member-2.jpg",
                    alt: "Local Lift Digital team member",
                  },
                  {
                    src: "/images/team-member-3.jpg",
                    alt: "Local Lift Digital team member",
                  },
                ].map((avatar, index) => (
                  <div
                    key={avatar.src}
                    className={`relative h-11 w-11 overflow-hidden rounded-full border-2 border-slate-950 bg-slate-800 ${
                      index > 0 ? "-ml-3" : ""
                    }`}
                  >
                    {/* <img
                      src={avatar.src}
                      alt={avatar.alt}
                      className="h-full w-full object-cover"
                    /> */}
                  </div>
                ))}
              </div>

              <p className="max-w-xs text-sm font-medium leading-6 text-slate-300">
                Meet the team helping{" "}
                <span className="font-bold text-white">50+ local owners</span>{" "}
                grow.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border-2 border-amber-600/30 bg-slate-900 p-3 shadow-2xl">
              {/* Real Team Workspace Image */}
              <div className="relative overflow-hidden rounded-xl bg-slate-800">
                {/* <img
                  src="/images/team-office.jpg"
                  alt="Local Lift Digital team working together in a modern office"
                  className="h-full w-full object-cover"
                /> aspect-[4/3] */}

                {/* Subtle readability layer — not a gradient */}
                <div
                  className="absolute inset-0 bg-slate-950/10"
                  aria-hidden="true"
                />
              </div>

              {/* Website Dashboard Mockup */}
              <div className="absolute bottom-7 left-6 w-[78%] max-w-md overflow-hidden rounded-xl border border-slate-700 bg-slate-950 shadow-2xl sm:bottom-9 sm:left-8">
                {/* Browser Header */}
                <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                  </div>

                  <span className="text-[10px] font-medium text-slate-500">
                    localbusiness.co
                  </span>
                </div>

                {/* Dashboard Content */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                        Monthly Performance
                      </p>
                      <p className="mt-1 text-xl font-extrabold text-white">
                        +47.8%
                      </p>
                    </div>

                    <div className="rounded-lg bg-amber-600/10 px-2.5 py-1.5 text-[10px] font-bold text-amber-600">
                      ↑ Growing
                    </div>
                  </div>

                  {/* Conversion Bars */}
                  <div className="mt-5 space-y-3">
                    <div>
                      <div className="mb-1.5 flex justify-between text-[10px]">
                        <span className="text-slate-400">
                          Website Visitors
                        </span>
                        <span className="font-semibold text-white">
                          2,840
                        </span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                        <div className="h-full w-[82%] rounded-full bg-amber-600" />
                      </div>
                    </div>

                    <div>
                      <div className="mb-1.5 flex justify-between text-[10px]">
                        <span className="text-slate-400">Qualified Leads</span>
                        <span className="font-semibold text-white">186</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                        <div className="h-full w-[64%] rounded-full bg-amber-600" />
                      </div>
                    </div>

                    <div>
                      <div className="mb-1.5 flex justify-between text-[10px]">
                        <span className="text-slate-400">
                          Conversion Rate
                        </span>
                        <span className="font-semibold text-white">6.5%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                        <div className="h-full w-[58%] rounded-full bg-amber-600" />
                      </div>
                    </div>
                  </div>

                  {/* CTA Preview */}
                  <div className="mt-5 flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2.5">
                    <div>
                      <div className="h-2 w-24 rounded bg-slate-700" />
                      <div className="mt-1.5 h-1.5 w-16 rounded bg-slate-800" />
                    </div>

                    <span className="rounded-md bg-amber-600 px-3 py-1.5 text-[9px] font-bold text-white">
                      Get Started
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Supporting Metric */}
            <div className="absolute -bottom-5 right-4 hidden rounded-xl border border-slate-800 bg-slate-900 px-5 py-3 shadow-xl sm:block lg:-right-5">
              <p className="text-xs font-medium text-slate-500">
                Businesses supported
              </p>
              <p className="mt-0.5 text-lg font-extrabold text-white">
                50+ local owners
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}