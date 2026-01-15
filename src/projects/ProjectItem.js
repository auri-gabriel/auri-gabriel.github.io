import React from 'react';

const ProjectItem = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  isLearningProject,
}) => {
  return (
    <div className='bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300'>
      <div className='flex items-center gap-2 mb-3'>
        <h3 className='text-xl font-semibold text-gray-900'>{title}</h3>
        {isLearningProject && (
          <span className='inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200'>
            <svg
              className='w-3.5 h-3.5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z' />
            </svg>
            Learning
          </span>
        )}
      </div>
      <p className='text-gray-700 mb-4'>{description}</p>

      {technologies && technologies.length > 0 && (
        <div className='flex flex-wrap gap-2 mb-4'>
          {technologies.map((tech, index) => (
            <span
              key={index}
              className='px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full'
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className='flex gap-4'>
        {githubUrl && (
          <a
            href={githubUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200'
          >
            <svg
              className='w-5 h-5 mr-2'
              fill='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
            </svg>
            View on GitHub
          </a>
        )}

        {liveUrl && (
          <a
            href={liveUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center text-green-600 hover:text-green-800 font-medium transition-colors duration-200'
          >
            <svg
              className='w-5 h-5 mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
              />
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
