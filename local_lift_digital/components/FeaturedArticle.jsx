import Image from "next/image";
import Link from "next/link";

export default function FeaturedArticle() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <article className="grid overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 lg:grid-cols-2">
          {/* Image */}
          <Link
            href="/blog/how-to-optimize-google-my-business-profile-2026"
            className="group relative block min-h-70 overflow-hidden bg-slate-800 sm:min-h-90 lg:min-h-full"
          >
            <Image
              src="/images/featured-gmb-strategy.jpg"
              alt="Modern local business marketing dashboard showing Google Business Profile metrics"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div
              className="absolute inset-0 bg-slate-950/10"
              aria-hidden="true"
            />

            <span className="absolute bottom-5 left-5 rounded-md border border-slate-700 bg-slate-950/90 px-3 py-2 text-xs font-bold text-white backdrop-blur-sm">
              Featured Article
            </span>
          </Link>

          {/* Content */}
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-600">
              FEATURED STRATEGY
            </span>

            <h2 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
              How to Optimize Your Google My Business Profile to Outrank Local
              Competitors in 2026
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
              Follow the exact 5-step checklist every local business owner
              needs to optimize their Google Business Profile, strengthen
              local relevance, generate more customer signals, and improve
              their chances of appearing in the local 3-pack maps.
            </p>

            <Link
              href="/blog/how-to-optimize-google-my-business-profile-2026"
              className="mt-7 inline-flex w-fit items-center text-sm font-bold text-amber-600 transition-colors duration-200 hover:text-amber-500"
            >
              Read the full strategy
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>

            {/* Author */}
            <div className="mt-8 flex items-center gap-3 border-t border-slate-800 pt-6">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-slate-700 bg-slate-800">
                <Image
                  src="/images/devon-miller.jpg"
                  alt="Devon Miller"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">
                  Written by Devon Miller
                </span>

                <span className="mt-0.5 text-xs font-medium text-[#7085a3]">
                  5 min read
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}