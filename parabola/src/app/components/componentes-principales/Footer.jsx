import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#D4F230] mb-4">
            Dejanos tu consulta
          </h2>
          <p className="text-gray-300 mb-8">
            Cuéntanos qué necesitas y te contactaremos
            <br />
            para definir la mejor solución
          </p>
          <div className="max-w-md mx-auto space-y-4">
            <Input
              placeholder="Nombre"
              className="bg-white text-black border-0"
            />
            <Input
              placeholder="Email"
              type="email"
              className="bg-white text-black border-0"
            />
            <Textarea
              placeholder="Contanos sobre tu proyecto, tus objetivos y qué necesitas"
              className="bg-white text-black border-0 min-h-[120px]"
            />
            <div className="flex items-start gap-2 text-left">
              <input type="checkbox" className="mt-1" />
              <label className="text-xs text-gray-400">
                Acepto la política de privacidad y el tratamiento de mis datos
                personales.
              </label>
            </div>
            <Button className="w-full bg-[#51BC8A] hover:bg-[#3F8F6A] text-white">
              ENVIAR
            </Button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 pt-16 border-t border-gray-800">
          <div>
            <Image
              src="/images/parabola-logo-foot.png"
              alt="Parabola"
              width={120}
              height={40}
              className="mb-4"
            />
            <p className="text-gray-400 text-sm">
              PARABOLA
              <br />
              SOLUCIONES DIGITALES
              <br />
              PARA EMPRENDEDORES
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Landing Web</li>
              <li>Tienda Digital</li>
              <li>Hosting</li>
              <li>Consultoría</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="text-sm text-gray-400 space-y-2">
              <p>+54 9 11 2345-6789</p>
              <p>hola@parabola.com.ar</p>
              <p>Buenos Aires, Argentina</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
