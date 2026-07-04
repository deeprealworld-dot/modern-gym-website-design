import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Starter",
    price: "14,999",
    description: "Everything you need to build the habit and get moving.",
    features: [
      "Full gym floor access",
      "Locker room & showers",
      "2 group classes / week",
      "Fitness assessment",
    ],
    featured: false,
  },
  {
    name: "Performance",
    price: "24,999",
    description: "Our most popular plan for serious, consistent training.",
    features: [
      "24/7 unlimited access",
      "Unlimited group classes",
      "1 personal training session / mo",
      "Recovery zone & sauna",
      "Nutrition guidance",
    ],
    featured: true,
  },
  {
    name: "Elite",
    price: "39,999",
    description: "Full-service coaching and recovery for peak athletes.",
    features: [
      "Everything in Performance",
      "4 personal training sessions / mo",
      "Custom programming",
      "InBody composition scans",
      "Guest passes included",
    ],
    featured: false,
  },
]

export function Membership() {
  return (
    <section id="memberships" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Memberships
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold uppercase tracking-tight text-balance sm:text-5xl">
            Pick your plan, no contracts
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Transparent pricing with no hidden fees. Cancel or upgrade anytime.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-xl border p-8",
                plan.featured
                  ? "border-primary bg-card shadow-[0_0_0_1px] shadow-primary/40"
                  : "border-border bg-card",
              )}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading text-2xl font-bold uppercase tracking-wide">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {plan.description}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-heading text-5xl font-bold">{"₹"}{plan.price}</span>
                <span className="text-sm text-muted-foreground">/year</span>
              </div>

              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                variant={plan.featured ? "default" : "outline"}
                className="mt-8 h-11 w-full font-heading font-semibold uppercase tracking-wide"
                render={<a href="#contact" />}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
