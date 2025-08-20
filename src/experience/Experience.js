import JobItem from './JobItem';

const Experience = () => {
  const jobs = [
    {
      title: 'Salesforce Commerce Cloud Developer',
      company: 'Compass.uol',
      duration: 'May 2024 - Present',
      summary:
        'Salesforce Commerce Cloud Developer Developer at Compass.UOL. Working with Salesforce B2C to create a service e-commerce platform.',
      clients: [
        {
          name: 'Sem Parar',
          duration: 'May 2024 - Present',
          summary:
            "Worked on e-commerce platform using SFRA, building pages, components and controllers with API's integrations.",
        },
      ],
    },
    {
      title: 'Teaching and Monitoring Scholarship in Curricular Component',
      company: 'Universidade Federal do Pampa',
      duration: 'May 2023 - Nov 2023',
      summary:
        'Part-time position at the GEIHC - Human-Computer Interaction Study Group. Participated in meetings, supported the development of Open Seminars, promoted group activities, conducted directed studies, led workshops, performed literature review, contributed to the creation of educational materials, submitted experience reports, and prepared activity reports.',
    },
    {
      title: 'Front-End Development Internship',
      company: 'Compass.uol',
      duration: 'May 2023 - Oct 2023',
      summary:
        'Internship focused on Front-End Development (React) with a focus on AWS Cloud context at Compass.UOL. Responsibilities include enhancing skills in front-end development, working with technologies like React and AWS, and contributing to the creation of innovative applications.',
    },
  ];

  return (
    <section
      id='experience'
      className='
        w-full
        mx-auto
        pt-16
        '
    >
      <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-4xl'>
        <h2 className='mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl'>
          Work Experience
        </h2>
        <div className='space-y-4 mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-4xl py-2'>
          {jobs.map((job, index) => (
            <JobItem key={index} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
