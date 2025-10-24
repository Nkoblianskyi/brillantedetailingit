"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CheckCircle, Send, Sparkles } from "lucide-react"

export function ContactForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsOpen(true)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <>
      <section id="contatti" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Inizia Ora
              </div>
              <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">Trasforma la Tua Auto</h2>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
                Compila il modulo per richiedere informazioni o prenotare un servizio. Ti risponderemo entro 24 ore.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left Side - Visual Info */}
              <div className="space-y-6 lg:sticky lg:top-8">
                <div className="bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-accent/20 rounded-3xl p-8 backdrop-blur-sm">
                  <h3 className="font-serif text-2xl font-bold mb-6">Perché Sceglierci?</h3>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Risposta Rapida</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Ti rispondiamo entro 24 ore lavorative con un preventivo dettagliato
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Consulenza Gratuita</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          I nostri esperti ti aiutano a scegliere il servizio perfetto
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Preventivo Personalizzato</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Ogni auto è unica, così come il nostro servizio
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-3xl p-8">
                  <h4 className="font-semibold text-lg mb-4">Oppure Chiamaci</h4>
                  <div className="space-y-3">
                    <a
                      href="tel:+390254816398"
                      className="flex items-center gap-3 text-accent hover:text-accent/80 transition-colors"
                    >
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Telefono</div>
                        <div className="font-semibold">+39 02 5481 6398</div>
                      </div>
                    </a>
                    <a
                      href="mailto:info@brillantedetailingit.com"
                      className="flex items-center gap-3 text-accent hover:text-accent/80 transition-colors"
                    >
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Email</div>
                        <div className="font-semibold">info@brillantedetailingit.com</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-2xl shadow-accent/5">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base font-semibold">
                      Nome e Cognome
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Mario Rossi"
                      className="h-14 text-base border-2 focus:border-accent transition-colors"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base font-semibold">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        placeholder="mario.rossi@email.it"
                        className="h-14 text-base border-2 focus:border-accent transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-base font-semibold">
                        Telefono
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        placeholder="+39 345 678 9012"
                        className="h-14 text-base border-2 focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base font-semibold">
                      Messaggio
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      placeholder="Descrivi il servizio di cui hai bisogno o fai una domanda..."
                      rows={6}
                      className="text-base border-2 focus:border-accent transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base group"
                  >
                    <span>Invia Richiesta</span>
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center leading-relaxed">
                    Inviando questo modulo accetti la nostra{" "}
                    <a href="/privacy" className="text-accent hover:underline font-medium">
                      Privacy Policy
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-lg border-2 border-accent/20">
          <DialogHeader>
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl animate-pulse" />
                <div className="relative w-24 h-24 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-14 h-14 text-accent-foreground" />
                </div>
              </div>
            </div>
            <DialogTitle className="text-center text-3xl font-serif">Messaggio Inviato!</DialogTitle>
            <DialogDescription className="text-center text-base leading-relaxed pt-4 space-y-3">
              <p className="text-lg">
                Grazie per averci contattato,{" "}
                <span className="font-semibold text-foreground">{formData.name || "Mario"}</span>!
              </p>
              <p>
                Riceverai una risposta entro <span className="font-semibold text-accent">24 ore</span> al tuo indirizzo
                email.
              </p>
              <p className="text-sm">
                Nel frattempo, puoi esplorare i nostri servizi o chiamarci per informazioni immediate.
              </p>
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-3 mt-6">
            <Button onClick={() => setIsOpen(false)} variant="outline" className="flex-1 h-12">
              Chiudi
            </Button>
            <Button
              onClick={() => {
                setIsOpen(false)
                window.location.href = "/#servizi"
              }}
              className="flex-1 h-12 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Vedi Servizi
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
