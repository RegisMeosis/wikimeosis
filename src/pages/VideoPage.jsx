import React from 'react';
import VideoList from '../components/Tutoriel Videos/VideoList';
import Layout from '@theme/Layout';
import Introduction from '../components/Compo/Introduction';

const videos = [
  {
    title: 'Introduction au Guide Jerico',
    thumbnail: '/img/placeholder.jpg',
    videoUrl: 'https://cdn.cluster014.hosting.meosis.fr/videos/meosis.fr/new-video-meosis.mp4',
    description : " Découvrez les fondamentaux du back office web avec le Guide Jerico. Ce guide complet vous accompagne à travers chaque étape pour maîtriser efficacement toutes les fonctionnalités de votre plateforme d'administration en ligne.",
  },
  {
    title: 'Navigation et Interface Utilisateur',
    thumbnail: '/img/placeholder.jpg',
    videoUrl: 'https://cdn.cluster014.hosting.meosis.fr/videos/meosis.fr/new-video-meosis.mp4',
    description: "Apprenez à naviguer aisément à travers l'interface utilisateur intuitive du Guide Jerico. Découvrez comment optimiser votre workflow quotidien et accéder rapidement aux outils nécessaires pour gérer votre site web avec fluidité."
  },
  {
    title: 'Navigation et Interface Utilisateur',
    thumbnail: '/img/placeholder.jpg',
    videoUrl: 'https://cdn.cluster014.hosting.meosis.fr/videos/meosis.fr/new-video-meosis.mp4',
    description: "Apprenez à naviguer aisément à travers l'interface utilisateur intuitive du Guide Jerico. Découvrez comment optimiser votre workflow quotidien et accéder rapidement aux outils nécessaires pour gérer votre site web avec fluidité."
  },
];

const VideoPage = () => {
  return (
    <Layout
      title="Vidéos à Regarder"
      description="Explorez notre collection de vidéos instructives."
    >
    
    <main className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Tutoriels vidéos</h1>
        <Introduction
        title="Bienvenue dans la section Vidéos"
        description="Cette section vous permet de visualiser facilement nos vidéos tutoriels. Chaque vidéo est conçue pour vous fournir des instructions claires sur l'utilisation de Jerico. Cliquez sur les aperçus pour regarder les vidéos."
        imageUrl="./img/3.png"
      />
        <VideoList videos={videos} />
      </main>
    </Layout>
  );
};

export default VideoPage;
