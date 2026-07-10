"use client";

import { SHOP, type ViewId } from "@/lib/barbershop-data";
import { Eyebrow, PageTitle, Sub, Wrap } from "../ui";

export function ContactView() {
  return (
    <section className="py-12 sm:py-18 bg-[var(--cream)] text-[var(--ink)]">
      <Wrap>
        <Eyebrow className="text-[var(--red)]">Find the shop</Eyebrow>
        <PageTitle>Come on in</PageTitle>
        <Sub>
          There&apos;s no booking system, no waiting list, no app. If the pole is spinning, the
          chair is open. First come, first served. Barber &amp; muški frizer — walk-ins only.
        </Sub>
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-11 items-start">
          <div>
            <div
              className="bg-[var(--cream)] text-[var(--ink)] border-[3px] border-[var(--ink)] p-5 sm:p-6.5 mb-6.5"
              style={{ boxShadow: "8px 8px 0 var(--red)" }}
            >
              <h2 className="font-display uppercase tracking-[0.1em] text-[20px] sm:text-[22px] border-b-2 border-[var(--ink)] pb-2 mb-3">
                Shop Hours / Radno vrijeme
              </h2>
              <table className="w-full border-collapse text-[15px] sm:text-[16px]">
                <tbody>
                  {SHOP.hours.map((row) => (
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
            </div>

            <h3 className="font-display uppercase tracking-[0.08em] text-[20px] sm:text-[22px] mb-2">
              Address / Adresa
            </h3>
            <p>
              <strong>{SHOP.address}</strong>
              <br />
              The American barber &amp; male stylist (muški frizer) shop is now at Krajiška
              ulica 10, in the Zagreb city center. Trams and parking nearby.
            </p>
            <p>
              <a
                href={SHOP.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--red)] hover:text-[var(--red-dark)] hover:underline font-semibold"
              >
                Open in Google Maps →
              </a>
            </p>

            <h3 className="font-display uppercase tracking-[0.08em] text-[20px] sm:text-[22px] mt-6.5 mb-2">
              Questions / Pitanja
            </h3>
            <p>
              Email{" "}
              <a
                href={`mailto:${SHOP.email}`}
                className="text-[var(--red)] hover:text-[var(--red-dark)] hover:underline font-semibold"
              >
                {SHOP.email}
              </a>{" "}
              or message us on{" "}
              <a
                href={SHOP.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--red)] hover:text-[var(--red-dark)] hover:underline font-semibold"
              >
                Instagram @barbershop.zagreb
              </a>
              . For anything about a visit — just walk in.
            </p>
          </div>

          <figure
            className="border-[3px] border-[var(--ink)] max-w-full"
            style={{ boxShadow: "10px 10px 0 var(--red)" }}
          >
            <img
              src="/images/barbershop-interior.jpg"
              alt="Interior of American Barbershop Zagreb — barber & muški frizer at Krajiška ul. 10"
              loading="lazy"
              className="w-full block"
            />
          </figure>
        </div>
      </Wrap>
    </section>
  );
}
