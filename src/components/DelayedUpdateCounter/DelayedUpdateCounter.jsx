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
    clearTimeout(timeoutId);
    pendingCount.current = count + 1;
    
    const tId = setTimeout(() => {
      if (pendingCount.current !== count) {
        setCount(pendingCount.current);
      }
    }, 2000);
    
    setTimeoutId(tId);
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