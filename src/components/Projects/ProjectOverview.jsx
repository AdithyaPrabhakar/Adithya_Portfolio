const ProjectOverview = ({ project }) => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">Overview</h2>
    <ul className="space-y-3 text-gray-600">
      {project.overview?.map((point, i) => (
        <li key={i}>• {point}</li>
      ))}
    </ul>
  </div>
);

export default ProjectOverview;
