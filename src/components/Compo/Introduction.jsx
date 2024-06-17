import React from 'react';

const PdfIntroduction = ({ title, description, imageUrl }) => {
  return (
    <section className="py-20 dark:bg-gray-800 drop-shadow-xl">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-greencustom">{title}</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {description}
            </p>
            <div className="w-full h-1 bg-greencustom mt-10 rounded-full drop-shadow-xl"></div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={imageUrl} alt="Illustration" className="max-w-full h-auto drop-shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PdfIntroduction;
