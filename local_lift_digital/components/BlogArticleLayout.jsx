import Image from "next/image";
import Link from "next/link";

export default function BlogArticleLayout({
  category,
  title,
  description,
  date,
  readTime,
  image,
  imageAlt,
  children,
}) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Article header */}
      <header className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 pb-12 pt-10 sm:px-6 sm:pt-14 lg:px-8 lg:pb-16">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-sm text-[#667995]"
          >
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
            <span>/</span>
            <span className="text-slate-400">{category}</span>
          </nav>

          <span className="inline-flex rounded-full border border-amber-600/30 bg-amber-600/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-600">
            {category}
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
            {description}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-slate-700 bg-slate-900">
              <Image
                src="/images/thembani-ngwenya.jpg"
                alt="Thembani Ngwenya"
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Thembani Ngwenya
              </p>
              <p className="mt-1 text-sm text-[#667995]">
                {date} <span className="mx-1">·</span> {readTime}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Featured image */}
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <div className="relative aspect-16/8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1152px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Article content */}
      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="space-y-8 text-[17px] leading-8 text-slate-300 [&_h2]:mt-14 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:tracking-tight [&_h2]:text-white [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-white [&_p]:mt-5 [&_li]:ml-6 [&_li]:list-disc [&_li]:pl-1 [&_ol_li]:list-decimal [&_ul]:mt-5 [&_ol]:mt-5 [&_li]:mt-2">
          {children}
        </div>

        {/* Conversion CTA */}
        <section className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600">
            Local Lift Digital
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
            Ready to grow your business online?
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-400">
            Let&apos;s build a digital experience that helps your business attract
            customers, capture enquiries, and work more efficiently.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#d13d00] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#b02f00]"
            >
              Get Your Free Growth Audit
            </Link>

            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Read More Articles
            </Link>
          </div>
        </section>

        <div className="mt-10 border-t border-slate-800 pt-7">
          <Link
            href="/blog"
            className="text-sm font-semibold text-amber-600 transition-colors hover:text-amber-500"
          >
            ← Back to the blog
          </Link>
        </div>
      </article>
    </main>
  );
}