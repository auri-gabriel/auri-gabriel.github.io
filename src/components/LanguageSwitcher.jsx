import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className='fixed top-4 right-4 z-50 flex gap-2'>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          i18n.language === 'en'
            ? 'bg-primary-blue text-white'
            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('pt')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          i18n.language === 'pt'
            ? 'bg-primary-blue text-white'
            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
        }`}
      >
        PT
      </button>
    </div>
  );
};

export default LanguageSwitcher;
