import { Button } from "@mui/material";


const Counter = ({counter, setCounter, agregarAlCarrito, stock}) => {
  return (
    <div>
        <div style={{display:"flex"}}>
        <Button disabled={counter <= 1} variant="contained" onClick={()=>setCounter(counter - 1)}>
            -
        </Button>
        
        <h1>{counter}</h1>
        
        <Button disabled={counter >= stock} variant="contained" onClick={()=> setCounter(counter + 1)}>
            +
        </Button>
        </div>
        
        <Button variant="contained" onClick={()=>agregarAlCarrito(counter)}>Agregar al carrito</Button>

    </div>
  );
};

export default Counter;