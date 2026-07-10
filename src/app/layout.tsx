import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.barbershopzagreb.com"),
  title:
    "American Barbershop Zagreb | Barber & Male Stylist — Fades, Beard Trims, Razor Shaves",
  description:
    "The only American barbershop in Croatia. NYC-trained barber and male stylist (muški frizer / brijač) in Zagreb — Krajiška ul. 10. Fade haircuts from €20, beard trims, straight razor shaves. Barber / frizer / muški salon — walk-ins only, no appointments.",
  keywords: [
    // English — barber / male stylist
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
    // Croatian — frizer / muški frizer / brijač
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
  ],
  authors: [{ name: "American Barbershop Zagreb" }],
  alternates: {
    canonical: "/",
    languages: { "en-US": "/", "hr-HR": "/" },
  },
  openGraph: {
    title: "American Barbershop Zagreb — Barber & Male Stylist, Walk-Ins Only",
    description:
      "Fades, beard trims and straight razor shaves by a NYC-trained American barber / muški frizer in Zagreb. No appointments needed — walk-ins only at Krajiška ul. 10.",
    url: "https://www.barbershopzagreb.com/",
    siteName: "American Barbershop Zagreb",
    images: ["/images/barbershop-interior.jpg"],
    locale: "en_US",
    alternateLocale: ["hr_HR"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "American Barbershop Zagreb — Barber & Male Stylist",
    description:
      "NYC-trained barber and male stylist in Zagreb. Fades, beard trims, straight razor shaves. Walk-ins only.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;700;800&family=Libre+Franklin:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD: Barbershop structured data for SEO (EN + HR keywords) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Barbershop",
              "@id": "https://www.barbershopzagreb.com/#barbershop",
              name: "American Barbershop Zagreb",
              alternateName: "Američka brijačnica Zagreb — muški frizer i brijač",
              description:
                "The only American barbershop in Croatia. NYC-trained barber and male stylist (muški frizer / brijač) in Zagreb. Fade haircuts, beard trims and straight razor shaves. Walk-ins only.",
              url: "https://www.barbershopzagreb.com/",
              email: "barbersime@gmail.com",
              image: "https://www.barbershopzagreb.com/images/barbershop-interior.jpg",
              logo: "https://www.barbershopzagreb.com/images/logo-color.png",
              priceRange: "€5–€100",
              currenciesAccepted: "EUR",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Krajiška ulica 10",
                addressLocality: "Zagreb",
                postalCode: "10000",
                addressCountry: "HR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 45.8117,
                longitude: 15.9628,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "12:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "12:00",
                  closes: "17:00",
                },
              ],
              sameAs: [
                "https://www.instagram.com/barbershop.zagreb/",
                "https://www.facebook.com/barbershop.zagreb/",
              ],
              knowsAbout: [
                "barber",
                "male stylist",
                "men's hairdresser",
                "fade haircut",
                "beard trim",
                "straight razor shave",
                "muški frizer",
                "brijač",
                "muški salon",
                "šišanje muškaraca",
                "uređivanje brade",
                "brijanje britvom",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
