export default function SocialProof() {
  const businesses = [
    "Apex Plumbing",
    "Elite Dental",
    "Oak & Iron Construction",
    "Northside Auto",
    "Summit Legal",
  ];

  return (
    <section className="border-y border-soft bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-soft">
          Trusted by local business owners across the country
        </p>

        <div className="mt-9 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {businesses.map((business) => (
            <div
              key={business}
              className="flex min-h-16 items-center justify-center rounded-lg border border-soft bg-card-alt px-4 py-4 text-center transition-colors duration-200 hover:border-accent/60"
            >
              <span className="text-sm font-bold tracking-tight text-muted sm:text-base">
                {business}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}