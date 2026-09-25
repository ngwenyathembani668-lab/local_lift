import Image from "next/image";
import Link from "next/link";

/**
 * Mock article data.
 * Replace this with your CMS/database/API fetch later.
 */
const articles = [
  {
    slug: "how-to-optimize-google-my-business-profile-2026",
    title:
      "How to Optimize Your Google My Business Profile to Outrank Local Competitors in 2026",
    description:
      "Follow a practical checklist to optimize your Google Business Profile, strengthen local relevance, generate customer signals, and improve your chances of appearing in local search results.",
    category: "Local SEO",
    author: {
      name: "Devon Miller",
      role: "Local SEO Strategist",
      avatar: "/images/devon-miller.jpg",
    },
    publishedAt: "September 18, 2026",
    readTime: "5 min read",
  },
];

async function getArticleBySlug(slug) {
  // Simulate an async database/API request.
  return articles.find((article) => article.slug === slug);
}

export async function generateMetadata({
  params,
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | Local Lift Digital Insights",
      description:
        "The requested Local Lift Digital article could not be found.",
    };
  }

  return {
    title: `${article.title} | Local Lift Digital Insights`,
    description: article.description,
    openGraph: {
      title: `${article.title} | Local Lift Digital Insights`,
      description: article.description,
      type: "article",
    },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-amber-600">
            Article Not Found
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            We couldn&apos;t find that article.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            The article you&apos;re looking for may have been moved or removed.
          </p>

          <Link
            href="/blog"
            className="mt-8 inline-flex items-center rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white transition hover:bg-[#b63200]"
          >
            Back to Insights
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <article>
        {/* Article Header */}
        <header className="border-b border-slate-800 bg-slate-950">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
              {/* Heading Content */}
              <div className="max-w-4xl">
                <Link
                  href="/blog"
                  className="mb-8 inline-flex text-sm font-semibold text-amber-600 transition hover:text-amber-500"
                >
                  ← Back to Local Lift Insights
                </Link>

                <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">
                  <span className="font-semibold uppercase tracking-wider text-amber-600">
                    {article.category}
                  </span>

                  <span className="text-slate-600">•</span>

                  <time
                    dateTime={article.publishedAt}
                    className="text-slate-400"
                  >
                    {article.publishedAt}
                  </time>

                  <span className="text-slate-600">•</span>

                  <span className="text-slate-400">
                    {article.readTime}
                  </span>
                </div>

                <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  {article.title}
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
                  {article.description}
                </p>
              </div>

              {/* Prominent Author Section */}
              <div className="border border-slate-800 bg-slate-900 p-6">
                <p className="mb-5 text-xs font-bold uppercase tracking-widest text-slate-500">
                  Written by
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-amber-600 bg-slate-800">
                    <Image
                      src={article.author.avatar}
                      alt={article.author.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="font-bold text-white">
                      {article.author.name}
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      {article.author.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <section className="bg-slate-950">
          <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-lg leading-8 text-slate-300">
                Your article content goes here. This section is intentionally
                structured so it can later be populated from a CMS, database,
                Markdown source, or MDX content.
              </p>

              <h2 className="mt-12 text-3xl font-bold text-white">
                Introduction
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Start your article with a clear explanation of the problem,
                why it matters to local business owners, and what readers can
                expect to learn from the guide.
              </p>

              <h2 className="mt-12 text-3xl font-bold text-white">
                The Key Strategy
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Add the main educational content for the article here. Break
                longer sections into clear headings, short paragraphs, lists,
                examples, and actionable recommendations.
              </p>

              <div className="my-10 border-l-4 border-amber-600 bg-slate-900 p-6">
                <p className="font-medium leading-7 text-slate-200">
                  Use this callout area for an important takeaway, practical
                  insight, or key statistic from the article.
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-white">
                Practical Next Steps
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Finish the article by giving readers clear steps they can
                implement immediately in their business.
              </p>

              <p className="mt-8 leading-8 text-slate-400">
                Want help implementing these strategies?{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-amber-600 underline decoration-amber-600 underline-offset-4 transition hover:text-amber-500"
                >
                  Talk to Local Lift Digital
                </Link>{" "}
                about building a stronger digital growth system for your
                business.
              </p>
            </div>
          </div>
        </section>

        {/* Article Footer CTA */}
        <section className="border-t border-slate-800 bg-slate-900">
          <div className="mx-auto max-w-4xl px-6 py-16 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              Keep Growing
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              More practical strategies for local business growth.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Explore more guides covering web design, local SEO, and AI
              automation from the Local Lift Digital team.
            </p>

            <Link
              href="/blog"
              className="mt-8 inline-flex rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white transition hover:bg-[#b63200]"
            >
              Explore More Insights
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}