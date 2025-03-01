import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Givtra - Smarter Giving, Greater Good",
  description:
    "AI-powered platform that streamlines fundraising and gifting processes, reducing research time by 70% and automating compliance checks.",
  openGraph: {
    title: "Givtra - Smarter Giving, Greater Good",
    description:
      "AI-powered platform that streamlines fundraising and gifting processes, reducing research time by 70% and automating compliance checks.",
    url: "https://givtra.com",
    siteName: "Givtra",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-28%20at%2011.18.40%E2%80%AFPM-29gsOlMc8Eqs5lUWiefk6q2A8lvKOG.png",
        width: 1200,
        height: 630,
        alt: "Givtra - Smarter Giving, Greater Good. AI-powered platform for fundraising and gifting.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Givtra - Smarter Giving, Greater Good",
    description:
      "AI-powered platform that streamlines fundraising and gifting processes, reducing research time by 70% and automating compliance checks.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-28%20at%2011.18.40%E2%80%AFPM-29gsOlMc8Eqs5lUWiefk6q2A8lvKOG.png",
    ],
    creator: "@givtra",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

