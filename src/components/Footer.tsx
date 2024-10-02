import React from 'react';
import KakaoShareButton from '../components/KakaoShareButton';
import '../styles/Footer.scss'

const Footer: React.FC = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '20px 0', marginTop: '50px' }}>
      <div className="KakaoShareButton">
      <KakaoShareButton 
        title="겅숙로바의 결혼식"
        description="2025년 2월 8일 5:40PM, 우리의 특별한 날에 여러분을 초대합니다."
        imageUrl="https://chrois27.github.io/WEDDING-INVITATION/wedding-thumbnail.jpeg"
        link="https://chrois27.github.io/WEDDING-INVITATION/"
        backgroundColor="#846666"  // 원하는 배경색
        textColor="#FFFFFF"  // 원하는 텍스트 색상
      />
      </div>
      <p className="invitation-link">
        직접 만든 종이청접장 <a href={`${import.meta.env.BASE_URL}images/map.pdf`} target="_blank" rel="noopener noreferrer">구경가기</a>
      </p>
      <p>© 2024 예랑 겅숙. All rights reserved.<br/>Only For 예부 로바.</p>
    </footer>
  );
};

export default Footer;