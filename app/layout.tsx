import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Bedones - Solutions IA & Services Numeriques",
  description:
    "Bedones conçoit des solutions logicielles alimentees par l'intelligence artificielle. Moderation de commentaires, gestion WhatsApp Business, infrastructure reseau WiFi.",
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
