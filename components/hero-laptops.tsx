"use client"

import { useEffect, useRef } from "react"

const codeSnippets = [
  [
    "import { AI } from '@bedones/core'",
    "",
    "const moderator = new AI({",
    "  model: 'bedones-v2',",
    "  task: 'moderation',",
    "})",
    "",
    "async function analyze(comment) {",
    "  const result = await moderator",
    "    .classify(comment)",
    "  ",
    "  if (result.toxic > 0.85) {",
    "    await comment.hide()",
    "  }",
    "",
    "  return result.response",
    "}",
    "",
    "// Auto-reply FAQ",
    "const faq = moderator.loadFAQ()",
    "await faq.match(comment)",
  ],
  [
    "const whatsapp = connect({",
    "  provider: 'bedones',",
    "  channel: 'whatsapp',",
    "})",
    "",
    "whatsapp.on('message', async (msg) => {",
    "  const intent = await ai.detect(msg)",
    "  const label = intent.classify()",
    "",
    "  await msg.conversation",
    "    .setLabel(label)",
    "",
    "  if (intent.isLead) {",
    "    await team.forward(msg)",
    "  }",
    "",
    "  const reply = await ai",
    "    .generateReply(msg, context)",
    "  await whatsapp.send(reply)",
    "})",
    "",
    "// Listen & transcribe audio",
    "whatsapp.on('audio', transcribe)",
  ],
  [
    "network.createPortal({",
    "  name: 'Cafe Central',",
    "  bandwidth: '50Mbps',",
    "})",
    "",
    "portal.onConnect((user) => {",
    "  const plan = user.selectPlan()",
    "",
    "  const payment = await pay({",
    "    method: 'mobile_money',",
    "    amount: plan.price,",
    "    currency: 'XOF',",
    "  })",
    "",
    "  if (payment.success) {",
    "    user.grantAccess(plan)",
    "    stats.track(user)",
    "  }",
    "})",
    "",
    "// Promo campaign",
    "portal.promo('weekend-free')",
  ],
]

function CodeScreen({ lines, delay }: { lines: string[]; delay: number }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let lineIndex = 0
    let charIndex = 0
    let timeout: ReturnType<typeof setTimeout>

    function typeNext() {
      if (!container) return

      if (lineIndex >= lines.length) {
        // Reset and loop
        timeout = setTimeout(() => {
          if (container) {
            container.innerHTML = ""
          }
          lineIndex = 0
          charIndex = 0
          typeNext()
        }, 3000)
        return
      }

      const currentLine = lines[lineIndex]

      // Get or create the current line element
      let lineEl = container.children[lineIndex] as HTMLDivElement
      if (!lineEl) {
        lineEl = document.createElement("div")
        lineEl.className = "leading-relaxed whitespace-pre"
        container.appendChild(lineEl)
      }

      if (charIndex <= currentLine.length) {
        const text = currentLine.substring(0, charIndex)
        // Color keywords
        lineEl.innerHTML = colorize(text)
        charIndex++
        timeout = setTimeout(typeNext, 20 + Math.random() * 30)
      } else {
        lineIndex++
        charIndex = 0
        timeout = setTimeout(typeNext, 100)
      }
    }

    timeout = setTimeout(typeNext, delay)

    return () => clearTimeout(timeout)
  }, [lines, delay])

  return (
    <div
      ref={containerRef}
      className="h-full overflow-hidden text-[6px] sm:text-[7px] md:text-[8px]"
    />
  )
}

function colorize(text: string): string {
  return text
    .replace(
      /\b(import|from|const|let|var|async|function|await|if|return|new)\b/g,
      '<span style="opacity:0.5">$1</span>'
    )
    .replace(
      /('.*?'|".*?")/g,
      '<span style="opacity:0.7">$1</span>'
    )
    .replace(
      /(\/\/.*)/g,
      '<span style="opacity:0.35">$1</span>'
    )
}

export function HeroLaptops() {
  // Combine all 3 snippets into one long stream
  const allLines = [
    ...codeSnippets[0],
    "",
    ...codeSnippets[1],
    "",
    ...codeSnippets[2],
  ]

  return (
    <div className="mb-10 flex flex-col items-center">
      {/* Screen */}
      <div className="relative w-48 rounded-t-xl border border-border bg-foreground p-2 sm:w-64 md:w-[320px] md:p-[11px]">
        {/* Window chrome */}
        <div className="mb-[5px] flex items-center gap-1">
          <div className="h-1 w-1 rounded-full bg-background/30" />
          <div className="h-1 w-1 rounded-full bg-background/30" />
          <div className="h-1 w-1 rounded-full bg-background/30" />
          <span className="ml-1 text-[5px] text-background/30">bedones.ts</span>
        </div>
        {/* Code area */}
        <div className="h-28 overflow-hidden text-background/90 sm:h-32 md:h-[150px]">
          <CodeScreen lines={allLines} delay={300} />
        </div>
      </div>
      {/* Keyboard base */}
      <div className="h-1.5 w-52 rounded-b bg-muted-foreground/25 sm:w-[280px] md:w-[347px]" />
      <div className="h-px w-[84px] rounded-b bg-muted-foreground/15 sm:w-[106px] md:w-[117px]" />
    </div>
  )
}
