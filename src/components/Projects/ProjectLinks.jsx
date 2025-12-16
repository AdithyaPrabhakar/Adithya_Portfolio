import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectLinks = ({ project }) => (
  <div className="flex gap-6">
    {project.github && (
      <a href={project.github} target="_blank" className="flex items-center gap-2">
        <FiGithub /> GitHub
      </a>
    )}
    {project.live && (
      <a href={project.live} target="_blank" className="flex items-center gap-2">
        <FiExternalLink /> Live Demo
      </a>
    )}
  </div>
);

export default ProjectLinks;
