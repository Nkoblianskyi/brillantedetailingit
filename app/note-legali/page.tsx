import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Note Legali - Brillante Detailing",
  description: "Informazioni legali e dati aziendali di Brillante Detailing",
}

export default function NoteLegaliPage() {
  return (
    <main>
      <Navigation />

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Torna alla home</span>
          </Link>

          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Note Legali</h1>
          <p className="text-muted-foreground mb-12">Informazioni legali e dati aziendali</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">Informazioni sull'Azienda</h2>
              <div className="bg-muted/30 p-6 rounded-lg space-y-3">
                <p className="text-foreground">
                  <strong>Ragione Sociale:</strong> Brillante Detailing S.r.l.
                </p>
                <p className="text-foreground">
                  <strong>Sede Legale:</strong> Centro Commerciale Citylife, Piazza Tre Torri, 20145 Milano MI, Italia
                </p>
                <p className="text-foreground">
                  <strong>Partita IVA:</strong> IT12345678901
                </p>
                <p className="text-foreground">
                  <strong>Codice Fiscale:</strong> 12345678901
                </p>
                <p className="text-foreground">
                  <strong>Numero REA:</strong> MI-1234567
                </p>
                <p className="text-foreground">
                  <strong>Capitale Sociale:</strong> €10.000,00 i.v.
                </p>
                <p className="text-foreground">
                  <strong>PEC:</strong> brillantedetailing@pec.it
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">Contatti</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong>Telefono:</strong>{" "}
                  <a href="tel:+390254816398" className="text-accent hover:underline">
                    +39 02 5481 6398
                  </a>
                  {" / "}
                  <a href="tel:+393474521985" className="text-accent hover:underline">
                    +39 347 452 1985
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@brillantedetailingit.com" className="text-accent hover:underline">
                    info@brillantedetailingit.com
                  </a>
                </p>
                <p>
                  <strong>Sito Web:</strong>{" "}
                  <a href="https://www.brillantedetailingit.com" className="text-accent hover:underline">
                    www.brillantedetailingit.com
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">Oggetto dell'Attività</h2>
              <p className="text-muted-foreground leading-relaxed">
                Brillante Detailing S.r.l. opera nel settore dell'autolavaggio professionale e del detailing
                automobilistico, offrendo servizi di alta qualità per la cura, la pulizia e la protezione dei veicoli. I
                nostri servizi includono lavaggio esterno, pulizia interni, lucidatura, trattamenti ceramici,
                sanificazione e altri servizi specializzati per la cura dell'auto.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">Proprietà Intellettuale</h2>
              <p className="text-muted-foreground leading-relaxed">
                Tutti i contenuti presenti su questo sito web, inclusi testi, immagini, loghi, grafica, video e
                software, sono di proprietà di Brillante Detailing S.r.l. o dei rispettivi proprietari e sono protetti
                dalle leggi italiane ed internazionali sul diritto d'autore e sulla proprietà intellettuale. È vietata
                la riproduzione, distribuzione o utilizzo non autorizzato di qualsiasi contenuto del sito.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">Limitazione di Responsabilità</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Brillante Detailing S.r.l. si impegna a mantenere le informazioni presenti su questo sito web accurate e
                aggiornate. Tuttavia, non possiamo garantire l'assenza di errori o omissioni. L'utilizzo delle
                informazioni presenti sul sito è a rischio dell'utente.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Brillante Detailing S.r.l. non sarà responsabile per eventuali danni diretti, indiretti, incidentali o
                consequenziali derivanti dall'utilizzo o dall'impossibilità di utilizzare questo sito web o i suoi
                contenuti.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">Link Esterni</h2>
              <p className="text-muted-foreground leading-relaxed">
                Questo sito web può contenere link a siti web di terze parti. Brillante Detailing S.r.l. non ha alcun
                controllo su questi siti e non è responsabile per i loro contenuti, politiche sulla privacy o pratiche.
                L'inclusione di link esterni non implica approvazione o raccomandazione da parte nostra.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">Legge Applicabile e Foro Competente</h2>
              <p className="text-muted-foreground leading-relaxed">
                Queste note legali sono regolate dalla legge italiana. Per qualsiasi controversia relativa
                all'interpretazione, esecuzione o validità delle presenti note legali, sarà competente in via esclusiva
                il Foro di Milano.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">Informazioni Aggiuntive</h2>
              <p className="text-muted-foreground leading-relaxed">
                Per ulteriori informazioni sui nostri servizi, politiche e pratiche aziendali, ti invitiamo a consultare
                le seguenti pagine:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
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
                <li>
                  <Link href="/contatti" className="text-accent hover:underline">
                    Contatti
                  </Link>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">Aggiornamenti</h2>
              <p className="text-muted-foreground leading-relaxed">
                Brillante Detailing S.r.l. si riserva il diritto di modificare queste note legali in qualsiasi momento.
                Le modifiche saranno effettive dal momento della loro pubblicazione su questa pagina. Ti invitiamo a
                consultare regolarmente questa pagina per rimanere informato su eventuali aggiornamenti.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString("it-IT")}
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
