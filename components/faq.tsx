"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "Do I need to sign a long-term contract?",
    a: "Never. All IRONPULSE memberships are month-to-month. You can upgrade, downgrade, freeze, or cancel anytime from your member portal with no penalties.",
  },
  {
    q: "What are your opening hours?",
    a: "Performance and Elite members get 24/7 keycard access, 365 days a year. Staffed hours for new member support run 6am–10pm on weekdays and 8am–8pm on weekends.",
  },
  {
    q: "Is there a free trial or day pass?",
    a: "Yes. We offer a free 3-day pass for first-time visitors so you can experience the floor, classes, and coaching before committing. Just fill out the contact form to claim yours.",
  },
  {
    q: "Do you offer personal training?",
    a: "Absolutely. Personal training sessions are included with Performance and Elite plans, and can be added to any membership. Our certified coaches build fully customized programs around your goals.",
  },
  {
    q: "What's included in the recovery zone?",
    a: "Our recovery zone features a dry sauna, cold plunge, percussion therapy guns, stretching areas, and foam rolling stations — available to Performance and Elite members.",
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            FAQ
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold uppercase tracking-tight text-balance sm:text-5xl">
            Questions, answered
          </h2>
        </div>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-lg font-semibold uppercase tracking-wide">
                    {faq.q}
                  </span>
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 text-base leading-relaxed text-muted-foreground text-pretty">
                    {faq.a}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
