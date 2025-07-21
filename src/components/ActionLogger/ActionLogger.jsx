import { useReducer } from 'react';

const loggerHistory = [{ id: 0, text: 'Журнал запущен' }];
let nextId = 1;

function reducer(logEvents,logEvent) {
  return [
    ...logEvents, 
    {
      id: logEvent.id,
      text: logEvent.text
    }
  ];  
}

const ActionLogger = () => {
  const [logEvents, dispatch] = useReducer(reducer, loggerHistory);
  const handleChange = (e) => {
    return dispatch({id: nextId++, text: 'Нажата кнопка: ' + e.target.value})
  }
  
  return (
    <div>
      {Array(5).fill(true).map((_,i) => <input type="button" value={"Действие " + (i+1)} onClick={handleChange} key={i} />)}
      <ul>
        {logEvents.map((logEv,i) => <li key={i}>{logEv.text}</li>)}
      </ul>
    </div>
  );
}

export default ActionLogger;