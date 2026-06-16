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
    const rotate = Math.random() * 360;
    const opacity = 0.08 + Math.random() * 0.14;
    const depth = Math.random() * 0.3;
    const floatDelay = Math.random() * 5;
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const candidate = {
      top,
      left,
      size,
      rotate,
      opacity,
      emoji,
      depth,
      floatDelay,
    };

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
  const [hash, setHash] = useState('');
  const [backgroundEmojis, setBackgroundEmojis] = useState([]);
  const [scrollY, setScrollY] = useState(0);
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

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      relative
      overflow-hidden
      '
      style={{ zIndex: 1 }}
    >
      {/* Animated gradient background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(135deg, 
            #21409a 0%, 
            #1a2f73 25%,
            #0f1f47 50%,
            #1a2f73 75%, 
            #21409a 100%)`,
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s ease infinite',
          zIndex: 0,
        }}
      />

      {/* Animated light rays effect */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 20% 50%, rgba(255, 222, 23, 0.03) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(190, 30, 45, 0.02) 0%, transparent 50%)`,
          animation: 'lightShift 8s ease-in-out infinite',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Emoji background with parallax */}
      <div
        aria-hidden='true'
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      >
        {backgroundEmojis.map((e, i) => (
          <span
            key={i}
            style={{
              position: 'absolute',
              top: `${e.top + scrollY * e.depth * 0.05}%`,
              left: `${e.left}%`,
              fontSize: `${e.size}px`,
              opacity: e.opacity,
              pointerEvents: 'none',
              transform: `rotate(${e.rotate}deg)`,
              userSelect: 'none',
              zIndex: 0,
              transition: 'top 0.1s ease-out',
              animation: `float ${4 + e.floatDelay}s ease-in-out infinite`,
              animationDelay: `${e.floatDelay}s`,
            }}
          >
            {e.emoji}
          </span>
        ))}

        {/* Premium dark overlay with gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            background: `linear-gradient(180deg, 
              rgba(15, 31, 71, 0.4) 0%, 
              rgba(15, 31, 71, 0.55) 50%, 
              rgba(15, 31, 71, 0.7) 100%)`,
            zIndex: 3,
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Content container */}
      <header
        className='flex-grow flex flex-col justify-center px-6 sm:px-8'
        style={{ position: 'relative', zIndex: 10 }}
      >
        <div className='max-w-4xl mx-auto w-full'>
          {/* Greeting with stagger animation */}
          <h1
            className='text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-4'
            style={{
              animation: 'fadeInUp 0.8s ease-out forwards',
              opacity: 0,
            }}
          >
            {t('hero.greeting')}
          </h1>

          {/* Animated rocket with glow */}
          <div
            className='text-6xl lg:text-8xl py-4 lg:py-8 my-6'
            role='img'
            aria-label='Rocket emoji'
            style={{
              animation:
                'fadeInUp 0.8s ease-out 0.2s forwards, rocketFloat 3s ease-in-out infinite',
              opacity: 0,
              filter: 'drop-shadow(0 0 20px rgba(255, 222, 23, 0.3))',
            }}
          >
            🚀
          </div>

          {/* Premium tagline with glassmorphism */}
          <div
            className='mb-8'
            style={{
              animation: 'fadeInUp 0.8s ease-out 0.4s forwards',
              opacity: 0,
            }}
          >
            <span
              className='inline-block backdrop-blur-xl border border-white text-sm font-medium text-white px-8 py-3 rounded-full shadow-2xl'
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                borderColor: 'rgba(255, 255, 255, 0.25)',
                boxShadow: '0 8px 32px rgba(15, 31, 71, 0.3)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
              }}
            >
              {t('hero.tagline')}
            </span>
          </div>

          {/* Description */}
          <p
            className='text-lg sm:text-xl leading-relaxed text-gray-100 mb-10 max-w-3xl mx-auto font-light'
            style={{
              animation: 'fadeInUp 0.8s ease-out 0.6s forwards',
              opacity: 0,
            }}
          >
            {t('hero.description')}
          </p>

          {/* CTA Buttons with enhanced effects */}
          <div
            className='flex flex-col sm:flex-row gap-5 justify-center items-center mb-8'
            style={{
              animation: 'fadeInUp 0.8s ease-out 0.8s forwards',
              opacity: 0,
            }}
          >
            <a
              href='https://linkedin.com/in/auri-gabriel'
              target='_blank'
              rel='noopener noreferrer'
              className='
                inline-flex items-center gap-2 px-8 py-4
                bg-white text-primary-blue font-semibold rounded-xl
                hover:bg-opacity-95 transition-all duration-300
                shadow-xl hover:shadow-2xl transform hover:scale-105
                min-w-[220px] justify-center
                w-full sm:w-auto
                backdrop-blur-md
                relative overflow-hidden group
              '
              style={{
                background: 'linear-gradient(135deg, #fff 0%, #f5f5f5 100%)',
              }}
            >
              <span className='relative z-10 flex items-center gap-2'>
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                    clipRule='evenodd'
                  />
                </svg>
                {t('hero.cta.linkedin')}
              </span>
              <div
                className='absolute inset-0 bg-gradient-to-r from-primary-yellow to-primary-orange opacity-0 group-hover:opacity-10 transition-opacity duration-300'
                style={{ zIndex: 0 }}
              />
            </a>

            <a
              href='https://github.com/auri-gabriel'
              target='_blank'
              rel='noopener noreferrer'
              className='
                inline-flex items-center gap-2 px-8 py-4
                font-semibold rounded-xl border-2 border-white border-opacity-40
                hover:border-opacity-70 transition-all duration-300
                min-w-[220px] justify-center
                w-full sm:w-auto
                hover:scale-105 transform
                text-white backdrop-blur-md
                group
              '
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              }}
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

      {/* Scroll indicator with enhanced animation */}
      <div
        className='pb-16 sm:pb-24 lg:pb-36 flex-none'
        style={{ position: 'relative', zIndex: 10 }}
      >
        <div className='flex items-center justify-center text-white group cursor-pointer'>
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

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes lightShift {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes rocketFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
