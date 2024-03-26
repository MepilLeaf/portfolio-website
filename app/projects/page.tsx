"use client";

import { useState, useEffect } from "react";
import ProjectCard from "@/components/projects/displayCard/DisplayCard";
import projects from "@/data/projects.json";
import PopUp from "@/components/projects/popup/PopUp";

export default function ProjectsPage() {
  interface projectInterface {
    name: string;
    description: string;
    images: string[];
    skillsUsed: string[];
    githubLink: string;
  }

  const [selectedProject, setSelectedProject] =
    useState<projectInterface | null>(null);

  function handleClick(name: string) {
    const project: projectInterface = projects.find(
      (project) => project.name === name
    )!;
    setSelectedProject(project);
  }

  function resetSelectedProject() {
    setSelectedProject(null);
  }

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [selectedProject]);

  return (
    <main className="flex justify-evenly flex-wrap mt-20 mb-32">
      {projects.map((project) => {
        return (
          <ProjectCard
            name={project.name}
            images={project.images}
            handleClick={handleClick}
            key={project.name}
          />
        );
      })}
      {selectedProject && (
        <PopUp
          name={selectedProject.name}
          description={selectedProject.description}
          images={selectedProject.images}
          skillsUsed={selectedProject.skillsUsed}
          githubLink={selectedProject.githubLink}
          resetSelected={resetSelectedProject}
        />
      )}
    </main>
  );
}
