import React from 'react';

const TutorialsSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800 drop-shadow-xl">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-greencustom mb-4">Tutoriels pour Utiliser Jerico</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Découvrez nos tutoriels détaillés pour maîtriser toutes les fonctionnalités de Jerico 4.0. Que vous soyez débutant ou utilisateur avancé, nos guides vous aideront à naviguer et à utiliser Jerico efficacement.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <TutorialCard
        title="Comment se connecter à Jerico ?"
        description="Suivez les étapes simples pour accéder à votre back office et commencer à travailler efficacement."
        link="/docs/decouvrir/connexion"
        emoji="🔑"
        />
        <TutorialCard
        title="Édition de Contenu"
        description="Apprenez comment modifier et personnaliser le contenu de votre site web pour le rendre unique."
        link="/docs/category/elementor"
        emoji="✏️"
        />
        <TutorialCard
        title="Consultation des Statistiques"
        description="Utiliser les données statistiques pour optimiser les performances de votre site."
        link="/docs/tourdhorizon/onglet_statistiques"
        emoji="📊"
        />

        </div>

        <div className="w-60 h-1 bg-greencustom  m-auto mt-10 rounded-full"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <TutorialCard
        title="Gestion des Médias"
        description="Apprenez à organiser, ajouter et gérer efficacement les images et les vidéos sur votre site."
        link="/docs/leswidgets/elementor_widget_image"
        emoji="🖼️"
        />
        <TutorialCard
        title="Personnalisation de l'Apparence"
        description="Explorez les options de personnalisation pour donner à votre site une apparence unique."
        link="/docs/category/elementor"
        emoji="🎨"
        />
        <TutorialCard
        title="Ajouts des Actualités"
        description="Découvrez comment ajouter facilement et rapidement des actualités."
        link="/docs/category/actualités"
        emoji="📰"
        />

        </div>
        <div className="flex justify-center mt-8">
          <a href="/guide" className="button-transition bg-greencustom  text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:no-underline hover:text-white mt-5">
            Découvrir le guide
          </a>
        </div>
      </div>
    </section>
  );
}

const TutorialCard = ({ title, description, link, emoji }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className={`border-t-4 shadow-lg bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md border-greencustom border-4 relative overflow-hidden h-60 hover:scale-105 ease-in-out duration-300 selector-pointer hover:shadow-xl hover:bg-greencustom hover:h3:text-white drop-shadow-xl`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4">
        <h3 className={`text-center dark:text-white text-xl font-semibold text-gray-800 mb-2 ${isHovered ? 'text-white' : ''}`}>{title}</h3>
        <p className={`text-center text-gray-800 dark:text-gray-300 ${isHovered ? 'text-white' : ''}`}>{description}</p>
        <div className={`text-center text-4xl mt-4 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
          {emoji}
        </div>
      </div>
      <div className={`text-center absolute bottom-10 left-0 right-0 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-200' : 'opacity-0 translate-y-full'}`}>
        <a href={link} className="button-transition bg-white dark:bg-gray-600 text-greencustom dark:text-greencustom font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-105 hover:no-underline hover:text-greencustom ">
          Découvrir
        </a>
      </div>
    </div>
  );
}

export default TutorialsSection;
