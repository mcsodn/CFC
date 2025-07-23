import { useState, useEffect } from 'react';

const AutoCountdown = () => {
  
  const [seconds,setSeconds] = useState(10);
  const [isStopped,setIsStopped] = useState(false);

  useEffect(() => {
    if (!isStopped && (seconds >= 0)) {
        const interval = setInterval(() => {
          setSeconds(prevSeconds => prevSeconds - 1)
        }, 1000);
    
        return () => clearInterval(interval);      
      } else {
        !isStopped && setSeconds(10);
      }
  }, [seconds,isStopped]);

  return <>
      <h1>{seconds}</h1>
      <input type="button" value={isStopped ? "Продолжить" : "Остановить"} onClick={()=>{setIsStopped(!isStopped)}} />
    </>
}

export default AutoCountdown;