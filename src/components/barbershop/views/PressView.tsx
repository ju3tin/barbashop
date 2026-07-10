"use client";

import { PRESS, SHOP, type ViewId } from "@/lib/barbershop-data";
import { Callout, Eyebrow, PageTitle, Sub, Wrap } from "../ui";

export function PressView() {
  return (
    <section className="py-12 sm:py-18 bg-[var(--cream)] text-[var(--ink)]">
      <Wrap>
        <Eyebrow className="text-[var(--red)]">In the media</Eyebrow>
        <PageTitle>What the press says</PageTitle>
        <Sub>
          Journalists keep finding their way to Krajiška ul. 10. Here&apos;s what they wrote —
          each headline links to the full article on the publisher&apos;s site.
        </Sub>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-5.5">
          {PRESS.map((p) => (
            <article
              key={p.source}
              className="bg-[var(--cream-light)] border-2 border-[var(--ink)] p-5 sm:p-6 flex flex-col gap-2.5"
            >
              <p className="font-display uppercase tracking-[0.2em] text-[var(--red)] font-bold text-[13px] sm:text-[14px]">
                {p.source}
              </p>
              <h3 className="text-[18px] sm:text-[19px] leading-[1.35]">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--ink)] hover:text-[var(--red)] no-underline"
                >
                  {p.title}
                </a>
              </h3>
              <p className="text-[14px] sm:text-[15px]">{p.summary}</p>
              <p className="mt-auto font-semibold text-[var(--red)] text-[15px]">
                {p.readLabel} →
              </p>
            </article>
          ))}
        </div>
        <Callout shadowColor="var(--navy)" >
          <div className="max-w-[720px] mx-auto">
            <strong className="font-display uppercase tracking-[0.08em]">
              Press inquiries:
            </strong>{" "}
            Writing about barbering, grooming or American businesses in Croatia? Get in touch
            at{" "}
            <a
              href={`mailto:${SHOP.email}`}
              className="text-[var(--red)] hover:text-[var(--red-dark)] hover:underline font-semibold"
            >
              {SHOP.email}
            </a>{" "}
            — happy to talk, and photos are available on request.
          </div>
        </Callout>
      </Wrap>
    </section>
  );
}
