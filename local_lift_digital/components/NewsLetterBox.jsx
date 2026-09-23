export default function NewsletterBox() {
    return (
        <section className="bg-slate-950">
            <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
                <div className="border-l-4 border-amber-600 bg-slate-900 px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
                    <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
                        {/* Content */}
                        <div className="max-w-2xl">
                            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-600">
                                Twice-Monthly Insights
                            </span>

                            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                                Get Growth Blueprints Delivered to Your Inbox
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                                Join 1,200+ local business owners who receive our actionable
                                digital growth case studies twice a month. No spam. Real value.
                            </p>
                        </div>

                        {/* Newsletter Form */}
                        <div className="w-full lg:max-w-xl">
                            <form
                                name="newsletter-sub"
                                method="POST"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                                className="w-full"
                            >
                                {/* Required by Netlify */}
                                <input
                                    type="hidden"
                                    name="form-name"
                                    value="newsletter-sub"
                                />

                                {/* Spam protection */}
                                <div className="hidden">
                                    <label htmlFor="newsletter-bot-field">
                                        Don&apos;t fill this out if you&apos;re human:
                                    </label>
                                    <input
                                        id="newsletter-bot-field"
                                        name="bot-field"
                                        type="text"
                                        tabIndex={-1}
                                        autoComplete="off"
                                    />
                                </div>

                                <div className="flex flex-col gap-3 sm:flex-row">
                                    <div className="flex-1">
                                        <label htmlFor="newsletter-email" className="sr-only">
                                            Email address
                                        </label>

                                        <input
                                            id="newsletter-email"
                                            name="email"
                                            type="email"
                                            required
                                            autoComplete="email"
                                            placeholder="Enter your email address"
                                            className="block w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-colors duration-200 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20"
                                        />

                                        <p className="mt-3 text-xs font-medium text-[#7085a3]">
                                            {/* <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                className="h-5 w-5 text-amber-600"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3 7.5A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 16.5v-9Z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m4 7 7.07 5.3a1.5 1.5 0 0 0 1.86 0L20 7"
                                                />
                                            </svg> Curated and written by our growth team. */}
                                            Curated and written by our growth team.
                                        </p>
                                        {/* <p className="mt-4 flex items-center gap-2 text-sm text-slate-400">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                className="h-5 w-5 text-amber-600"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3 7.5A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 16.5v-9Z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m4 7 7.07 5.3a1.5 1.5 0 0 0 1.86 0L20 7"
                                                />
                                            </svg>

                                            <span>Curated and written by our growth team.</span>
                                        </p> */}
                                    </div>

                                    <button
                                        type="submit"
                                        className="inline-flex shrink-0 items-center justify-center rounded-lg bg-[#b55a00] px-5 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-amber-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 focus:ring-offset-slate-900"
                                    >
                                        Join Free Newsletter
                                        <span className="ml-2" aria-hidden="true">
                                            →
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}