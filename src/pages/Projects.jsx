import { useState } from 'react';
import ProjectCard from '../components/projects/ProjectCard'; // CHEMIN CORRIGÉ
import { projectsData } from '../data/projectsData'; // CHEMIN CORRIGÉ

const Projects = () => {
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
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Mes Projets
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Découvrez mes réalisations récentes et les technologies que j'utilise
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.slice(0, 6).map((tech) => (
            <button
              key={tech}
              onClick={() => filterProjects(tech)}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === tech
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
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
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Aucun projet trouvé pour ce filtre.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;