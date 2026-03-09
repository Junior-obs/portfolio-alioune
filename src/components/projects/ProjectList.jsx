import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../data/projectsData';

const ProjectList = () => {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState(projectsData);

  const technologies = ['all', ...new Set(projectsData.flatMap(p => p.technologies))];

  const filterProjects = (tech) => {
    setFilter(tech);
    if (tech === 'all') {
      setProjects(projectsData);
    } else {
      setProjects(projectsData.filter(project => project.technologies.includes(tech)));
    }
  };

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {technologies.slice(0, 6).map((tech) => (
          <button
            key={tech}
            onClick={() => filterProjects(tech)}
            className={`px-4 py-2 rounded-full transition-all ${
              filter === tech
                ? 'bg-primary text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {tech === 'all' ? 'Tous' : tech}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Message if no projects */}
      {projects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Aucun projet trouvé pour ce filtre.</p>
        </div>
      )}
    </div>
  );
};

export default ProjectList;