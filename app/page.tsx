import Link from "next/link"
import { BarChart3, CheckCircle, Database, Search, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import WaitlistForm from "@/components/waitlist-form"
import FeatureSection from "@/components/feature-section"
import TeamSection from "@/components/team-section"
import HeroSection from "@/components/hero-section"
import ProblemSolutionSection from "@/components/problem-solution-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Givtra</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#problem" className="text-sm font-medium hover:text-primary">
              Problem & Solution
            </Link>
            <Link href="#modules" className="text-sm font-medium hover:text-primary">
              Modules
            </Link>
            <Link href="#team" className="text-sm font-medium hover:text-primary">
              Team
            </Link>
            <Link href="#waitlist" className="text-sm font-medium hover:text-primary">
              Join Waitlist
            </Link>
          </nav>
          <Button asChild>
            <Link href="#waitlist">Join Waitlist</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />

        <FeatureSection />

        <ProblemSolutionSection />

        <section id="modules" className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Our Core Modules</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Four AI-powered modules to revolutionize the philanthropic sector
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Search className="h-5 w-5 text-primary" />
                    <CardTitle>GivaSearch</CardTitle>
                  </div>
                  <CardDescription>AI-Powered Prospect Research</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Aggregates data from 30+ sources to automate prospect research, identifying giving capacity,
                    philanthropic history, and interest alignment—reducing research time by 70%.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <CardTitle>GivaVerify</CardTitle>
                  </div>
                  <CardDescription>Automated Compliance and Vetting</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Automates nonprofit vetting with instant 501(c)(3) verification, financial assessment, and
                    controversy detection via news analysis—streamlining corporate giving.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    <CardTitle>GivaConnect</CardTitle>
                  </div>
                  <CardDescription>AI Proposal Drafting</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Generate relevant grant proposals and reports by uploading previous company proposals and funding
                    interactions, creating millions in potential funding dollars.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <CardTitle>GivaTrack</CardTitle>
                  </div>
                  <CardDescription>Relationship Management</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Track donations, measure impact, and manage relationships with donors and nonprofits to ensure
                    successful fund transfers and long-term partnerships.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <TeamSection />

        <section id="waitlist" className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-md mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Join Our Waitlist</h2>
              <p className="text-muted-foreground mb-8">
                Be among the first to experience Givtra's revolutionary platform. Join our growing waitlist of
                nonprofits and CSR professionals.
              </p>
              <WaitlistForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="font-semibold">Givtra</span>
            <span className="text-sm text-muted-foreground">© 2024</span>
          </div>
          <p className="text-sm text-muted-foreground">Smarter Giving, Greater Good.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

