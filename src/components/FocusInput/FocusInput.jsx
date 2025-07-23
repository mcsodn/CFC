import { useRef } from 'react';

const FocusInput = () => {

  return <>
      <h1>{seconds}</h1>
      <input type="button" value={isStopped ? "Продолжить" : "Остановить"} onClick={()=>{setIsStopped(!isStopped)}} />
    </>
}

export default FocusInput;