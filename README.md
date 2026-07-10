# American Barbershop Zagreb

The official website for **American Barbershop Zagreb** — the only American barbershop in Croatia. Built with Next.js 16, TypeScript, and Tailwind CSS.

NYC-trained barber & male stylist (muški frizer / brijač) in the center of Zagreb. Fade haircuts, beard trims, and straight razor shaves. Walk-ins only — no appointments.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + custom design system
- **Fonts**: Big Shoulders Display + Libre Franklin (Google Fonts)
- **Package Manager**: Bun

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ or [Bun](https://bun.sh/)
- Git

### Installation

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

# Install dependencies
bun install
# or: npm install

# Set up environment
cp .env.example .env

# Start the dev server
bun run dev
# or: npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── public/
│   └── images/              # Logos & barbershop photos
├── src/
│   ├── app/
│   │   ├── globals.css      # Design system + Tailwind
│   │   ├── layout.tsx       # Root layout, SEO metadata, JSON-LD
│   │   └── page.tsx         # Main page (client-side view router)
│   ├── components/
│   │   ├── barbershop/      # Layout, shared UI, and views
│   │   └── ui/              # shadcn/ui components
│   └── lib/
│       ├── barbershop-data.ts  # All shop content (hours, prices, posts)
│       ├── db.ts
│       └── utils.ts
├── prisma/
│   └── schema.prisma
└── package.json
```

## Features

- **7 views** (Home, Price List, Blog, 3 Blog Articles, About, Press, Contact) with client-side routing
- **Responsive** — mobile-first design with hamburger nav and stacked layouts
- **SEO-optimized** — bilingual (EN/HR) keywords for barber, male stylist, muški frizer, brijač
- **Structured data** — JSON-LD Barbershop schema with address, hours, and services
- **Signature design** — animated barber pole, American enamel/wood-type aesthetic
- **Accessible** — semantic HTML, ARIA labels, keyboard navigation, ≥44px touch targets

## Shop Info

- **Address**: Krajiška ul. 10, 10000 Zagreb, Hrvatska
- **Hours**: Tue–Fri 12:00–19:00, Sat 12:00–17:00 (Closed Sun & Mon)
- **Email**: barbersime@gmail.com
- **Walk-ins only** — no appointments

## License

© 2026 American Barbershop Zagreb. All rights reserved.
