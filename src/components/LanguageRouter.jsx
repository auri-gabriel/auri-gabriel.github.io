import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Hero from '../hero/Hero';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import Footer from '../footer/Footer';
import Container from '../layout/Container';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Experience from '../experience/Experience';
import LanguageSwitcher from '../components/LanguageSwitcher';
import SEOComponent from '../components/SEOComponent';

const LanguageRouter = () => {
  const { lang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    // Lista de idiomas suportados
    const supportedLanguages = ['pt', 'en'];

    // Se estamos na rota raiz, redirecionar baseado no idioma detectado
    if (location.pathname === '/') {
      const detectedLang = i18n.language || 'en';
      const langToUse = supportedLanguages.includes(detectedLang)
        ? detectedLang
        : 'en';
      navigate(`/${langToUse}`, { replace: true });
      return;
    }

    // Se o idioma da URL é válido, mudar o idioma do i18n
    if (lang && supportedLanguages.includes(lang)) {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
    } else if (lang) {
      // Se o idioma não é suportado, redirecionar para inglês
      navigate('/en', { replace: true });
    }
  }, [lang, i18n, navigate, location.pathname]);

  // Se estamos na rota raiz, não renderizar nada (vai redirecionar)
  if (location.pathname === '/') {
    return null;
  }

  return (
    <>
      <SEOComponent />
      <LanguageSwitcher />
      <main>
        <Hero />
        <Container>
          <Skills />
        </Container>
        <Container>
          <Projects />
        </Container>
        <Container>
          <Experience />
        </Container>
      </main>
      <Container>
        <Footer />
      </Container>
      <ScrollToTopButton />
    </>
  );
};

export default LanguageRouter;
