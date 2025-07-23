import { useRef } from 'react';

const FocusInput = () => {
    const inputRef = useRef(null);

    return <>
        <textarea name="text_input" id="" ref={inputRef} style={{marginBottom: '15px'}}></textarea>
        <input type="button" value="Установить фокус" onClick={() => {inputRef.current.focus()}} />
    </>
}

export default FocusInput;