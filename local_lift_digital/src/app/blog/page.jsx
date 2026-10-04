import Navbar from "../../../components/Navbar";
import BlogHero from "../../../components/BlogHero";
import Footer from "../../../components/Footer";
import FeaturedArticle from "../../../components/FeaturedArticle";
import RecentArticles from "../../../components/RecentArticles";
import NewsletterBox from "../../../components/NewsLetterBox";

const articles = [
  {
    id: 1,
    title:
      "How to Optimize Your Google My Business Profile to Outrank Local Competitors in 2026",
    category: "Local SEO",
    description:
      "Follow the exact 5-step checklist every local business owner needs to optimize their Google Business Profile, strengthen local relevance, and improve their chances of appearing in the local 3-pack.",
    author: "Thembani Ngwenya",
    date: "September 25, 2026",
    readTime: "5 min read",
    image: "/images/featured-gmb-strategy.jpg",
    href: "/blog/optimize-google-business-profile-in-2026",
    imageAlt:
      "Google Business Profile optimization dashboard for a local service business",
  },
  {
    id: 2,
    title:
      "Why Slow Websites Cost Small Businesses Thousands in Lost Phone Calls",
    category: "Web Design",
    description:
      "Discover how website performance affects local customer experience, mobile usability, and conversions.",
    author: "Thembani Ngwenya",
    date: "September 18, 2026",
    readTime: "6 min read",
    image: "/images/blog-slow-websites.jpg",
    href: "/blog/why-slow-websites-cost-small-businesses",
    imageAlt:
      "Website performance metrics dashboard displaying local business website speed and usability",
  },
  {
    id: 3,
    title:
      "How to Build a Custom AI Assistant to Automate Customer Care on Your Website",
    category: "AI Automation",
    description:
      "Learn how custom AI assistants can answer questions, qualify leads, and automate repetitive customer support tasks.",
    author: "Thembani Ngwenya",
    date: "September 12, 2026",
    readTime: "7 min read",
    image: "/images/blog-ai-assistant.jpg",
    href: "/blog/custom-ai-assistant-customer-care",
    imageAlt:
      "AI assistant workflow interface helping a business answer customer questions automatically",
  },
  {
    id: 4,
    title:
      "The 3 Critical Mistakes Local Brands Make When Setting Up Landing Pages",
    category: "Web Design",
    description:
      "Learn how to avoid common landing page mistakes that make it harder to turn visitors into enquiries.",
    author: "Thembani Ngwenya",
    date: "September 5, 2026",
    readTime: "6 min read",
    image: "/images/blog-landing-pages.jpg",
    href: "/blog/landing-page-mistakes",
    imageAlt:
      "Landing page design mockup showing conversion mistakes and UX issues",
  },
];

export const metadata = {
  title: "Local Marketing & AI Automation Blog | Local Lift Digital",
  description:
    "Expert digital marketing tips, Google My Business optimization guides, and practical AI automation strategies to help local business owners dominate search results.",
  openGraph: {
    title: "Local Marketing & AI Automation Blog | Local Lift Digital",
    description:
      "Expert digital marketing tips, Google My Business optimization guides, and practical AI automation strategies to help local business owners dominate search results.",
    type: "website",
    images: [
      {
        url: "/images/blog-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Local Lift Digital - Local Marketing & AI Automation Blog",
      },
    ],
  },
};

export default async function BlogPage({ searchParams }) {
  const params = await Promise.resolve(searchParams ?? {});

  const searchTerm = (params.search ?? "").trim().toLowerCase();
  const selectedCategory = params.category ?? "All";
  const normalizedCategory =
    ["All", "Web Design", "Local SEO", "AI Automation"].includes(
      selectedCategory
    )
      ? selectedCategory
      : "All";

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      normalizedCategory === "All" || article.category === normalizedCategory;

    if (!searchTerm) {
      return matchesCategory;
    }

    const searchableText = [
      article.title,
      article.description,
      article.category,
      article.author,
    ]
      .join(" ")
      .toLowerCase();

    return matchesCategory && searchableText.includes(searchTerm);
  });

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <BlogHero />
        <FeaturedArticle />
        <RecentArticles articles={filteredArticles} />
        <NewsletterBox />
      </div>

      <Footer />
    </main>
  );
}
