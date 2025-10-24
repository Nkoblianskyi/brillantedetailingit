import { ContactPageContent } from "@/components/contact-page-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contatti | Robgen Auto Detailing",
  description:
    "Contattaci per prenotare un servizio di autolavaggio e detailing professionale. Siamo a tua disposizione per qualsiasi informazione.",
}

export default function ContactPage() {
  return <ContactPageContent />
}
