import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL('https://bedones.com'),
  title: "Bedones - Solutions IA & Services Numériques",
  description:
    "Bedones conçoit des solutions logicielles alimentées par l'intelligence artificielle. Modération de commentaires Facebook/Instagram, gestion WhatsApp Business IA, infrastructure réseau WiFi avec Mobile Money.",
  keywords: ['IA', 'intelligence artificielle', 'modération IA', 'WhatsApp Business', 'portail captif WiFi', 'Mobile Money', 'SaaS', 'Afrique'],
  authors: [{ name: 'Bedones' }],
  creator: 'Bedones',
  publisher: 'Bedones',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://bedones.com',
    title: "Bedones - Solutions IA & Services Numériques",
    description:
      "Bedones conçoit des solutions logicielles alimentées par l'intelligence artificielle. Modération de commentaires Facebook/Instagram, gestion WhatsApp Business IA, infrastructure réseau WiFi avec Mobile Money.",
    siteName: 'Bedones',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bedones - Solutions IA & Services Numériques",
    description:
      "Bedones conçoit des solutions logicielles alimentées par l'intelligence artificielle. Modération de commentaires Facebook/Instagram, gestion WhatsApp Business IA, infrastructure réseau WiFi.",
  },
}

export const viewport: Viewport = {
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
