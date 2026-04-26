"use client";

import Link from "next/navigation";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/home", icon: "/assets/home.png" },
    { name: "Timeline", href: "/timeline", icon: "/assets/timeline.png" },
    { name: "Stats", href: "/stats", icon: "/assets/stats.png" },
  ];

  return (
    <nav className="bg-white border-b border-zinc-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <img src="/assets/logo.png" alt="KeenKeeper" className="h-8" />
        <span className="text-xl font-bold text-zinc-800 tracking-tight">KeenKeeper</span>
      </div>
      
      <div className="flex items-center gap-6">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              pathname === link.href 
              ? "bg-zinc-900 text-white font-bold" 
              : "text-zinc-600 hover:bg-zinc-100 font-medium"
            }`}
          >
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
