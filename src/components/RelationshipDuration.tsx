import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

interface RelationshipDurationProps {
  startDate: dayjs.Dayjs;
}

const RelationshipDuration: React.FC<RelationshipDurationProps> = ({ startDate }) => {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const calculateDays = () => {
      const now = dayjs();
      setDays(now.diff(startDate, 'day'));
    };

    calculateDays();
    const timer = setInterval(calculateDays, 1000 * 60 * 60); // 매시간 업데이트

    return () => clearInterval(timer);
  }, [startDate]);

  return (
    <span className="relationship-duration">
      <span className="number">{days}</span>일
    </span>
  );
};

export default RelationshipDuration;