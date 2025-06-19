"use client";

import { DATA } from '@/data/resume';
import { ProjectCard } from './project-card';

export default function ProjectList() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {DATA.projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            href={project.href}
            description={project.description}
            dates=""
            tags={project.technologies}
            image={project.image}
            links={project.links}
          />
        ))}
      </div>
    </div>
  );
} 