"use client";

import { useState } from "react";

const categories = ["All", "Web Design", "Local SEO", "AI Automation"];

export default function BlogHero() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        {/* Header Content */}
        <div className="max-w-4xl">
          <span className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Local Lift Digital Blog
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Strategies to Scale Your Local Online Presence.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            No fluff. Just practical guides on high-converting web designs,
            local SEO tactics, and how to use AI to save hours in your
            business operations every week.
          </p>
        </div>

        {/* Search & Filter Strip */}
        <div className="mt-10 border-t border-slate-800 pt-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative w-full lg:max-w-md">
              <label htmlFor="blog-search" className="sr-only">
                Search articles
              </label>

              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m20 20-4-4"
                  />
                </svg>
              </div>

              <input
                id="blog-search"
                type="search"
                placeholder="Search articles..."
                className="w-full rounded-lg border border-slate-800 bg-slate-900 py-3 pl-11 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition-colors duration-200 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20"
              />
            </div>

            {/* Category Filters */}
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filter blog articles by category"
            >
              {categories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={isActive}
                    className={`rounded-lg px-4 py-2.5 text-sm font-bold transition-all duration-200 ${
                      isActive
                        ? "border border-amber-600 bg-[#b55a00] text-white"
                        : "border border-slate-700 bg-slate-900 text-slate-300 hover:border-amber-600 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}