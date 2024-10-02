import React from 'react';
import '../styles/Cover.scss';

const Cover: React.FC = () => {
  return (
    <div className="cover">
      <div className="background-image"></div>
      <div className="content">
        {/* <h1>
        장담하건대, <br/> 
        세상이 다 <br/> 
        겨울이어도 <br/> 
        우리 사랑은  <br/>
        늘 봄처럼  <br/> 
        따뜻하고 <br/> 
        간혹, 여름처럼 <br/> 
        뜨거울 겁니다.</h1>
        <p>- 이수동, &lt; 사랑가 &gt; 中 - </p> */}
        <h1>
        개미는 <br/>
        오늘도 <br/>
        열심히 <br/>
        일을하네 <br/>
        개미는 <br/>
        언제나 <br/>
        열심히 <br/>
        일을하네 <br/>
        </h1>
        <p>- 최성국 &lt; 현재상태 &gt; 中 - </p>
      </div>
      <div className="guide">
        <h2>{`신랑 ${import.meta.env.VITE_GROOM_NAME}`} | {`신부 ${import.meta.env.VITE_BRIDE_NAME}`}</h2>
        <p>2025년 2월 8일 토요일 저녁 5시 40분</p>
        <p>서울 신도림 웨딩시티 11층 그랜드볼룸</p>
      </div>
    </div>
  );
};

export default Cover;