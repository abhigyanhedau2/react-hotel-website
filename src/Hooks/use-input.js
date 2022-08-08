import { useState } from 'react';

const useInput = () => {
    const [inputIsValid, setInputIsValid] = useState(false);
    const [inputIsTouched, setInputIsTouched] = useState(false);

    return {
        inputIsValid, setInputIsValid, inputIsTouched, setInputIsTouched
    }
}

export default useInput;