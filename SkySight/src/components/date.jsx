import React, { useState, useEffect } from 'react';

const DateTimeComponent = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const formattedDateTime = `${dateTime.getFullYear()}-${formatTime(dateTime.getMonth() + 1)}-${formatTime(dateTime.getDate())} ${formatTime(dateTime.getHours())}:${formatTime(dateTime.getMinutes())}:${formatTime(dateTime.getSeconds())}`;

  return (
    <div>
      <p>Current Date and Time:</p>
      <p>{formattedDateTime}</p>
    </div>
  );
};

export default DateTimeComponent;
