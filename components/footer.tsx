import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Brillante Detailing</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Eccellenza nel detailing auto. Servizi professionali per la cura e la protezione del tuo veicolo.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Link Utili</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#servizi" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Servizi
                </Link>
              </li>
              <li>
                <Link href="/#chi-siamo" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link href="/guida-cura-auto" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Guida Cura Auto
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Informazioni Legali</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/termini" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Termini e Condizioni
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contatti</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Centro Commerciale Citylife, Piazza Tre Torri, 20145 Milano MI, Italia
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p  className="text-primary-foreground/80 hover:text-primary-foreground">
                    +39 02 5481 6398
                  </p>
                  <p className="text-primary-foreground/80 hover:text-primary-foreground">
                    +39 347 452 1985
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <p
                  
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  info@brillantedetailingit.com
                </p>
              </li>
            </ul>

          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} brillantedetailingit.com. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  )
}
