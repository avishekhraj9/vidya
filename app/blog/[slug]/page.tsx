import SectionHeader from "@/components/SectionHeader";
import { blogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
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

