import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./CartContainer.css";


const CartContainer = () => {
  const { cart, clearCart,deleteById } = useContext(CartContext);

  return (
    <div className="carrito">
      {cart.map((elemento) => {
        return (
          <div className="div-carrito" key={elemento.id}>
            <img src={elemento.img} className="img-carrito" />
            <div className="div-info">
              <h1>{elemento.title}</h1>
              <h2>{elemento.price}</h2>
              <h3>Unidades:{elemento.quantity}</h3>
              <div className="div-botones">
                {/*<button className="boton-carrito">Comprar</button>*/}
                <button onClick={()=>deleteById(elemento.id)} className="boton-carrito">Eliminar</button>
              </div>
            </div>
          </div>
        );
      })}
      <button onClick={clearCart}>Finalizar Compra</button>
    </div>
  );
};

export default CartContainer;
