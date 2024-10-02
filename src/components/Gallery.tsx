import React, { useState } from 'react';
import GalleryModal from './GalleryModal';
import '../styles/Gallery.scss';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  return (
    <div className="bento-gallery">
      {images.map((src, index) => (
        <div key={index} className="bento-item" onClick={() => openModal(index)}>
          <img 
            className="bento-image"
            src={`${import.meta.env.BASE_URL}images/${src}`} 
            alt={`Gallery image ${index + 1}`} 
          />
        </div>
      ))}
      {selectedImageIndex !== null && (
        <GalleryModal
          images={images}
          initialIndex={selectedImageIndex}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Gallery;