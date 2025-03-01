import { Clock, FileText, ShieldCheck, Search } from "lucide-react"

export default function ProblemSolutionSection() {
  return (
    <section id="problem" className="py-16 bg-muted/30">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">The Problem</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-secondary/20 p-2 rounded-full h-fit">
                  <Clock className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Time-Consuming Research</h3>
                  <p className="text-muted-foreground">
                    Fundraisers spend 18–22 hours/week searching across disconnected platforms for potential donors.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-secondary/20 p-2 rounded-full h-fit">
                  <Clock className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">High Burnout Rates</h3>
                  <p className="text-muted-foreground">
                    51% of nonprofit fundraisers leave their positions within 24 months due to repetitive tasks.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-secondary/20 p-2 rounded-full h-fit">
                  <Clock className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Inefficient Verification</h3>
                  <p className="text-muted-foreground">
                    CSR teams spend over 200 staff hours per 77 nonprofit applications cross-referencing IRS filings,
                    news databases, and impact reports.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">Our Solution</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-primary/10 p-2 rounded-full h-fit">
                  <Search className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI-Powered Search</h3>
                  <p className="text-muted-foreground">
                    Aggregates data from 30+ sources to automate prospect research, reducing research time by 70%.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/10 p-2 rounded-full h-fit">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Proposal Drafting</h3>
                  <p className="text-muted-foreground">
                    Generate relevant grant proposals and reports by uploading previous company proposals and funding
                    interactions.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/10 p-2 rounded-full h-fit">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Automated Compliance</h3>
                  <p className="text-muted-foreground">
                    Automates nonprofit vetting with instant 501(c)(3) verification, financial assessment, and
                    controversy detection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

