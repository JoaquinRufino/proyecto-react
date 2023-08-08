import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./CartContainer.css";
import Button from "@mui/material/Button";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);


  let total = getTotalPrice();

  return (
    <div className="carrito">
      {cart.map((elemento) => {
        return (
          <div className="div-carrito" key={elemento.id}>
            <img src={elemento.img} className="img-carrito" />
            <div className="div-info">
              <h1>{elemento.title}</h1>
              <h2> ${elemento.price}</h2>
              <h3>Unidades: {elemento.quantity}</h3>
              <div className="div-botones">
                {/*<button className="boton-carrito">Comprar</button>*/}
                <button
                  onClick={() => deleteById(elemento.id)}
                  className="boton-carrito"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        );
      })}
      {cart.length > 0 ? (
        <div className="div-finalizar">
          <h1>Total a pagar: ${total} </h1>
          <Link to="/checkout">
            <Button variant="contained" color="success" onClick={clearCart}>Finalizar Compra</Button>
          </Link>
        </div>
      ) : (
        <Cart />
      )}
    </div>
  );
};

export default CartContainer;
