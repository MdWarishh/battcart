import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";
import { siteConfig } from "@/config/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [post.image] },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <article>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-3xl px-5 md:px-8 pt-16 pb-12 md:pt-20 md:pb-16">
          <Link href="/blog" className="text-xs font-mono text-volt tracking-widest">
            ← BACK TO BLOG
          </Link>
          <h1 className="mt-5 font-display font-bold text-3xl md:text-4xl leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-white/50 font-mono">
            {post.date} &middot; {post.readTime}
          </p>
        </div>
      </section>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={post.image} alt={post.title} className="w-full h-72 md:h-96 object-cover" />

      <div className="mx-auto max-w-3xl px-5 md:px-8 py-14 md:py-20">
        <div className="space-y-6 text-ink/80 leading-relaxed text-lg">
          {post.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-mist border border-ink/10 p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="font-display font-bold text-lg text-ink">Want this checked for free?</h3>
            <p className="mt-1 text-sm text-steel">Book a battery or solar checkup — no obligation.</p>
          </div>
          <a
            href={siteConfig.phoneHref}
            className="shrink-0 rounded-full bg-volt text-white text-sm font-semibold px-6 py-3 hover:bg-volt-dark transition-colors"
          >
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </article>
  );
}
