import { useState, useEffect } from 'react';
import styles from './PauseableTimer.module.css';

const PauseableTimer = () => {
  
  const [seconds,setSeconds] = useState(30);
  useEffect(() => {
    
  }, [seconds]);

  return <div>
      <h1>{seconds}</h1>
      <input type="button" value="Старт" />
      <input type="button" value="Пауза" />
      <input type="button" value="Заново" />
    </div>
}

export default PauseableTimer;