const ProjectHero = ({ project }) => (
  <div>
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      {project.title}
    </h1>
    <p className="text-lg text-gray-600 max-w-3xl">
      {project.description}
    </p>
  </div>
);

export default ProjectHero;
