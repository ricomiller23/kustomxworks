import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/content/business";
import { CalendarIcon, ClockIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Handyman Tips & Advice | KustomXworks Blog",
  description:
    "Home maintenance tips, repair guides, and local advice for Inland Empire & Coachella Valley homeowners from KustomXworks Handyman Services.",
  alternates: { canonical: `${BUSINESS.website}/blog` },
};

// Seeded posts — add more by adding objects to this array and creating the MDX/TSX file
export const BLOG_POSTS = [
  {
    slug: "preparing-inland-empire-home-summer-heat",
    title: "Preparing Your Inland Empire Home for Summer Heat",
    description: "Temperatures over 105°F are common across the Inland Empire. Here's the maintenance checklist every homeowner should run before summer arrives.",
    date: "2024-05-15",
    readTime: "6 min read",
    category: "Seasonal Tips",
    cities: ["Corona", "Moreno Valley", "Perris"],
  },
  {
    slug: "landlord-guide-turnover-repairs-perris-moreno-valley",
    title: "Landlord's Guide to Fast, Affordable Turnover Repairs in Perris & Moreno Valley",
    description: "Vacancy days cost money. Here's how experienced Inland Empire landlords streamline their turnover repair process to minimize downtime and maximize returns.",
    date: "2024-06-03",
    readTime: "8 min read",
    category: "Property Management",
    cities: ["Perris", "Moreno Valley"],
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <section
        className="py-14 px-6"
        style={{ background: "linear-gradient(135deg, #1A1008 0%, #2A211A 100%)" }}
        aria-labelledby="blog-h1"
      >
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="breadcrumb mb-4">
            <Link href="/">Home</Link><span>/</span>
            <span aria-current="page">Blog</span>
          </nav>
          <h1 id="blog-h1" className="font-heading font-black text-4xl md:text-5xl text-white mb-3">
            Handyman Tips &amp; Advice
          </h1>
          <p className="text-orange-100/70 text-lg">
            Home maintenance guides and local advice for Inland Empire &amp; Coachella Valley homeowners.
          </p>
        </div>
      </section>

      <section className="section bg-cream" aria-label="Blog posts">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {BLOG_POSTS.map((post) => (
              <article key={post.slug} className="blog-card">
                <div className="h-40 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #D8C4A8, #C1502E22)" }}>
                  <div className="text-center">
                    <div className="text-3xl" aria-hidden="true">📝</div>
                    <p className="text-xs text-[#6B5E52] mt-1 font-semibold">{post.category}</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-[#6B5E52] mb-3">
                    <span className="flex items-center gap-1">
                      <CalendarIcon size={12} aria-hidden="true" />
                      {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1">
                      <ClockIcon size={12} aria-hidden="true" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-heading font-bold text-xl text-espresso mb-2 flex-1">
                    <Link href={`/blog/${post.slug}`} className="hover:text-rust transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-[#6B5E52] leading-relaxed mb-4">{post.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.cities.map((city) => (
                      <span key={city} className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#D8C4A8", color: "#2A211A" }}>
                        {city}
                      </span>
                    ))}
                  </div>
                  <Link href={`/blog/${post.slug}`} className="text-rust font-bold text-sm hover:underline">
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 max-w-xl mx-auto text-center">
            <div className="card p-6">
              <p className="font-heading font-bold text-espresso mb-2">📝 Adding New Blog Posts</p>
              <p className="text-sm text-[#6B5E52]">
                To add a new post: create a file at <code>app/blog/[your-slug]/page.tsx</code>, then add an entry to the <code>BLOG_POSTS</code> array in <code>app/blog/page.tsx</code>. See the existing posts for template structure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
