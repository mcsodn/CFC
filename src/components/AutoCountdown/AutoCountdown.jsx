import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  
  const [seconds,setSeconds] = useState(10);
  useEffect(() => {
    while (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1)
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [seconds]);

  return <div>{seconds}</div>
}

export default CountdownTimer;