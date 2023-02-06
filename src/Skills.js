const skills = [
  {
    name: 'Rust Programming Language',
    description:
      'A systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety.',
    icon: '🦀',
  },
  {
    name: 'Linux',
    description:
      'An open-source operating system that is widely used for servers, desktops, and IoT devices.',
    icon: '🐧',
  },
  {
    name: 'Machine Learning',
    description:
      'A field of artificial intelligence that focuses on the development of algorithms that can learn patterns from data.',
    icon: '🧠',
  },
  {
    name: 'JavaScript',
    description:
      'A high-level, dynamic, and interpreted programming language used primarily for creating interactive web pages and web applications.',
    icon: '💻',
  },
  {
    name: 'Docker',
    description:
      'A platform for developers and sysadmins to develop, deploy, and run applications with containers.',
    icon: '🐳',
  },
  {
    name: 'Web Assembly',
    description:
      'A low-level, high-performance binary format that can be executed in modern web browsers and runtimes, offering near-native performance.',
    icon: '🕸️',
  },
  {
    name: 'Bash Scripting',
    description:
      'The act of writing scripts using the Bash shell language, which is commonly used in Linux and Unix systems for automating tasks and performing command-line operations.',
    icon: '🐚',
  },
  {
    name: 'Java',
    description:
      'A high-level, object-oriented programming language used for building scalable and secure applications, especially in the enterprise environment.',
    icon: '☕',
  },
  {
    name: 'Python',
    description:
      'A high-level programming language used for a wide range of tasks such as web development, data analysis, artificial intelligence, and more.',
    icon: '🐍',
  },
  {
    name: 'Spring Boot',
    description:
      'A popular Java-based framework for building scalable and high-performing microservices and web applications.',
    icon: '🌱',
  },
  {
    name: 'React.js',
    description:
      'A JavaScript library for building user interfaces using a component-based approach.',
    icon: '💻',
  },
  {
    name: 'Next.js',
    description:
      'A React-based framework for building server-side rendered and statically exported web applications.',
    icon: '🚀',
  },
];

const Skills = () => {
  return (
    <>
      <div className='mx-auto max-w-2xl lg:text-center'>
        <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          The technologies I use
        </p>
        {/* <p className='mt-6 text-lg leading-8 text-gray-600'>
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p> */}
      </div>
      <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
        <dl className='grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
          {skills.map((skill) => skillCard(skill))}
        </dl>
      </div>
    </>
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
          rounded-lg
          white '
          >
            <dd className='h-6 w-6 text-white text-2xl' aria-hidden='true'>
              {skill.icon}
            </dd>
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
