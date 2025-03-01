import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-primary">Smarter Giving</span>, Greater Good
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Givtra is an AI-powered platform that streamlines fundraising and gifting processes, reducing research time
            by 70% and automating compliance checks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="#waitlist">
                Join Our Waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent z-10 h-24" />
        <div className="bg-muted/30 py-12">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-primary">70%</p>
                <p className="text-sm text-muted-foreground">Reduction in Research Time</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">30+</p>
                <p className="text-sm text-muted-foreground">Data Sources Aggregated</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Nonprofits on Waitlist</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">$557B</p>
                <p className="text-sm text-muted-foreground">U.S. Charitable Giving (2023)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

