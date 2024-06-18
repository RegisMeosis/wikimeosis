import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import SearchBar from '@theme/SearchBar';

export default function HeroSection() {
  const sectionRef = useRef(null);

  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 150, friction: 12 },
    delay: 500
  });

  useEffect(() => {
    const section = sectionRef.current;
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition > sectionOffsetTop - window.innerHeight + sectionHeight / 2) {
        section.classList.add('animate');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <animated.section
      ref={sectionRef}
      style={animationProps}
      className="relative flex items-center justify-center bg-gradient-to-br from-greencustom via-greencustom2 to-greencustom3 overflow-hidden"
    >
      <div className="container mb-10 mx-auto mt-20 px-4 md:px-0 flex flex-col md:flex-row items-center h-600">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in drop-shadow-xl dark:text-gray-700">
            Guide d'Utilisation de Jerico 4.0
          </h1>
          <p className="text-lg text-white mb-8 animate-slide-in drop-shadow-xl dark:text-gray-700">
          Facilitez la Mise à Jour de votre Site Web grâce à Jerico.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
          <a
  href="/docs/category/découvrir-jerico"
  className="hover:text-customgreen button-transition bg-white text-customgreen font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:no-underline dark:bg-gray-700 dark:text-greencustom dark:hover:bg-gray-800 md:col-start-2 flex items-center justify-center"
>
  Commencer
</a>

            {/* <div className='center'>
              <SearchBar/>
            </div> */}
          </div>
          
        </div>
        <div className="hidden md:block md:w-1/2 overflow-hidden drop-shadow-xl">
          <img
            src="/img/landing.png"
            alt="Illustration Jerico"
            className="w-full h-auto animate-slide-in drop-shadow-xl"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16"></div>
    </animated.section>
  );
}
