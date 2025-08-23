import React from 'react';
import { useTranslation } from 'react-i18next';
import Pill from '../components/Pill';

const ProjectItem = ({ project }) => {
  const { t } = useTranslation();

  return (
    <div className='bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200 flex flex-col h-full'>
      <div className='flex-grow'>
        <h3 className='text-xl font-bold text-gray-900 mb-3'>
          {project.title}
        </h3>
        <p className='text-gray-700 mb-4 leading-relaxed'>
          {project.description}
        </p>
        <div className='flex flex-wrap gap-2 mb-6'>
          {project.technologies.map((tech) => (
            <Pill key={tech} text={tech} />
          ))}
        </div>
      </div>
      <div className='mt-auto'>
        <a
          href={project.url}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200 text-sm'
        >
          {t('projects.viewProject')}
          <svg
            className='ml-2 w-4 h-4'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
