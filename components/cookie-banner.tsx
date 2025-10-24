"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <Card className="max-w-4xl mx-auto p-6 shadow-lg border-2">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">Utilizzo dei Cookie</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Utilizziamo cookie essenziali per garantire il corretto funzionamento del sito e cookie analitici per
              migliorare la tua esperienza. Puoi gestire le tue preferenze in qualsiasi momento.{" "}
              <Link href="/privacy" className="text-accent hover:underline">
                Leggi la nostra Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Button onClick={declineCookies} variant="outline" className="w-full sm:w-auto bg-transparent">
              Rifiuta
            </Button>
            <Button onClick={acceptCookies} className="w-full sm:w-auto">
              Accetta
            </Button>
          </div>
        </div>

        <button
          onClick={declineCookies}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Chiudi"
        >
          <X className="w-5 h-5" />
        </button>
      </Card>
    </div>
  )
}
