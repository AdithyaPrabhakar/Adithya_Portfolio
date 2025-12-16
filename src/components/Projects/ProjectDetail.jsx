import { useParams } from 'react-router-dom';
import { projectDetails } from '../../data/projectDetails';
import ProjectGallery from './ProjectGallery';
import ProjectSteps from './ProjectSteps';
import ProjectTech from './ProjectTech';



const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectDetails[slug];

  if (!project) {
    return (
      <div className="container mx-auto py-24 text-center">
        <h2 className="text-2xl font-bold">Project not found</h2>
      </div>
    );
  }

  return (
    <section className="container mx-3 py-24 px-6 bg-[#0B0F1A]">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-white-600 mb-8">{project.subtitle}</p>

      <ProjectGallery images={project.images} />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-3">Overview</h2>
        <p className="text-white-700 leading-relaxed whitespace-pre-line">
          {project.overview}
        </p>
      </section>

      <ProjectTech tech={project.techStack} />

      <ProjectSteps title="Methodology" steps={project.methodology} />
      <ProjectSteps title="System Flow" steps={project.flow} />

      <ProjectSteps title="Use Cases" steps={project.usecase} />
      <div className="mt-12 flex gap-6">
        {project.github && (
          <button onClick={() => window.open(project.github, '_blank')} className="h-auto w-auto px-2 py-2 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
            <a className="text-white">
              GitHub
            </a>
          </button>
        )}
        {project.paper && (
         <button onClick={() => window.open(project.paper, '_blank')} className="h-auto w-auto px-2 py-2 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
          <a className="text-white">
            Research Paper
          </a>
          </button>
        )}
      </div>
      {project.reportlink && (
        <div className="mt-4">
          <a href={project.reportlink} target="_blank" className="underline">
            Click to view detailed report
          </a>
        </div>
      )}
    </section>
  );
};

export default ProjectDetail;
