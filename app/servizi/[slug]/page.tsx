import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Check, Clock } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const servicesData = {
  "lavaggio-esterno": {
    title: "Lavaggio Esterno Completo",
    description: "Pulizia professionale della carrozzeria con prodotti premium",
    image: "/car-exterior-wash-foam-cleaning.jpg",
    longDescription:
      "Il nostro lavaggio esterno completo utilizza prodotti premium e tecniche professionali per garantire una pulizia profonda e sicura della carrozzeria. Rimuoviamo sporco, polvere, insetti e residui stradali preservando la vernice.",
    duration: "45-60 minuti",
    price: "€35",
    benefits: [
      "Lavaggio con shampoo pH neutro premium",
      "Pulizia cerchi e pneumatici",
      "Asciugatura con panni in microfibra",
      "Pulizia vetri esterni",
      "Trattamento plastiche esterne",
      "Brillantatura carrozzeria",
    ],
    process: [
      "Pre-lavaggio con schiuma attiva",
      "Lavaggio manuale a due secchi",
      "Risciacquo ad alta pressione",
      "Asciugatura professionale",
      "Finitura e controllo qualità",
    ],
  },
  "detailing-completo": {
    title: "Detailing Completo",
    description: "Trattamento completo interno ed esterno per risultati perfetti",
    image: "/luxury-car-detailing-interior-leather.jpg",
    longDescription:
      "Il servizio di detailing completo è il nostro trattamento più completo, che combina pulizia profonda, correzione estetica e protezione sia per gli interni che per gli esterni del veicolo. Ideale per chi desidera il massimo risultato.",
    duration: "4-6 ore",
    price: "€350",
    benefits: [
      "Lavaggio esterno completo premium",
      "Lucidatura e correzione vernice",
      "Pulizia interni profonda con sanificazione",
      "Trattamento pelle e plastiche",
      "Pulizia motore",
      "Protezione ceramica light",
      "Restauro fari",
      "Pulizia cerchi e pneumatici",
    ],
    process: [
      "Ispezione iniziale e documentazione",
      "Lavaggio esterno completo",
      "Decontaminazione vernice",
      "Lucidatura e correzione",
      "Pulizia interni profonda",
      "Trattamenti protettivi",
      "Controllo qualità finale",
    ],
  },
  "pulizia-interni": {
    title: "Pulizia Interni Profonda",
    description: "Sanificazione e pulizia approfondita di tutti gli interni",
    image: "/car-interior-deep-cleaning-vacuum.jpg",
    longDescription:
      "La pulizia interni profonda rimuove sporco, macchie e odori da sedili, tappetini, cruscotto e tutte le superfici interne. Utilizziamo aspiratori professionali e prodotti specifici per ogni materiale.",
    duration: "2-3 ore",
    price: "€120",
    benefits: [
      "Aspirazione profonda di sedili e tappetini",
      "Pulizia e igienizzazione tessuti",
      "Trattamento cruscotto e plastiche",
      "Pulizia vetri interni",
      "Pulizia vani portaoggetti",
      "Deodorizzazione abitacolo",
    ],
    process: [
      "Rimozione tappetini e oggetti",
      "Aspirazione completa",
      "Pulizia tessuti e superfici",
      "Trattamento plastiche",
      "Pulizia vetri",
      "Deodorizzazione finale",
    ],
  },
  "lucidatura-carrozzeria": {
    title: "Lucidatura Carrozzeria",
    description: "Ripristino della brillantezza originale della vernice",
    image: "/car-paint-polishing-buffing-shine.jpg",
    longDescription:
      "La lucidatura professionale rimuove graffi superficiali, ossidazioni e imperfezioni della vernice, ripristinando la brillantezza originale. Utilizziamo lucidatrici rotorbitali e paste abrasive di alta qualità.",
    duration: "3-5 ore",
    price: "€250",
    benefits: [
      "Rimozione graffi superficiali",
      "Eliminazione ossidazioni",
      "Ripristino brillantezza",
      "Correzione imperfezioni vernice",
      "Finitura mirror",
      "Protezione con cera premium",
    ],
    process: [
      "Lavaggio e decontaminazione",
      "Valutazione vernice",
      "Lucidatura multi-step",
      "Rifinitura",
      "Applicazione protettivo",
      "Ispezione finale",
    ],
  },
  "trattamento-ceramico": {
    title: "Trattamento Ceramico",
    description: "Protezione duratura con rivestimento ceramico professionale",
    image: "/ceramic-coating-car-protection.jpg",
    longDescription:
      "Il trattamento ceramico crea uno strato protettivo permanente sulla vernice che respinge acqua, sporco e contaminanti. Offre protezione superiore e facilita la manutenzione per anni.",
    duration: "1-2 giorni",
    price: "€600",
    benefits: [
      "Protezione duratura 3-5 anni",
      "Effetto idrorepellente",
      "Resistenza a graffi e agenti chimici",
      "Facilità di pulizia",
      "Brillantezza permanente",
      "Protezione UV",
    ],
    process: [
      "Lavaggio e decontaminazione profonda",
      "Lucidatura e correzione vernice",
      "Preparazione superficie",
      "Applicazione coating ceramico",
      "Curing e stabilizzazione",
      "Controllo qualità e garanzia",
    ],
  },
  "rimozione-macchie": {
    title: "Rimozione Macchie",
    description: "Eliminazione professionale di macchie difficili da tessuti e superfici",
    image: "/stain-removal-car-upholstery-cleaning.jpg",
    longDescription:
      "Servizio specializzato per la rimozione di macchie difficili da sedili, tappetini e rivestimenti. Utilizziamo prodotti professionali e tecniche specifiche per ogni tipo di macchia e materiale.",
    duration: "1-2 ore",
    price: "€80",
    benefits: [
      "Rimozione macchie di caffè, vino, cibo",
      "Trattamento macchie di grasso e olio",
      "Eliminazione aloni e segni d'acqua",
      "Rispetto dei materiali originali",
      "Prodotti professionali specifici",
      "Garanzia sul risultato",
    ],
    process: [
      "Identificazione tipo di macchia",
      "Test prodotto su area nascosta",
      "Applicazione trattamento specifico",
      "Rimozione con tecniche professionali",
      "Risciacquo e neutralizzazione",
      "Asciugatura e controllo",
    ],
  },
  "sanificazione-interni": {
    title: "Sanificazione Interni",
    description: "Trattamento antibatterico e igienizzazione completa",
    image: "/car-interior-sanitization-ozone-treatment.jpg",
    longDescription:
      "La sanificazione professionale elimina batteri, virus, acari e allergeni dall'abitacolo. Ideale per chi soffre di allergie o desidera un ambiente interno perfettamente igienizzato.",
    duration: "2-3 ore",
    price: "€100",
    benefits: [
      "Eliminazione batteri e virus",
      "Rimozione allergeni e acari",
      "Trattamento antibatterico superfici",
      "Sanificazione impianto climatizzazione",
      "Eliminazione odori persistenti",
      "Ambiente salubre e sicuro",
    ],
    process: [
      "Pulizia preliminare interni",
      "Applicazione prodotti sanificanti",
      "Trattamento ozono (opzionale)",
      "Sanificazione bocchette aria",
      "Nebulizzazione antibatterica",
      "Aerazione e controllo",
    ],
  },
  "pulizia-motore": {
    title: "Pulizia Motore",
    description: "Lavaggio professionale del vano motore",
    image: "/engine-bay-cleaning-detailing.jpg",
    longDescription:
      "La pulizia del vano motore rimuove grasso, olio e sporco accumulato, migliorando l'aspetto e facilitando la manutenzione. Eseguita con tecniche sicure che proteggono i componenti elettrici.",
    duration: "1-1.5 ore",
    price: "€70",
    benefits: [
      "Rimozione grasso e olio",
      "Pulizia componenti motore",
      "Protezione parti elettriche",
      "Trattamento plastiche vano motore",
      "Miglior individuazione perdite",
      "Aspetto professionale",
    ],
    process: [
      "Protezione componenti elettrici",
      "Applicazione sgrassante",
      "Lavaggio a bassa pressione",
      "Risciacquo accurato",
      "Asciugatura con aria compressa",
      "Trattamento plastiche",
    ],
  },
  "restauro-fari": {
    title: "Restauro Fari",
    description: "Ripristino della trasparenza dei fari opacizzati",
    image: "/headlight-restoration-polishing.jpg",
    longDescription:
      "Il restauro fari rimuove l'opacizzazione causata da UV e agenti atmosferici, ripristinando la trasparenza originale. Migliora la visibilità notturna e l'estetica del veicolo.",
    duration: "1-1.5 ore",
    price: "€90",
    benefits: [
      "Ripristino trasparenza originale",
      "Miglioramento visibilità notturna",
      "Rimozione ingiallimento",
      "Protezione UV",
      "Aspetto come nuovo",
      "Maggior sicurezza alla guida",
    ],
    process: [
      "Mascheratura area circostante",
      "Levigatura con carte abrasive",
      "Lucidatura multi-step",
      "Applicazione protettivo UV",
      "Controllo qualità",
      "Pulizia finale",
    ],
  },
  "protezione-vernice": {
    title: "Protezione Vernice",
    description: "Applicazione di cere e sigillanti protettivi",
    image: "/car-paint-protection-wax-sealant.jpg",
    longDescription:
      "L'applicazione di cere e sigillanti premium protegge la vernice da agenti atmosferici, UV e contaminanti. Dona brillantezza e facilita la manutenzione ordinaria.",
    duration: "2-3 ore",
    price: "€150",
    benefits: [
      "Protezione da UV e agenti atmosferici",
      "Effetto idrorepellente",
      "Brillantezza profonda",
      "Durata 3-6 mesi",
      "Facilità di lavaggio",
      "Protezione da contaminanti",
    ],
    process: [
      "Lavaggio e decontaminazione",
      "Preparazione superficie",
      "Applicazione cera/sigillante",
      "Tempo di curing",
      "Buffing finale",
      "Ispezione qualità",
    ],
  },
  "pulizia-cerchi": {
    title: "Pulizia Cerchi e Pneumatici",
    description: "Trattamento specifico per cerchi e pneumatici",
    image: "/wheel-tire-cleaning-detailing.jpg",
    longDescription:
      "Pulizia profonda di cerchi e pneumatici con prodotti specifici che rimuovono polvere dei freni, sporco stradale e residui. Include trattamento protettivo per gomme.",
    duration: "1 ora",
    price: "€60",
    benefits: [
      "Rimozione polvere freni",
      "Pulizia profonda cerchi",
      "Trattamento pneumatici",
      "Protezione cerchi",
      "Aspetto brillante",
      "Prevenzione corrosione",
    ],
    process: [
      "Applicazione detergente specifico",
      "Spazzolatura cerchi",
      "Pulizia pneumatici",
      "Risciacquo accurato",
      "Asciugatura",
      "Applicazione protettivo gomme",
    ],
  },
  "trattamento-pelle": {
    title: "Trattamento Pelle",
    description: "Nutrizione e protezione per interni in pelle",
    image: "/leather-treatment-conditioning-car-interior.jpg",
    longDescription:
      "Il trattamento professionale per interni in pelle pulisce, nutre e protegge, prevenendo screpolature e mantenendo la morbidezza originale. Ideale per preservare il valore del veicolo.",
    duration: "2-3 ore",
    price: "€130",
    benefits: [
      "Pulizia profonda pelle",
      "Nutrizione e idratazione",
      "Protezione UV",
      "Prevenzione screpolature",
      "Ripristino morbidezza",
      "Aspetto come nuovo",
    ],
    process: [
      "Pulizia con prodotti specifici",
      "Rimozione sporco da pori",
      "Applicazione nutriente",
      "Massaggio pelle",
      "Applicazione protettivo",
      "Buffing finale",
    ],
  },
  "rimozione-graffi": {
    title: "Rimozione Graffi",
    description: "Correzione di graffi superficiali e imperfezioni",
    image: "/scratch-removal-car-paint-correction.jpg",
    longDescription:
      "Servizio specializzato per la rimozione di graffi superficiali e imperfezioni della vernice. Utilizziamo tecniche di correzione professionale per ripristinare l'aspetto originale.",
    duration: "2-4 ore",
    price: "€180",
    benefits: [
      "Rimozione graffi superficiali",
      "Correzione swirl marks",
      "Ripristino uniformità vernice",
      "Lucidatura localizzata",
      "Protezione area trattata",
      "Risultato invisibile",
    ],
    process: [
      "Valutazione profondità graffi",
      "Mascheratura area",
      "Levigatura controllata",
      "Lucidatura multi-step",
      "Rifinitura",
      "Applicazione protettivo",
    ],
  },
  "ozono-trattamento": {
    title: "Ozono Trattamento",
    description: "Eliminazione di odori e batteri con ozono",
    image: "/ozone-treatment-car-odor-removal.jpg",
    longDescription:
      "Il trattamento con ozono è il metodo più efficace per eliminare odori persistenti (fumo, animali, muffa) e sanificare completamente l'abitacolo. L'ozono penetra in ogni angolo eliminando batteri e virus.",
    duration: "3-4 ore",
    price: "€110",
    benefits: [
      "Eliminazione odori persistenti",
      "Sanificazione completa abitacolo",
      "Eliminazione batteri e virus",
      "Trattamento impianto climatizzazione",
      "Nessun residuo chimico",
      "Risultato duraturo",
    ],
    process: [
      "Pulizia preliminare interni",
      "Preparazione abitacolo",
      "Generazione ozono",
      "Tempo di azione (30-60 min)",
      "Aerazione completa",
      "Controllo qualità",
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }))
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = servicesData[slug as keyof typeof servicesData]

  if (!service) {
    notFound()
  }

  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Link
            href="/#servizi"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Torna ai servizi</span>
          </Link>

          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 text-balance max-w-3xl">
            {service.title}
          </h1>
          <p className="text-xl text-white/90 text-pretty max-w-2xl leading-relaxed">{service.description}</p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="font-serif text-3xl font-bold mb-6">Descrizione del Servizio</h2>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{service.longDescription}</p>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="font-serif text-3xl font-bold mb-6">Cosa Include</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="font-serif text-3xl font-bold mb-6">Il Nostro Processo</h2>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                        {index + 1}
                      </div>
                      <div className="pt-1">
                        <p className="text-foreground">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24 space-y-6">

                <div className="border-t pt-6">
                  <div className="flex items-center gap-3 text-muted-foreground mb-4">
                    <Clock className="w-5 h-5" />
                    <div>
                      <div className="text-sm">Durata</div>
                      <div className="font-medium text-foreground">{service.duration}</div>
                    </div>
                  </div>
                </div>

                <Button asChild className="w-full" size="lg">
                  <Link href="/#contatti">Prenota Ora</Link>
                </Button>

                <div className="border-t pt-6 space-y-3 text-sm text-muted-foreground">
                  <p>✓ Prodotti professionali premium</p>
                  <p>✓ Personale qualificato</p>
                  <p>✓ Garanzia soddisfazione</p>
                  <p>✓ Preventivo gratuito</p>
                </div>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-accent/10 rounded-lg p-8 md:p-12 text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">Hai Domande su Questo Servizio?</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty leading-relaxed">
              Il nostro team è a disposizione per fornirti tutte le informazioni di cui hai bisogno e creare un
              preventivo personalizzato.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/#contatti">Contattaci</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/#servizi">Vedi Altri Servizi</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
