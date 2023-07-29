import Counter from "./Counter";
import { useState } from "react";

const CounterContainer = ({agregarAlCarrito, stock, cantidadEnCarrito= 1}) => {

    const [counter, setCounter] = useState(cantidadEnCarrito);

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