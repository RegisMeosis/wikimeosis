import React from 'react';
import styles from './styles.module.css';

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-500 via-green-400 to-green-300">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 dark:text-gray-700 drop-shadow-xl">Fonctionnalités de Jerico 4.0</h2>
        </div>
        <div className={styles.cards}>
          <FeatureCard
            title="Un guide détaillé"
            description="Accédez à un guide complet pour maîtriser toutes les fonctionnalités de Jerico."
            icon="📚"
            link="/docs/category/découvrir-jerico"
          />
          <FeatureCard
            title="Mettez à jour votre site de manière autonome"
            description="Apprenez à modifier le contenu de votre site web facilement et rapidement."
            icon="🔨"
            link="/docs/category/elementor"
          />
          <FeatureCard
            title="Analysez vos performances"
            description="Consultez les données et rapports statistiques pour suivre les performances de votre site."
            icon="📈"
            link="/docs/tourdhorizon/onglet_statistiques"
          />
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({ title, description, icon, link }) => {
  return (
    <div className={`${styles.card} bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md mb-4 drop-shadow-xl`}>
      <div className="text-center mb-4 text-4xl">
        {icon}
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
      <div className="text-center">
        <a href={link} className="text-green-700 dark:text-green-400 hover:underline tip hover:no-underline">En savoir plus</a>
      </div>
    </div>
  );
}

export default FeaturesSection;
