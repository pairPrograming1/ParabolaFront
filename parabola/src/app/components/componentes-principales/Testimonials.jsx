import { Card, CardContent } from "../ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Qué dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600">
            Historias reales de emprendedores que confiaron en nosotros
            <br />
            para hacer crecer sus negocios
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="bg-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 fill-[#D4F230] text-[#D4F230]"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Gracias a su tienda online, mis ventas se triplicaron en 3
                  meses. El soporte técnico es excepcional."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-black">Carla Mendoza</p>
                    <p className="text-sm text-[#51BC8A]">Boutique</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
