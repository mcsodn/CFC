import { useReducer } from 'react';

const initialState = { isVisible: true };

function reducer(state) {
  
  return { isVisible: !state.isVisible }
}

const VisibilityToggle = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <input type="button" value={state.isVisible ? "Скрыть" : "Показать"} onClick={() => dispatch()} />
      <p style={state.isVisible ? {visibility: 'visible'} : {visibility: 'hidden'}}>Текст показан!</p>
    </div>
  );
}

export default VisibilityToggle;