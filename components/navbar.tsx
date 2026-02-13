"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
            <span className="text-sm font-bold text-background">B</span>
          </div>
          <span className="text-lg font-semibold text-foreground">Bedones</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/moderator"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Moderator
          </Link>
          <Link
            href="/whatsapp"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            WhatsApp
          </Link>
          <Link
            href="/network"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Network
          </Link>
          <a
            href="#contact"
            className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            Contact
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-8 w-8 items-center justify-center md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="h-5 w-5 text-foreground" />
          ) : (
            <Menu className="h-5 w-5 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/moderator"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              Moderator
            </Link>
            <Link
              href="/whatsapp"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              WhatsApp
            </Link>
            <Link
              href="/network"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              Network
            </Link>
            <a
              href="#contact"
              className="w-fit rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
