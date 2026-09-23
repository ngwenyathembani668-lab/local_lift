// import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import BlogHero from "../../../components/BlogHero";
import Footer from "../../../components/Footer";
import FeaturedArticle from "../../../components/FeaturedArticle";
import RecentArticles from "../../../components/RecentArticles";
import NewsletterBox from "../../../components/NewsLetterBox";

// export const metadata: Metadata = {
//   title: "Local Marketing & AI Automation Blog | Local Lift Digital",
//   description:
//     "Expert digital marketing tips, Google My Business optimization guides, and practical AI automation strategies to help local business owners dominate search results.",
//   openGraph: {
//     title: "Local Marketing & AI Automation Blog | Local Lift Digital",
//     description:
//       "Expert digital marketing tips, Google My Business optimization guides, and practical AI automation strategies to help local business owners dominate search results.",
//     type: "website",
//     images: [
//       {
//         url: "/images/blog-og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Local Lift Digital - Local Marketing & AI Automation Blog",
//       },
//     ],
//   },
// };

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Blog page content will be added here */}

        <BlogHero />
        <FeaturedArticle />
        <RecentArticles />
        <NewsletterBox />

      </div>

        <Footer />

    </main>
  );
}