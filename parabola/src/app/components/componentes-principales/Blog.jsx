import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Blog y Recursos
          </h2>
          <p className="text-xl text-gray-600">
            Consejos, guías y recursos para ayudarte a hacer crecer tu negocio
            digital
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Cómo crear una tienda online exitosa",
              subtitle: "Guía completa para emprendedores",
              img: "/images/simula-blog-01.jpg",
            },
            {
              title: "Dominios: Todo lo que necesitas saber",
              subtitle: "Elige el dominio perfecto para tu negocio",
              img: "/images/simula-blog-02.jpg",
            },
            {
              title: "Marketing digital para pequeños negocios",
              subtitle: "Estrategias efectivas y económicas",
              img: "/images/simula-blog-03.jpg",
            },
            {
              title: "Seguridad web: Protege tu sitio",
              subtitle: "Mejores prácticas de seguridad",
              img: "/images/simula-blog-04.jpg",
            },
          ].map((post, i) => (
            <Card
              key={i}
              className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-0">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={post.img}
                    alt="Blog post"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-black mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600">{post.subtitle}</p>
                </div>
              </CardContent>
            </Card>
          ))}
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
  );
}
