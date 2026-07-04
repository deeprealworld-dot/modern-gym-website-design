import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "I've tried every gym in the city. IRONPULSE is the only one where the coaches actually know my name and my goals. Down 30 lbs and stronger than ever.",
    name: "Jordan M.",
    detail: "Member since 2022",
  },
  {
    quote:
      "The 24/7 access fits my insane work schedule, and the equipment is always immaculate. The Performance plan paid for itself in confidence alone.",
    name: "Priya S.",
    detail: "Performance Member",
  },
  {
    quote:
      "Coach Marcus rebuilt my deadlift from the ground up. Hit a 405 PR last month after years of being stuck. This place changes lives.",
    name: "Andre T.",
    detail: "Elite Member",
  },
  {
    quote:
      "The community is unreal. I walked in nervous on day one and now I genuinely look forward to every single session. Best decision I ever made.",
    name: "Casey L.",
    detail: "Member since 2023",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold uppercase tracking-tight text-balance sm:text-5xl">
            Real people, real results
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl border border-border bg-card p-8"
            >
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-foreground/90 text-pretty">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border/60 pt-4">
                <p className="font-heading font-semibold uppercase tracking-wide">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
