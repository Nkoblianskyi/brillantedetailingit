import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, Calendar, Droplets, Shield, Sparkles, Sun, Wind } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Guida alla Cura dell'Auto - Robgen",
  description: "Consigli professionali per mantenere la tua auto sempre perfetta",
}

const careCategoryData = [
  {
    icon: Droplets,
    title: "Lavaggio Regolare",
    description: "Come e quando lavare la tua auto per mantenerla sempre pulita",
    tips: [
      "Lava l'auto ogni 2 settimane per rimuovere sporco e contaminanti",
      "Usa sempre prodotti pH neutro specifici per auto",
      "Evita di lavare sotto il sole diretto per prevenire aloni",
      "Asciuga sempre con panni in microfibra per evitare graffi",
      "Inizia sempre dal tetto e scendi verso il basso",
      "Usa il metodo dei due secchi per evitare di riportare lo sporco sulla carrozzeria",
    ],
  },
  {
    icon: Shield,
    title: "Protezione della Vernice",
    description: "Mantieni la brillantezza e proteggi la carrozzeria",
    tips: [
      "Applica cera protettiva ogni 3-4 mesi",
      "Considera un trattamento ceramico per protezione a lungo termine",
      "Rimuovi immediatamente escrementi di uccelli e resina",
      "Parcheggia all'ombra quando possibile per proteggere dai raggi UV",
      "Usa un telo copri-auto di qualità se parcheggi all'aperto",
      "Evita di appoggiare oggetti sulla carrozzeria",
    ],
  },
  {
    icon: Sparkles,
    title: "Pulizia Interni",
    description: "Mantieni l'abitacolo fresco e pulito",
    tips: [
      "Aspira gli interni settimanalmente",
      "Pulisci il cruscotto con prodotti specifici per plastiche",
      "Tratta i sedili in pelle ogni 3-6 mesi con prodotti nutrienti",
      "Usa tappetini di qualità per proteggere la moquette",
      "Pulisci i vetri interni regolarmente per una visibilità ottimale",
      "Rimuovi immediatamente le macchie per evitare che si fissino",
    ],
  },
  {
    icon: Sun,
    title: "Cura Stagionale",
    description: "Adatta la manutenzione alle diverse stagioni",
    tips: [
      "Estate: proteggi gli interni dai raggi UV con parasole",
      "Inverno: rimuovi sale e ghiaccio frequentemente",
      "Primavera: controlla e pulisci i filtri dell'aria condizionata",
      "Autunno: rimuovi foglie e detriti dalle griglie e scarichi",
      "Controlla la pressione dei pneumatici con i cambi di temperatura",
      "Adatta i prodotti di pulizia alla temperatura esterna",
    ],
  },
  {
    icon: Wind,
    title: "Manutenzione Preventiva",
    description: "Piccoli accorgimenti per grandi risultati",
    tips: [
      "Controlla regolarmente i livelli dei fluidi",
      "Ispeziona i tergicristalli e sostituiscili se necessario",
      "Pulisci i fari per mantenere una buona visibilità",
      "Controlla la pressione dei pneumatici mensilmente",
      "Fai controllare l'allineamento delle ruote annualmente",
      "Mantieni pulito il vano motore per individuare eventuali perdite",
    ],
  },
  {
    icon: Calendar,
    title: "Calendario di Manutenzione",
    description: "Programma le attività di cura nel tempo",
    tips: [
      "Settimanale: aspirazione interni e pulizia vetri",
      "Bisettimanale: lavaggio esterno completo",
      "Mensile: pulizia cerchi e pneumatici, controllo pressione",
      "Trimestrale: applicazione cera protettiva, pulizia profonda interni",
      "Semestrale: trattamento pelle, pulizia motore",
      "Annuale: lucidatura carrozzeria, sanificazione completa",
    ],
  },
]

const commonMistakes = [
  {
    mistake: "Usare prodotti domestici",
    solution: "Usa sempre prodotti specifici per auto. I detergenti domestici possono danneggiare vernice e plastiche.",
  },
  {
    mistake: "Lavare con spugne abrasive",
    solution: "Usa solo panni in microfibra o guanti da lavaggio specifici per evitare micro-graffi.",
  },
  {
    mistake: "Asciugare al sole",
    solution: "Asciuga sempre all'ombra per evitare aloni e macchie d'acqua sulla carrozzeria.",
  },
  {
    mistake: "Ignorare le macchie",
    solution: "Rimuovi le macchie immediatamente. Più aspetti, più difficile sarà eliminarle completamente.",
  },
  {
    mistake: "Trascurare gli interni",
    solution: "Gli interni richiedono la stessa attenzione degli esterni. Puliscili regolarmente.",
  },
  {
    mistake: "Usare troppa pressione",
    solution: "Sia nel lavaggio che nella lucidatura, usa movimenti delicati per non danneggiare le superfici.",
  },
]

const professionalServices = [
  {
    title: "Quando Rivolgersi ai Professionisti",
    description:
      "Alcuni trattamenti richiedono competenze e attrezzature professionali per ottenere risultati ottimali e sicuri.",
    services: [
      "Lucidatura e correzione della vernice",
      "Applicazione di trattamenti ceramici",
      "Rimozione di graffi profondi",
      "Restauro fari opacizzati",
      "Sanificazione con ozono",
      "Pulizia profonda del motore",
    ],
  },
]

export default function CarCareGuidePage() {
  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-accent/10 to-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Torna alla home</span>
          </Link>

          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">
              Guida Completa alla Cura dell'Auto
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Consigli professionali e best practices per mantenere la tua auto sempre perfetta, dentro e fuori. Scopri
              come proteggere il tuo investimento e preservare il valore del veicolo nel tempo.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Perché la Cura Regolare è Importante</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Una corretta manutenzione estetica non è solo una questione di aspetto. Prendersi cura regolarmente
                  della propria auto significa:
                </p>
                <ul className="space-y-2 list-disc pl-6">
                  <li>Preservare il valore di rivendita del veicolo</li>
                  <li>Proteggere la carrozzeria da danni permanenti</li>
                  <li>Mantenere un ambiente interno salubre</li>
                  <li>Individuare tempestivamente eventuali problemi</li>
                  <li>Godere di un'esperienza di guida più piacevole</li>
                </ul>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="/car-detailing-professional-care.jpg?height=600&width=800"
                alt="Cura professionale auto"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Care Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Aree di Cura Principali</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Ogni aspetto della cura auto richiede attenzione e tecniche specifiche per risultati ottimali
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careCategoryData.map((category, index) => {
              const Icon = category.icon
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="text-sm flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Errori Comuni da Evitare</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Anche con le migliori intenzioni, è facile commettere errori che possono danneggiare la tua auto
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {commonMistakes.map((item, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-destructive font-bold">✕</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{item.mistake}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Services */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-center">
              {professionalServices[0].title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center text-pretty leading-relaxed">
              {professionalServices[0].description}
            </p>

            <Card className="p-8">
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {professionalServices[0].services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent text-sm">✓</span>
                    </div>
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>

              <div className="text-center pt-6 border-t">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Il nostro team di professionisti è a tua disposizione per tutti i trattamenti specializzati che
                  richiedono competenze tecniche e attrezzature professionali.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/#servizi">Scopri i Nostri Servizi</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/#contatti">Richiedi Consulenza</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Recommendations */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Prodotti Consigliati</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Investire in prodotti di qualità fa la differenza nei risultati e nella protezione del veicolo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Essenziali per il Lavaggio</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Shampoo pH neutro di qualità</li>
                <li>• Panni in microfibra (almeno 3-4)</li>
                <li>• Due secchi per il metodo sicuro</li>
                <li>• Spazzola morbida per cerchi</li>
                <li>• Detergente specifico per vetri</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Protezione e Finitura</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Cera di carnauba o sintetica</li>
                <li>• Sigillante per vernice</li>
                <li>• Protettivo per pneumatici</li>
                <li>• Trattamento per plastiche</li>
                <li>• Spray detailer per ritocchi</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Cura Interni</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Detergente per tessuti</li>
                <li>• Nutriente per pelle</li>
                <li>• Pulitore per plastiche</li>
                <li>• Aspirapolvere potente</li>
                <li>• Deodorante per abitacolo</li>
              </ul>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Nota: Utilizziamo e consigliamo solo prodotti professionali testati. Contattaci per consigli specifici per
              il tuo veicolo.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Hai Bisogno di Aiuto Professionale?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
            Il nostro team di esperti è pronto ad aiutarti con qualsiasi esigenza di cura e manutenzione del tuo
            veicolo. Dalla consulenza ai trattamenti più avanzati, siamo qui per te.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/#contatti">Prenota un Servizio</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/#servizi">Vedi Tutti i Servizi</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
