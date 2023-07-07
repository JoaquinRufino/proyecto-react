import { Button } from "@mui/material";

const Counter = ({ counter, agregarAlCarrito, stock, increment, decrement }) => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Button
          disabled={counter <= 1}
          variant="contained"
          onClick={decrement}
        >
          -
        </Button>
        <h2>{counter}</h2>
        <Button
          disabled={counter >= stock}
          variant="contained"
          onClick={increment}
        >
          +
        </Button>
      </div>
      <br />
      <Button
        variant="contained"
        color="secondary"
        onClick={() => agregarAlCarrito(counter)}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default Counter;