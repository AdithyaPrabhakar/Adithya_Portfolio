import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiFilter, FiChevronRight } from 'react-icons/fi';
import { projects } from '../../data/projects';
import ProjectCard from '../UI/ProjectCard';
import Button from '../UI/Button';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(3);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured' },
    { id: 'react', label: 'React' },
    { id: 'fullstack', label: 'Full Stack' },
  ];

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    if (filter === 'react') return project.technologies.includes('React');
    if (filter === 'fullstack') return project.technologies.includes('Node.js') && project.technologies.includes('React');
    return true;
  });

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center text-gray-600 mr-4">
            <FiFilter className="mr-2" />
            <span className="font-medium">Filter by:</span>
          </div>
          {filters.map((filterItem) => (
            <button
              key={filterItem.id}
              onClick={() => {
                setFilter(filterItem.id);
                setVisibleCount(3);
              }}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                filter === filterItem.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filterItem.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="text-center">
            <Button
              variant="outline"
              size="large"
              onClick={loadMore}
              className="flex items-center justify-center gap-2 mx-auto p-2"
            >
              Load More Projects
              <FiChevronRight />
            </Button>
          </div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">0%</div>
              <div className="text-blue-100">Regrets in choosing this field</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Love what I do</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Open for an FTE or an Internship</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;