import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Membership } from "@/components/membership"
import { Trainers } from "@/components/trainers"
import { Testimonials } from "@/components/testimonials"
import { Gallery } from "@/components/gallery"
import { Faq } from "@/components/faq"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Membership />
        <Trainers />
        <Testimonials />
        <Gallery />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
