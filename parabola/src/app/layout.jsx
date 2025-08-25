import { Space_Grotesk, DM_Sans } from "next/font/google"
import { Providers } from "./components/providers"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata = {
  title: "PARÁBOLA - Tu negocio online es posible",
  description: "Soluciones digitales accesibles y premium para emprendedores y pequeños negocios.",
  generator: "v0.app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
      <body className="font-sans">
        <Providers>{children}</Providers></body>
    </html>
  )
}
