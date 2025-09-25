export default function Flexibility() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: "url(/images/fondo-pleno.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#D4F230]/90" />
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <div className="bg-black text-white px-8 py-4 rounded-lg inline-block mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            Resolvés hoy, pagás{" "}
            <span className="underline">el mes que viene.</span>
          </h2>
        </div>
        <p className="text-xl text-black mb-4 font-medium">
          Porque sabemos que emprender requiere flexibilidad.
        </p>
        <p className="text-lg text-black">
          Tu proyecto arranca hoy, tu inversión se ajusta a tu ritmo.
        </p>
        <div className="absolute bottom-10 left-10 text-black text-2xl font-bold opacity-30">
          ||||
        </div>
        <div className="absolute bottom-20 right-20 text-black text-4xl font-bold opacity-20">
          ≡
        </div>
      </div>
    </section>
  );
}
