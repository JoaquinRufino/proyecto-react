import {useState} from 'react';


const useCounter = (initial=0, maximo) =>{

    const [counter, setCounter] = useState(initial);
    
    const increment = () => {
        if(counter < maximo){
            setCounter(counter + 1);
        }
    };

    const decrement = () => {
        if(counter > 1){
            setCounter(counter - 1);
        }
    };

    const reset = () => {
        setCounter(initial);
    };

    return {counter, increment, decrement, reset};
}

export default useCounter;