import { Button } from "../ui/button";
import { MessageCircle } from "lucide-react";

export default function Consultation() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <p className="text-lg text-gray-700 mb-8">
          Si no estás seguro de qué servicio es mejor para vos
          <br />
          <span className="font-semibold">
            consultá gratis con un profesional
          </span>
        </p>
        <Button className="bg-[#51BC8A] hover:bg-[#3F8F6A] text-white px-8 py-3 rounded-full">
          <MessageCircle className="w-5 h-5 mr-2" />
          Consultar
        </Button>
      </div>
    </section>
  );
}
