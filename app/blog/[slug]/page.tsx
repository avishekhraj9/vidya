import SectionHeader from "@/components/SectionHeader";
import { blogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";

export default function BlogDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <div className="section-padding container-wide space-y-6">
      <SectionHeader title={post.title} subtitle={post.tag} align="left" />
      <p className="text-sm text-slate-500">
        Published on {new Date(post.date).toLocaleDateString()}
      </p>
      <article className="prose prose-slate max-w-none rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100">
        <p>{post.content}</p>
        <p>
          Keep iterating with mocks and review your error log weekly. If you want a
          structured plan tailored to your exam, reach out to the Vidya GS mentors.
        </p>
      </article>
    </div>
  );
}

