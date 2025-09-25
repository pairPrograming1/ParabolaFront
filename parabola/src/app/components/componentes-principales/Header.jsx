import Image from "next/image";
import { Button } from "../ui/button";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="relative z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <Navbar />
    </header>
  );
}
