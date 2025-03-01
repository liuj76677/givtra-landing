import Image from "next/image"

export default function TeamSection() {
  return (
    <section id="team" className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Founded by MIT students passionate about revolutionizing the philanthropic sector
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 relative w-32 h-32 rounded-full overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-28%20at%2010.27.48%E2%80%AFPM-H689bAk58SphhNBwoyzDvkFKRLC7U7.png"
                alt="Janet Liu"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Janet Liu</h3>
            <p className="text-primary font-medium">Co-Founder</p>
            <p className="text-muted-foreground mt-2">
              MIT CS & Econ '26. Co-founder of the 501(c)(3) nonprofit J&M Sunrizon Economics.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 relative w-32 h-32 rounded-full overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-28%20at%2010.27.52%E2%80%AFPM-E3AuvU9JGzu6fICaKTyNex8TPy6X3x.png"
                alt="Melinda Liu"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Melinda Liu</h3>
            <p className="text-primary font-medium">Co-Founder</p>
            <p className="text-muted-foreground mt-2">MIT CS & Econ '26. President of MIT Women Business Leaders.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

