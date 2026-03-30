import { HeroSection } from "@/components/contact/HeroSection"
import { DescriptionSection } from "@/components/contact/DescriptionSection"
import { ContactSection } from "@/components/contact/ContactSection"
import { ScrollReveal } from "@/components/shared"

export default function ContactPage() {
  return (
    <>
      <HeroSection />
      <ScrollReveal direction="up">
        <DescriptionSection />
      </ScrollReveal>
      <ScrollReveal direction="left" delayMs={40}>
        <ContactSection />
      </ScrollReveal>
    </>
  )
}
