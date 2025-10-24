import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Termini e Condizioni - Brillante Detailing",
  description: "Termini e condizioni di utilizzo dei servizi Brillante Detailing",
}

export default function TermsPage() {
  return (
    <main>
      <Navigation />

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Torna alla home</span>
          </Link>

          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Termini e Condizioni</h1>
          <p className="text-muted-foreground mb-12">Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">1. Accettazione dei Termini</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizzando i servizi di Brillante Detailing, accetti di essere vincolato da questi termini e
                condizioni. Se non accetti questi termini, ti preghiamo di non utilizzare i nostri servizi. Ci
                riserviamo il diritto di modificare questi termini in qualsiasi momento.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">2. Servizi Offerti</h2>
              <p className="text-muted-foreground leading-relaxed">
                Brillante Detailing offre servizi professionali di autolavaggio, detailing e cura auto. I servizi
                includono, ma non sono limitati a: lavaggio esterno, pulizia interni, lucidatura, trattamenti ceramici,
                sanificazione e altri servizi specializzati come descritto sul nostro sito web.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">3. Prenotazioni e Pagamenti</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le prenotazioni possono essere effettuate tramite il nostro sito web, telefono o email. I termini di
                prenotazione e pagamento sono i seguenti:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Le prenotazioni sono soggette a disponibilità</li>
                <li>È richiesto un acconto del 30% per servizi superiori a €200</li>
                <li>Il pagamento può essere effettuato in contanti, carta di credito o bonifico bancario</li>
                <li>I prezzi indicati sono IVA inclusa</li>
                <li>I prezzi possono variare in base alle condizioni del veicolo</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">4. Cancellazioni e Rimborsi</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La nostra politica di cancellazione è la seguente:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Cancellazioni con almeno 24 ore di anticipo: rimborso completo</li>
                <li>Cancellazioni con meno di 24 ore di anticipo: rimborso del 50%</li>
                <li>Mancata presentazione senza preavviso: nessun rimborso</li>
                <li>Ci riserviamo il diritto di cancellare o riprogrammare appuntamenti in caso di emergenza</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">5. Responsabilità del Cliente</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Il cliente è responsabile di:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Rimuovere oggetti di valore dal veicolo prima del servizio</li>
                <li>Informarci di eventuali danni preesistenti al veicolo</li>
                <li>Fornire informazioni accurate sul veicolo e sui servizi richiesti</li>
                <li>Rispettare gli orari di appuntamento concordati</li>
                <li>Garantire che il veicolo sia accessibile e in condizioni sicure per il trattamento</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">6. Limitazione di Responsabilità</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Brillante Detailing si impegna a fornire servizi di alta qualità, tuttavia:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Non siamo responsabili per danni preesistenti non segnalati</li>
                <li>Non siamo responsabili per oggetti lasciati nel veicolo</li>
                <li>Alcuni risultati possono variare in base alle condizioni del veicolo</li>
                <li>La rimozione completa di alcune macchie o danni potrebbe non essere possibile</li>
                <li>La nostra responsabilità è limitata al valore del servizio fornito</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">7. Garanzia dei Servizi</h2>
              <p className="text-muted-foreground leading-relaxed">
                Garantiamo la qualità dei nostri servizi. Se non sei soddisfatto del risultato, ti preghiamo di
                contattarci entro 48 ore dal completamento del servizio. Valuteremo la situazione e, se appropriato,
                offriremo un ritocco gratuito o un rimborso parziale.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">8. Proprietà Intellettuale</h2>
              <p className="text-muted-foreground leading-relaxed">
                Tutti i contenuti presenti su questo sito web, inclusi testi, immagini, loghi e grafica, sono di
                proprietà di Brillante Detailing o dei rispettivi proprietari e sono protetti dalle leggi sul copyright.
                È vietata la riproduzione senza autorizzazione scritta.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">9. Privacy e Protezione dei Dati</h2>
              <p className="text-muted-foreground leading-relaxed">
                Il trattamento dei tuoi dati personali è regolato dalla nostra{" "}
                <Link href="/privacy" className="text-accent hover:underline">
                  Privacy Policy
                </Link>
                . Utilizzando i nostri servizi, accetti il trattamento dei tuoi dati come descritto nella Privacy
                Policy.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">10. Modifiche ai Termini</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ci riserviamo il diritto di modificare questi termini e condizioni in qualsiasi momento. Le modifiche
                entreranno in vigore immediatamente dopo la pubblicazione sul sito web. L'uso continuato dei nostri
                servizi dopo le modifiche costituisce accettazione dei nuovi termini.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">11. Legge Applicabile</h2>
              <p className="text-muted-foreground leading-relaxed">
                Questi termini e condizioni sono regolati dalla legge italiana. Qualsiasi controversia sarà di
                competenza esclusiva del foro di Milano, Italia.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">12. Contatti</h2>
              <p className="text-muted-foreground leading-relaxed">
                Per domande su questi termini e condizioni, contattaci tramite il{" "}
                <Link href="/#contatti" className="text-accent hover:underline">
                  modulo di contatto
                </Link>{" "}
                sul nostro sito web.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
