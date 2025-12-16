const ProjectTimeline = ({ project }) => (
  <div>
    <h2 className="text-2xl font-semibold mb-6">Development Timeline</h2>
    <div className="space-y-4">
      {project.timeline?.map((step, i) => (
        <div key={i} className="border-l-4 border-blue-600 pl-4">
          <h3 className="font-semibold">{step.phase}</h3>
          <p className="text-gray-600 text-sm">{step.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default ProjectTimeline;
