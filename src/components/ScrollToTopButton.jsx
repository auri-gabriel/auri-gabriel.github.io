import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    window.history.replaceState(null, '', window.location.pathname);
  };

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed text-xl bottom-10 right-10 bg-gray-900 text-white px-4 py-2 rounded-full hover:drop-shadow-md focus:outline-none transition"
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;

