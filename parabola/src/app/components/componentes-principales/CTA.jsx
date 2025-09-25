import { Button } from "../ui/button";

export default function CTA() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: "url(/images/fondo-degradado.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#65EBAD]/90 to-[#D4F230]/90" />
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
          ¿Listo para dar el primer paso?
        </h2>
        <p className="text-xl text-black mb-4 font-medium">
          Hablemos de tu proyecto. Sin compromisos, sin letra chica.
        </p>
        <p className="text-lg text-black mb-12">
          Solo una conversación honesta sobre
          <br />
          cómo podemos ayudarte.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3">
            📞 Agendar una llamada gratis
          </Button>
          <Button
            variant="outline"
            className="border-black text-black hover:bg-black hover:text-white px-8 py-3 bg-transparent"
          >
            Ver casos de éxito →
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-black mb-2">15 min.</div>
            <div className="text-sm text-black">Duración de llamada</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black mb-2">100%</div>
            <div className="text-sm text-black">Sin compromiso</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black mb-2">24 hs.</div>
            <div className="text-sm text-black">Respuesta garantizada</div>
          </div>
        </div>
      </div>
    </section>
  );
}
