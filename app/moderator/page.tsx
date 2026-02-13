import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GridPattern } from "@/components/grid-pattern"
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  MessageSquare,
  Shield,
  Zap,
  BarChart3,
  Settings,
  Eye,
  Trash2,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Moderator - Modération IA Facebook & Instagram | Bedones",
  description:
    "Plateforme de monitoring et modération automatique de commentaires sur Facebook et Instagram via l'IA. Détection de spam, réponses automatiques, suppression intelligente. Protégez votre image de marque 24/7.",
  keywords: ['modération IA', 'Facebook', 'Instagram', 'commentaires', 'IA', 'spam', 'réseaux sociaux', 'automation'],
  openGraph: {
    title: "Moderator - Modération IA Facebook & Instagram",
    description:
      "Plateforme de monitoring et modération automatique de commentaires sur Facebook et Instagram via l'IA. Détection de spam, réponses automatiques, suppression intelligente.",
    url: 'https://bedones.com/moderator',
    siteName: 'Bedones',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Moderator - Modération IA Facebook & Instagram",
    description:
      "Plateforme de monitoring et modération automatique de commentaires sur Facebook et Instagram via l'IA. Protégez votre image de marque 24/7.",
  },
  alternates: {
    canonical: 'https://bedones.com/moderator',
  },
}

export default function ModeratorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <GridPattern />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-40 text-center">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full border border-foreground/20 bg-foreground px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-background">
              Live
            </span>
            <span className="text-xs text-muted-foreground">
              moderator.bedones.com
            </span>
          </div>
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg border border-border bg-secondary">
            <MessageSquare className="h-8 w-8 text-foreground" />
          </div>
          <h1 className="mb-6 max-w-3xl text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Moderator
          </h1>
          <p className="mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {"Monitoring intelligent de vos commentaires Facebook et Instagram. L'IA analyse, répond et modère automatiquement pour protéger votre image de marque."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://moderator.bedones.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              Accéder à la plateforme
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#fonctionnalites"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Voir les fonctionnalités
            </a>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section id="fonctionnalites" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Fonctionnalités
            </span>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {"Tout ce qu'il faut pour modérer vos réseaux"}
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Shield className="h-5 w-5" />,
                title: "Modération IA",
                description:
                  "L'IA détecte et classe automatiquement les commentaires négatifs, spam et contenus inappropriés.",
              },
              {
                icon: <Zap className="h-5 w-5" />,
                title: "Réponses automatiques",
                description:
                  "Définissez une liste de questions-réponses fréquentes et laissez l'IA répondre à votre place.",
              },
              {
                icon: <Trash2 className="h-5 w-5" />,
                title: "Suppression & masquage",
                description:
                  "Activez la suppression ou le masquage automatique des commentaires néfastes détectés par l'IA.",
              },
              {
                icon: <Eye className="h-5 w-5" />,
                title: "Monitoring en temps réel",
                description:
                  "Suivez en temps réel tous les commentaires sur vos publications Facebook et Instagram.",
              },
              {
                icon: <Settings className="h-5 w-5" />,
                title: "Configuration flexible",
                description:
                  "Personnalisez les règles de modération, les seuils de sensibilité et les actions automatiques.",
              },
              {
                icon: <BarChart3 className="h-5 w-5" />,
                title: "Tableau de bord",
                description:
                  "Visualisez les statistiques de modération, les tendances et les performances de votre communauté.",
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

      {/* How it works */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Comment ça marche
            </span>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              3 étapes simples
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Connectez vos comptes",
                description:
                  "Liez vos pages Facebook et comptes Instagram en quelques clics.",
              },
              {
                step: "02",
                title: "Configurez vos règles",
                description:
                  "Définissez vos questions-réponses, mots-clés à surveiller et actions automatiques.",
              },
              {
                step: "03",
                title: "Laissez l'IA travailler",
                description:
                  "L'IA modère automatiquement 24/7. Consultez le tableau de bord pour suivre les résultats.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex flex-col gap-4 rounded-lg border border-border bg-background p-8"
              >
                <span className="text-3xl font-bold text-foreground">
                  {item.step}
                </span>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border">
        <GridPattern />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground">
            {"Prêt à protéger votre communauté ?"}
          </h2>
          <p className="mb-8 max-w-xl text-base text-muted-foreground">
            {"Commencez à modérer vos réseaux sociaux avec l'intelligence artificielle dès aujourd'hui."}
          </p>
          <a
            href="https://moderator.bedones.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            Commencer maintenant
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
