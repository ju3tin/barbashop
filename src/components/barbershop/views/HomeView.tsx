"use client";

import {
  FEATURED_SERVICES,
  PRESS,
  BLOG_POSTS,
  SHOP,
  type ViewId,
} from "@/lib/barbershop-data";
import { Btn, Eyebrow, Section, SectionTitle, Sub, Wrap, ViewLink } from "../ui";
import { PoleRibbon } from "../Layout";

export function HomeView({ onNavigate }: { onNavigate: (view: ViewId) => void }) {
  return (
    <>
      {/* Hero — mobile-optimized: stacks to single column, smaller heading on phones */}
      <section className="bg-[var(--navy)] text-[var(--cream)] relative overflow-hidden">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[64px_1.2fr_1fr] lg:gap-10 min-h-[540px] lg:items-center">
            {/* Barber pole — only visible on large screens */}
            <div
              className="hero-pole self-stretch hidden lg:block"
              aria-hidden="true"
            />

            {/* Hero copy */}
            <div className="py-10 sm:py-14 lg:py-16">
              <p className="font-display text-[var(--brass)] uppercase tracking-[0.32em] font-bold text-[15px] mb-3.5 max-[600px]:text-[13px] max-[600px]:tracking-[0.22em]">
                Barber &amp; male stylist — Zagreb
              </p>
              <h1 className="font-display font-extrabold uppercase text-[clamp(40px,11vw,84px)] leading-[0.95] tracking-[0.01em] max-[600px]:text-[clamp(38px,11vw,52px)]">
                New York cuts.
                <br />
                <span
                  className="text-[var(--red)]"
                  style={{ WebkitTextStroke: "1px var(--cream)" }}
                >
                  Zagreb
                </span>{" "}
                chair.
              </h1>
              <p className="mt-4 sm:mt-5 mb-6 sm:mb-7 text-[17px] sm:text-[19px] max-w-[46ch] text-[#e9e2d2]">
                Fade haircuts, beard trims and straight razor shaves by a California-born,
                NYC-trained barber &amp; male stylist — right in the center of Zagreb, now at{" "}
                <strong className="text-[var(--cream)]">Krajiška ul. 10</strong>. Walk-ins
                only, no appointment needed. Muški frizer i brijač — bez naručivanja.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-3.5 sm:flex-wrap">
                <Btn
                  variant="primary"
                  onClick={() => onNavigate("pricelist")}
                  className="w-full sm:w-auto text-center"
                >
                  See the price list
                </Btn>
                <Btn
                  variant="ghost"
                  onClick={() => onNavigate("contact")}
                  className="w-full sm:w-auto text-center"
                >
                  Find the shop
                </Btn>
              </div>
            </div>

            {/* Shop hours card */}
            <div className="pb-10 sm:pb-14 lg:pb-16 lg:col-auto">
              <div
                className="bg-[var(--cream)] text-[var(--ink)] border-[3px] border-[var(--ink)] p-5 sm:p-6 max-w-md mx-auto lg:max-w-none"
                style={{ boxShadow: "8px 8px 0 var(--red)" }}
              >
                <h2 className="font-display uppercase tracking-[0.1em] text-[20px] sm:text-[22px] border-b-2 border-[var(--ink)] pb-2 mb-3">
                  Shop Hours
                </h2>
                <table className="w-full border-collapse text-[15px] sm:text-[16px]">
                  <tbody>
                    {SHOP.hoursShort.map((row) => (
                      <tr key={row.day} className={row.closed ? "text-[#8a8071]" : ""}>
                        <td className="py-1">{row.day}</td>
                        <td
                          className={`text-right tabular-nums text-right ${
                            row.closed ? "font-normal" : "font-semibold"
                          }`}
                        >
                          {row.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-3 text-[14px] sm:text-[15px] border-t border-dashed border-[var(--ink)] pt-2.5">
                  <strong>{SHOP.addressShort}</strong>
                  <br />
                  Walk-ins only • First come, first served
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PoleRibbon />

      {/* Services */}
      <Section>
        <Wrap>
          <Eyebrow className="text-[var(--red)]">What we do</Eyebrow>
          <SectionTitle>Cuts, beards &amp; blades</SectionTitle>
          <Sub>
            Every service on the board is done the traditional American way — clipper work,
            scissor detail and razor finishes, one client at a time. Barber, male stylist and
            men&apos;s groomer (muški frizer i brijač) — full menu with Croatian translations
            on the{" "}
            <ViewLink view="pricelist" onNavigate={onNavigate}>
              price list
            </ViewLink>
            .
          </Sub>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-5.5">
            {FEATURED_SERVICES.map((svc) => (
              <article
                key={svc.title}
                className="bg-[var(--cream-light)] border-2 border-[var(--ink)] p-5 sm:p-6"
                style={{ boxShadow: "6px 6px 0 var(--navy)" }}
              >
                <h3 className="font-display uppercase tracking-[0.08em] text-[20px] sm:text-[22px] mb-2">
                  {svc.title}
                </h3>
                <p className="font-display font-extrabold text-[var(--red)] text-[24px] sm:text-[26px]">
                  {svc.price}
                </p>
                <p className="text-[14.5px] sm:text-[15.5px] mt-2">{svc.desc}</p>
              </article>
            ))}
          </div>
          <p className="text-center mt-8 sm:mt-10">
            <Btn
              variant="primary"
              accentColor="var(--red)"
              onClick={() => onNavigate("pricelist")}
            >
              Full price list / Cijenik
            </Btn>
          </p>
        </Wrap>
      </Section>

      <PoleRibbon />

      {/* Press (dark) */}
      <Section variant="dark">
        <Wrap>
          <Eyebrow>As featured in</Eyebrow>
          <SectionTitle>The press stopped by</SectionTitle>
          <Sub className="text-[#e9e2d2]">
            Time Out, Love Zagreb and Žena.hr have all written about the shop — Zagreb&apos;s
            only American barber and male stylist. Read their stories on our{" "}
            <button
              onClick={() => onNavigate("press")}
              className="text-[var(--brass)] hover:underline cursor-pointer"
            >
              press page
            </button>
            .
          </Sub>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-5.5">
            {PRESS.map((p) => (
              <article
                key={p.source}
                className="bg-[var(--cream-light)] text-[var(--ink)] border-2 border-[var(--ink)] p-5 sm:p-6 flex flex-col gap-2.5"
              >
                <p className="font-display uppercase tracking-[0.2em] text-[var(--red)] font-bold text-[14px]">
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
        </Wrap>
      </Section>

      <PoleRibbon />

      {/* Blog */}
      <Section>
        <Wrap>
          <Eyebrow className="text-[var(--red)]">From the blog</Eyebrow>
          <SectionTitle>Barbershop journal</SectionTitle>
          <Sub>
            Guides, grooming advice and straight talk from the chair — written by the barber
            and male stylist, not a marketing team.
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
                  <p className="font-display uppercase tracking-[0.2em] text-[13px] text-[var(--brass)] font-bold">
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
          <p className="text-center mt-8 sm:mt-10">
            <Btn
              variant="primary"
              accentColor="var(--red)"
              onClick={() => onNavigate("blog")}
            >
              Read the blog
            </Btn>
          </p>
        </Wrap>
      </Section>
    </>
  );
}
