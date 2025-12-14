import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Card from './Card';

const ProjectCard = ({ project }) => {
  return (
    <Card hover>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {project.title}
      </h3>

      <p className="text-sm text-gray-600 mb-4">
        {project.description}
      </p>

      {/* Tech stack icons */}
      <div className="flex flex-wrap gap-3 mb-4">
        {project.stack.map((tech, i) => {
          const Icon = tech.icon;
          return (
            <div
              key={i}
              className="p-2 rounded-md bg-gray-100 text-gray-700"
              title={tech.name}
            >
              <Icon size={16} />
            </div>
          );
        })}
      </div>

      {/* Links */}
      <div className="flex gap-6 text-sm">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <FiGithub />
            Code
          </a>
        )}

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <FiExternalLink />
            Live
          </a>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
