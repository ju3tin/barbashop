export type ViewId =
  | "home"
  | "pricelist"
  | "blog"
  | "post-fade"
  | "post-beard"
  | "post-shave"
  | "about"
  | "press"
  | "contact";

export const NAV_ITEMS: { label: string; view: ViewId }[] = [
  { label: "Home", view: "home" },
  { label: "Price List", view: "pricelist" },
  { label: "Blog", view: "blog" },
  { label: "About", view: "about" },
  { label: "Press", view: "press" },
  { label: "Contact", view: "contact" },
];

export const SHOP = {
  name: "American Barbershop Zagreb",
  tagline: "Zagreb • Est. in NYC",
  // Moved location — now at Krajiška ulica 10, Zagreb
  address: "Krajiška ul. 10, 10000 Zagreb, Hrvatska",
  addressShort: "Krajiška ul. 10, 10000 Zagreb",
  addressLine1: "Krajiška ulica 10",
  addressCity: "10000 Zagreb, Hrvatska",
  email: "barbersime@gmail.com",
  instagram: "https://www.instagram.com/barbershop.zagreb/",
  facebook: "https://www.facebook.com/barbershop.zagreb/",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=American+Barbershop+Zagreb+Kraji%C5%A1ka+ulica+10",
  hours: [
    { day: "Monday", time: "Closed", closed: true },
    { day: "Tuesday", time: "12:00 – 19:00", closed: false },
    { day: "Wednesday", time: "12:00 – 19:00", closed: false },
    { day: "Thursday", time: "12:00 – 19:00", closed: false },
    { day: "Friday", time: "12:00 – 19:00", closed: false },
    { day: "Saturday", time: "12:00 – 17:00", closed: false },
    { day: "Sunday", time: "Closed", closed: true },
  ],
  hoursShort: [
    { day: "Monday", time: "Closed", closed: true },
    { day: "Tue – Fri", time: "12:00 – 19:00", closed: false },
    { day: "Saturday", time: "12:00 – 17:00", closed: false },
    { day: "Sunday", time: "Closed", closed: true },
  ],
};

// SEO keyword clusters (EN + HR) for barber / male stylist / male grooming
export const SEO_KEYWORDS = [
  // English
  "barber Zagreb",
  "barbershop Zagreb",
  "American barber Zagreb",
  "male stylist Zagreb",
  "men's hairdresser Zagreb",
  "men's barber Croatia",
  "male grooming Zagreb",
  "fade haircut Zagreb",
  "beard trim Zagreb",
  "straight razor shave",
  "walk-in barber Croatia",
  // Croatian
  "frizer Zagreb",
  "muški frizer Zagreb",
  "muški salon Zagreb",
  "brijač Zagreb",
  "brijanje britvom Zagreb",
  "šišanje muškaraca Zagreb",
  "uređivanje brade Zagreb",
  "barber shop Zagreb",
  "muški frizerski salon",
  "američki brijač Zagreb",
];

export type Service = { name: string; price: string; desc?: string };

export const SERVICE_GROUPS: { title: string; subtitle: string; items: Service[] }[] = [
  {
    title: "Haircuts / Šišanje",
    subtitle: "",
    items: [
      { name: "Fade Haircut", price: "€20", desc: "Fade šišanje" },
      { name: "Razor Fade", price: "€25" },
      { name: "Fade w/ Extra Scissors + Hairstyling", price: "€25" },
      { name: "Buzzcut", price: "€20" },
      { name: "All Scissors", price: "€50", desc: "Šišanje samo škarama" },
      { name: "One Clipper Size", price: "€10", desc: "Šišanje jednim nastavkom" },
      { name: "Head Shave", price: "€20", desc: "Brijanje glave" },
    ],
  },
  {
    title: "Beards / Brada",
    subtitle: "",
    items: [
      { name: "Beard Trim w/ Clippers", price: "€20", desc: "Uređivanje brade mašinicom" },
      { name: "Beard Trim w/ Razor", price: "€30", desc: "Uređivanje brade britvom" },
      { name: "Beard Cut w/ Clippers", price: "€40" },
      { name: "Beard Cut w/ Razor", price: "€50" },
      { name: "Goatee or Mustache w/ Machine", price: "€30" },
      { name: "Goatee or Mustache w/ Razor", price: "€50" },
      {
        name: "Arabic Beard Trim",
        price: "€100",
        desc: "Scissor over comb, razor finish",
      },
    ],
  },
  {
    title: "Shaves & Details / Brijanje i detalji",
    subtitle: "",
    items: [
      { name: "Full Face Shave w/ Razor", price: "€40", desc: "Brijanje cijelog lica britvom" },
      { name: "Design", price: "€10", desc: "Dizajn — starting at / početna cijena" },
      { name: "Eyebrows Trim", price: "€5", desc: "Trim obrva" },
    ],
  },
];

export const FEATURED_SERVICES = [
  {
    title: "Fade Haircut",
    price: "from €20",
    desc:
      "Skin-tight or subtle, blended by hand. Add a razor finish (€25) or extra scissor work and styling (€25) for a sharper result.",
    image: "/images/fade-haircut-zagreb.jpg",
  },
  {
    title: "Beard Trim",
    price: "from €20",
    desc:
      "Clipper trims from €20, razor-lined trims from €30, and full beard cuts shaped with clippers or a straight razor.",
    image: "/images/beard-trim-zagreb.jpg",
  },
  {
    title: "Razor Shave",
    price: "€40",
    desc:
      "The classic full-face straight razor shave — the closest shave there is, done the old-school barbershop way.",
    image: "/images/razor-shave-zagreb.jpg",
  },
];

export const PRESS = [
  {
    source: "Time Out Croatia",
    title: "Zagreb's American Barbershop offers anything-but-ordinary cuts and ambience",
    summary:
      "Time Out's feature on the shop's New York roots, the furniture brought over from Shawn's Manhattan studio, and the family atmosphere that greets every walk-in.",
    url: "https://www.timeout.com/croatia/news/zagrebs-american-barbershop-offers-anything-but-ordinary-cuts-and-ambience-061820",
    readLabel: "Read on timeout.com",
  },
  {
    source: "Love Zagreb",
    title: "The first and only American barbershop in Zagreb",
    summary:
      "An in-depth interview with Shawn about trading New York for Zagreb, life near Britanski trg, and why the walk-in tradition matters.",
    url: "https://www.lovezagreb.hr/topics/heartbeat-of-zagreb/the-first-and-only-american-barbershop-in-zagreb",
    readLabel: "Read on lovezagreb.hr",
  },
  {
    source: "Žena.hr",
    title: "Najbolji barber shopovi u Zagrebu",
    summary:
      "Žena.hr's roundup of the best barbershops in Zagreb, featuring the American Barbershop among the city's top picks.",
    url: "https://zena.net.hr/ljepota/najbolji-barber-shopovi-u-zagrebu-61717796-9b56-11ef-9677-829ff0affdfc",
    readLabel: "Read on zena.net.hr",
  },
];

export type BlogPost = {
  view: ViewId;
  tag: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  meta: string;
  eyebrow: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    view: "post-fade",
    tag: "Haircuts",
    title:
      "Fade haircuts in Zagreb: the complete guide to getting the fade you actually want",
    excerpt:
      "Low, mid, high, skin, razor — what each fade means, how to ask your barber / muški frizer for it, and how often to come back.",
    image: "/images/fade-haircut-zagreb.jpg",
    alt: "Fresh fade haircut by the barber & male stylist at American Barbershop Zagreb",
    meta: "By Shawn, The American Barber & male stylist • Updated July 2026 • 6 min read",
    eyebrow: "Haircuts",
  },
  {
    view: "post-beard",
    tag: "Beards",
    title: "Clippers or straight razor? How to choose the right beard trim",
    excerpt:
      "The honest difference between a €20 clipper trim and a €50 razor beard cut — and which one your beard actually needs.",
    image: "/images/beard-trim-zagreb.jpg",
    alt: "Beard trim with straight razor detailing by the barber (brijač) in Zagreb",
    meta: "By Shawn, The American Barber & brijač • Updated July 2026 • 5 min read",
    eyebrow: "Beards",
  },
  {
    view: "post-shave",
    tag: "Shaves",
    title:
      "The straight razor shave: what to expect from a traditional barbershop shave",
    excerpt:
      "Hot towels, cold steel and 30 minutes of calm — the full old-school barber ritual, step by step.",
    image: "/images/razor-shave-zagreb.jpg",
    alt: "Traditional straight razor shave by the barber at American Barbershop Zagreb",
    meta: "By Shawn, The American Barber & male stylist • Updated July 2026 • 5 min read",
    eyebrow: "Shaves",
  },
];

export const getPost = (view: ViewId) => BLOG_POSTS.find((p) => p.view === view);
