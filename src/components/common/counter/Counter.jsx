import { Button } from "@mui/material";


const Counter = ({counter, setCounter, agregarAlCarrito, stock}) => {
  return (
    <div>
        <div style={{display:"flex", paddingBottom:"6px", gap:"8px", paddingTop:"4px"}}>
        <Button disabled={counter <= 1} variant="contained" onClick={()=>setCounter(counter - 1)}>
            -
        </Button>
        
        <h4>{counter}</h4>
        
        <Button disabled={counter >= stock} variant="contained" onClick={()=> setCounter(counter + 1)}>
            +
        </Button>
        </div>
        
        <Button variant="contained" onClick={()=>agregarAlCarrito(counter)}>Agregar al carrito</Button>

    </div>
  );
};

export default Counter;