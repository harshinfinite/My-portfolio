"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { FaImage } from "react-icons/fa";
import { useState } from "react";
import ScreenshotMode from "../../components/ScreenshotMode";

const projects = [
  {
    title: "Movie vault",
    description: "A fully completed Next.js application designed to search, view details, and manage favorite movies and watchlists seamlessly.",
    status: "Completed",
    stack: ["Next.js", "Tailwind CSS"],
    features: ["Search movies", "Movie details page", "Pagination", "Slider", "Error handling", "Responsive  UI"],
    image: "/movie-main.png",
    github: "https://github.com/harshinfinite/next-movieapp",
    screenshots: [
      "/movie-main.png",
      "/movie-details.png",
      "/movie-favourite.png",
      "/movie-main-full.png",
      "/movie-watchlist.png",
    ],
  },
  {
    title: "Full-Stack Blog-Platform",
    description: "A comprehensive blogging platform currently in development, featuring authentication, markdown editing, and user interactivity.",
    status: "In Progress",
    stack: ["Next.js", "PostgreSQL", "Tailwind CSS", "Prisma", "Middlewere", "NextAuth.js"],
    features: ["Authentication", "Create/Edit posts", "Comments and Likes system", "Markdown editor", "user Dashboard", "Database"],
    image: "/blog-main.png",
    github: "https://github.com/harshinfinite/Full-stack-Blog",
    screenshots: [
      "/blog-main.png"
    ],
  },
];

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <main className="page-shell py-8 md:py-12">
      <section className="panel p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-extrabold">Projects</h1>
        <p className="muted mt-2">Built to demonstrate practical engineering, clean UX, and production-ready structure.</p>
      </section>

      <section className="mt-6 grid gap-6">
        {projects.map((project, index) => (
          <article key={project.title} className="panel p-5 md:p-7 reveal-up">
            <div className={`grid gap-6 md:gap-8 ${index % 2 === 0 ? "md:grid-cols-[1.15fr,1fr]" : "md:grid-cols-[1fr,1.15fr]"}`}>
              <div className={`relative rounded-xl overflow-hidden border border-white/20 min-h-75 ${index % 2 ? "md:order-2" : ""}`}>
                <Image src={project.image} alt={`${project.title} preview`} fill className="object-contain" />
              </div>
              <div className={`flex flex-col justify-between gap-5 ${index % 2 ? "md:order-1" : ""}`}>
                <div className="space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    <span className={`text-xs px-3 py-1 rounded-full border ${project.status === "Completed" ? "border-green-500/50 bg-green-500/10 text-green-400" : "border-amber-500/50 bg-amber-500/10 text-amber-400"}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-white/85">{project.description}</p>
                  <h2 className="font-bold">Tech</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="text-sm px-3 py-1 rounded-full border border-white/25 text-white/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-bold">App Features</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span key={feature} className="text-sm px-3 py-1 rounded-full border border-white/25 text-white/80">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                  {project.screenshots && project.screenshots.length > 0 && (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="btn-primary inline-flex items-center gap-2 px-4 py-2 text-sm bg-white/10 hover:bg-white/20 rounded-md transition-colors border border-white/20"
                    >
                      <FaImage />
                      View Screenshots
                    </button>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Screenshot Modal UI */}
      <ScreenshotMode 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        title={selectedProject?.title} 
        images={selectedProject?.screenshots || []} 
      />
    </main>
  );
};

export default ProjectsPage;
