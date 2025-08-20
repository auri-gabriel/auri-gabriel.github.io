import React from 'react';
import { useTranslation } from 'react-i18next';

const JobItem = ({ title, company, duration, summary, clients }) => {
  const { t } = useTranslation();
  return (
    <section className='job-item p-4 border shadow-md'>
      <div className='job-details mb-2'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <p className='text-sm text-gray-600'>{company}</p>
        <p className='text-sm text-gray-500'>{duration}</p>
      </div>
      <div className='job-summary text-sm text-gray-700 mb-2'>
        <p>{summary}</p>
      </div>

      {clients && (
        <div className='clients mt-4 pl-4 border-l-2 border-gray-300'>
          <h4 className='font-medium text-gray-800 mb-2'>
            {t('experience.clientsLabel')}
          </h4>
          {clients.map((client, index) => (
            <div key={index} className='mb-2'>
              <p className='font-semibold'>{client.name}</p>
              <p className='text-sm text-gray-500'>{client.duration}</p>
              <p className='text-sm text-gray-700'>{client.summary}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default JobItem;
