import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import '../styles/Calendar.scss'

interface CalendarProps {
  date: Dayjs;
}

const getCalendarDataset = (date: Dayjs) => {
  const startOfMonth = date.startOf('month');
  const endOfMonth = date.endOf('month');
  const startDate = startOfMonth.startOf('week');
  const endDate = endOfMonth.endOf('week');

  const calendar = [];
  let week = [];

  for (let day = startDate; day.isBefore(endDate); day = day.add(1, 'day')) {
    week.push(day);
    if (week.length === 7) {
      calendar.push(week);
      week = [];
    }
  }

  return calendar;
};

const Calendar: React.FC<CalendarProps> = ({ date }) => {
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  const calendar = getCalendarDataset(date);

  return (
    <div className="calendar">
      <h6>{date.format('YYYY년 M월')}</h6>
      <table>
        <thead>
          <tr>
            {weekdays.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendar.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((day) => (
                <td 
                  key={day.format('YYYY-MM-DD')}
                  className={`
                    ${day.month() !== date.month() ? 'other-month' : ''}
                    ${day.day() === 0 ? 'sunday' : ''}
                    ${day.day() === 6 ? 'saturday' : ''}
                    ${day.isSame(date, 'day') ? 'current-day' : ''}
                  `}
                >
                  {day.date()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;