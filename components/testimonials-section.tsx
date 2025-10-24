"use client"

import { Star, User, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Marco Rossi",
    role: "Proprietario Ferrari 488",
    content:
      "Servizio impeccabile! La mia Ferrari non è mai stata così brillante. Il team di Brillante Detailing ha superato ogni mia aspettativa con la loro attenzione ai dettagli.",
    rating: 5,
  },
  {
    name: "Giulia Bianchi",
    role: "Proprietaria Porsche 911",
    content:
      "Professionalità e qualità al top. Il trattamento ceramico ha trasformato completamente la mia auto. Consigliatissimo!",
    rating: 5,
  },
  {
    name: "Alessandro Conti",
    role: "Proprietario Mercedes AMG",
    content:
      "Finalmente un centro che capisce le esigenze delle auto di lusso. Risultati straordinari e personale competentissimo.",
    rating: 5,
  },
  {
    name: "Sofia Romano",
    role: "Proprietaria Maserati",
    content:
      "La cura e l'attenzione che dedicano ad ogni dettaglio è impressionante. La mia Maserati sembra appena uscita dalla concessionaria!",
    rating: 5,
  },
  {
    name: "Luca Ferrari",
    role: "Proprietario Lamborghini Huracán",
    content:
      "Ho provato diversi centri detailing, ma Brillante Detailing è su un altro livello. La lucidatura è perfetta e il servizio clienti eccezionale.",
    rating: 5,
  },
  {
    name: "Valentina Greco",
    role: "Proprietaria Audi RS6",
    content:
      "Dopo il trattamento ceramico la mia auto è protetta e splendente. Il rapporto qualità-prezzo è ottimo considerando il livello di professionalità.",
    rating: 5,
  },
  {
    name: "Roberto Marino",
    role: "Proprietario BMW M5",
    content:
      "La pulizia interni è stata incredibile. Hanno rimosso macchie che pensavo fossero permanenti. Tornerò sicuramente!",
    rating: 5,
  },
  {
    name: "Chiara Fontana",
    role: "Proprietario Range Rover",
    content:
      "Servizio di sanificazione perfetto. L'interno della mia auto profuma di nuovo e ogni superficie è impeccabile. Altamente raccomandato!",
    rating: 5,
  },
  {
    name: "Davide Colombo",
    role: "Proprietario Alfa Romeo Giulia Quadrifoglio",
    content:
      "Il restauro dei fari ha fatto miracoli! Sembrano nuovi di zecca. Personale cordiale e prezzi onesti per la qualità offerta.",
    rating: 5,
  },
  {
    name: "Elena Ricci",
    role: "Proprietaria Tesla Model S",
    content:
      "Anche per le auto elettriche sanno esattamente cosa fare. Attenzione maniacale ai dettagli e prodotti di altissima qualità. Bravissimi!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const getItemsPerView = () => {
    if (typeof window === "undefined") return 1
    if (window.innerWidth >= 1024) return 3
    if (window.innerWidth >= 768) return 2
    return 1
  }

  const [itemsPerView, setItemsPerView] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView())
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlaying, maxIndex])

  return (
    <section
      className="py-32 bg-secondary/30 relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1 bg-accent/10 rounded-full">
            <span className="text-accent font-medium text-sm tracking-wide">TESTIMONIANZE</span>
          </div>

          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
            Cosa Dicono i Nostri Clienti
          </h2>

          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            La soddisfazione dei nostri clienti è la nostra migliore pubblicità
          </p>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
                  <div className="group p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 transition-all h-full flex flex-col min-h-[280px]">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>

                    <p className="text-sm md:text-base text-foreground mb-6 leading-relaxed italic flex-grow">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/10 border-2 border-accent/20 group-hover:border-accent/50 transition-colors flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-sm md:text-base truncate">{testimonial.name}</div>
                        <div className="text-xs md:text-sm text-muted-foreground truncate">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full w-10 h-10 md:w-12 md:h-12 border-accent/20 hover:border-accent hover:bg-accent/10 bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-accent w-8" : "bg-accent/20 hover:bg-accent/40 w-2"
                  }`}
                  aria-label={`Vai alla slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full w-10 h-10 md:w-12 md:h-12 border-accent/20 hover:border-accent hover:bg-accent/10 bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
