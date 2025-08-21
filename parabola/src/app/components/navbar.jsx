"use client"

import { useState } from "react"
import { Button } from "@heroui/react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white sticky top-0 z-50 w-full border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-xl font-bold text-black">PARÁBOLA</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#servicios"
                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Servicios
              </a>
              <a
                href="#trabajos"
                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Trabajos realizados
              </a>
              <a
                href="#blog"
                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Blog
              </a>
              <a
                href="#usuarios"
                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Usuarios
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-black text-white hover:bg-gray-800 rounded-md px-4 py-2">Quiero mi sitio web</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <a href="#servicios" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium">
                Servicios
              </a>
              <a href="#trabajos" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium">
                Trabajos realizados
              </a>
              <a href="#blog" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium">
                Blog
              </a>
              <a href="#usuarios" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium">
                Usuarios
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-black text-white hover:bg-gray-800">Quiero mi sitio web</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
