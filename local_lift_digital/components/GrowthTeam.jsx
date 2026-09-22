import Image from "next/image";
import team from "../images/team.jpg";

export default function GrowthTeam() {
  return (
    <section className="bg-slate-900 px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left Column — Team Image */}
          <div className="relative">
            {/* Solid amber accent frame */}
            <div
              className="absolute -bottom-4 -left-4 h-full w-full border-2 border-amber-600"
              aria-hidden="true"
            />

            <div className="relative overflow-hidden border-2 border-slate-700 bg-slate-800">
              <div className="aspect-4/3">
                <Image
                  src={team}
                  width={800}
                  height={600}
                  alt="The Local Lift Digital team collaborating in their office"
                  className="h-full w-full object-cover"
                /> 
              </div>
            </div>

            {/* Human presence label */}
            <div className="absolute -bottom-7 right-5 border border-slate-700 bg-slate-950 px-5 py-3 shadow-xl">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Your Growth Team
              </p>
              <p className="mt-1 text-sm font-medium text-white">
                Real people. Real support.
              </p>
            </div>
          </div>

          {/* Right Column — Copy */}
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
              Meet Your Growth Team
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Real Humans Scaling Your Digital Presence.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Unlike cold automated agencies, Local Lift Digital pairs every
              business owner with a dedicated local digital strategist who
              actually knows your business and understands what you&#39;re trying
              to achieve.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Your strategist personally manages your website, keeps your
              Google My Business profile updated every month, and custom-trains
              your web AI assistants around your services, customers, and
              frequently asked questions.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              You get the efficiency of modern technology without losing the
              human relationship behind it. There is always a real person
              keeping your digital presence moving forward.
            </p>

            {/* Founder Quote / Signature Callout */}
            <div className="mt-9 border-l-2 border-amber-600 bg-slate-950 px-6 py-6">
              <p className="text-lg font-medium leading-8 text-slate-200">
                “We don&#39;t want to be another agency your business has to chase.
                We want to be the team you know is already taking care of your
                digital presence.”
              </p>

              <div className="mt-5 flex items-end justify-between gap-6">
                <div>
                  <p className="text-sm font-bold text-white">
                    Founder, Local Lift Digital
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Your partner in local digital growth
                  </p>
                </div>

                {/* Signature Graphic Placeholder */}
                <div
                  className="flex h-12 min-w-28 items-center justify-center border-b border-slate-700 px-3"
                  aria-label="Founder signature placeholder"
                >
                  <span className="font-serif text-xl italic text-slate-400">
                    Your Signature
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}