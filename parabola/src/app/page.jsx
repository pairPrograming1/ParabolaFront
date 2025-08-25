import Image from "next/image"
import { Button } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"
import { Input } from "./components/ui/input"
import { Textarea } from "./components/ui/textarea"
import { CheckCircle, Star, MessageCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
           <div className="flex items-center">
  <img
    src="/images/parabola-logo.png"
    alt="Parabola"
    width={120}
    height={40}
    className="h-8 w-auto"
  />
</div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#servicios" className="text-gray-700 hover:text-[#51BC8A] transition-colors">
                Servicios
              </a>
              <a href="#trabajos" className="text-gray-700 hover:text-[#51BC8A] transition-colors">
                Trabajos realizados
              </a>
              <a href="#blog" className="text-gray-700 hover:text-[#51BC8A] transition-colors">
                Blog
              </a>
              <a href="#usuarios" className="text-gray-700 hover:text-[#51BC8A] transition-colors">
                Usuarios
              </a>
            </nav>
            <Button className="bg-black text-white hover:bg-gray-800 px-6">Quiero mi sitio web</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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
            <span className="bg-[#D4F230] px-4 py-2 inline-block">es posible</span>
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

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 text-black text-6xl font-bold opacity-20">≡</div>
        <div className="absolute bottom-20 left-20 text-[#51BC8A] text-4xl font-bold opacity-30">: 0</div>
        <div className="absolute top-32 right-20 text-[#51BC8A] text-5xl font-bold opacity-30">**</div>
        <div className="absolute bottom-32 right-32 text-[#D4F230] text-6xl font-bold opacity-40">M1</div>
      </section>

      {/* Simple and Human Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Así de simple, así de <span className="font-black">humano.</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Soluciones digitales <span className="font-semibold">accesibles</span> y{" "}
            <span className="font-semibold">premium</span>
            <br />
            para emprendedores y pequeños negocios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">Comenzar ahora</Button>
            <Button
              variant="outline"
              className="border-[#51BC8A] text-[#51BC8A] hover:bg-[#51BC8A] hover:text-white px-8 py-3 bg-transparent"
            >
              Ver Servicios
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#51BC8A] mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600">
              Soluciones digitales completas diseñadas para hacer crecer tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Landing Web */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-[#65EBAD] to-[#51BC8A] relative overflow-hidden">
                  <Image src="/images/simula-video1.jpg" alt="Landing Web" fill className="object-cover opacity-80" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#51BC8A] mb-4">LANDING WEB</h3>
                  <p className="text-gray-600 mb-6">
                    Páginas web profesionales que convierten tus visitantes en clientes
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#51BC8A]" />
                      <span className="text-sm">Dominio gratis por 1 año</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#51BC8A]" />
                      <span className="text-sm">Tus sitios WordPress siempre al día de forma automática</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#51BC8A]" />
                      <span className="text-sm">Administra tus sitios más fácil con WordPress multisitio</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#51BC8A]" />
                      <span className="text-sm">
                        Gestiona tu sitio de forma eficiente con la línea de comandos de WordPress
                      </span>
                    </li>
                  </ul>
                  <Button className="w-full bg-[#51BC8A] hover:bg-[#3F8F6A] text-white">Ver más</Button>
                </div>
              </CardContent>
            </Card>

            {/* Tu Tienda Digital */}
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
                  <h3 className="text-2xl font-bold text-black mb-4">TU TIENDA DIGITAL</h3>
                  <p className="text-gray-600 mb-6">E-commerce completo para vender online desde el primer día</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-black" />
                      <span className="text-sm">Dominio gratis por 1 año</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-black" />
                      <span className="text-sm">Tus sitios WordPress siempre al día de forma automática</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-black" />
                      <span className="text-sm">Administra tus sitios más fácil con WordPress multisitio</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-black" />
                      <span className="text-sm">
                        Gestiona tu sitio de forma eficiente con la línea de comandos de WordPress
                      </span>
                    </li>
                  </ul>
                  <Button className="w-full bg-black hover:bg-gray-800 text-white">Ver más</Button>
                </div>
              </CardContent>
            </Card>

            {/* Hosting */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-[#65EBAD] to-[#51BC8A] relative overflow-hidden">
                  <Image src="/images/simula-blog-01.jpg" alt="Hosting" fill className="object-cover opacity-80" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#51BC8A] mb-4">HOSTING</h3>
                  <p className="text-gray-600 mb-6">Alojamiento web seguro, rápido y soporte técnico 24/7</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#51BC8A]" />
                      <span className="text-sm">Dominio gratis por 1 año</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#51BC8A]" />
                      <span className="text-sm">Tus sitios WordPress siempre al día de forma automática</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#51BC8A]" />
                      <span className="text-sm">Administra tus sitios más fácil con WordPress multisitio</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#51BC8A]" />
                      <span className="text-sm">
                        Gestiona tu sitio de forma eficiente con la línea de comandos de WordPress
                      </span>
                    </li>
                  </ul>
                  <Button className="w-full bg-[#51BC8A] hover:bg-[#3F8F6A] text-white">Ver más</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-lg text-gray-700 mb-8">
            Si no estás seguro de qué servicio es mejor para vos
            <br />
            <span className="font-semibold">consultá gratis con un profesional</span>
          </p>
          <Button className="bg-[#51BC8A] hover:bg-[#3F8F6A] text-white px-8 py-3 rounded-full">
            <MessageCircle className="w-5 h-5 mr-2" />
            Consultar
          </Button>
        </div>
      </section>

      {/* Flexibility Section */}
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
              Resolvés hoy, pagás <span className="underline">el mes que viene.</span>
            </h2>
          </div>
          <p className="text-xl text-black mb-4 font-medium">Porque sabemos que emprender requiere flexibilidad.</p>
          <p className="text-lg text-black">Tu proyecto arranca hoy, tu inversión se ajusta a tu ritmo.</p>

          {/* Decorative elements */}
          <div className="absolute bottom-10 left-10 text-black text-2xl font-bold opacity-30">||||</div>
          <div className="absolute bottom-20 right-20 text-black text-4xl font-bold opacity-20">≡</div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Qué dicen nuestros clientes</h2>
            <p className="text-xl text-gray-600">
              Historias reales de emprendedores que confiaron en nosotros
              <br />
              para hacer crecer sus negocios
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4F230] text-[#D4F230]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Gracias a su tienda online, mis ventas se triplicaron en 3 meses. El soporte técnico es excepcional."
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

            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4F230] text-[#D4F230]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Gracias a su tienda online, mis ventas se triplicaron en 3 meses. El soporte técnico es excepcional."
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

            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4F230] text-[#D4F230]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Gracias a su tienda online, mis ventas se triplicaron en 3 meses. El soporte técnico es excepcional."
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
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#51BC8A] mb-4">Nuestros Partners</h2>
            <p className="text-xl text-gray-600">
              Trabajamos con los mejores profesionales para brindarte soluciones completas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="bg-white border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-6"></div>
                <h3 className="text-2xl font-bold text-black mb-2">Wicha</h3>
                <p className="text-[#51BC8A] font-medium mb-4">Diseño gráfico</p>
                <p className="text-gray-600">
                  Especialistas en identidad visual y diseño gráfico. Crean marcas memorables que conectan con tu
                  audiencia.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-6"></div>
                <h3 className="text-2xl font-bold text-black mb-2">Spicy Tool</h3>
                <p className="text-[#51BC8A] font-medium mb-4">Herramientas</p>
                <p className="text-gray-600">
                  Desarrollo de sistemas CRM y módulos. Tecnología que se adapta al funcionamiento y tu flujo de
                  trabajo.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 max-w-2xl mx-auto">
              La colaboración con nuestros partners nos permite ofrecerte un servicio integral, donde cada especialista
              está cuidado por especialistas en su área.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Blog y Recursos</h2>
            <p className="text-xl text-gray-600">
              Consejos, guías y recursos para ayudarte a hacer crecer tu negocio digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="h-48 relative overflow-hidden">
                  <Image src="/images/simula-blog-01.jpg" alt="Blog post" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-black mb-2 line-clamp-2">Cómo crear una tienda online exitosa</h3>
                  <p className="text-sm text-gray-600">Guía completa para emprendedores</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="h-48 relative overflow-hidden">
                  <Image src="/images/simula-blog-02.jpg" alt="Blog post" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-black mb-2 line-clamp-2">Dominios: Todo lo que necesitas saber</h3>
                  <p className="text-sm text-gray-600">Elige el dominio perfecto para tu negocio</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="h-48 relative overflow-hidden">
                  <Image src="/images/simula-blog-03.jpg" alt="Blog post" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-black mb-2 line-clamp-2">
                    Marketing digital para pequeños negocios
                  </h3>
                  <p className="text-sm text-gray-600">Estrategias efectivas y económicas</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="h-48 relative overflow-hidden">
                  <Image src="/images/simula-blog-04.jpg" alt="Blog post" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-black mb-2 line-clamp-2">Seguridad web: Protege tu sitio</h3>
                  <p className="text-sm text-gray-600">Mejores prácticas de seguridad</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-[#51BC8A] text-[#51BC8A] hover:bg-[#51BC8A] hover:text-white bg-transparent"
            >
              Ver todos los artículos →
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">¿Listo para dar el primer paso?</h2>
          <p className="text-xl text-black mb-4 font-medium">
            Hablemos de tu proyecto. Sin compromisos, sin letra chica.
          </p>
          <p className="text-lg text-black mb-12">
            Solo una conversación honesta sobre
            <br />
            cómo podemos ayudarte.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3">📞 Agendar una llamada gratis</Button>
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

      {/* Footer */}
      <footer className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Contact Form Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#D4F230] mb-4">Dejanos tu consulta</h2>
            <p className="text-gray-300 mb-8">
              Cuéntanos qué necesitas y te contactaremos
              <br />
              para definir la mejor solución
            </p>

            <form className="max-w-md mx-auto space-y-4">
              <Input placeholder="Nombre" className="bg-white text-black border-0" />
              <Input placeholder="Email" type="email" className="bg-white text-black border-0" />
              <Textarea
                placeholder="Contanos sobre tu proyecto, tus objetivos y qué necesitas"
                className="bg-white text-black border-0 min-h-[120px]"
              />
              <div className="flex items-start gap-2 text-left">
                <input type="checkbox" className="mt-1" />
                <label className="text-xs text-gray-400">
                  Acepto la política de privacidad y el tratamiento de mis datos personales.
                </label>
              </div>
              <Button className="w-full bg-[#51BC8A] hover:bg-[#3F8F6A] text-white">ENVIAR</Button>
            </form>
          </div>

          {/* Footer Info */}
          <div className="grid md:grid-cols-3 gap-8 pt-16 border-t border-gray-800">
            <div>
              <Image src="/images/parabola-logo-foot.png" alt="Parabola" width={120} height={40} className="mb-4" />
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
    </div>
  )
}
