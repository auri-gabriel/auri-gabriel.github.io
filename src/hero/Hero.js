import React, { useEffect, useState } from "react";

const Hero = () => {
  // eslint-disable-next-line
  const [hash, setHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleButtonClick = (event) => {
    event.preventDefault();
    window.location.hash = "#skills";
  };
  return (
    <section
      id="hero"
      className="
    w-full
    h-screen
    mx-auto
    text-center
    flex
    flex-col
    justify-between"
    >
      <div className="flex-grow flex flex-col justify-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Hi there, I'm Auri Gabriel!
        </h1>
        <h1 className="text-7xl lg:py-8 py-4">🚀</h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          I'm a Front-end developer @ Compass.uol
        </p>
      </div>
      <div className="pb-36 flex-none">
        <div className="flex items-center justify-center text-gray-500">
          <a
            href="/#skills"
            onClick={handleButtonClick}
            className="cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5"
                className="w-12 h-12"
                style={{
                  animation: "subtleBounce 2s infinite",
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
                  transform: translateY(2px); /* Less height for bounce */
                }
                60% {
                  transform: translateY(1px); /* Less bounce on return */
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
