import React, { useEffect, useState } from 'react';

const UserClock = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setCurrentTime(timeString);
    };


    updateClock();


    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock-display">
      <h1>{currentTime}</h1>
    </div>
  );
};

export default UserClock;
