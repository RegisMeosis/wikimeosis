import React from 'react';
import PdfItem from './PdfItem';

const PdfList = ({ pdfs }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {pdfs.map((pdf, index) => (
        <div key={index} className="col-span-1 md:col-span-2 lg:col-span-3">
          <PdfItem 
            title={pdf.title} 
            pdfUrl={pdf.pdfUrl} 
            previewImageUrl={"/img/pdfpreview.png"} 
          />
        </div>
      ))}
    </div>
  );
};

export default PdfList;
