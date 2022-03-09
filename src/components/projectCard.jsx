import React from 'react'

const ProjectCard = ({ project }) => {
  return (
    <a
      href={project.source}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 dark:bg-gray-700 rounded-lg overflow-hidden border-4
      bg-zinc-300 border-white dark:border-zinc-800 hover:ring-2 
      ring-green-500 transition"
    >
      <img
        src={project.image.url}
        alt={project.title}
        className="aspect-video object-cover rounded"
      />
      <div className="flex flex-col gap-4 p-3 items-center">
        <h3 className="font-semibold text-xl underline">{project.title}</h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="px-1.5 py-0.5 rounded-md bg-green-200 dark:bg-green-700 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

export default ProjectCard
