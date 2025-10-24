"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-serif font-bold tracking-tight">
            Brillante Detailing
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#servizi" className="text-sm font-medium hover:text-accent transition-colors">
              Servizi
            </Link>
            <Link href="/#chi-siamo" className="text-sm font-medium hover:text-accent transition-colors">
              Chi Siamo
            </Link>
            <Link href="/guida-cura-auto" className="text-sm font-medium hover:text-accent transition-colors">
              Guida Cura Auto
            </Link>
            <Link href="/contatti">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Contatti</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/#servizi"
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Servizi
              </Link>
              <Link
                href="/#chi-siamo"
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Chi Siamo
              </Link>
              <Link
                href="/guida-cura-auto"
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Guida Cura Auto
              </Link>
              <Link href="/contatti" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Contatti</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
