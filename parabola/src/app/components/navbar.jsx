"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar(params) {
    

  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { label: "Servicios", href: "#servicios" },
    { label: "Trabajos realizados", href: "#trabajos" },
    { label: "Blog", href: "#blog" },
    { label: "Usuarios", href: "#usuarios" },
  ]

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-gray-100 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/parabola-logo.png"
              alt="Parabola"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[#51BC8A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Button className="bg-black text-white hover:bg-gray-800 px-6">
              Quiero mi sitio web
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="px-4 pt-4 pb-4 space-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-gray-700 hover:text-[#51BC8A] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button className="w-full bg-black text-white hover:bg-gray-800 px-6 mt-2">
              Quiero mi sitio web
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
