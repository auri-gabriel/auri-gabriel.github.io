import React, { useEffect, useState } from 'react';
import skillsData from '../skills/skills.en.json';

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

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);

    const emojis = skillsData.skills.map((s) => s.icon);
    const placed = generateNonOverlappingEmojis(emojis, EMOJI_COUNT);
    setBackgroundEmojis(placed);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
    // eslint-disable-next-line
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
      <div
        className='flex-grow flex flex-col justify-center'
        style={{ position: 'relative', zIndex: 1 }}
      >
        <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
          Hi there, I'm Auri Gabriel!
        </h1>
        <h1 className='text-7xl lg:py-8 py-4'>🚀</h1>
        <p className='mt-6 text-lg leading-8 text-gray-300'>
          I'm a Front-end developer @ Compass.uol
        </p>
      </div>
      <div
        className='pb-36 flex-none'
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
