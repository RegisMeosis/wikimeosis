import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

const PdfItem = ({ title, pdfUrl, previewImageUrl }) => {
  const [showPdf, setShowPdf] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const detectMobile = () => {
      const userAgent = navigator.userAgent;
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    };
    setIsMobile(detectMobile());
  }, []);

  const togglePdf = () => {
    if (isMobile) {
      window.open(pdfUrl, '_blank');
    } else {
      setShowPdf(!showPdf);
    }
  };

  const openPdfInNewTab = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="w-full rounded overflow-hidden shadow-lg border border-green-500 rounded-3xl" style={{ border: `2px solid #8dc641`, background: '#f0f0f0' }}>
      {!showPdf ? (
        <div
          className="w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-gray-200 flex items-center justify-center cursor-pointer relative"
          onClick={togglePdf}
        >
          {previewImageUrl ? (
            <img
              src={previewImageUrl}
              alt="Preview"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-600 text-center">Cliquez pour ouvrir le PDF</span>
          )}
        </div>
      ) : (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative max-w-6xl w-full h-5/6 bg-white rounded-lg overflow-hidden shadow-lg mx-2 sm:mx-4 md:mx-8 lg:mx-12 mt-12">
            <button
              className="absolute top-0 right-0 m-4 p-2 bg-gray-800 text-white rounded-full"
              onClick={togglePdf}
            >
              X
            </button>
            <iframe
              className="w-full h-full"
              src={pdfUrl}
              title={title}
              frameBorder="0"
            />
          </div>
        </div>
      )}
      <div className="px-4 py-2 sm:px-6 sm:py-4">
        <div className="font-bold text-lg sm:text-xl mb-2">{title}</div>
        {!isMobile && (
          <button
            className="bg-greencustom hover:bg-greencustom2 hover:scale-105 transition-all text-white font-bold py-2 px-4 rounded-xl mr-2 border-0"
            onClick={openPdfInNewTab}
          >
            Ouvrir dans un nouvel onglet
          </button>
        )}
        {!showPdf && (
          <button
            className="bg-greencustom hover:bg-greencustom2 hover:scale-105 transition-all text-white font-bold py-2 px-4 rounded-xl border-0"
            onClick={togglePdf}
          >
            Voir le PDF
          </button>
        )}
      </div>
    </div>
  );
};

export default PdfItem;
