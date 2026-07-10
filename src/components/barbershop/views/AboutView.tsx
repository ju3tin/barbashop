"use client";

import { type ViewId } from "@/lib/barbershop-data";
import { Btn, Callout, Eyebrow, PageTitle, Sub, Wrap } from "../ui";

export function AboutView({ onNavigate }: { onNavigate: (view: ViewId) => void }) {
  return (
    <section className="py-12 sm:py-18 bg-[var(--cream)] text-[var(--ink)]">
      <Wrap>
        <Eyebrow className="text-[var(--red)]">The barber / Brijač</Eyebrow>
        <PageTitle>From New York studios to a Zagreb chair</PageTitle>
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-11 items-start mt-6 sm:mt-8.5">
          <div className="space-y-4">
            <p>
              The American Barbershop Zagreb is run by Shawn — &quot;The American&quot; — a
              California-born <strong>barber and male stylist</strong> (muški frizer i brijač)
              who learned the craft the long way. He trained in cosmetology, apprenticed in New
              York City, and spent years working in the editorial world of fashion hair,
              assisting on shoots and fashion weeks in London, Milan and Paris.
            </p>
            <p>
              Between careers behind the chair, Shawn served in the US Army, deployed with a
              Combat Support and Sustainment Battalion in Germany and later an airborne Civil
              Affairs unit. The discipline stuck: clean tools, sanitized gear after every cut,
              and a shop that runs on respect for your time.
            </p>
            <p>
              Today the shop at <strong>Krajiška ul. 10</strong> carries furniture from
              Shawn&apos;s private New York studio, an American neighborhood-barbershop
              atmosphere, and one simple rule: <strong>no appointments, walk-ins only</strong>.
              You come in, you take a seat, you get a proper cut from a real barber and male
              stylist, and you talk about whatever&apos;s on your mind — in fluent English or in
              Croatian.
            </p>
            <p>
              It&apos;s the only American barbershop in Croatia, and one of the only ones in
              Europe that isn&apos;t next to a US military base. The press seems to think
              that&apos;s worth writing about — see the{" "}
              <button
                onClick={() => onNavigate("press")}
                className="text-[var(--red)] hover:text-[var(--red-dark)] hover:underline cursor-pointer font-semibold"
              >
                press page
              </button>
              .
            </p>
            <Callout shadowColor="var(--red)">
              <strong className="font-display uppercase tracking-[0.08em]">
                House rules:
              </strong>{" "}
              Walk-ins only. First come, first served. Dogs welcome. Good conversation
              encouraged. Barber &amp; muški frizer — bez naručivanja.
            </Callout>
            <p>
              <Btn
                variant="primary"
                accentColor="var(--red)"
                onClick={() => onNavigate("contact")}
              >
                Come find the shop
              </Btn>
            </p>
          </div>
          <figure
            className="border-[3px] border-[var(--ink)] max-w-full"
            style={{ boxShadow: "10px 10px 0 var(--red)" }}
          >
            <img
              src="/images/barber-at-work.jpg"
              alt="Shawn, barber & male stylist (muški frizer), at work at American Barbershop Zagreb"
              loading="lazy"
              className="w-full block"
            />
          </figure>
        </div>
      </Wrap>
    </section>
  );
}
