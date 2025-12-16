const ProjectSteps = ({ title, steps }) => (
  <section className="mt-10">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <ul className="space-y-3">
      {steps.map((step, i) => (
        <li key={i} className="flex gap-3">
          <span className="font-bold">{i + 1}.</span>
          <span>{step}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default ProjectSteps;
