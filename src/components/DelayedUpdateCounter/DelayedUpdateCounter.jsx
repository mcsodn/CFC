import { useState, useEffect, useRef } from 'react';

const DelayedUpdateCounter = () => {
  const [count, setCount] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);
  const pendingCount = useRef(0);

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  const updateCounter = () => {
    pendingCount.current = count + 1;
    
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    
    const newTimeoutId = setTimeout(() => {
      if (pendingCount.current !== count) {
        setCount(pendingCount.current);
      }
    }, 2000);
    
    setTimeoutId(newTimeoutId);
  };

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={updateCounter}>
        Нажми меня
      </button>
    </div>
  );
};

export default DelayedUpdateCounter;