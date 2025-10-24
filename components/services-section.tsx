import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

const services = [
  {
    id: "lavaggio-esterno",
    title: "Lavaggio Esterno Completo",
    description: "Pulizia professionale della carrozzeria con prodotti premium e tecniche avanzate",
    image: "/car-exterior-wash-foam-cleaning-luxury-vehicle.jpg",
    featured: true,
  },
  {
    id: "detailing-completo",
    title: "Detailing Completo",
    description: "Trattamento completo interno ed esterno per risultati perfetti e duraturi",
    image: "/luxury-car-detailing-interior-leather-premium.jpg",
    featured: true,
  },
  {
    id: "pulizia-interni",
    title: "Pulizia Interni Profonda",
    description: "Sanificazione e pulizia approfondita di tutti gli interni del veicolo",
    image: "/car-interior-deep-cleaning-vacuum-professional.jpg",
  },
  {
    id: "lucidatura-carrozzeria",
    title: "Lucidatura Carrozzeria",
    description: "Ripristino della brillantezza originale della vernice",
    image: "/car-paint-polishing-buffing-shine-professional.jpg",
  },
  {
    id: "trattamento-ceramico",
    title: "Trattamento Ceramico",
    description: "Protezione duratura con rivestimento ceramico professionale",
    image: "/ceramic-coating-car-protection-application.jpg",
    featured: true,
  },
  {
    id: "rimozione-macchie",
    title: "Rimozione Macchie",
    description: "Eliminazione professionale di macchie difficili",
    image: "/stain-removal-car-upholstery-cleaning-professional.jpg",
  },
  {
    id: "sanificazione-interni",
    title: "Sanificazione Interni",
    description: "Trattamento antibatterico e igienizzazione completa",
    image: "/car-interior-sanitization-ozone-treatment-professi.jpg",
  },
  {
    id: "pulizia-motore",
    title: "Pulizia Motore",
    description: "Lavaggio professionale del vano motore",
    image: "/engine-bay-cleaning-detailing-professional.jpg",
  },
  {
    id: "restauro-fari",
    title: "Restauro Fari",
    description: "Ripristino della trasparenza dei fari opacizzati",
    image: "/headlight-restoration-polishing-clear.jpg",
  },
  {
    id: "protezione-vernice",
    title: "Protezione Vernice",
    description: "Applicazione di cere e sigillanti protettivi premium",
    image: "/car-paint-protection-wax-sealant-application.jpg",
  },
  {
    id: "pulizia-cerchi",
    title: "Pulizia Cerchi e Pneumatici",
    description: "Trattamento specifico per cerchi e pneumatici",
    image: "/wheel-tire-cleaning-detailing-professional-shine.jpg",
  },
  {
    id: "trattamento-pelle",
    title: "Trattamento Pelle",
    description: "Nutrizione e protezione per interni in pelle",
    image: "/leather-treatment-conditioning-car-interior-luxury.jpg",
  },
  {
    id: "rimozione-graffi",
    title: "Rimozione Graffi",
    description: "Correzione di graffi superficiali e imperfezioni",
    image: "/scratch-removal-car-paint-correction-professional.jpg",
  },
]

export function ServicesSection() {
  return (
    <section id="servizi" className="py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1 bg-accent/10 rounded-full">
            <span className="text-accent font-medium text-sm tracking-wide">I NOSTRI SERVIZI</span>
          </div>

          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
            Servizi Premium per la Tua Auto
          </h2>

          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Offriamo una gamma completa di servizi professionali per la cura, la protezione e il restauro della tua auto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={`/servizi/${service.id}`}
              className={`group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 ${
                service.featured ? "md:col-span-2 md:row-span-2 min-h-[500px]" : "min-h-[400px]"
              }`}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer" />
              </div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {service.featured && (
                  <div className="absolute top-6 right-6 px-3 py-1 bg-accent/90 backdrop-blur-sm rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-accent-foreground" />
                    <span className="text-xs font-medium text-accent-foreground">Popolare</span>
                  </div>
                )}

                <h3
                  className={`font-serif font-bold text-white mb-2 text-balance group-hover:text-accent transition-colors ${
                    service.featured ? "text-2xl md:text-3xl" : "text-xl"
                  }`}
                >
                  {service.title}
                </h3>

                <p
                  className={`text-white/90 mb-4 text-pretty leading-relaxed ${
                    service.featured ? "text-base" : "text-sm"
                  }`}
                >
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-accent group-hover:gap-4 transition-all">
                  <span className="text-sm font-medium">Scopri di più</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
