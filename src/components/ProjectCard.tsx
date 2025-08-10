import React from "react";
import { motion } from "framer-motion";

type Project = {
  title: string;
  slug: string;
  year: number;
  description: string;
  tech: string[];
  repo?: string;
  demo?: string;
  thumb?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      className="bg-white/5 backdrop-blur p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
      whileHover={{ y: -5, scale: 1.02 }}
    >
      {project.thumb && (
        <img
          src={project.thumb}
          alt={project.title}
          className="w-full h-40 object-cover rounded-md mb-3"
        />
      )}
      <h3 className="text-lg font-semibold">
        {project.title}{" "}
        <span className="text-sm text-gray-400">· {project.year}</span>
      </h3>
      <p className="text-sm mt-2">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 text-xs rounded-full border border-gray-300 bg-gray-100 dark:bg-gray-800"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline text-sm"
          >
            Código
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline text-sm"
          >
            Demo
          </a>
        )}
      </div>
    </motion.article>
  );
}
