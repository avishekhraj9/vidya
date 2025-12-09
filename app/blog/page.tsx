import SectionHeader from "@/components/SectionHeader";
import { blogPosts } from "@/lib/blog";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="section-padding container-wide space-y-8">
      <SectionHeader title="Blog" subtitle="Insights & Strategy" align="left" />

      <div className="grid gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-100"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              {post.tag}
            </p>
            <Link href={`/blog/${post.slug}`}>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">
                {post.title}
              </h3>
            </Link>
            <p className="mt-2 text-sm text-slate-700">{post.excerpt}</p>
            <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <Link href={`/blog/${post.slug}`} className="font-semibold text-primary">
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

