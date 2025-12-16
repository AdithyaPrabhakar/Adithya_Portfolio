const ProjectTech = ({ tech }) => {
  if (!tech || tech.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>

      <div className="flex flex-wrap gap-3">
        {tech.map((item, index) => (
          <span
            key={index}
            className="px-4 py-2 rounded-full bg-gray-100 text-sm text-gray-700"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default ProjectTech;
