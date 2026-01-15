import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const SEOComponent = () => {
  const { i18n } = useTranslation();
  const { lang } = useParams();
  const currentLanguage = lang || i18n.language || 'en';
  const isPortuguese = currentLanguage === 'pt';

  const seoData = {
    pt: {
      title: 'Auri Gabriel - Desenvolvedor Salesforce Commerce Cloud B2C',
      description:
        'Desenvolvedor Salesforce Commerce Cloud B2C, React e JavaScript. Experiência em SFRA e tecnologias modernas. Portfolio profissional.',
      keywords:
        'Auri Gabriel, Castro de Melo, Desenvolvedor Salesforce, Commerce Cloud B2C, React, JavaScript, SFRA, Front-End, E-commerce, Brasil, Compass.uol',
      ogTitle: 'Auri Gabriel - Desenvolvedor Salesforce Commerce Cloud B2C',
      ogDescription:
        'Desenvolvedor Salesforce Commerce Cloud B2C, React e JavaScript. Veja meu portfolio e experiência profissional.',
      twitterTitle:
        'Auri Gabriel - Desenvolvedor Salesforce Commerce Cloud B2C',
      twitterDescription:
        'Salesforce Commerce Cloud B2C | React | JavaScript | E-commerce',
    },
    en: {
      title: 'Auri Gabriel - Salesforce Commerce Cloud B2C Developer',
      description:
        'Salesforce Commerce Cloud B2C Developer, React and JavaScript developer. Experience with SFRA and modern technologies. Professional portfolio.',
      keywords:
        'Auri Gabriel, Castro de Melo, Salesforce Developer, Commerce Cloud B2C, React, JavaScript, SFRA, Front-End, E-commerce, Brazil, Compass.uol',
      ogTitle: 'Auri Gabriel - Salesforce Commerce Cloud B2C Developer',
      ogDescription:
        'Salesforce Commerce Cloud B2C Developer, React and JavaScript developer. Check out my portfolio and professional experience.',
      twitterTitle: 'Auri Gabriel - Salesforce Commerce Cloud B2C Developer',
      twitterDescription:
        'Salesforce Commerce Cloud B2C | React | JavaScript | E-commerce',
    },
  };

  const currentSEO = seoData[currentLanguage] || seoData.en;
  const alternateUrl = isPortuguese
    ? 'https://aurigabriel.com/en'
    : 'https://aurigabriel.com/pt';
  const canonicalUrl = `https://aurigabriel.com/${currentLanguage}`;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{currentSEO.title}</title>
      <meta name='description' content={currentSEO.description} />
      <meta name='keywords' content={currentSEO.keywords} />
      <html lang={currentLanguage} />

      {/* Canonical and alternate */}
      <link rel='canonical' href={canonicalUrl} />
      <link
        rel='alternate'
        hreflang={isPortuguese ? 'en' : 'pt-BR'}
        href={alternateUrl}
      />
      <link
        rel='alternate'
        hreflang='x-default'
        href='https://aurigabriel.com'
      />

      {/* Open Graph */}
      <meta property='og:title' content={currentSEO.ogTitle} />
      <meta property='og:description' content={currentSEO.ogDescription} />
      <meta property='og:url' content={canonicalUrl} />
      <meta property='og:locale' content={isPortuguese ? 'pt_BR' : 'en_US'} />
      <meta
        property='og:locale:alternate'
        content={isPortuguese ? 'en_US' : 'pt_BR'}
      />

      {/* Twitter */}
      <meta name='twitter:title' content={currentSEO.twitterTitle} />
      <meta
        name='twitter:description'
        content={currentSEO.twitterDescription}
      />

      {/* JSON-LD Structured Data */}
      <script type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Auri Gabriel Castro de Melo',
          jobTitle: isPortuguese
            ? 'Desenvolvedor Salesforce Commerce Cloud'
            : 'Salesforce Commerce Cloud Developer',
          description: currentSEO.description,
          url: 'https://aurigabriel.com',
          sameAs: [
            'https://github.com/auri-gabriel',
            'https://mastodon.social/@auri_gabriel',
          ],
          worksFor: {
            '@type': 'Organization',
            name: 'Compass.uol',
          },
          knowsAbout: [
            'Salesforce Commerce Cloud',
            'React',
            'JavaScript',
            'SFRA',
            'Front-End Development',
            'E-commerce',
          ],
          alumniOf: {
            '@type': 'Organization',
            name: 'Universidade Federal do Pampa',
          },
        })}
      </script>
    </Helmet>
  );
};

export default SEOComponent;
