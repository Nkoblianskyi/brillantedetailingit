const steps = [
  {
    title: "Analisi Iniziale",
    description:
      "Valutiamo attentamente le condizioni del veicolo e identifichiamo le aree che richiedono attenzione speciale",
  },
  {
    title: "Trattamento Professionale",
    description: "Applichiamo tecniche avanzate e prodotti premium per ottenere risultati eccezionali",
  },
  {
    title: "Protezione Duratura",
    description: "Proteggiamo il tuo investimento con trattamenti che garantiscono una protezione a lungo termine",
  },
  {
    title: "Controllo Qualità",
    description: "Verifichiamo ogni dettaglio per assicurarci che il risultato superi le tue aspettative",
  },
]

export function ProcessSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1 bg-accent/10 rounded-full">
            <span className="text-accent font-medium text-sm tracking-wide">IL NOSTRO PROCESSO</span>
          </div>

          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">Come Lavoriamo</h2>

          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Un processo meticoloso in quattro fasi per garantire risultati perfetti
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              return (
                <div key={index} className="relative">
                  {/* Connection line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-accent/50 to-accent/20" />
                  )}

                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all" />

                    <div className="relative p-8 bg-card rounded-2xl border border-border group-hover:border-accent/50 transition-all">
                      <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all">
                        <span className="text-accent font-bold text-3xl">{index + 1}</span>
                      </div>

                      <h3 className="font-serif text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
