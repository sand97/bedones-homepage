import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GridPattern } from "@/components/grid-pattern"
import { ProductCard } from "@/components/product-card"
import { HeroLaptops } from "@/components/hero-laptops"
import { ArrowRight, MessageSquare, Smartphone, Wifi } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <GridPattern />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-40 text-center">
          <HeroLaptops />
          <h1 className="mb-6 max-w-4xl text-balance text-5xl font-bold tracking-tight text-foreground md:text-7xl">
            {"Construire le futur avec l'intelligence artificielle"}
          </h1>
          <p className="mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {"Bedones conçoit des solutions logicielles alimentées par l'IA pour automatiser, optimiser et transformer vos processus métier. Du monitoring des réseaux sociaux à la gestion intelligente de vos conversations."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#produits"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              Decouvrir nos produits
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-12 px-6 py-8 md:justify-between">
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold text-foreground">3</span>
            <span className="text-xs text-muted-foreground">Produits</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold text-foreground">IA</span>
            <span className="text-xs text-muted-foreground">Powered</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold text-foreground">24/7</span>
            <span className="text-xs text-muted-foreground">Automatisation</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold text-foreground">SaaS</span>
            <span className="text-xs text-muted-foreground">Solutions</span>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="produits" className="relative">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Nos produits
            </span>
            <h2 className="mb-4 max-w-2xl text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Une suite de solutions pour chaque besoin
            </h2>
            <p className="max-w-xl text-base text-muted-foreground">
              {"Chaque produit est conçu pour résoudre un problème précis avec la puissance de l'intelligence artificielle."}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <ProductCard
              title="Moderator"
              description="Plateforme de monitoring de commentaires sur Facebook et Instagram via l'IA. Gérez vos réponses et filtrez le contenu automatiquement."
              href="/moderator"
              status="live"
              domain="moderator.bedones.com"
              icon={<MessageSquare className="h-6 w-6" />}
              features={[
                "Modération automatique par IA",
                "Questions-réponses fréquentes",
                "Suppression/masquage automatique",
              ]}
            />
            <ProductCard
              title="WhatsApp"
              description="Gérez vos conversations WhatsApp Business avec l'IA sans perdre l'accès sur votre téléphone. L'IA apprend et répond intelligemment."
              href="/whatsapp"
              status="development"
              domain="whatsapp.bedones.com"
              icon={<Smartphone className="h-6 w-6" />}
              features={[
                "IA conversationnelle adaptive",
                "Gestion des labels et notes",
                "Transmission de leads",
              ]}
            />
            <ProductCard
              title="Network"
              description="Infrastructure de portails captifs WiFi avec paiement Mobile Money et cartes. Monétisez votre réseau facilement."
              href="/network"
              status="development"
              domain="network.bedones.com"
              icon={<Wifi className="h-6 w-6" />}
              features={[
                "Portails captifs personnalisés",
                "Paiement Mobile Money & CB",
                "Statistiques en temps réel",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Services sur mesure */}
      <section className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Sur mesure
              </span>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {"Vous avez une idée de logiciel ?"}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {"Au-delà de nos produits, Bedones accompagne les entreprises et les entrepreneurs dans la conception et le développement de solutions logicielles sur mesure. De l'idée au déploiement, nous transformons votre vision en réalité."}
              </p>
              <a
                href="#contact"
                className="w-fit rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
              >
                Parlons de votre projet
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "01", label: "Analyse des besoins" },
                { num: "02", label: "Conception & Design" },
                { num: "03", label: "Développement" },
                { num: "04", label: "Déploiement & Suivi" },
              ].map((step) => (
                <div
                  key={step.num}
                  className="flex flex-col gap-2 rounded-lg border border-border bg-background p-6"
                >
                  <span className="text-2xl font-bold text-foreground">
                    {step.num}
                  </span>
                  <span className="text-sm text-muted-foreground">{step.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="relative overflow-hidden">
        <GridPattern />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Parlons de votre projet
          </h2>
          <p className="mb-8 max-w-xl text-base text-muted-foreground">
            {"Que vous souhaitiez utiliser l'un de nos produits ou créer une solution sur mesure, notre équipe est à votre écoute."}
          </p>
          <a
            href="mailto:contact@bedones.com"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            contact@bedones.com
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
