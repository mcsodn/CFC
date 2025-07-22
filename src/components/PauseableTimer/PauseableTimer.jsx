import { useState, useEffect } from 'react';
import styles from './PauseableTimer.module.css';

const PauseableTimer = () => {
  const initSeconds = 0;
  const [seconds,setSeconds] = useState(initSeconds);
  const [isStopped,setIsStopped] = useState(true);

  const startTimer = () => {
    setIsStopped(false);
  }

  const pauseTimer = () => {
    setIsStopped(true);
  }

  const restartTimer = () => {
    setIsStopped(true);
    setSeconds(initSeconds);
  }

  useEffect(() => {
    while (!isStopped) {
      const interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1)
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isStopped, seconds]);

  return <div>
      <h1>{seconds}</h1>
      <input type="button" value="Старт" onClick={startTimer} />
      <input type="button" value="Пауза" onClick={pauseTimer}/>
      <input type="button" value="Заново" onClick={restartTimer}/>
    </div>
}

export default PauseableTimer;