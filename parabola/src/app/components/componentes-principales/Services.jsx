import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { CheckCircle } from "lucide-react";

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#51BC8A] mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600">
            Soluciones digitales completas diseñadas para hacer crecer tu
            negocio
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <div className="h-48 bg-gradient-to-br from-[#65EBAD] to-[#51BC8A] relative overflow-hidden">
                <Image
                  src="/images/simula-video1.jpg"
                  alt="Landing Web"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#51BC8A] mb-4">
                  LANDING WEB
                </h3>
                <p className="text-gray-600 mb-6">
                  Páginas web profesionales que convierten tus visitantes en
                  clientes
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#51BC8A]" />
                    <span className="text-sm">Dominio gratis por 1 año</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#51BC8A]" />
                    <span className="text-sm">
                      Tus sitios WordPress siempre al día de forma automática
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#51BC8A]" />
                    <span className="text-sm">
                      Administra tus sitios más fácil con WordPress multisitio
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#51BC8A]" />
                    <span className="text-sm">
                      Gestiona tu sitio de forma eficiente con la línea de
                      comandos de WordPress
                    </span>
                  </li>
                </ul>
                <Button className="w-full bg-[#51BC8A] hover:bg-[#3F8F6A] text-white">
                  Ver más
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <div className="h-48 bg-black relative overflow-hidden">
                <Image
                  src="/images/simula-video2.jpg"
                  alt="Tu Tienda Digital"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-4">
                  TU TIENDA DIGITAL
                </h3>
                <p className="text-gray-600 mb-6">
                  E-commerce completo para vender online desde el primer día
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-black" />
                    <span className="text-sm">Dominio gratis por 1 año</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-black" />
                    <span className="text-sm">
                      Tus sitios WordPress siempre al día de forma automática
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-black" />
                    <span className="text-sm">
                      Administra tus sitios más fácil con WordPress multisitio
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-black" />
                    <span className="text-sm">
                      Gestiona tu sitio de forma eficiente con la línea de
                      comandos de WordPress
                    </span>
                  </li>
                </ul>
                <Button className="w-full bg-black hover:bg-gray-800 text-white">
                  Ver más
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <div className="h-48 bg-gradient-to-br from-[#65EBAD] to-[#51BC8A] relative overflow-hidden">
                <Image
                  src="/images/simula-blog-01.jpg"
                  alt="Hosting"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#51BC8A] mb-4">
                  HOSTING
                </h3>
                <p className="text-gray-600 mb-6">
                  Alojamiento web seguro, rápido y soporte técnico 24/7
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#51BC8A]" />
                    <span className="text-sm">Dominio gratis por 1 año</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#51BC8A]" />
                    <span className="text-sm">
                      Tus sitios WordPress siempre al día de forma automática
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#51BC8A]" />
                    <span className="text-sm">
                      Administra tus sitios más fácil con WordPress multisitio
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#51BC8A]" />
                    <span className="text-sm">
                      Gestiona tu sitio de forma eficiente con la línea de
                      comandos de WordPress
                    </span>
                  </li>
                </ul>
                <Button className="w-full bg-[#51BC8A] hover:bg-[#3F8F6A] text-white">
                  Ver más
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
