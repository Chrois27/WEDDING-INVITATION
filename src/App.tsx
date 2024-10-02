import React from 'react';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import RelationshipDuration from './components/RelationshipDuration';
import Cover from './components/Cover';
import Calendar from './components/Calendar';
import DdayCounter from './components/DdayCounter';
import Directions from './components/Directions';
import AccountInfo from './components/AccountInfo';
import Section from './components/Section';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import AdditionalInfo from './components/AdditionalInfo';
import './App.css';
import './styles/global.css';


function App() {
  const weddingDate = dayjs('2025-02-08T17:40:00');
  const relationshipStartDate = dayjs('2018-03-10');

  const galleryImages = [
    'we1.JPG',
    'we2.JPG',
    'we3.JPG',
    'we4.JPG',
    'we5.JPG',
    'we6.JPG',
  ];

  return (
    <div className="App">
      <div className="app-container">
      {/* <Header /> */}
      <Cover />
      <main>
        <Section title="인사말">
          <p className="greeting-message">
            <RelationshipDuration startDate={relationshipStartDate} /> 동안 지켜온 소중한 인연,<br/>
            사랑과 믿음의 결실을 <br/>
            하나님 안에서 맺게 되었습니다.<br/><br/>
            결혼이 사랑의 종착점이 아니듯,<br/>
            행복한 오늘이 인생에 있어<br/>
            결코 전부가 아님을 알기에<br/>
            여러분을 저희 언약의 증인으로 <br/>
            초대하고자 합니다.<br/><br/>
            새로운 인생을 시작하는 <br/>
            저희 두 사람의 뜻깊은 시간을 <br/>
            함께 해주시면 감사하겠습니다.<br/>
          </p>
          <h6>최영문 · 양지명의 자녀 성국<br/>김정업 · 이정임의 자녀 보라</h6>
        </Section>

        <Section title="예식 일시">
          <div className="wedding-date-time">
            <p>2025년 2월 8일</p>
            <p>토요일 오후 5시 40분</p>
          </div>
        </Section>

        <Calendar date={weddingDate} />

        <DdayCounter 
          weddingDate={weddingDate}
          dDayText="우리의 결혼식까지"
          dPlusDayText="우리가 함께한 시간"
        />

        <Section title="오시는 길">
          <Directions />
        </Section>

        
        <Section title="갤러리">
          <div className="gallery-margin">
            <Gallery images={galleryImages} />
            <p>사진을 누르면 더 크게 볼 수 있어요.</p>
          </div>
        </Section>

        <Section title="마음 전하실 곳">
          <AccountInfo />
        </Section>

        <Section title="안내사항">
          <AdditionalInfo />
        </Section>

      </main>

      <Footer />
    </div>
    </div>
  );
}

export default App;