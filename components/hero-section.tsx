"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <img
          src="/luxury-car-detailing-professional-wash-shiny-black.jpg"
          alt="Luxury car detailing"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 animate-gradient" />
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="inline-block mb-6 px-6 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
          <span className="text-accent font-medium text-sm tracking-wide">ECCELLENZA ITALIANA</span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-8 text-balance leading-[1.1]">
          L'Arte della
          <span className="block bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent animate-gradient">
            Perfezione
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto text-pretty leading-relaxed font-light">
          Servizi professionali di autolavaggio, detailing e protezione ceramica per veicoli di lusso
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6 rounded-full shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all"
          >
            <Link href="/#servizi">Scopri i Servizi</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white/30 text-white hover:bg-white hover:text-primary bg-white/5 backdrop-blur-sm text-base px-8 py-6 rounded-full transition-all"
          >
            <Link href="/#contatti">Prenota Ora</Link>
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20 pt-12 border-t border-white/20">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">15+</div>
            <div className="text-white text-sm">Anni di Esperienza</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">5000+</div>
            <div className="text-white text-sm">Auto Trattate</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">98%</div>
            <div className="text-white text-sm">Clienti Soddisfatti</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/60 text-xs uppercase tracking-wider">Scorri</span>
        <ChevronDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  )
}
