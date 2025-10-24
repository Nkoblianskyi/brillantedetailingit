import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Privacy Policy - Brillante Detailing",
  description: "Informativa sulla privacy di Brillante Detailing",
}

export default function PrivacyPage() {
  return (
    <main>
      <Navigation />

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Torna alla home</span>
          </Link>

          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12">Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">1. Introduzione</h2>
              <p className="text-muted-foreground leading-relaxed">
                Brillante Detailing S.r.l. ("noi", "nostro") rispetta la tua privacy e si impegna a proteggere i tuoi
                dati personali. Questa informativa sulla privacy ti informa su come trattiamo i tuoi dati personali
                quando visiti il nostro sito web e ti informa sui tuoi diritti in materia di privacy.
              </p>
              <div className="bg-muted/30 p-4 rounded-lg mt-4 text-sm">
                <p className="text-foreground">
                  <strong>Titolare del Trattamento:</strong> Brillante Detailing IT
                </p>
                <p className="text-foreground">
                  <strong>Sede:</strong> Centro Commerciale Citylife, Piazza Tre Torri, 20145 Milano MI, Italia
                </p>

                <p className="text-foreground">
                  <strong>Email:</strong> info@brillantedetailingit.com
                </p>

              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">2. Dati che Raccogliamo</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Possiamo raccogliere, utilizzare, archiviare e trasferire diversi tipi di dati personali su di te:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Dati di identità:</strong> nome, cognome
                </li>
                <li>
                  <strong>Dati di contatto:</strong> indirizzo email, numero di telefono
                </li>
                <li>
                  <strong>Dati tecnici:</strong> indirizzo IP, tipo di browser, fuso orario, sistema operativo
                </li>
                <li>
                  <strong>Dati di utilizzo:</strong> informazioni su come utilizzi il nostro sito web
                </li>
                <li>
                  <strong>Dati del veicolo:</strong> marca, modello, targa (quando forniti per i servizi)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">3. Come Utilizziamo i Tuoi Dati</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Utilizziamo i tuoi dati personali per i seguenti scopi:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Fornire e gestire i nostri servizi di autolavaggio e detailing</li>
                <li>Elaborare e gestire le tue prenotazioni</li>
                <li>Comunicare con te riguardo ai servizi richiesti</li>
                <li>Migliorare il nostro sito web e i nostri servizi</li>
                <li>Inviarti comunicazioni di marketing (solo con il tuo consenso)</li>
                <li>Rispettare obblighi legali e normativi</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">4. Base Giuridica del Trattamento</h2>
              <p className="text-muted-foreground leading-relaxed">
                Trattiamo i tuoi dati personali sulla base di diverse basi giuridiche, tra cui: esecuzione di un
                contratto, consenso, interessi legittimi e obblighi legali. Il trattamento è necessario per l'esecuzione
                dei servizi richiesti e per il perseguimento dei nostri legittimi interessi commerciali.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">5. Condivisione dei Dati</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Potremmo condividere i tuoi dati personali con:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Fornitori di servizi che ci assistono nelle operazioni aziendali</li>
                <li>Fornitori di servizi di pagamento per elaborare le transazioni</li>
                <li>Autorità legali quando richiesto dalla legge</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Non vendiamo né affittiamo i tuoi dati personali a terzi per scopi di marketing.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">6. Sicurezza dei Dati</h2>
              <p className="text-muted-foreground leading-relaxed">
                Abbiamo implementato misure di sicurezza appropriate per prevenire l'accesso non autorizzato, la
                divulgazione, la modifica o la distruzione dei tuoi dati personali. Limitiamo l'accesso ai tuoi dati
                personali solo a coloro che hanno una necessità aziendale di conoscerli.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">7. Conservazione dei Dati</h2>
              <p className="text-muted-foreground leading-relaxed">
                Conserviamo i tuoi dati personali solo per il tempo necessario a soddisfare gli scopi per cui li abbiamo
                raccolti, inclusi eventuali requisiti legali, contabili o di reporting. Per determinare il periodo di
                conservazione appropriato, consideriamo la quantità, la natura e la sensibilità dei dati personali.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">8. I Tuoi Diritti</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">In base al GDPR, hai i seguenti diritti:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Diritto di accesso:</strong> puoi richiedere copie dei tuoi dati personali
                </li>
                <li>
                  <strong>Diritto di rettifica:</strong> puoi richiedere la correzione di dati inesatti
                </li>
                <li>
                  <strong>Diritto alla cancellazione:</strong> puoi richiedere la cancellazione dei tuoi dati
                </li>
                <li>
                  <strong>Diritto di limitazione:</strong> puoi richiedere la limitazione del trattamento
                </li>
                <li>
                  <strong>Diritto di opposizione:</strong> puoi opporti al trattamento dei tuoi dati
                </li>
                <li>
                  <strong>Diritto alla portabilità:</strong> puoi richiedere il trasferimento dei tuoi dati
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">9. Cookie</h2>
              <p className="text-muted-foreground leading-relaxed">
                Il nostro sito web utilizza cookie per migliorare la tua esperienza. I cookie sono piccoli file di testo
                memorizzati sul tuo dispositivo. Puoi gestire le tue preferenze sui cookie attraverso il banner dei
                cookie o le impostazioni del tuo browser. Per maggiori informazioni, consulta la nostra{" "}
                <Link href="/cookie-policy" className="text-accent hover:underline">
                  Cookie Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">10. Modifiche a Questa Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Potremmo aggiornare questa informativa sulla privacy di tanto in tanto. Ti informeremo di eventuali
                modifiche pubblicando la nuova informativa su questa pagina e aggiornando la data di "Ultimo
                aggiornamento".
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">11. Contattaci</h2>
              <p className="text-muted-foreground leading-relaxed">
                Se hai domande su questa informativa sulla privacy o desideri esercitare i tuoi diritti, contattaci
                tramite il{" "}
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
