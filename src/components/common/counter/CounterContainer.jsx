
import Counter from "./Counter";
import useCounter from "../../../utils/hooks/useCounter";

const CounterContainer = ({agregarAlCarrito, stock}) => {
    const {counter, increment, decrement} = useCounter(1, stock);

    return (
        <Counter 
        counter={counter}
        increment= {increment}
        decrement={decrement}
        agregarAlCarrito={agregarAlCarrito}
        stock={stock}
        />
    );
};

export default CounterContainer;