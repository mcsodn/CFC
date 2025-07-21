import { useReducer } from 'react';

const initialState = { tabId: 1, tabName: 'Вкладка 1' };
const textData = ['Текст вкладки 1','Текст вкладки 2','Текст вкладки 3']

function reducer(state,tab) {
  switch (tab.tabName) {
    case 'Вкладка 1':
      return {tabId: 1, tabName: tab.tabName};
    case 'Вкладка 2':
      return {tabId: 2, tabName: tab.tabName};
    case 'Вкладка 3':
      return {tabId: 3, tabName: tab.tabName};
    default:
      return {tabId: 1, tabName: tab.tabName};
  }
}

const Tabs = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e) => {
    return dispatch({tabName: e.target.value})
  }

  return (
    <div>
      {textData.map((_,i) => <input type="button" value={"Вкладка " + (i+1)} onClick={handleChange} key={i} />)}
      <p>{textData[state.tabId - 1]}</p>
    </div>
  );
}

export default Tabs;