import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();

  const changeLanguage = (language) => {
    // Navegar para a nova rota de idioma
    navigate(`/${language}`, { replace: true });
  };

  const currentLang = lang || i18n.language;

  return (
    <div className='fixed top-4 right-4 z-50 flex gap-2'>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          currentLang === 'en'
            ? 'bg-primary-blue text-white'
            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('pt')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          currentLang === 'pt'
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
