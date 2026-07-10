"use client";

import { BLOG_POSTS, type ViewId } from "@/lib/barbershop-data";
import { Eyebrow, PageTitle, Sub, Wrap } from "../ui";

export function BlogView({ onNavigate }: { onNavigate: (view: ViewId) => void }) {
  return (
    <section className="py-12 sm:py-18 bg-[var(--cream)] text-[var(--ink)]">
      <Wrap>
        <Eyebrow className="text-[var(--red)]">The journal</Eyebrow>
        <PageTitle>Straight talk from the chair</PageTitle>
        <Sub>
          Guides written by the barber — what the services on the board actually mean, how to
          ask for what you want, and how to keep it looking good between visits.
        </Sub>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-5.5">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.view}
              className="bg-[var(--cream-light)] border-2 border-[var(--ink)] flex flex-col"
            >
              <figure className="aspect-[16/10] bg-[var(--navy)] border-b-2 border-[var(--ink)] overflow-hidden">
                <button
                  onClick={() => onNavigate(post.view)}
                  className="w-full h-full cursor-pointer"
                  aria-label={`Read: ${post.title}`}
                >
                  <img
                    src={post.image}
                    alt={post.alt}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </button>
              </figure>
              <div className="p-5 flex flex-col gap-2 flex-1">
                <p className="font-display uppercase tracking-[0.2em] text-[12px] sm:text-[13px] text-[var(--brass)] font-bold">
                  {post.tag}
                </p>
                <h3 className="text-[18px] sm:text-[20px] leading-[1.3]">
                  <button
                    onClick={() => onNavigate(post.view)}
                    className="text-[var(--ink)] hover:text-[var(--red)] no-underline text-left cursor-pointer"
                  >
                    {post.title}
                  </button>
                </h3>
                <p className="text-[14px] sm:text-[15px]">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
