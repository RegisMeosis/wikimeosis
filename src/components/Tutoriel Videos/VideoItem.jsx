import React, { useState } from 'react';

const VideoItem = ({ title, thumbnail, videoUrl }) => {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div className="max-w-full rounded overflow-hidden shadow-lg relative">
      {!showVideo ? (
        <div className="relative">
          <img
            className="w-full h-auto cursor-pointer object-cover"
            src={thumbnail}
            alt={title}
            onClick={toggleVideo}
          />
          {/* Container pour centrer le logo 'play' */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full p-3 shadow-xl cursor-pointer">
              <img
                src="/img/play.jpg"
                className="w-24 h-24 text-customgreen2 transition-transform transform hover:scale-110"
                alt="Play"
                onClick={toggleVideo}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="relative">
          <video className="w-full" controls autoPlay>
            <source src={videoUrl} type="video/mp4" />
            Votre navigateur ne supporte pas cette vidéo.
          </video>
          <button
            className="absolute top-0 right-0 m-2 p-2 bg-gris2 text-white rounded-3xl z-10"
            onClick={toggleVideo}
          >
            X
          </button>
        </div>
      )}
      {/* Titre sous l'image */}
      <div className="px-6 py-4">
        <div className="font-normal text-xl mb-2 text-white">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
