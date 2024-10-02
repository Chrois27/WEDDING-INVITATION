import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/GalleryModal.scss';

interface GalleryModalProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ images, initialIndex, onClose }) => {
  const [showGuide, setShowGuide] = useState(true);

  useEffect(() => {
    // 5초 후 자동으로 안내문 숨기기
    const timer = setTimeout(() => {
      setShowGuide(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  const handleGuideClick = () => {
    setShowGuide(false);
  };

  return (
    <div className="gallery-modal-overlay" onClick={onClose}>
      <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
      <Swiper
  modules={[Navigation, Pagination]}
  navigation={{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }}
  pagination={{ 
    type: 'fraction',
    clickable: true,
    el: '.swiper-pagination',
  }}
  initialSlide={initialIndex}
  loop={false}
  className="gallery-swiper"
  breakpoints={{
    768: {
      touchRatio: 1,
      touchAngle: 45,
      shortSwipes: true
    }
  }}
>
  <div className="swiper-button-prev"></div>
<div className="swiper-button-next"></div>
<div className="swiper-pagination"></div>
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="image-container">
                <img src={`${import.meta.env.BASE_URL}images/${src}`} alt={`Gallery image ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {showGuide && (
          <div className="gallery-guide" onClick={handleGuideClick}>
            좌/우로 넘겨서 다른 사진도 볼 수 있어요.
          </div>
        )}
        <button className="close-button" onClick={handleCloseClick}>
          <span className="close-icon">×</span>
        </button>
      </div>
    </div>
  );
};

export default GalleryModal;