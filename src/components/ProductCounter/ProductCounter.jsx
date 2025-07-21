import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return state.count > 0 ? { count: state.count - 1 } : {count: 0};
    default:
      return state;
  }
}

const ProductCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Товаров в корзине: {state.count} шт.</p>
      <input type="button" value="Добавить товар" onClick={() => dispatch({ type: 'increment' })} />
      <input type="button" value="Удалить товар" onClick={() => dispatch({ type: 'decrement' })} />
    </div>
  );
}

export default ProductCounter;