import React from 'react';
import useKakaoSDK from '../utils/hooks/useKakaoShareSDK';

interface KakaoShareButtonProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    backgroundColor?: string;
    textColor?: string;
  }
  
  const KakaoShareButton: React.FC<KakaoShareButtonProps> = ({
    title,
    description,
    imageUrl,
    link,
    backgroundColor = '#FEE500',
    textColor = '#000000'
  }) => {
    const kakaoSDK = useKakaoSDK();

  const handleShare = () => {
    if (kakaoSDK) {
      kakaoSDK.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: title,
          description: description,
          imageUrl: imageUrl,
          link: {
            mobileWebUrl: link,
            webUrl: link,
          },
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: link,
              webUrl: link,
            },
          },
        ],
      });
    } else {
      alert('카카오톡 공유하기를 사용할 수 없습니다.');
    }
  };

  return (
    <button 
      onClick={handleShare} 
      style={{ 
        backgroundColor: backgroundColor, 
        color: textColor,
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      카카오톡으로 공유하기
    </button>
  );
};

export default KakaoShareButton;