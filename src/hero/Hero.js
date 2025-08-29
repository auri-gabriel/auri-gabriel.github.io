import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import skillsEn from '../i18n/locales/skills.en.json';
import skillsPt from '../i18n/locales/skills.pt.json';

const EMOJI_COUNT = 25;
const EMOJI_MIN_SIZE = 32;
const EMOJI_MAX_SIZE = 64;
const EMOJI_AREA_PADDING = 16;

function isOverlapping(a, b) {
  return !(
    a.left + a.size + EMOJI_AREA_PADDING < b.left ||
    a.left > b.left + b.size + EMOJI_AREA_PADDING ||
    a.top + a.size + EMOJI_AREA_PADDING < b.top ||
    a.top > b.top + b.size + EMOJI_AREA_PADDING
  );
}

function generateNonOverlappingEmojis(emojis, count) {
  const placed = [];
  let tries = 0;
  while (placed.length < count && tries < count * 20) {
    const size =
      EMOJI_MIN_SIZE + Math.random() * (EMOJI_MAX_SIZE - EMOJI_MIN_SIZE);
    const top = Math.random() * (100 - size / 2);
    const left = Math.random() * (100 - size / 2);
    const rotate = Math.random() * 90;
    const opacity = 0.12 + Math.random() * 0.18;
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const candidate = { top, left, size, rotate, opacity, emoji };

    // Check overlap
    const pxTop = (top / 100) * window.innerHeight;
    const pxLeft = (left / 100) * window.innerWidth;
    const candidateBox = { top: pxTop, left: pxLeft, size };

    let overlap = false;
    for (const p of placed) {
      const pBox = {
        top: (p.top / 100) * window.innerHeight,
        left: (p.left / 100) * window.innerWidth,
        size: p.size,
      };
      if (isOverlapping(candidateBox, pBox)) {
        overlap = true;
        break;
      }
    }
    if (!overlap) {
      placed.push(candidate);
    }
    tries++;
  }
  return placed;
}

const Hero = () => {
  // eslint-disable-next-line
  const [hash, setHash] = useState('');
  const [backgroundEmojis, setBackgroundEmojis] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);

    // Get skills data based on current language
    const skillsData = i18n.language === 'pt' ? skillsPt : skillsEn;
    const emojis = skillsData.skills.map((s) => s.icon);
    const placed = generateNonOverlappingEmojis(emojis, EMOJI_COUNT);
    setBackgroundEmojis(placed);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
    // eslint-disable-next-line
  }, [i18n.language]);

  const handleButtonClick = (event) => {
    event.preventDefault();
    window.location.hash = '#skills';
  };

  return (
    <section
      id='hero'
      className='
      w-full
      h-screen
      mx-auto
      text-center
      flex
      flex-col
      justify-between
      bg-primary-blue
      relative
      overflow-hidden
      '
      style={{ zIndex: 1 }}
    >
      {/* Emoji background */}
      <div
        aria-hidden='true'
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        {backgroundEmojis.map((e, i) => (
          <span
            key={i}
            style={{
              position: 'absolute',
              top: `${e.top}%`,
              left: `${e.left}%`,
              fontSize: `${e.size}px`,
              opacity: e.opacity,
              pointerEvents: 'none',
              transform: `rotate(${e.rotate}deg)`,
              userSelect: 'none',
              zIndex: 0,
            }}
          >
            {e.emoji}
          </span>
        ))}
        {/* Dark overlay for better contrast */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.45)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
      </div>
      <header
        className='flex-grow flex flex-col justify-center px-6 sm:px-8'
        style={{ position: 'relative', zIndex: 1 }}
      >
        {/* Main content container */}
        <div className='max-w-4xl mx-auto'>
          {/* Greeting */}
          <h1 className='text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4'>
            {t('hero.greeting')}
          </h1>

          {/* Rocket emoji */}
          <div
            className='text-6xl lg:text-7xl py-4 lg:py-6 my-5'
            role='img'
            aria-label='Rocket emoji'
          >
            🚀
          </div>

          {/* Tagline */}
          <div className='mb-6'>
            <span className='inline-block bg-white bg-opacity-15 backdrop-blur-sm border border-white border-opacity-20 rounded-full px-6 py-2 text-sm font-medium text-white'>
              {t('hero.tagline')}
            </span>
          </div>

          {/* Description */}
          <p className='text-lg sm:text-xl leading-relaxed text-gray-200 mb-8 max-w-2xl mx-auto'>
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>
            <a
              href='https://linkedin.com/in/auri-gabriel'
              target='_blank'
              rel='noopener noreferrer'
              className='
                inline-flex items-center gap-2 px-6 py-3 
                bg-white text-primary-blue font-semibold rounded-lg
                hover:bg-gray-100 transition-colors duration-200
                shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
                min-w-[200px] justify-center
              '
            >
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                <path
                  fillRule='evenodd'
                  d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                  clipRule='evenodd'
                />
              </svg>
              {t('hero.cta.linkedin')}
            </a>

            <a
              href='https://github.com/auri-gabriel'
              target='_blank'
              rel='noopener noreferrer'
              className='
                inline-flex items-center gap-2 px-6 py-3 
                bg-transparent text-white font-semibold rounded-lg border-2 border-white border-opacity-30
                hover:bg-white hover:bg-opacity-10 hover:border-opacity-50 transition-all duration-200
                min-w-[200px] justify-center
              '
            >
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                <path
                  fillRule='evenodd'
                  d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
                  clipRule='evenodd'
                />
              </svg>
              {t('hero.cta.github')}
            </a>
          </div>
        </div>
      </header>

      <div
        className='pb-16 sm:pb-24 lg:pb-36 flex-none'
        style={{ position: 'relative', zIndex: 1 }}
      >
        <div className='flex items-center justify-center text-white'>
          <a
            href='/#skills'
            onClick={handleButtonClick}
            className='cursor-pointer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-12 h-12'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 12.75l3 3m0 0l3-3m-3 3v-7.5'
                className='w-12 h-12'
                style={{
                  animation: 'subtleBounce 2s infinite',
                }}
              />
            </svg>
            <style jsx>{`
              @keyframes subtleBounce {
                0%,
                20%,
                50%,
                80%,
                100% {
                  transform: translateY(0);
                }
                40% {
                  transform: translateY(2px);
                }
                60% {
                  transform: translateY(1px);
                }
              }
            `}</style>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
