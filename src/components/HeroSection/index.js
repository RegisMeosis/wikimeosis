import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

export default function HeroSection() {
  const sectionRef = useRef(null);

  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 150, friction: 12 },
    delay: 500 // Ajout d'un délai pour que l'animation commence après le chargement initial
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
      className="relative flex items-center justify-center h-screen  bg-gradient-to-br from-greencustom via-greencustom2 to-greencustom3 overflow-hidden"
    >
      <div className="container mx-auto flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2 text-center md:text-left ">
          <img
            src="/img/logo-meosis-blanc.svg" 
            alt="Logo Meosis"
            className="mx-auto w-48 md:w-auto mb-6 animate-fade-in drop-shadow-xl border border-white"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in drop-shadow-xl dark:text-gris">
            Guide d'Utilisation de Jerico 4.0
          </h1>
          <p className="text-lg text-white mb-8 animate-slide-in drop-shadow-xl dark:text-gris">
            Simplifiez la Modification de votre Site Web avec le Back Office Jerico
          </p>
          <a
            href="/docs/category/découvrir-jerico"
            className="hover:bg-gray-100 hover:text-customgreen button-transition bg-white text-customgreen font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:no-underline mt-5 dark:bg-gris dark:text-greencustom dark:hover:bg-gray-00"
          >
            Commencer
          </a>
          
        </div>
        <div className="hidden md:block md:w-1/2 overflow-hidden drop-shadow-xl">
          <img
            src="/img/landing.png" // Assurez-vous de placer votre image dans le dossier public/img/
            alt="Illustration Jerico"
            className="w-full h-auto animate-slide-in drop-shadow-xl"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16"></div>
    </animated.section>
  );
}
