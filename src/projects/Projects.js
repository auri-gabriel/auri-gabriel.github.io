import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectItem from './ProjectItem';

const Projects = () => {
  const { t } = useTranslation();

  const projects = t('projects.items', { returnObjects: true });

  return (
    <section
      id='projects'
      className='
        w-full
        mx-auto
        pt-16
        '
    >
      <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-4xl'>
        <h2 className='mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl'>
          {t('projects.title')}
        </h2>
        <div className='space-y-4 mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-4xl py-2'>
          {projects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
