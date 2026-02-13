import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"

interface ProductCardProps {
  title: string
  description: string
  href: string
  status: "live" | "development"
  domain: string
  icon: React.ReactNode
  features: string[]
}

export function ProductCard({
  title,
  description,
  href,
  status,
  domain,
  icon,
  features,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-6 rounded-lg border border-border bg-background p-6 transition-colors hover:border-foreground/20 hover:bg-secondary"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-secondary text-foreground">
          {icon}
        </div>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      </div>

      {/* Title & Status */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          {status === "live" ? (
            <span className="rounded-full border border-foreground/20 bg-foreground px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-background">
              Live
            </span>
          ) : (
            <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              En dev
            </span>
          )}
        </div>
        <p className="text-xs text-muted-foreground">{domain}</p>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>

      {/* Features */}
      <div className="mt-auto flex flex-col gap-2">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-2">
            <Check className="h-3.5 w-3.5 shrink-0 text-foreground" />
            <span className="text-xs text-muted-foreground">{feature}</span>
          </div>
        ))}
      </div>
    </Link>
  )
}
