import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: 1,
    category: "Web Design",
    title:
      "Why Slow Websites Cost Small Businesses Thousands in Lost Phone Calls",
    image: "/images/blog-slow-websites.jpg",
    imageAlt:
      "Modern website performance dashboard displaying local business metrics",
    author: "Devon Miller",
    authorImage: "/images/devon-miller.jpg",
    date: "September 18, 2026",
    href: "/blog/why-slow-websites-cost-small-businesses",
  },
  {
    id: 2,
    category: "AI Automation",
    title:
      "How to Build a Custom AI Assistant to Automate Customer Care on Your Website",
    image: "/images/blog-ai-assistant.jpg",
    imageAlt:
      "AI automation workflow interface for a local business website",
    author: "Michael Carter",
    authorImage: "/images/michael-carter.jpg",
    date: "September 12, 2026",
    href: "/blog/custom-ai-assistant-customer-care",
  },
  {
    id: 3,
    category: "Web Design",
    title:
      "The 3 Critical Mistakes Local Brands Make When Setting Up Landing Pages",
    image: "/images/blog-landing-pages.jpg",
    imageAlt:
      "High-converting landing page design displayed on a desktop monitor",
    author: "Sarah Williams",
    authorImage: "/images/sarah-williams.jpg",
    date: "September 5, 2026",
    href: "/blog/landing-page-mistakes",
  },
];

export default function RecentArticles() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        {/* Section Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
              From The Blog
            </span>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Recent Articles
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#667995]">
            Practical strategies, technical guides, and insights built for
            local business owners.
          </p>
        </div>

        {/* Article Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-colors duration-200 hover:border-slate-700"
            >
              {/* Thumbnail */}
              <Link
                href={article.href}
                className="relative block aspect-16/10 overflow-hidden bg-slate-800"
              >
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                {/* Category */}
                <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-amber-600">
                  {article.category}
                </span>

                {/* Title */}
                <h3 className="mt-3 text-xl font-extrabold leading-snug tracking-tight text-white transition-colors duration-200 group-hover:text-amber-600">
                  <Link href={article.href}>{article.title}</Link>
                </h3>

                {/* Read More */}
                <Link
                  href={article.href}
                  className="mt-5 inline-flex w-fit items-center text-sm font-bold text-slate-400 transition-colors duration-200 hover:text-amber-600"
                >
                  Read article
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>

                {/* Author Attribution */}
                <div className="mt-auto flex items-center gap-3 border-t border-slate-800 pt-5">
                  <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-slate-700 bg-slate-800">
                    <Image
                      src={article.authorImage}
                      alt={article.author}
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-xs font-bold text-slate-300">
                      {article.author}
                    </p>

                    <time
                      dateTime={article.date}
                      className="mt-0.5 block text-xs text-[#7085a3]"
                    >
                      {article.date}
                    </time>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}