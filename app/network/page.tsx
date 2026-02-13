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
  title: "Network - Bedones",
  description:
    "Infrastructure de portails captifs WiFi avec paiement Mobile Money et cartes bancaires.",
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
              En developpement
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
            {"Infrastructure complete pour deployer des portails captifs WiFi. Monetisez votre reseau avec Mobile Money et cartes de paiement. Gerez vos points d'acces en toute simplicite."}
          </p>
          <a
            href="#fonctionnalites"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Decouvrir les fonctionnalites
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="fonctionnalites" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Fonctionnalites
            </span>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {"Une infrastructure WiFi complete"}
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Globe className="h-5 w-5" />,
                title: "Portails captifs",
                description:
                  "Deploiement de portails captifs personnalises pour controler l'acces a votre reseau WiFi.",
              },
              {
                icon: <CreditCard className="h-5 w-5" />,
                title: "Paiement integre",
                description:
                  "Acceptez Mobile Money et cartes de paiement pour monetiser l'acces a votre WiFi.",
              },
              {
                icon: <RefreshCw className="h-5 w-5" />,
                title: "Renouvellement auto",
                description:
                  "Les utilisateurs peuvent renouveler eux-memes leurs abonnements sans intervention.",
              },
              {
                icon: <Megaphone className="h-5 w-5" />,
                title: "Promotions",
                description:
                  "Creez des promotions attractives pour attirer de nouveaux utilisateurs sur vos points d'acces.",
              },
              {
                icon: <BarChart3 className="h-5 w-5" />,
                title: "Statistiques detaillees",
                description:
                  "Visualisez en temps reel les statistiques d'utilisation de chacun de vos points d'acces.",
              },
              {
                icon: <Server className="h-5 w-5" />,
                title: "Resources materielles",
                description:
                  "Acquisition des equipements materiels et logiciels necessaires pour votre infrastructure.",
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
              { title: "Hotels & Resorts", description: "Offrez un WiFi premium a vos clients avec facturation integree." },
              { title: "Restaurants & Cafes", description: "Monetisez votre WiFi ou offrez-le en echange d'interactions." },
              { title: "Espaces de coworking", description: "Gerez differents forfaits d'acces pour vos membres." },
              { title: "Espaces publics", description: "Deploiez des points d'acces WiFi dans les espaces communautaires." },
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
                {"Tout pour demarrer"}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {"Network fournit l'ensemble des ressources materielles et logicielles necessaires au deploiement de votre infrastructure WiFi."}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                "Equipements reseau (routeurs, points d'acces)",
                "Logiciel de gestion de portail captif",
                "Integration Mobile Money (Orange, MTN, etc.)",
                "Integration cartes bancaires",
                "Tableau de bord de suivi en temps reel",
                "Systeme de promotions et coupons",
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
            {"Interesse par Network ?"}
          </h2>
          <p className="mb-8 max-w-xl text-base text-muted-foreground">
            {"Le produit est en cours de developpement. Contactez-nous pour discuter de votre projet d'infrastructure WiFi."}
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
