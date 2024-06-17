import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20  bg-gradient-to-br from-greencustom via-greencustom2 to-greencustom3 drop-shadow-xl">
      <div className="max-w-3xl mx-auto text-center mb-12 drop-shadow-xl">
        <h2 className="text-3xl font-bold text-white dark:text-gray-700">FAQ : Service Technique</h2>
        <p className="text-gray-700 dark:text-black">
          Retrouvez ici les réponses aux questions les plus courantes.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-700 shadow-lg rounded-3xl w-full max-w-4xl p-10 container mx-auto px-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-300 mb-4 pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="text-xl font-medium text-gray-900 dark:text-white m-5 mt-0 mb-0">{item.question}</h2>
              <span className={`mr-10 pr-5 w-5 h-1 bg-greencustom text-white dark:text-gray-900 rounded-full p-1 transition-transform ${activeIndex === index ? 'rotate-90' : ''}`}>
                <i
                  className={`ri-add-line ${activeIndex === index ? 'ri-subtract-fill' : ''}`}
                ></i>
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <p className="text-gray-700 dark:text-gray-300 m-5">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const faqData = [
  {
    question: 'Comment se connecter à Jerico ?',
    answer: 'Rendez-vous sur votre site internet. Ajoutez /jerico à l’adresse dans la barre de navigation. Par exemple : https://votrenomdedomaine.fr/jerico. Saisissez votre identifiant et votre mot de passe fournis par le service technique, puis cliquez sur le bouton de connexion.',
  },
  {
    question: 'Que faire en cas de problème de connexion ?',
    answer: "Si vous avez des questions ou rencontrez des problèmes lors de la connexion, n'hésitez pas à contacter le service clients au 03 89 30 86 30.",
  },
  {
    question: 'Comment modifier le contenu de mon site web ?',
    answer: 'Pour modifier le contenu de votre site web : Connectez-vous à Jerico. Accédez au menu "Page" dans la navigation de gauche. Sélectionnez la page que vous souhaitez modifier. Utilisez l éditeur pour changer le texte, ajouter des images ou des vidéos. Cliquez sur "Enregistrer" pour appliquer les modifications.',
  },
  {
    question: 'Comment consulter les statistiques de mon site ?',
    answer: 'Pour consulter les statistiques de votre site, connectez-vous à votre back office Jerico et allez dans la section "Statistiques". Vous y trouverez des rapports détaillés sur les performances de votre site.',
  },
  {
    question: 'Comment ajouter des images ou des vidéos à mon site ?',
    answer: 'Connectez-vous à Jerico. Accédez au menu "Médias" dans la navigation de gauche. Cliquez sur "Ajouter un fichier" et sélectionnez les images ou vidéos que vous souhaitez télécharger depuis votre ordinateur. Une fois téléchargés, vous pouvez insérer ces fichiers dans vos pages en utilisant l éditeur de contenu.',
  },
  {
    question: 'Et si mes images sont trop lourdes ?',
    answer: 'Utiliser des sites de compression d images en ligne, ou si vous préférez, vous pouvez envoyer un email à notre équipe de support technique avec les images en pièce jointe. Dans votre email, incluez des indications sur où et comment vous souhaitez que les images soient ajoutées à votre site web.',
  },
];

export default FAQSection;
