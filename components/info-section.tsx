import { Clock, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function InfoSection() {
  return (
    <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
              <span className="text-accent font-medium text-sm tracking-wide">INFORMAZIONI</span>
            </div>

            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">Vieni a Trovarci</h2>

            <p className="text-lg opacity-90 max-w-2xl mx-auto text-pretty leading-relaxed">
              Siamo pronti ad accoglierti nel nostro centro specializzato per prenderci cura della tua auto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all">
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/30 transition-all">
                <Clock className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-4">Orari di Apertura</h3>
              <div className="space-y-2 text-sm opacity-90 leading-relaxed">
                <p className="flex justify-between">
                  <span>Lunedì - Venerdì</span>
                  <span className="font-medium">8:00 - 19:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Sabato</span>
                  <span className="font-medium">9:00 - 18:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Domenica</span>
                  <span className="font-medium">Chiuso</span>
                </p>
              </div>
            </div>

            <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all">
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/30 transition-all">
                <MapPin className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-4">Dove Siamo</h3>
              <p className="text-sm opacity-90 leading-relaxed mb-4">
                Centro Commerciale Citylife
                <br />
                Piazza Tre Torri
                <br />
                20145 Milano MI, Italia
              </p>
              <Button variant="link" className="text-accent hover:text-accent/80 p-0 h-auto font-medium">
                Ottieni Indicazioni →
              </Button>
            </div>

            <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all">
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/30 transition-all">
                <Phone className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-4">Telefono</h3>
              <div className="space-y-2 text-sm opacity-90 leading-relaxed">
                <p>
                  <a href="tel:+390254816398" className="hover:text-accent transition-colors">
                    +39 02 5481 6398
                  </a>
                </p>
                <p>
                  <a href="tel:+393474521985" className="hover:text-accent transition-colors">
                    +39 347 452 1985
                  </a>
                </p>
              </div>
            </div>

            <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all">
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/30 transition-all">
                <Mail className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-4">Email</h3>
              <div className="space-y-2 text-sm opacity-90 leading-relaxed">
                <p>
                  <a href="mailto:info@brillantedetailingit.com" className="hover:text-accent transition-colors">
                    info@brillantedetailingit.com
                  </a>
                </p>
                <p>
                  <a href="mailto:prenotazioni@brillantedetailingit.com" className="hover:text-accent transition-colors">
                    prenotazioni@brillantedetailingit.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="text-center p-12 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">Pronto a Dare Nuova Vita alla Tua Auto?</h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Prenota ora il tuo appuntamento e scopri la differenza che fa un servizio professionale
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6 rounded-full"
            >
              <Link href="/#contatti">Prenota Subito</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
