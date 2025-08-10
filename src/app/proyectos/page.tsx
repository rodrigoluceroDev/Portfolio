import React from "react";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";

export default function ProyectosPage() {
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
