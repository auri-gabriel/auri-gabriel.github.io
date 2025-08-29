import React from 'react';
import { useTranslation } from 'react-i18next';

const JobItem = ({ title, company, duration, summary, clients }) => {
  const { t } = useTranslation();

  return (
    <div className='bg-white shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden'>
      <div className='p-8'>
        {/* Job Header */}
        <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6'>
          <div className='flex-1'>
            <h3 className='text-2xl font-bold text-gray-900 mb-2'>{title}</h3>
            <div className='flex items-center gap-2 text-primary-blue font-semibold text-lg mb-1'>
              {company}
            </div>
          </div>
          <div className='flex items-center gap-2 text-gray-600 font-medium bg-gray-100 px-4 py-2'>
            {duration}
          </div>
        </div>

        {/* Job Summary */}
        <div className='mb-8'>
          <p className='text-gray-700 leading-relaxed text-base'>{summary}</p>
        </div>

        {/* Clients Section */}
        {clients && (
          <div className='border-t border-gray-200 pt-6'>
            <h4 className='text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2'>
              {t('experience.clientsLabel')}
            </h4>

            <div className='space-y-6'>
              {clients.map((client, index) => (
                <div
                  key={index}
                  className='bg-gray-50 p-6 border-l-4 border-primary-blue'
                >
                  <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4'>
                    <h5 className='text-xl font-semibold text-gray-900'>
                      {client.name}
                    </h5>

                    <span className='text-sm font-medium text-gray-600 bg-white px-3 py-1'>
                      {client.duration}
                    </span>
                  </div>
                  <p className='text-gray-700 leading-relaxed'>
                    {client.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobItem;
