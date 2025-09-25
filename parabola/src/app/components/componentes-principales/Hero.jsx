import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/fondo-principal-con-video.jpg)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#65EBAD]/20 to-[#D4F230]/20" />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">
          Tu negocio <span className="text-black">online</span>
          <br />
          <span className="bg-[#D4F230] px-4 py-2 inline-block">
            es posible
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-2xl mx-auto">
          ¿Te frena no saber
          <br />
          por dónde empezar o cómo pagarlo?
        </p>
        <Button className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg">
          ▶ Ver más
        </Button>
      </div>
      <div className="absolute top-20 left-10 text-black text-6xl font-bold opacity-20">
        ≡
      </div>
      <div className="absolute bottom-20 left-20 text-[#51BC8A] text-4xl font-bold opacity-30">
        : 0
      </div>
      <div className="absolute top-32 right-20 text-[#51BC8A] text-5xl font-bold opacity-30">
        **
      </div>
      <div className="absolute bottom-32 right-32 text-[#D4F230] text-6xl font-bold opacity-40">
        M1
      </div>
    </section>
  );
}
