
import Checkout from "./Checkout";
import { useContext, useState } from "react";
import { db } from "../../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";

const CheckoutContainer = () => {


  const { cart, getTotalPrice } = useContext(CartContext);

  const [orderId, setOrderId] = useState("");

  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
  });

   let total = getTotalPrice();

   
  const handleSubmit = (evento) => {
    evento.preventDefault();


    let order = {
      buyer: userData,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    let ordersCollections = collection(db, "orders");
    addDoc(ordersCollections, order).then((res) => setOrderId(res.id));
      
    cart.forEach((elemento) => {
      updateDoc(doc(db, "products", elemento.id), {
        stock: elemento.stock - elemento.quantity,
     });
    });
  };


  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };


  return (
    <Checkout
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      orderId={orderId}
    />
  );
};

export default CheckoutContainer;
