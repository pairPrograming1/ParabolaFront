import { Card, CardContent } from "../ui/card";

export default function Partners() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#51BC8A] mb-4">
            Nuestros Partners
          </h2>
          <p className="text-xl text-gray-600">
            Trabajamos con los mejores profesionales para brindarte soluciones
            completas
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <Card className="bg-white border-0 shadow-lg text-center">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold text-black mb-2">Wicha</h3>
              <p className="text-[#51BC8A] font-medium mb-4">Diseño gráfico</p>
              <p className="text-gray-600">
                Especialistas en identidad visual y diseño gráfico. Crean marcas
                memorables que conectan con tu audiencia.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white border-0 shadow-lg text-center">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold text-black mb-2">Spicy Tool</h3>
              <p className="text-[#51BC8A] font-medium mb-4">Herramientas</p>
              <p className="text-gray-600">
                Desarrollo de sistemas CRM y módulos. Tecnología que se adapta
                al funcionamiento y tu flujo de trabajo.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600 max-w-2xl mx-auto">
            La colaboración con nuestros partners nos permite ofrecerte un
            servicio integral, donde cada especialista está cuidado por
            especialistas en su área.
          </p>
        </div>
      </div>
    </section>
  );
}
