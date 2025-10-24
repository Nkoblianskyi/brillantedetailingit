import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CookieBanner } from "@/components/cookie-banner"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: "Brillante Detailing - Autolavaggio e Detailing Premium",
  description:
    "Servizi professionali di autolavaggio, detailing e cura auto in Italia. Lavaggio esterno, pulizia interni, lucidatura, trattamenti ceramici e sanificazione.",
  generator: "v0.app",
  keywords:
    "autolavaggio, detailing auto, pulizia auto, lucidatura auto, trattamento ceramico, sanificazione auto, Milano, Italia",
  authors: [{ name: "Brillante Detailing S.r.l." }],
  creator: "Brillante Detailing S.r.l.",
  publisher: "Brillante Detailing S.r.l.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://www. brillantedetailingit.com",
    title: "Brillante Detailing - Autolavaggio e Detailing Premium",
    description: "Servizi professionali di autolavaggio, detailing e cura auto in Italia",
    siteName: "Brillante Detailing",
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              name: "Brillante Detailing",
              description: "Servizi professionali di autolavaggio, detailing e cura auto",
              url: "https://www.brillantedetailingit.com",
              telephone: "+390254816398",
              email: "info@brillantedetailingit.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Centro Commerciale Citylife, Piazza Tre Torri",
                addressLocality: "Milano",
                postalCode: "20145",
                addressCountry: "IT",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "45.4773",
                longitude: "9.1547",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
  
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
