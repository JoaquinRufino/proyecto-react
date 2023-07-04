import Counter from "./Counter";
import { useState } from "react";

const CounterContainer = ({agregarAlCarrito, stock}) => {

    const [counter, setCounter] = useState(1);

    return(
    <Counter 
    counter={counter} 
    setCounter={setCounter} 
    agregarAlCarrito={agregarAlCarrito}
    stock={stock}
    />
    );
};

export default CounterContainer;