import React from 'react';

const Hero = () => (
  <main>
    <div className='text-center lg:p-48 p-16'>
      <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
        Hi there, I'm Auri Gabriel!
      </h1>
      <h1 className='text-7xl lg:py-8 py-4'>🚀</h1>
      <p className='mt-6 text-lg leading-8 text-gray-600'>
        I'm a software engineering student
      </p>
    </div>
    <div className='lg:py-14 invisible lg:visible'>
      <div className='flex items-center justify-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-12 h-12'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      </div>
    </div>
  </main>
);

export default Hero;
