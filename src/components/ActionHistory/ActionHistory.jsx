import { useState, useEffect, useReducer } from 'react';

const actionLogReducer = (actionLog,action) => {
    switch (action.type) {
        case 'add symbol':
            return [...actionLog,{
            time: Date.now(), 
            action: 'add symbol',
            inputTextLog: action.symbol
        }];
        case 'cancel last':
            return [...actionLog,{
            time: Date.now(), 
            action: 'cancel last',
            inputTextLog: action.symbol
        }];    
        default:{
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const ActionHistory = () => {
    const [inputText,setInputText] = useState('');

    let actionLogInit = [{time: Date.now(), action: 'init log', inputTextLog: ''}];
    const [actionLog, dispatch] = useReducer(actionLogReducer, actionLogInit);

    const addSymbol = (e) => {
        dispatch({
            type: 'add symbol',
            symbol: e.target.value[e.target.value.length - 1]
        });
        setInputText(e.target.value);
    }

    const cancelLast = () => {
        dispatch({
            type: 'cancel last',
            symbol: actionLog[actionLog.length - 1].inputTextLog
        });
        setInputText(inputText.slice(0,-1));
    }

    useEffect(() => {
        console.log(actionLog);
    },[actionLog]);

  return <>
        <textarea name="text_input" id="" value={inputText} onChange={addSymbol} style={{marginBottom: '15px'}}></textarea>
        <input type="button" value="Отменить последнее" onClick={cancelLast} disabled={inputText === '' ? true : false} />
    </>
}

export default ActionHistory;