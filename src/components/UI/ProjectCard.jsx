import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Card from './Card';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

const openProject = () => {
  const base = import.meta.env.BASE_URL;

  window.open(
    `${base}projects/${project.slug}`,
    '_blank',
    'noopener,noreferrer'
  );
};
 

  return (
    <Card
      hover
      role="button"
      tabIndex={0}
      onClick={openProject}
      onKeyDown={(e) => e.key === 'Enter' && openProject()}
      className="cursor-pointer"
    >
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
              onClick={(e) => e.stopPropagation()}
            >
              <Icon size={16} />
            </div>
          );
        })}
      </div>

      {/* External links */}
      <div className="flex gap-6 text-sm">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
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
            onClick={(e) => e.stopPropagation()}
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
