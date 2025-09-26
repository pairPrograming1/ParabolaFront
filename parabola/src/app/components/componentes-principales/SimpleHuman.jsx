import { Button } from "../ui/button";

export default function SimpleHuman() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Así de simple, así de <span className="font-black">humano.</span>
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Soluciones digitales <span className="font-semibold">accesibles</span>{" "}
          y <span className="font-semibold">premium</span>
          <br />
          para emprendedores y pequeños negocios.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">
            Comenzar ahora
          </Button>
          <Button
            variant="outline"
            className="border-[#51BC8A] text-[#51BC8A] hover:bg-[#51BC8A] hover:text-white px-8 py-3 bg-transparent"
          >
            Ver Servicios
          </Button>
        </div>
      </div>
    </section>
  );
}
