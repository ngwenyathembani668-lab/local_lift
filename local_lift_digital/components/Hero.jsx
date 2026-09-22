import Link from "next/link";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-page">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-soft bg-card px-4 py-2 text-sm font-semibold text-muted">
              Digital Growth for Local Businesses
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-6xl">
              We Build High-Converting Websites &{" "}
              <span className="text-accent">AI Automation</span> for Local
              Businesses.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-muted sm:text-xl">
              Stop losing local customers to competitors. Get a complete
              5-page online presence, automated Google My Business
              optimization, and 24/7 AI assistants on a simple monthly plan.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/pricing"
                className="btn-primary inline-flex items-center justify-center rounded-lg px-7 py-3.5 text-sm font-bold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                See Monthly Plans
              </Link>

              <Link
                href="/demo"
                className="btn-secondary inline-flex items-center justify-center rounded-lg px-7 py-3.5 text-sm font-bold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950"
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
                    className={`relative h-11 w-11 overflow-hidden rounded-full border-2 border-page bg-card-alt ${
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

              <p className="max-w-xs text-sm font-medium leading-6 text-muted">
                Meet the team helping{" "}
                <span className="font-bold text-primary">50+ local owners</span>{" "}
                grow.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border-2 border-accent/30 bg-card p-3 shadow-2xl">
              {/* Real Team Workspace Image */}
              <div className="relative overflow-hidden rounded-xl bg-card-alt">
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
              <div className="absolute bottom-7 left-6 w-[78%] max-w-md overflow-hidden rounded-xl border border-soft bg-page shadow-2xl sm:bottom-9 sm:left-8">
                {/* Browser Header */}
                <div className="flex items-center justify-between border-b border-soft px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-soft/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-soft/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-soft/80" />
                  </div>

                  <span className="text-[10px] font-medium text-soft">
                    localbusiness.co
                  </span>
                </div>

                {/* Dashboard Content */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-wider text-soft">
                        Monthly Performance
                      </p>
                      <p className="mt-1 text-xl font-extrabold text-primary">
                        +47.8%
                      </p>
                    </div>

                    <div className="rounded-lg bg-accent-soft px-2.5 py-1.5 text-[10px] font-bold text-accent">
                      ↑ Growing
                    </div>
                  </div>

                  {/* Conversion Bars */}
                  <div className="mt-5 space-y-3">
                    <div>
                      <div className="mb-1.5 flex justify-between text-[10px]">
                        <span className="text-muted">
                          Website Visitors
                        </span>
                        <span className="font-semibold text-primary">
                          2,840
                        </span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-surface">
                        <div className="h-full w-[82%] rounded-full bg-accent" />
                      </div>
                    </div>

                    <div>
                      <div className="mb-1.5 flex justify-between text-[10px]">
                        <span className="text-muted">Qualified Leads</span>
                        <span className="font-semibold text-primary">186</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-surface">
                        <div className="h-full w-[64%] rounded-full bg-accent" />
                      </div>
                    </div>

                    <div>
                      <div className="mb-1.5 flex justify-between text-[10px]">
                        <span className="text-muted">
                          Conversion Rate
                        </span>
                        <span className="font-semibold text-primary">6.5%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-surface">
                        <div className="h-full w-[58%] rounded-full bg-accent" />
                      </div>
                    </div>
                  </div>

                  {/* CTA Preview */}
                  <div className="mt-5 flex items-center justify-between rounded-lg border border-soft bg-card px-3 py-2.5">
                    <div>
                      <div className="h-2 w-24 rounded bg-soft/80" />
                      <div className="mt-1.5 h-1.5 w-16 rounded bg-surface" />
                    </div>

                    <span className="rounded-md bg-accent px-3 py-1.5 text-[9px] font-bold text-white">
                      Get Started
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Supporting Metric */}
            <div className="absolute -bottom-5 right-4 hidden rounded-xl border border-soft bg-card px-5 py-3 shadow-xl sm:block lg:-right-5">
              <p className="text-xs font-medium text-soft">
                Businesses supported
              </p>
              <p className="mt-0.5 text-lg font-extrabold text-primary">
                50+ local owners
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}