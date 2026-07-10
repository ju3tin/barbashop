"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, SHOP, type ViewId } from "@/lib/barbershop-data";
import { cn } from "@/lib/utils";

interface HeaderProps {
  current: ViewId;
  onNavigate: (view: ViewId) => void;
}

export function TopBar() {
  return (
    <div className="bg-[var(--red)] text-[var(--cream)] text-center font-display font-bold tracking-[0.14em] uppercase text-[15px] px-3 py-[7px] max-[600px]:text-[12px] max-[600px]:tracking-[0.1em] max-[600px]:py-[6px]">
      No appointments — walk-ins only &nbsp;•&nbsp; Bez naručivanja — samo walk-in
    </div>
  );
}

export function Brand({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2.5 text-[var(--cream)] hover:opacity-90 transition-opacity cursor-pointer text-left"
      aria-label={`${SHOP.name} home`}
    >
      {/* New official logo — white variant for dark navy header */}
      <img
        src="/images/logo-white.png"
        alt="American Barbershop Zagreb logo"
        className="w-11 h-11 max-[600px]:w-9 max-[600px]:h-9 object-contain flex-none"
      />
      <span className="font-display leading-[1.05]">
        <span className="block text-[21px] font-extrabold tracking-[0.08em] uppercase max-[600px]:text-[17px] max-[420px]:text-[15px]">
          American Barbershop
        </span>
        <span className="block text-[12px] tracking-[0.34em] uppercase text-[var(--brass)] font-semibold max-[600px]:text-[10px] max-[600px]:tracking-[0.24em]">
          {SHOP.tagline}
        </span>
      </span>
    </button>
  );
}

export function Header({ current, onNavigate }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const go = (view: ViewId) => {
    onNavigate(view);
    setOpen(false);
  };

  return (
    <header className="bg-[var(--navy)] text-[var(--cream)] border-b-[3px] border-[var(--brass)] sticky top-0 z-50">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-3 sm:gap-5 py-3 sm:py-3.5 relative">
        <Brand onClick={() => go("home")} />

        <nav
          aria-label="Main navigation"
          className="flex gap-1 flex-wrap max-[820px]:hidden"
        >
          {NAV_ITEMS.map((item) => {
            const active =
              current === item.view ||
              (item.view === "blog" &&
                ["post-fade", "post-beard", "post-shave"].includes(current));
            return (
              <button
                key={item.view}
                onClick={() => go(item.view)}
                className={cn(
                  "font-display font-bold uppercase tracking-[0.1em] text-[16px] px-3 py-2 border-b-[3px] transition-colors cursor-pointer",
                  active
                    ? "text-white border-[var(--brass)]"
                    : "text-[var(--cream)] border-transparent hover:text-white hover:border-[var(--red)]"
                )}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <button
          className="hidden max-[820px]:inline-flex items-center gap-2 border-2 border-[var(--brass)] text-[var(--cream)] font-display font-bold tracking-[0.1em] px-3 py-2 uppercase cursor-pointer text-[15px] hover:bg-[var(--brass)] hover:text-[var(--navy-deep)] transition-colors min-h-[44px]"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
          Menu
        </button>

        {open && (
          <nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            className="absolute left-0 right-0 top-full bg-[var(--navy-deep)] flex-col px-4 sm:px-6 pt-2 pb-4 border-b-[3px] border-[var(--brass)] z-40 max-[820px]:flex hidden"
          >
            {NAV_ITEMS.map((item) => {
              const active =
                current === item.view ||
                (item.view === "blog" &&
                  ["post-fade", "post-beard", "post-shave"].includes(current));
              return (
                <button
                  key={item.view}
                  onClick={() => go(item.view)}
                  className={cn(
                    "font-display font-bold uppercase tracking-[0.1em] text-[16px] py-3.5 text-left border-b border-[#24364e] cursor-pointer min-h-[44px]",
                    active ? "text-[var(--brass)]" : "text-[var(--cream)]"
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}

export function PoleRibbon() {
  return <div className="pole-ribbon" aria-hidden="true" />;
}

export function Footer({ onNavigate }: { onNavigate: (view: ViewId) => void }) {
  return (
    <footer className="bg-[var(--navy-deep)] text-[#cfc6ae] text-[15px] mt-auto">
      <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr] gap-9 py-13">
        <div>
          {/* New official logo — color variant for dark footer */}
          <img
            src="/images/logo-color.png"
            alt="American Barbershop Zagreb — barber & muški frizer"
            className="w-16 h-16 mb-3 object-contain"
          />
          <h4 className="font-display uppercase tracking-[0.16em] text-[var(--brass)] text-[16px] mb-3">
            {SHOP.name}
          </h4>
          <p>
            The only American barbershop in Croatia. NYC-trained barber and male stylist (muški
            frizer / brijač) — traditional cuts, beard work and straight razor shaves in the
            center of Zagreb. Walk-ins only, no appointments.
          </p>
          <p className="mt-2.5">
            <strong>{SHOP.addressShort}</strong>
            <br />
            <a
              href={`mailto:${SHOP.email}`}
              className="text-[var(--cream)] hover:text-white hover:underline"
            >
              {SHOP.email}
            </a>
          </p>
        </div>
        <div>
          <h4 className="font-display uppercase tracking-[0.16em] text-[var(--brass)] text-[16px] mb-3">
            Visit / Posjeta
          </h4>
          <ul className="list-none space-y-[7px]">
            <li>Mon: Closed</li>
            <li>Tue – Fri: 12:00 – 19:00</li>
            <li>Saturday: 12:00 – 17:00</li>
            <li>Sunday: Closed</li>
            <li>
              <strong>Walk-ins only</strong>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-display uppercase tracking-[0.16em] text-[var(--brass)] text-[16px] mb-3">
            Explore
          </h4>
          <ul className="list-none space-y-[7px]">
            <li>
              <button
                onClick={() => onNavigate("pricelist")}
                className="text-[var(--cream)] hover:text-white hover:underline cursor-pointer text-left"
              >
                Price list / Cijenik
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("blog")}
                className="text-[var(--cream)] hover:text-white hover:underline cursor-pointer text-left"
              >
                Blog
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("about")}
                className="text-[var(--cream)] hover:text-white hover:underline cursor-pointer text-left"
              >
                About the barber / O brijaču
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("press")}
                className="text-[var(--cream)] hover:text-white hover:underline cursor-pointer text-left"
              >
                Press
              </button>
            </li>
            <li>
              <a
                href={SHOP.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--cream)] hover:text-white hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="border-t border-[#24364e] text-center px-6 py-4 text-[13.5px]">
        © 2026 American Barbershop Zagreb • Barber &amp; muški frizer • Walk-ins only • Bez
        naručivanja
      </p>
    </footer>
  );
}
