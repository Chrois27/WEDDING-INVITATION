import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import '../styles/DdayCounter.scss';

interface DdayCounterProps {
  weddingDate: dayjs.Dayjs;
  dDayText: string;
  dPlusDayText: string;
}

const DdayCounter: React.FC<DdayCounterProps> = ({ weddingDate, dDayText, dPlusDayText }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = dayjs();
    const difference = weddingDate.diff(now);
    const isPast = difference <= 0;

    if (isPast) {
      const pastDifference = now.diff(weddingDate);
      const days = Math.floor(pastDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((pastDifference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((pastDifference / 1000 / 60) % 60);
      const seconds = Math.floor((pastDifference / 1000) % 60);
      return { days, hours, minutes, seconds, isPast };
    } else {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      return { days, hours, minutes, seconds, isPast };
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const { days, hours, minutes, seconds, isPast } = timeLeft;

  return (
    <div className="dday-counter">
      <h3>{isPast ? dPlusDayText : dDayText}</h3>
      <div className="time-display">
        <div className="time-unit">
          <span className="number">{days}</span>
          <span className="label">일</span>
        </div>
        <div className="time-unit">
          <span className="number">{hours}</span>
          <span className="label">시간</span>
        </div>
        <div className="time-unit">
          <span className="number">{minutes}</span>
          <span className="label">분</span>
        </div>
        <div className="time-unit">
          <span className="number">{seconds}</span>
          <span className="label">초</span>
        </div>
      </div>
    </div>
  );
};

export default DdayCounter;