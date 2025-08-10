"use client";
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";

// Definimos el tipo de cada proyecto
type Project = {
  title: string;
  slug: string;
  year: number;
  description: string;
  tech: string[];
  repo?: string;
  demo?: string | null;
  thumb?: string;
};

export default function ProyectosPage() {
  // Le decimos a TS que el JSON es un array de Project
  const projects: Project[] = projectsData;

  return (
    <main className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-8">Mis Proyectos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </main>
  );
}

