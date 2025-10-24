import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Mappa del Sito - Brillante Detailing",
  description: "Mappa completa del sito Brillante Detailing con tutti i link alle pagine principali",
}

const services = [
  { name: "Lavaggio Esterno Completo", slug: "lavaggio-esterno-completo" },
  { name: "Detailing Completo", slug: "detailing-completo" },
  { name: "Pulizia Interni Profonda", slug: "pulizia-interni-profonda" },
  { name: "Lucidatura Carrozzeria", slug: "lucidatura-carrozzeria" },
  { name: "Trattamento Ceramico", slug: "trattamento-ceramico" },
  { name: "Rimozione Macchie", slug: "rimozione-macchie" },
  { name: "Sanificazione Interni", slug: "sanificazione-interni" },
  { name: "Pulizia Motore", slug: "pulizia-motore" },
  { name: "Restauro Fari", slug: "restauro-fari" },
  { name: "Protezione Vernice", slug: "protezione-vernice" },
  { name: "Pulizia Cerchi e Pneumatici", slug: "pulizia-cerchi-pneumatici" },
  { name: "Trattamento Pelle", slug: "trattamento-pelle" },
  { name: "Rimozione Graffi", slug: "rimozione-graffi" },
  { name: "Ozono Trattamento", slug: "ozono-trattamento" },
]

export default function SitemapPage() {
  return (
    <main>
      <Navigation />

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Torna alla home</span>
          </Link>

          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Mappa del Sito</h1>
          <p className="text-muted-foreground mb-12">Naviga facilmente attraverso tutte le pagine del nostro sito</p>

          <div className="space-y-8">
            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">Pagine Principali</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-accent hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#chi-siamo" className="text-accent hover:underline">
                    Chi Siamo
                  </Link>
                </li>
                <li>
                  <Link href="/#servizi" className="text-accent hover:underline">
                    Servizi
                  </Link>
                </li>
                <li>
                  <Link href="/contatti" className="text-accent hover:underline">
                    Contatti
                  </Link>
                </li>
                <li>
                  <Link href="/guida-cura-auto" className="text-accent hover:underline">
                    Guida Cura Auto
                  </Link>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">I Nostri Servizi</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/servizi/${service.slug}`} className="text-accent hover:underline">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">Informazioni Legali</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/note-legali" className="text-accent hover:underline">
                    Note Legali
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-accent hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="text-accent hover:underline">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/termini" className="text-accent hover:underline">
                    Termini e Condizioni
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
