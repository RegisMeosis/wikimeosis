import React from 'react';
import PdfList from '../components/PDF/PdfList';
import Layout from '@theme/Layout';
import Introduction from '../components/Compo/Introduction';

const MyPdfPage = () => {
  // Exemple de données de fichiers PDF
  const pdfs = [
    { title: 'Formation Jerico PDF', pdfUrl: '/img/guide-jerico.pdf' },
    
    // Ajoute d'autres fichiers PDF selon tes besoins
  ];

  return (
    <Layout
      title="Fichiers PDF"
      description="Consultez nos fichiers PDF disponibles."
    >
      <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Tutoriel PDF</h1>
        <Introduction
        title="Bienvenue dans la section PDF"
        description="Cette section vous permet de visualiser et de gérer facilement vos documents PDF. Le PDF présenté ici est une version de notre guide intuitif, conçu pour vous aider à modifier votre site web grâce à Jerico. Cliquez sur les aperçus pour afficher les PDF ou utilisez les boutons pour ouvrir les documents dans de nouveaux onglets."
        imageUrl="./img/3.png"
      />
        <PdfList pdfs={pdfs} />
      </main>
    </Layout>
  );
};

export default MyPdfPage;
