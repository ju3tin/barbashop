"use client";

import { type ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { BLOG_POSTS, type ViewId } from "@/lib/barbershop-data";
import { Callout, ViewLink } from "../ui";

interface ArticleProps {
  view: ViewId;
  onNavigate: (view: ViewId) => void;
}

function ArticleFigure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="my-7 border-2 border-[var(--ink)]">
      <img src={src} alt={alt} loading="lazy" className="w-full block" />
      <figcaption className="text-[13.5px] px-3 py-2 bg-[var(--cream-dark)] border-t-2 border-[var(--ink)]">
        {caption}
      </figcaption>
    </figure>
  );
}

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display uppercase text-[27px] my-9 mt-9.5 tracking-[0.03em]">
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className="text-[19px] mt-6.5 mb-2">{children}</h3>;
}

function P({ children }: { children: ReactNode }) {
  return <p className="mb-4">{children}</p>;
}

function StrongTip({ label, children }: { label: string; children: ReactNode }) {
  return (
    <Callout shadowColor="var(--red)">
      <strong className="font-display uppercase tracking-[0.08em]">{label}:</strong> {children}
    </Callout>
  );
}

function FadeArticle({ onNavigate }: { onNavigate: (view: ViewId) => void }) {
  return (
    <>
      <p>
        Ask ten guys for &quot;a fade&quot; and you&apos;ll get ten different pictures in ten
        different heads. That&apos;s how people end up walking out of barbershops disappointed
        — not because the barber can&apos;t cut, but because &quot;fade&quot; alone doesn&apos;t
        say anything about where it starts, how short it goes, or how it&apos;s finished. After
        cutting hair in New York and now in Zagreb for years, I can tell you the fix is simple:
        learn five terms, and you&apos;ll never get the wrong haircut again.
      </p>
      <ArticleFigure
        src="/images/fade-haircut-zagreb.jpg"
        alt="Clean skin fade haircut done at American Barbershop Zagreb"
        caption="A fresh fade at the shop, Krajiška ul. 10, Zagreb."
      />
      <H2>What a fade actually is</H2>
      <P>
        A fade is a haircut where the sides and back gradually shorten as they go down — from
        your longest length at the top blending smoothly into very short hair (or bare skin)
        near the neckline and ears. The skill isn&apos;t in the shortness; it&apos;s in the
        blend. A good fade has no visible lines or steps anywhere. The hair just seamlessly
        &quot;fades&quot; from one length to another, which is exactly what your barber spends
        most of the cut perfecting.
      </P>
      <H2>Low, mid or high: where the fade starts</H2>
      <H3>Low fade</H3>
      <P>
        The fade begins just above the ears and follows the hairline around the back. It&apos;s
        the most conservative option — from the front you mostly see fuller sides, with the
        tight work sitting low. Great for office jobs, first-time fade clients, and anyone who
        wants a clean neckline without a dramatic look.
      </P>
      <H3>Mid fade</H3>
      <P>
        The blend starts around the temples, roughly halfway up the head. This is the most
        requested fade in the shop and the safest answer if you&apos;re unsure: enough contrast
        to look sharp, not so much that it shouts.
      </P>
      <H3>High fade</H3>
      <P>
        The fade starts up near the parietal ridge — the corner where the top of your head
        meets the sides. Maximum contrast, strong shape, and it pairs well with longer styled
        hair on top. It also grows out faster, so expect more frequent visits.
      </P>
      <ArticleFigure
        src="/images/american-barbershop-zagreb-shop.jpg"
        alt="High skin fade with short crop on top, cut at American Barbershop Zagreb"
        caption="A high skin fade with a short crop on top — maximum contrast, minimum maintenance."
      />
      <H2>Skin fade vs. razor fade</H2>
      <P>
        These two get mixed up constantly. A <strong>skin fade</strong> (also called a bald
        fade) means the bottom of the fade goes all the way down to bare skin using clippers
        with no guard. A <strong>razor fade</strong> takes that one step further: the bottom
        section is finished with a straight razor, which gets the skin smoother and makes the
        transition even cleaner, so the fade looks tighter and lasts a day or two longer before
        stubble shows. On our{" "}
        <ViewLink view="pricelist" onNavigate={onNavigate}>
          price list
        </ViewLink>
        , a classic fade is €20 and a razor fade is €25 — that €5 is the razor work.
      </P>
      <H2>How to ask for it (a script that works)</H2>
      <P>
        You don&apos;t need barber vocabulary — you need three decisions. Tell your barber:
      </P>
      <ol className="ml-5.5 mb-4 list-decimal space-y-1.5">
        <li>
          <strong>Where it starts:</strong> low, mid or high.
        </li>
        <li>
          <strong>How short it gets:</strong> down to skin, or stopping at a very short guard
          length.
        </li>
        <li>
          <strong>What happens on top:</strong> how much length you keep, and whether you style
          it.
        </li>
      </ol>
      <P>
        &quot;Mid skin fade, keep about four centimeters on top, styled to the side&quot; is a
        complete order. And a photo beats every word — if you show me a picture, we&apos;ll
        talk honestly about whether your hair type and head shape will get there.
      </P>
      <StrongTip label="Barber's tip">
        If your hair grows fast or you sweat a lot (gym, cycling, Zagreb summers), pick a fade
        one level lower than the photo you like. It grows out cleaner and buys you an extra
        week.
      </StrongTip>
      <H2>How often to come back</H2>
      <P>
        A fade is a two-to-three-week haircut. It looks perfect for the first two weeks,
        acceptable in week three, and by week four the blend is gone. If you want to stretch
        time between visits, a low fade or a slightly longer bottom guard grows out more
        gracefully than a high skin fade.
      </P>
      <H2>Getting a fade in Zagreb</H2>
      <P>
        If you&apos;re in the city center, the shop is at{" "}
        <strong>Krajiška ul. 10</strong> in the Zagreb city center.
        We&apos;re{" "}
        <ViewLink view="contact" onNavigate={onNavigate}>
          walk-ins only
        </ViewLink>{" "}
        — no bookings, no apps, first come, first served — and everything happens in fluent
        English or Croatian. Fades start at €20; the full menu is on the{" "}
        <ViewLink view="pricelist" onNavigate={onNavigate}>
          price list
        </ViewLink>
        . If you&apos;re deciding between a fade and beard work in the same sitting, read the{" "}
        <ViewLink view="post-beard" onNavigate={onNavigate}>
          beard trim guide
        </ViewLink>{" "}
        next.
      </P>
    </>
  );
}

function BeardArticle({ onNavigate }: { onNavigate: (view: ViewId) => void }) {
  return (
    <>
      <P>
        Look at our{" "}
        <ViewLink view="pricelist" onNavigate={onNavigate}>
          price list
        </ViewLink>{" "}
        and you&apos;ll see beard work ranges from €20 to €100. That&apos;s not upselling —
        those are genuinely different services that solve different problems. Here&apos;s what
        each one actually involves, so you can walk in knowing exactly what to ask for.
      </P>
      <ArticleFigure
        src="/images/beard-trim-zagreb.jpg"
        alt="Beard trim with straight razor line-up at American Barbershop Zagreb"
        caption="Razor line-up in progress at the shop."
      />
      <H2>Beard trim with clippers — €20</H2>
      <P>
        The maintenance option. Your beard gets taken down to an even length with clippers, the
        cheek and neck lines get cleaned up with the clipper blade, and stray hairs get tidied.
        It takes the least time and it&apos;s what most guys need every two to three weeks. If
        your beard is short-to-medium and the shape is already right, this is your service.
      </P>
      <H2>Beard trim with razor — €30</H2>
      <P>
        Same trim, but the cheek lines and neckline are defined with a straight razor instead
        of a clipper edge. The difference is visible from across the room: razor lines are
        perfectly crisp, the skin around them is smooth, and the beard reads as deliberate
        rather than just &quot;kept&quot;. If you have a shorter beard where the borders are
        the whole look, the razor finish earns its €10.
      </P>
      <H2>Beard cut with clippers (€40) or razor (€50)</H2>
      <P>
        A beard <em>cut</em> is restructuring, not maintenance. This is for beards that have
        lost their shape — grown unevenly, gone bulky in the cheeks, or never had a proper
        design in the first place. We rebuild the silhouette: taper the sides, set the length
        gradient from sideburn to chin, balance it against your jaw and face shape, then define
        the borders. Choose the razor version if you want those borders shaved to the skin.
      </P>
      <H2>Goatees and mustaches — €30 / €50</H2>
      <P>
        Small area, zero margin for error. A goatee or mustache is pure line work — a few
        millimeters of asymmetry and the whole face looks off. Machine work is €30; razor
        definition is €50. If your style depends on hard edges (a sharp goatee, a defined
        mustache with clean lip line), go razor.
      </P>
      <H2>The Arabic beard trim — €100</H2>
      <P>
        The most meticulous service on the board: the entire beard is shaped
        scissor-over-comb — no clipper guards, every section cut by hand — then finished with a
        razor. Scissor work leaves the hair ends softer and the density more natural than
        clippers ever can, which matters on longer, fuller beards. It takes serious time, which
        is what you&apos;re paying for. If you&apos;ve invested months growing a full beard,
        this is the service that respects that investment.
      </P>
      <StrongTip label="The simple rule">
        Right shape, wrong length → clipper trim. Right length, soft borders → razor trim.
        Wrong shape entirely → beard cut. Full beard you&apos;re proud of →
        scissor-over-comb.
      </StrongTip>
      <H2>Between visits</H2>
      <P>
        Three things keep any beard trim looking fresh longer: wash it two or three times a
        week (not daily — you&apos;ll strip it), oil it while it&apos;s slightly damp, and
        resist touching the neckline yourself. The neckline is where home trims die; leave the
        borders to the shop and just maintain length in between.
      </P>
      <H2>Getting beard work in Zagreb</H2>
      <P>
        The shop is at <strong>Krajiška ul. 10</strong> in the Zagreb city center,{" "}
        <ViewLink view="contact" onNavigate={onNavigate}>
          walk-ins only
        </ViewLink>
        . If you&apos;re pairing beard work with a haircut, read the{" "}
        <ViewLink view="post-fade" onNavigate={onNavigate}>
          fade guide
        </ViewLink>{" "}
        first — and if you&apos;re thinking about losing the beard altogether, at least go out
        properly with a{" "}
        <ViewLink view="post-shave" onNavigate={onNavigate}>
          straight razor shave
        </ViewLink>
        .
      </P>
    </>
  );
}

function ShaveArticle({ onNavigate }: { onNavigate: (view: ViewId) => void }) {
  return (
    <>
      <P>
        Most men have never had a proper shave. They&apos;ve shaved themselves ten thousand
        times — rushed, in a bathroom mirror, with a cartridge razor — but they&apos;ve never
        sat in a barber&apos;s chair, felt a hot towel land on their face and let someone who
        does this for a living take over. The full face straight razor shave is €40 on our{" "}
        <ViewLink view="pricelist" onNavigate={onNavigate}>
          board
        </ViewLink>
        , it takes around half an hour, and here&apos;s exactly what happens in that chair.
      </P>
      <ArticleFigure
        src="/images/razor-shave-zagreb.jpg"
        alt="Traditional straight razor shave at American Barbershop Zagreb"
        caption="The old-school shave, done the old-school way."
      />
      <H2>Step one: the hot towels</H2>
      <P>
        The shave starts before any blade appears. Hot towels go on your face — usually more
        than one round — and they&apos;re doing real work, not theater. Heat softens the beard
        hair (dry beard hair is surprisingly tough — comparable to copper wire of the same
        thickness), opens the pores, and relaxes the skin so it sits flatter under the blade.
        This is the single biggest thing a barbershop shave has over your bathroom: preparation
        your morning routine never allows.
      </P>
      <H2>Step two: oil and lather</H2>
      <P>
        Pre-shave oil goes on next, creating a slip layer between skin and steel. Then warm
        lather, worked in with a brush — which lifts each hair away from the skin instead of
        flattening it the way hands or canned foam do. By the time the razor touches your face,
        every hair is soft, lubricated and standing at attention.
      </P>
      <H2>Step three: the razor</H2>
      <P>
        The shave itself happens in passes. The first pass goes with the grain of your beard —
        this removes most of the hair with zero irritation. Then fresh lather, and a second
        pass across or against the grain for closeness. A straight razor cuts each hair cleanly
        at skin level in one stroke; there&apos;s no tugging, no multiple blades scraping the
        same spot, which is exactly why razor shaves cause less irritation than the five-blade
        cartridge you use at home, not more. The barber keeps your skin taut through every
        stroke — that tension is the real secret of a nick-free shave.
      </P>
      <H2>Step four: the finish</H2>
      <P>
        A cold towel closes the pores, then aftershave or moisturizer calms the skin.
        You&apos;ll walk out with the closest shave you&apos;ve ever had — noticeably smoother
        than any home shave, and it stays that way longer because the hair was cut clean at the
        surface rather than bent and sawed.
      </P>
      <StrongTip label="First-timer tips">
        Come with at least two or three days of growth — the razor needs something to work
        with. Don&apos;t shave that morning. And if you have a specific skin issue (active
        breakouts, fresh sunburn), mention it before we start.
      </StrongTip>
      <H2>Who this is for</H2>
      <P>
        Grooms on wedding mornings. Guys retiring a beard and wanting to do it right. Anyone
        with persistent razor burn from cartridge razors who wants to feel the difference
        technique makes. And honestly — anyone who wants thirty minutes where the phone stays
        in the pocket and the only job is to sit still.
      </P>
      <H2>Getting a straight razor shave in Zagreb</H2>
      <P>
        The full face shave is €40 at <strong>Krajiška ul. 10</strong>, Zagreb city center,{" "}
        <ViewLink view="contact" onNavigate={onNavigate}>
          walk-ins only
        </ViewLink>{" "}
        — no appointment, just come by. A{" "}
        <ViewLink view="post-fade" onNavigate={onNavigate}>
          fade
        </ViewLink>{" "}
        plus a shave is the full reset. If you&apos;re keeping the beard but want razor-crisp
        lines instead, the{" "}
        <ViewLink view="post-beard" onNavigate={onNavigate}>
          beard trim guide
        </ViewLink>{" "}
        covers your options.
      </P>
    </>
  );
}

export function BlogPostView({ view, onNavigate }: ArticleProps) {
  const post = BLOG_POSTS.find((p) => p.view === view);

  if (!post) return null;

  return (
    <article className="max-w-[720px] mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <button
        onClick={() => onNavigate("blog")}
        className="inline-flex items-center gap-2 text-[var(--red)] hover:text-[var(--red-dark)] font-display uppercase tracking-[0.1em] font-bold text-[14px] mb-6 cursor-pointer"
      >
        <ArrowLeft size={16} /> Back to the journal
      </button>

      <p className="font-display uppercase tracking-[0.32em] font-bold text-[13px] sm:text-[15px] mb-3.5 text-[var(--red)] max-[600px]:tracking-[0.22em]">
        {post.eyebrow}
      </p>
      <h1 className="font-display uppercase font-extrabold text-[clamp(26px,6vw,52px)] leading-[0.98] mb-2">
        {post.title}
      </h1>
      <p className="text-[#756a54] text-[14.5px] mb-7">{post.meta}</p>

      <figure className="my-7 border-2 border-[var(--ink)]">
        <img src={post.image} alt={post.alt} loading="lazy" className="w-full block" />
      </figure>

      {view === "post-fade" && <FadeArticle onNavigate={onNavigate} />}
      {view === "post-beard" && <BeardArticle onNavigate={onNavigate} />}
      {view === "post-shave" && <ShaveArticle onNavigate={onNavigate} />}

      <div className="mt-12 pt-8 border-t-2 border-[var(--ink)]">
        <p className="font-display uppercase tracking-[0.1em] font-bold text-[var(--red)] mb-4">
          Keep reading
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {BLOG_POSTS.filter((p) => p.view !== view).map((p) => (
            <button
              key={p.view}
              onClick={() => onNavigate(p.view)}
              className="text-left bg-[var(--cream-light)] border-2 border-[var(--ink)] p-4 hover:border-[var(--red)] transition-colors cursor-pointer"
            >
              <p className="font-display uppercase tracking-[0.2em] text-[12px] text-[var(--brass)] font-bold mb-1">
                {p.tag}
              </p>
              <p className="text-[15px] font-semibold leading-snug">{p.title}</p>
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}
