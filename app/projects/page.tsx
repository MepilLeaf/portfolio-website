"use client";

import { useState, useEffect } from "react";
import ProjectCard from "@/components/projects/projectcard/ProjectCard";
import projects from "@/data/projects.json";
import PopUp from "@/components/projects/popup/PopUp";

export default function ProjectsPage() {
  interface projectInterface {
    name: string;
    description: string;
    images: string[];
    skillsUsed: string[];
  }

  const [selectedProject, setSelectedProject] =
    useState<projectInterface | null>(null);

  function handleClick(name: string) {
    const project: projectInterface = projects.find(
      (project) => project.name === name
    )!;
    setSelectedProject(project);
  }

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [selectedProject]);

  return (
    <main className="flex justify-center">
      {projects.map((project) => {
        return (
          <ProjectCard
            name={project.name}
            description={project.description}
            images={project.images}
            skillsUsed={project.skillsUsed}
            handleClick={handleClick}
          />
        );
      })}
      {selectedProject && (
        <PopUp
          name={selectedProject.name}
          description={selectedProject.description}
          images={selectedProject.images}
          skillsUsed={selectedProject.skillsUsed}
        />
      )}
    </main>
  );
}
