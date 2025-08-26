// src/components/Header.tsx
import { Bell, UserCircle } from "lucide-react";
import { useCRM } from "@/lib/store";

export default function Header() {
  const usuario = useCRM((s) => s.usuario);
  return (
    <header className="flex items-center justify-between bg-gray-900 p-4 border-b border-gray-700">
      <h2 className="text-xl font-bold text-neon-cyan">Olá, {usuario?.nome ?? "Visitante"}</h2>
      <div className="flex items-center gap-4">
        <button className="relative">
          <Bell size={24} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        </button>
        <UserCircle size={32} />
      </div>
    </header>
  );
}
