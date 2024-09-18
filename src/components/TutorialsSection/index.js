import React from 'react';

const TutorialsSection = () => {
	return (

		<section className="py-20 bg-white dark:bg-gray-800 drop-shadow-xl">
			<div className="w-800 h-20 bg-greencustom  m-auto mb-20"></div>
			<div className="container mx-auto px-4">
				<div className="max-w-3xl mx-auto text-center mb-12">
					<h2 className="text-3xl font-bold text-greencustom mb-4">Tutoriels pour Utilisez Jerico</h2>
					<p className="text-gray-700 dark:text-gray-300">
						Découvrez nos tutoriels détaillés pour maîtriser toutes les fonctionnalités de Jerico 4.0. Que vous soyez débutant ou utilisateur avancé, nos guides vous aideront à naviguer et à utiliser Jerico efficacement.
					</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-x-6 md:gap-y-12 lg:gap-y-16">
					<TutorialCard
						title="Découvrir Jerico"
						description="Apprenez à découvrir toutes les fonctionnalités de Jerico. Suivez les étapes pour accéder à votre back office et commencer à modifier."
						link="/docs/category/découvrir-jerico"
						emoji="🔑"
					/>
					<TutorialCard
						title="Tour d'horizon"
						description="Obtenez un aperçu complet de Jerico et apprenez comment modifier et personnaliser le contenu de votre site web pour le rendre unique."
						link="/docs/category/tour-dhorizon"
						emoji="✏️"
					/>
					<TutorialCard
						title="Elementor"
						description="Découvrez comment utiliser Elementor pour optimiser les performances de votre site en utilisant les données statistiques."
						link="/docs/category/elementor"
						emoji="📊"
					/>
					<TutorialCard
						title="Widgets"
						description="Apprenez à organiser, ajouter et gérer efficacement les widgets sur votre site web à l'aide de Jerico."
						link="/docs/category/widgets"
						emoji="🖼️"
					/>
					<TutorialCard
						title="Actualités"
						description="Explorez les options avancées de personnalisation disponibles dans Jerico pour donner à votre site une apparence unique et attrayante."
						link="/docs/category/actualités"
						emoji="🎨"
					/>
					<TutorialCard
						title="Popups"
						description="Découvrez comment créer et gérer des popups pour afficher des actualités importantes sur votre site web avec Jerico."
						link="/docs/category/popups"
						emoji="📰"
					/>

				</div>
				<div className="flex justify-center mt-8">
					<a href="/docs/category/découvrir-jerico" className="button-transition bg-greencustom  text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:no-underline hover:text-white mt-5">
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
