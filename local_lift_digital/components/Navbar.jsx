"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 text-lg font-bold tracking-tight text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          Local Lift Digital
          <span className="ml-1.5 text-amber-600" aria-hidden="true">
            .
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white transition-colors duration-200 hover:text-amber-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA + Team Thumbnail */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="rounded-lg bg-[#d73d00] px-5 py-2.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Book a Free Call
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg border border-slate-700 p-2 text-white transition-colors hover:border-amber-600 hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600 md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-800 bg-slate-950 md:hidden"
        >
          <div className="mx-auto max-w-7xl px-6 py-5">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="border-b border-slate-800 py-4 text-sm font-medium text-white transition-colors duration-200 hover:text-amber-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-5 flex items-center gap-3">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex-1 rounded-lg bg-[#d13d00] px-5 py-3 text-center text-sm font-bold text-white transition-colors duration-200 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Book a Free Call
              </Link>

              <div
                className="h-8 w-8 shrink-0 overflow-hidden rounded-full border border-slate-700 bg-slate-800"
                title="Your Local Lift Digital team"
              >
                {/* <img
                  src="/images/founding-team.jpg"
                  alt="Local Lift Digital founding team"
                  className="h-full w-full object-cover"
                /> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}