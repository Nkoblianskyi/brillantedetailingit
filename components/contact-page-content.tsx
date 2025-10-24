"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CheckCircle, MapPin, Phone, Mail, Clock, Send, Sparkles } from "lucide-react"

export function ContactPageContent() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsOpen(true)
    // Keep name for personalized message
    const userName = formData.name
    setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    // Store name temporarily for dialog
    setTimeout(() => {
      setFormData((prev) => ({ ...prev, name: userName }))
    }, 100)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--accent-rgb),0.1),transparent_50%)]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance">Parliamo del Tuo Auto</h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Siamo qui per rispondere a tutte le tue domande e aiutarti a scegliere il servizio perfetto per la tua
              auto
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8 relative z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Indirizzo</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Centro Commerciale Citylife
                <br />
                Piazza Tre Torri
                <br />
                20145 Milano MI, Italia
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Telefono</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                +39 02 5481 6398
                <br />
                +39 347 452 1985
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                info@brillantedetailingit.com
                <br />
                prenotazioni@brillantedetailingit.com
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Orari</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Lun-Ven: 8:00 - 19:00
                <br />
                Sab: 9:00 - 18:00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Richiedi Preventivo
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Inizia il Tuo Progetto</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Compila il modulo e ti risponderemo con un preventivo personalizzato entro 24 ore
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-12">
              {/* Left Side - Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-accent/20 rounded-3xl p-8 backdrop-blur-sm">
                  <h3 className="font-serif text-2xl font-bold mb-6">Cosa Aspettarsi</h3>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Risposta Rapida</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Ti rispondiamo entro 24 ore lavorative con tutte le informazioni
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
                          Ti aiutiamo a scegliere il servizio perfetto per la tua auto
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
                          Ricevi un preventivo su misura per le tue esigenze specifiche
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-3xl p-8">
                  <h4 className="font-semibold text-lg mb-6">Contatti Diretti</h4>
                  <div className="space-y-4">
                    <a
                      href="tel:+390254816398"
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-accent/5 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Chiamaci</div>
                        <div className="font-semibold text-accent">+39 02 5481 6398</div>
                      </div>
                    </a>
                    <a
                      href="mailto:info@brillantedetailingit.com"
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-accent/5 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Scrivici</div>
                        <div className="font-semibold text-accent">info@brillantedetailingit.com</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="lg:col-span-3">
                <div className="bg-card border-2 border-border rounded-3xl p-8 md:p-10 shadow-2xl shadow-accent/5">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-base font-semibold">
                          Nome e Cognome *
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

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-base font-semibold">
                          Telefono *
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
                      <Label htmlFor="email" className="text-base font-semibold">
                        Email *
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
                      <Label htmlFor="service" className="text-base font-semibold">
                        Servizio di Interesse
                      </Label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="flex h-14 w-full rounded-lg border-2 border-input bg-background px-4 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:border-accent transition-colors"
                      >
                        <option value="">Seleziona un servizio</option>
                        <option value="lavaggio-esterno">Lavaggio Esterno Completo</option>
                        <option value="detailing-completo">Detailing Completo</option>
                        <option value="pulizia-interni">Pulizia Interni Profonda</option>
                        <option value="lucidatura">Lucidatura Carrozzeria</option>
                        <option value="ceramico">Trattamento Ceramico</option>
                        <option value="altro">Altro</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-base font-semibold">
                        Messaggio *
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
            <DialogTitle className="text-center text-3xl font-serif">Messaggio Inviato con Successo!</DialogTitle>
            <DialogDescription className="text-center text-base leading-relaxed pt-4 space-y-3">
              <p className="text-lg">
                Grazie per averci contattato,{" "}
                <span className="font-semibold text-foreground">{formData.name || "Mario"}</span>!
              </p>
              <p>
                Il nostro team ti risponderà entro <span className="font-semibold text-accent">24 ore lavorative</span>.
              </p>
              <p className="text-sm">
                Controlla la tua email per la conferma. Nel frattempo, esplora i nostri servizi premium.
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
    </div>
  )
}
