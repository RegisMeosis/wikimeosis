import React from 'react';
import { motion } from 'framer-motion';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            className="group overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ border: `2px solid #8dc641`, background: '#7DB234'}}
          >
            <VideoItem title={video.title} thumbnail={video.thumbnail} videoUrl={video.videoUrl}   />
            <div className="p-4 bg-white">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-lg font-bold mb-2 text-gray-800"
              >
                {video.description}
              </motion.h2>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
