"use client"
import { Button } from "@heroui/react"
import { Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagen1-VDRSGUkpjGnxwuO3drS96ZOAIaixpW.png')`,
        }}
      />

      {/* Content - only the button remains */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mt-32">
          <Button className="bg-black text-white hover:bg-gray-800 text-lg px-6 py-3 rounded-md flex items-center gap-2 mx-auto">
            <Play className="w-4 h-4 fill-white" />
            Ver más
          </Button>
        </div>
      </div>
    </section>
  )
}
