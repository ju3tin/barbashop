"use client";

import { useEffect, useState, useCallback } from "react";
import type { ViewId } from "@/lib/barbershop-data";
import { Footer, Header, PoleRibbon, TopBar } from "@/components/barbershop/Layout";
import { HomeView } from "@/components/barbershop/views/HomeView";
import { PriceListView } from "@/components/barbershop/views/PriceListView";
import { AboutView } from "@/components/barbershop/views/AboutView";
import { PressView } from "@/components/barbershop/views/PressView";
import { ContactView } from "@/components/barbershop/views/ContactView";
import { BlogView } from "@/components/barbershop/views/BlogView";
import { BlogPostView } from "@/components/barbershop/views/BlogPostView";

export default function Page() {
  const [view, setView] = useState<ViewId>("home");

  const navigate = useCallback((next: ViewId) => {
    setView(next);
    // Scroll to top on view change
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  // Keep the document title in sync with the view
  useEffect(() => {
    const titles: Record<ViewId, string> = {
      home: "American Barbershop Zagreb | Fades, Beard Trims & Hot Towel Shaves — Walk-Ins Only",
      pricelist: "Price List / Cijenik | American Barbershop Zagreb — Fades from €20",
      blog: "Barbershop Journal | Grooming Guides from American Barbershop Zagreb",
      "post-fade":
        "Fade Haircuts in Zagreb: The Complete Guide (Low, Mid, High & Skin Fades)",
      "post-beard": "Beard Trim in Zagreb: Clippers or Straight Razor? An Honest Guide",
      "post-shave":
        "Straight Razor Shave in Zagreb: What to Expect from a Traditional Barbershop Shave",
      about: "About the Barber | American Barbershop Zagreb — NYC-Trained, US Veteran",
      press:
        "Press & Media | American Barbershop Zagreb in Time Out, Love Zagreb & Žena.hr",
      contact: "Contact & Location | American Barbershop Zagreb — Krajiška 10, Walk-Ins Only",
    };
    document.title = titles[view];
  }, [view]);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--cream)]">
      <TopBar />
      <Header current={view} onNavigate={navigate} />

      <main className="flex-1">
        {view === "home" && <HomeView onNavigate={navigate} />}
        {view === "pricelist" && <PriceListView onNavigate={navigate} />}
        {view === "blog" && <BlogView onNavigate={navigate} />}
        {view === "about" && <AboutView onNavigate={navigate} />}
        {view === "press" && <PressView />}
        {view === "contact" && <ContactView />}
        {(view === "post-fade" ||
          view === "post-beard" ||
          view === "post-shave") && (
          <BlogPostView view={view} onNavigate={navigate} />
        )}
      </main>

      <PoleRibbon />
      <Footer onNavigate={navigate} />
    </div>
  );
}
