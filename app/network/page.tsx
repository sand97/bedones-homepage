import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GridPattern } from "@/components/grid-pattern"
import {
  ArrowRight,
  Check,
  Wifi,
  CreditCard,
  BarChart3,
  Megaphone,
  Server,
  RefreshCw,
  Globe,
  Shield,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Network - Portail Captif WiFi avec Mobile Money | Bedones",
  description:
    "Infrastructure complète de portails captifs WiFi avec paiement Mobile Money et cartes bancaires. Monétisez votre réseau WiFi facilement. Statistiques en temps réel, promotions et auto-renouvellement. Idéal hôtels, restaurants, coworking.",
  keywords: ['portail captif', 'WiFi', 'Mobile Money', 'hotspot', 'infrastructure réseau', 'monétisation WiFi', 'paiement Orange Money', 'MTN Money'],
  openGraph: {
    title: "Network - Portail Captif WiFi avec Mobile Money",
    description:
      "Infrastructure complète de portails captifs WiFi avec paiement Mobile Money et cartes bancaires. Monétisez votre réseau WiFi facilement avec statistiques en temps réel.",
    url: 'https://bedones.com/network',
    siteName: 'Bedones',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Network - Portail Captif WiFi avec Mobile Money",
    description:
      "Infrastructure complète de portails captifs WiFi avec paiement Mobile Money. Monétisez votre réseau facilement. Idéal hôtels, restaurants, coworking.",
  },
  alternates: {
    canonical: 'https://bedones.com/network',
  },
}

export default function NetworkPage() {
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
              network.bedones.com
            </span>
          </div>
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg border border-border bg-secondary">
            <Wifi className="h-8 w-8 text-foreground" />
          </div>
          <h1 className="mb-6 max-w-3xl text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Network
          </h1>
          <p className="mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {"Infrastructure complète pour déployer des portails captifs WiFi. Monétisez votre réseau avec Mobile Money et cartes de paiement. Gérez vos points d'accès en toute simplicité."}
          </p>
          <a
            href="#fonctionnalites"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Découvrir les fonctionnalités
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="fonctionnalites" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Fonctionnalités
            </span>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {"Une infrastructure WiFi complète"}
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Globe className="h-5 w-5" />,
                title: "Portails captifs",
                description:
                  "Déploiement de portails captifs personnalisés pour contrôler l'accès à votre réseau WiFi.",
              },
              {
                icon: <CreditCard className="h-5 w-5" />,
                title: "Paiement intégré",
                description:
                  "Acceptez Mobile Money et cartes de paiement pour monétiser l'accès à votre WiFi.",
              },
              {
                icon: <RefreshCw className="h-5 w-5" />,
                title: "Renouvellement auto",
                description:
                  "Les utilisateurs peuvent renouveler eux-mêmes leurs abonnements sans intervention.",
              },
              {
                icon: <Megaphone className="h-5 w-5" />,
                title: "Promotions",
                description:
                  "Créez des promotions attractives pour attirer de nouveaux utilisateurs sur vos points d'accès.",
              },
              {
                icon: <BarChart3 className="h-5 w-5" />,
                title: "Statistiques détaillées",
                description:
                  "Visualisez en temps réel les statistiques d'utilisation de chacun de vos points d'accès.",
              },
              {
                icon: <Server className="h-5 w-5" />,
                title: "Ressources matérielles",
                description:
                  "Acquisition des équipements matériels et logiciels nécessaires pour votre infrastructure.",
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

      {/* Use cases */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Cas d{"'"}usage
            </span>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Pour qui ?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Hôtels & Resorts", description: "Offrez un WiFi premium à vos clients avec facturation intégrée." },
              { title: "Restaurants & Cafés", description: "Monétisez votre WiFi ou offrez-le en échange d'interactions." },
              { title: "Espaces de coworking", description: "Gérez différents forfaits d'accès pour vos membres." },
              { title: "Espaces publics", description: "Déployez des points d'accès WiFi dans les espaces communautaires." },
            ].map((useCase) => (
              <div
                key={useCase.title}
                className="flex flex-col gap-3 rounded-lg border border-border bg-background p-6"
              >
                <h3 className="text-base font-semibold text-foreground">
                  {useCase.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Inclus
              </span>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {"Tout pour démarrer"}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {"Network fournit l'ensemble des ressources matérielles et logicielles nécessaires au déploiement de votre infrastructure WiFi."}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                "Équipements réseau (routeurs, points d'accès)",
                "Logiciel de gestion de portail captif",
                "Intégration Mobile Money (Orange, MTN, etc.)",
                "Intégration cartes bancaires",
                "Tableau de bord de suivi en temps réel",
                "Système de promotions et coupons",
                "Auto-renouvellement des abonnements",
                "Support technique & maintenance",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg border border-border bg-secondary px-4 py-3">
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
            {"Intéressé par Network ?"}
          </h2>
          <p className="mb-8 max-w-xl text-base text-muted-foreground">
            {"Le produit est en cours de développement. Contactez-nous pour discuter de votre projet d'infrastructure WiFi."}
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
