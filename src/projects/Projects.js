import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectItem from './ProjectItem';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 'fitme',
      title: 'FitMe',
      description: t('projects.fitme.description'),
      url: 'https://github.com/auri-gabriel/fitme',
      technologies: ['TypeScript', 'React', 'SCSS', 'Bootstrap 5'],
    },
    {
      id: 'folio-agency',
      title: 'Folio Agency',
      description: t('projects.folioAgency.description'),
      url: 'https://github.com/auri-gabriel/folio-agency',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 'semiotic-framework',
      title: 'Semiotic Framework Tool',
      description: t('projects.semioticFramework.description'),
      url: 'https://github.com/auri-gabriel/semiotic-framework-tool',
      technologies: ['JavaScript', 'React', 'Vite', 'SCSS', 'Bootstrap 5'],
    },
    {
      id: 'tasks',
      title: 'Tasks',
      description: t('projects.tasks.description'),
      url: 'https://github.com/auri-gabriel/tasks',
      technologies: ['Java', 'Spring Boot', 'Postgresql', 'Docker Compose'],
    },
  ];

  return (
    <section className='py-16 px-4 bg-white'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900'>
          {t('projects.title')}
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
