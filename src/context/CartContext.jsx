import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  //aca va toda la logica que retornamos en el provider para toda la aplicacion
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCart = (product) => {
    let existe = cart.some((elemento) => elemento.id === product.id);
    if (existe) {
      let newArr = cart.map((elemento) => {
        if (product.id === elemento.id) {
          return { ...elemento, quantity: product.quantity };
        } else {
          return elemento;
        }
      });

      localStorage.setItem("cart", JSON.stringify(newArr));
      setCart(newArr);
    } else {
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  const deleteById = (id) => {
    let newCart = cart.filter((elemento) => elemento.id !== id);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const getTotalQuantity = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0)
    return total
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + (elemento.price * elemento.quantity)
    }, 0)
    return total
  };

  const getQuantityById = (id) => {
    let producto = cart.find((elemento) => elemento.id === +id);
    //return producto ? producto.quantity : producto;

    return producto?.quantity;
  };

  const envioFormulario = (e) => {
    e.preventDefault();
    Toastify({
      text: "Formulario enviado con exito",
      duration: 3000,
    }).showToast();

    navigate("/itemList");
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteById,
    getTotalQuantity,
    getTotalPrice,
    getQuantityById,
    envioFormulario,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
