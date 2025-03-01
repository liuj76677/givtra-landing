import { FileText, ShieldCheck, Search } from "lucide-react"

export default function FeatureSection() {
  return (
    <section id="features" className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Key Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered platform revolutionizes the philanthropic sector with these key capabilities
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full mb-4">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Search</h3>
            <p className="text-muted-foreground">
              Aggregates data from 30+ sources to automate prospect research, identifying giving capacity, philanthropic
              history, and interest alignment.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full mb-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Proposal Drafting</h3>
            <p className="text-muted-foreground">
              Generate relevant grant proposals and reports by uploading previous company proposals, funding
              interactions, and organizational data.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full mb-4">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Automated Compliance</h3>
            <p className="text-muted-foreground">
              Automates nonprofit vetting with instant 501(c)(3) verification, financial assessment, and controversy
              detection via news analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

