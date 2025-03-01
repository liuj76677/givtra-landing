"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1000)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center p-6 bg-primary/5 rounded-lg">
        <CheckCircle className="h-12 w-12 text-primary mb-4" />
        <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
        <p className="text-center text-muted-foreground">
          You've been added to our waitlist. We'll be in touch soon with more information about Givtra.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" placeholder="Your name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="organization">Organization</Label>
        <Input id="organization" placeholder="Your organization name" required />
      </div>
      <div className="space-y-2">
        <Label>Organization Type</Label>
        <RadioGroup defaultValue="nonprofit">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="nonprofit" id="nonprofit" />
            <Label htmlFor="nonprofit" className="font-normal">
              Nonprofit
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="corporate" id="corporate" />
            <Label htmlFor="corporate" className="font-normal">
              Corporate/CSR
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="individual" id="individual" />
            <Label htmlFor="individual" className="font-normal">
              Individual Donor
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="other" id="other" />
            <Label htmlFor="other" className="font-normal">
              Other
            </Label>
          </div>
        </RadioGroup>
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Submitting..." : "Join Waitlist"}
      </Button>
    </form>
  )
}

