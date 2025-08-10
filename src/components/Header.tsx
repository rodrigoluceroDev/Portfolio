import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold">Rodrigo Lucero</h1>
        <nav className="flex gap-6">
          <Link href="/">Inicio</Link>
          <Link href="/proyectos">Proyectos</Link>
          <Link href="/about">Sobre mí</Link>
          <Link href="/contacto">Contacto</Link>
          <a
            href="https://www.linkedin.com/in/rodrigo-lucero"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </header>
  );
}

