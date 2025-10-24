import { Sparkles, Award, Users, Shield } from "lucide-react"

export function AboutSection() {
  return (
    <section id="chi-siamo" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-accent/20 rounded-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/luxury-car-detailing-professional-team-working-on-.jpg"
                alt="Team Brillante Detailing"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <p className="text-white font-serif text-xl italic">
                    "La passione per l'eccellenza guida ogni nostro servizio"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-block mb-4 px-4 py-1 bg-accent/10 rounded-full">
              <span className="text-accent font-medium text-sm tracking-wide">CHI SIAMO</span>
            </div>

            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
              Eccellenza nel
              <span className="text-accent"> Detailing</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              Brillante Detailing è il punto di riferimento per la cura professionale delle auto di lusso in Italia. Con
              oltre 15 anni di esperienza e una passione incondizionata per l'eccellenza, offriamo servizi di detailing
              e protezione che superano ogni aspettativa.
            </p>

            <p className="text-base text-muted-foreground mb-10 text-pretty leading-relaxed">
              Il nostro team di specialisti certificati utilizza esclusivamente prodotti premium e tecniche
              all'avanguardia per garantire che ogni veicolo riceva il trattamento che merita.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="group p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">Qualità Premium</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Prodotti professionali di altissima qualità per risultati eccezionali
                </p>
              </div>

              <div className="group p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">Team Certificato</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Professionisti certificati con anni di esperienza nel settore
                </p>
              </div>

              <div className="group p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">5000+ Clienti</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Migliaia di clienti soddisfatti che si affidano a noi
                </p>
              </div>

              <div className="group p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">Garanzia Totale</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Soddisfazione garantita su tutti i nostri servizi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
