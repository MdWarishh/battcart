import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Battery and solar maintenance tips from BattKart — plain-language guides on car battery life, replacement signs, and solar backup care.",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8 pt-20 pb-16 md:pt-24 md:pb-20">
          <span className="font-mono text-xs tracking-[0.2em] text-volt">THE BATTKART BLOG</span>
          <h1 className="mt-4 font-display font-bold text-4xl md:text-5xl max-w-2xl">
            Battery care, in plain language.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-xl border border-ink/10 overflow-hidden hover:border-volt/40 transition-colors"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.image} alt={post.title} className="h-44 w-full object-cover" />
              <div className="p-5">
                <span className="font-mono text-[11px] text-steel">{post.date} &middot; {post.readTime}</span>
                <h2 className="mt-2 font-display font-semibold text-lg text-ink group-hover:text-volt transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-steel">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
