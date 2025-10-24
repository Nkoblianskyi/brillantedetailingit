import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Cookie Policy - Brillante Detailing",
  description: "Informativa sui cookie di Brillante Detailing",
}

export default function CookiePolicyPage() {
  return (
    <main>
      <Navigation />

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Torna alla home</span>
          </Link>

          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-muted-foreground mb-12">Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">1. Cosa Sono i Cookie</h2>
              <p className="text-muted-foreground leading-relaxed">
                I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito
                web. Vengono utilizzati per far funzionare i siti web in modo più efficiente e per fornire informazioni
                ai proprietari del sito.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">2. Come Utilizziamo i Cookie</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Utilizziamo i cookie per diversi scopi, tra cui:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Garantire il corretto funzionamento del sito web</li>
                <li>Ricordare le tue preferenze e impostazioni</li>
                <li>Analizzare come utilizzi il nostro sito per migliorarlo</li>
                <li>Personalizzare i contenuti in base ai tuoi interessi</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">3. Tipi di Cookie che Utilizziamo</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-xl mb-3">Cookie Essenziali</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Questi cookie sono necessari per il funzionamento del sito web e non possono essere disattivati.
                    Includono cookie che ti permettono di navigare nel sito e utilizzare le sue funzionalità.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-xl mb-3">Cookie Analitici</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Questi cookie ci aiutano a capire come i visitatori interagiscono con il nostro sito raccogliendo e
                    riportando informazioni in forma anonima. Utilizziamo questi dati per migliorare il funzionamento
                    del sito.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-xl mb-3">Cookie di Funzionalità</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Questi cookie permettono al sito di ricordare le scelte che fai (come il tuo nome utente, lingua o
                    regione) e forniscono funzionalità migliorate e più personali.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-xl mb-3">Cookie di Preferenze</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Questi cookie memorizzano le tue preferenze di consenso ai cookie, in modo che non ti venga
                    richiesto di fornire nuovamente il consenso ogni volta che visiti il sito.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">4. Cookie di Terze Parti</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Alcuni cookie sono impostati da servizi di terze parti che appaiono sulle nostre pagine. Questi
                includono:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Vercel Analytics:</strong> per analizzare il traffico del sito web
                </li>
                <li>
                  <strong>Google Fonts:</strong> per caricare i font utilizzati sul sito
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Non abbiamo controllo su questi cookie. Ti consigliamo di consultare le politiche sulla privacy di
                questi servizi di terze parti per maggiori informazioni.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">5. Durata dei Cookie</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">I cookie possono essere:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Cookie di sessione:</strong> temporanei e vengono eliminati quando chiudi il browser
                </li>
                <li>
                  <strong>Cookie persistenti:</strong> rimangono sul tuo dispositivo per un periodo di tempo predefinito
                  o fino a quando non li elimini manualmente
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">6. Come Gestire i Cookie</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Puoi gestire le tue preferenze sui cookie in diversi modi:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Banner dei cookie:</strong> quando visiti il nostro sito per la prima volta, puoi accettare o
                  rifiutare i cookie non essenziali
                </li>
                <li>
                  <strong>Impostazioni del browser:</strong> la maggior parte dei browser ti permette di controllare i
                  cookie attraverso le impostazioni. Puoi impostare il browser per rifiutare i cookie o per avvisarti
                  quando vengono inviati
                </li>
                <li>
                  <strong>Eliminazione dei cookie:</strong> puoi eliminare i cookie già presenti sul tuo dispositivo in
                  qualsiasi momento
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Nota: se disabiliti i cookie, alcune funzionalità del sito potrebbero non funzionare correttamente.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">7. Modifiche a Questa Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Potremmo aggiornare questa Cookie Policy di tanto in tanto per riflettere cambiamenti nelle nostre
                pratiche o per altri motivi operativi, legali o normativi. Ti consigliamo di rivedere periodicamente
                questa pagina per rimanere informato su come utilizziamo i cookie.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">8. Ulteriori Informazioni</h2>
              <p className="text-muted-foreground leading-relaxed">
                Per ulteriori informazioni su come trattiamo i tuoi dati personali, consulta la nostra{" "}
                <Link href="/privacy" className="text-accent hover:underline">
                  Privacy Policy
                </Link>
                . Se hai domande su questa Cookie Policy, contattaci tramite il{" "}
                <Link href="/#contatti" className="text-accent hover:underline">
                  modulo di contatto
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
