import React from 'react';
import Image from '@docusaurus/Link';

const IntroductionSection = () => {
  return (
    <section className="py-20 dark:bg-gray-800 drop-shadow-xl">
      <div className="container mx-auto px-4">
        <div className=" mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-greencustom">À propos de Jerico 4.0</h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 ">
              Jerico est un outil simplifié conçu par les équipes techniques de Meosis pour vous permettre de modifier facilement le contenu (textes et photos) de votre site web. Il offre également un accès pratique à toutes les informations essentielles pour suivre les performances de votre site. Jerico 4.0 est la dernière version, la plus aboutie, qui a été pensée pour vous offrir une expérience de modification de site web encore plus fluide et intuitive.
            </p>
            <div className="w-100 h-1 bg-greencustom m-auto mt-10 rounded-full drop-shadow-xl "></div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <img src="./img/3.png" alt="Gestion de contenu web" className="max-w-full h-auto drop-shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroductionSection;
