import Image from "next/image";
import team from "../images/team.jpg";

export default function FinalCTA() {
  return (
    <section className="bg-page px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid overflow-hidden rounded-2xl border border-accent/60 bg-surface lg:grid-cols-2">
          {/* CTA Copy */}
          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
            <span className="text-sm text-[#ef4500] font-bold uppercase tracking-[0.2em] text-accent-page">
              Start Growing
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Ready to Lift Your Business Standings?
            </h2>

            <p className="mt-5 max-w-lg text-lg leading-8 text-muted">
              Fill out this 30-second form, and our team will prepare a free
              custom growth audit for your brand.
            </p>

            <div className="mt-8 hidden border-l-2 border-soft pl-5 lg:block">
              <p className="text-sm leading-6 text-muted">
                We&#39;ll look at your website, local visibility, and opportunities
                to automate customer conversations.
              </p>
            </div>
          </div>

          {/* Intake Form */}
          <div className="border-t border-soft bg-page p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
            <form
              name="homepage-lead"
              method="POST"
              action="/success"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-5"
            >
              {/* Required by Netlify */}
              <input
                type="hidden"
                name="form-name"
                value="homepage-lead"
              />

              {/* Honeypot */}
              <div className="hidden">
                <label>
                  Don&#39;t fill this out if you&#39;re human:
                  <input name="bot-field" />
                </label>
              </div>

              {/* Form Fields */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="full-name"
                    className="mb-2 block text-sm font-semibold text-muted"
                  >
                    Full Name
                  </label>
                  <input
                    id="full-name"
                    name="full-name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="John Smith"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition-colors focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="business-name"
                    className="mb-2 block text-sm font-semibold text-muted"
                  >
                    Business Name
                  </label>
                  <input
                    id="business-name"
                    name="business-name"
                    type="text"
                    autoComplete="organization"
                    required
                    placeholder="Your Business"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition-colors focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-muted"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    placeholder="+27 00 000 0000"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition-colors focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-muted"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@business.com"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition-colors focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="main-goal"
                  className="mb-2 block text-sm font-semibold text-muted"
                >
                  Main Goal
                </label>

                <select
                  id="main-goal"
                  name="main-goal"
                  required
                  defaultValue=""
                  className="w-full appearance-none rounded-lg border border-soft bg-card px-4 py-3 text-sm text-primary outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                >
                  <option value="" disabled>
                    Select your main goal
                  </option>
                  <option value="New Website">New Website</option>
                  <option value="GMB Growth">GMB Growth</option>
                  <option value="AI Assistants">AI Assistants</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn-primary bg-[#d73d00] w-full rounded-lg px-6 py-3.5 text-sm font-bold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Claim Your Free Audit
              </button>

              {/* Human Element */}
              <div className="flex items-center justify-center gap-3 pt-1">
                <div className="h-8 w-8 overflow-hidden rounded-full border border-soft bg-surface">
                  <Image
                  src={team}
                  width={800}
                  height={600}
                  alt="Sarah, Lead Coordinator"
                  className="h-full w-full object-cover"
                />
                </div>

                <p className="text-xs font-medium text-soft">
                  Sarah reviews all submissions within 2 hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}