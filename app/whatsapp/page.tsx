import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GridPattern } from "@/components/grid-pattern"
import {
  ArrowRight,
  Check,
  Smartphone,
  Brain,
  Tag,
  StickyNote,
  Headphones,
  Users,
  ShoppingBag,
  FileText,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "WhatsApp Business IA - Gestion Intelligente de Conversations | Bedones",
  description:
    "Gérez vos conversations WhatsApp Business avec l'intelligence artificielle sans perdre l'accès sur votre téléphone. L'IA apprend de vous, gère les labels, transcrit les audios et transmet les leads automatiquement.",
  keywords: ['WhatsApp Business', 'IA conversationnelle', 'chatbot intelligent', 'automation WhatsApp', 'gestion leads', 'transcription audio'],
  openGraph: {
    title: "WhatsApp Business IA - Gestion Intelligente de Conversations",
    description:
      "Gérez vos conversations WhatsApp Business avec l'intelligence artificielle sans perdre l'accès sur votre téléphone. L'IA apprend de vous, gère les labels et transmet les leads automatiquement.",
    url: 'https://bedones.com/whatsapp',
    siteName: 'Bedones',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: "WhatsApp Business IA - Gestion Intelligente de Conversations",
    description:
      "Gérez vos conversations WhatsApp Business avec l'IA sans perdre l'accès sur votre téléphone. L'IA apprend et répond intelligemment.",
  },
  alternates: {
    canonical: 'https://bedones.com/whatsapp',
  },
}

export default function WhatsAppPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <GridPattern />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-40 text-center">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full border border-border px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              En développement
            </span>
            <span className="text-xs text-muted-foreground">
              whatsapp.bedones.com
            </span>
          </div>
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg border border-border bg-secondary">
            <Smartphone className="h-8 w-8 text-foreground" />
          </div>
          <h1 className="mb-6 max-w-3xl text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            WhatsApp Business IA
          </h1>
          <p className="mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {"Gérez vos conversations WhatsApp Business avec l'intelligence artificielle sans perdre l'accès à WhatsApp sur votre téléphone. L'IA apprend de vous et répond intelligemment."}
          </p>
          <a
            href="#fonctionnalites"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Découvrir les fonctionnalités
          </a>
        </div>
      </section>

      {/* Key Features */}
      <section id="fonctionnalites" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Fonctionnalités
            </span>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {"Une IA qui apprend et s'adapte"}
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Brain className="h-5 w-5" />,
                title: "Apprentissage continu",
                description:
                  "L'IA apprend de vos réponses et de votre style pour répondre de manière cohérente.",
              },
              {
                icon: <Tag className="h-5 w-5" />,
                title: "Gestion des labels",
                description:
                  "Classification automatique des conversations par labels pour une organisation optimale.",
              },
              {
                icon: <StickyNote className="h-5 w-5" />,
                title: "Notes intelligentes",
                description:
                  "L'IA génère et gère les notes de chaque conversation pour un suivi précis.",
              },
              {
                icon: <Headphones className="h-5 w-5" />,
                title: "Écoute audio",
                description:
                  "Capacité d'écouter et de transcrire les messages vocaux pour comprendre le contexte complet.",
              },
              {
                icon: <Users className="h-5 w-5" />,
                title: "Transmission de leads",
                description:
                  "Transmission automatique des leads qualifiés dans vos groupes d'équipe WhatsApp.",
              },
              {
                icon: <ShoppingBag className="h-5 w-5" />,
                title: "Catalogue intelligent",
                description:
                  "Envoi automatique d'articles du catalogue en fonction du contexte de la conversation.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-4 rounded-lg border border-border p-6 transition-colors hover:bg-secondary"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-foreground">
                  {feature.icon}
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {"Ce que l'IA sait faire"}
              </span>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {"Bien plus qu'un simple chatbot"}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {"L'IA Bedones WhatsApp comprend le contexte, sait quand ne pas répondre, fait des comptes rendus et transmet les informations critiques à votre équipe."}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                "Apprentissage du style de communication de l'utilisateur",
                "Gestion intelligente des labels de conversation",
                "Notes automatiques par conversation",
                "Transcription et compréhension des messages audio",
                "Détection du moment opportun pour ne pas répondre",
                "Comptes rendus automatiques",
                "Transmission des leads dans les groupes d'équipe",
                "Envoi d'articles du catalogue selon le contexte",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg border border-border bg-background px-4 py-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border">
        <GridPattern />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground">
            {"Intéressé par WhatsApp Business IA ?"}
          </h2>
          <p className="mb-8 max-w-xl text-base text-muted-foreground">
            {"Le produit est en cours de développement. Contactez-nous pour être parmi les premiers à l'utiliser."}
          </p>
          <a
            href="mailto:contact@bedones.com"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            Nous contacter
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
