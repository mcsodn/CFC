import { useState } from 'react';

const DelayedUpdateCounter = () => {
  // Инициализация состояния с начальным значением 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Вы нажали {Math.floor(count / 2)} раз</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми меня
      </button>
    </div>
  );
}

export default DelayedUpdateCounter;