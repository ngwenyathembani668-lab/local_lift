import Link from "next/link";
import Image from "next/image";
import team from "../images/team.jpg";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

const solutionLinks = [
  { label: "5-Page Websites", href: "/services#websites" },
  { label: "GMB Optimization", href: "/services#gmb" },
  { label: "AI Assistants", href: "/services#ai-automation" },
  { label: "Lead Landing Pages", href: "/services#landing-pages" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/localliftdigital",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/localliftdigital",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.6-1.6h1.7V3.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.3H8v3h2.6v8h2.9Z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@localliftdigital",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M15.5 3c.3 1.8 1.3 3.1 3 3.5v3.1c-1.2-.1-2.2-.5-3.1-1.1v6.1c0 3.3-2.2 5.4-5.3 5.4-2.9 0-5.1-2.1-5.1-4.9 0-3.1 2.5-5.2 5.8-5.2.3 0 .6 0 .9.1v3.1c-.3-.1-.6-.2-.9-.2-1.4 0-2.5.9-2.5 2.2 0 1.2.9 2 2.1 2 1.4 0 2.1-.9 2.1-2.5V3h3Z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/27000000000",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L4 20.2l1.2-4A8.4 8.4 0 1 1 20.5 11.7Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M9 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.5.6c.6 1.1 1.5 1.9 2.6 2.5l.6-.6c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.3.6-.2.8-.7 1.4-1.4 1.6-1.1.3-3.1-.5-4.8-2.1-1.5-1.4-2.4-3.2-2.4-4.3 0-.4.2-.8.4-1.1Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-soft bg-page">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-block text-xl font-extrabold tracking-tight text-primary transition-colors hover:text-accent"
            >
              Local Lift Digital
              <span className="ml-1 text-accent" aria-hidden="true">
                .
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
              Delivering high-converting websites, local SEO, and custom AI
              solutions for local businesses.
            </p>

            {/* Online status */}
            <div className="mt-7 flex items-center gap-3">
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-soft bg-surface">
                <Image
                  src={team}
                  height={36}
                    width={36}
                  alt="Local Lift Digital support team member"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex items-center gap-2">
                <span
                  className="relative flex h-2.5 w-2.5"
                  aria-hidden="true"
                >
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>

                <span className="text-xs font-medium leading-5 text-muted">
                  Team online &amp; monitoring client systems.
                </span>
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Local Lift Digital on ${social.label}`}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-soft bg-card text-muted transition-all duration-200 hover:border-accent hover:bg-card hover:text-accent"
                >
                  <span className="h-5 w-5">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-soft">
              Company
            </h2>

            <nav className="mt-5" aria-label="Company navigation">
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-amber-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Solutions */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-soft">
              Solutions
            </h2>

            <nav className="mt-5" aria-label="Solutions navigation">
              <ul className="space-y-3">
                {solutionLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-amber-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-soft">
              Connect With Us
            </h2>

            <div className="mt-5 space-y-3">
              <a
                href="mailto:info@localliftdigital.com"
                className="block text-sm font-medium text-muted transition-colors duration-200 hover:text-accent"
              >
                info@localliftdigital.com
              </a>

              <a
                href="tel:+27694483699"
                className="block text-sm font-medium text-muted transition-colors duration-200 hover:text-accent"
              >
                +27 69 448 3699
              </a>
            </div>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center text-sm font-bold text-primary transition-colors duration-200 hover:text-accent"
            >
              Start a conversation
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-soft pt-7">
          <div className="flex flex-col gap-4 text-xs text-soft sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Local Lift Digital. All rights reserved.</p>

            <Link
              href="/privacy-policy"
              className="transition-colors duration-200 hover:text-accent"
            >
              Privacy &amp; Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}