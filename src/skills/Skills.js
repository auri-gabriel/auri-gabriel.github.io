import React, { useState } from 'react';
import Button from '../components/Button';
import skillsJson from './skills.en.json';

const Skills = () => {
  const skills = skillsJson['skills'];
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section
      id='skills'
      className='
        w-full
        min-h-screen
        mx-auto
        pt-16
        '
    >
      <div className='mx-auto max-w-2xl lg:text-center'>
        <h2 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          The technologies I use
        </h2>
        {/* <p className='mt-6 text-lg leading-8 text-gray-600'>
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p> */}
      </div>
      <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
        <dl className='grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 pb-4'>
          {skills
            .slice(0, showAll ? skills.length : 6)
            .map((skill) => skillCard(skill))}
        </dl>
        {skills.length > 6 && (
          <div className='flex justify-center'>
            <Button
              className='text-gray-700'
              onClick={handleShowAll}
              text={showAll ? 'Show Less' : 'Show More'}
            />
          </div>
        )}
      </div>
    </section>
  );

  function skillCard(skill) {
    return (
      <div key={skill.name} className='relative pl-16'>
        <dt className='text-base font-semibold leading-7 text-gray-900'>
          <div
            className='absolute 
          top-0
          left-0
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-lg'
          >
            <div className='h-6 w-6 text-2xl' aria-hidden='true'>
              {skill.icon}
            </div>
          </div>
          {skill.name}
        </dt>
        <dd className='mt-2 text-base leading-7 text-gray-600'>
          {skill.description}
        </dd>
      </div>
    );
  }
};

export default Skills;
