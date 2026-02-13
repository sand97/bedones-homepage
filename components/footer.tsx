import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
                <span className="text-sm font-bold text-background">B</span>
              </div>
              <span className="text-lg font-semibold text-foreground">Bedones</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Solutions IA & services numeriques pour transformer vos processus metier.
            </p>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Produits
            </span>
            <div className="flex flex-col gap-2">
              <Link
                href="/moderator"
                className="text-sm text-foreground transition-colors hover:text-muted-foreground"
              >
                Moderator
              </Link>
              <Link
                href="/whatsapp"
                className="text-sm text-foreground transition-colors hover:text-muted-foreground"
              >
                WhatsApp
              </Link>
              <Link
                href="/network"
                className="text-sm text-foreground transition-colors hover:text-muted-foreground"
              >
                Network
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Liens
            </span>
            <div className="flex flex-col gap-2">
              <a
                href="https://moderator.bedones.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground transition-colors hover:text-muted-foreground"
              >
                moderator.bedones.com
              </a>
              <a
                href="https://whatsapp.bedones.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground transition-colors hover:text-muted-foreground"
              >
                whatsapp.bedones.com
              </a>
              <a
                href="https://network.bedones.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground transition-colors hover:text-muted-foreground"
              >
                network.bedones.com
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Contact
            </span>
            <a
              href="mailto:contact@bedones.com"
              className="text-sm text-foreground transition-colors hover:text-muted-foreground"
            >
              contact@bedones.com
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <p className="text-center text-xs text-muted-foreground">
            {new Date().getFullYear()} Bedones. Tous droits reserves.
          </p>
        </div>
      </div>
    </footer>
  )
}
