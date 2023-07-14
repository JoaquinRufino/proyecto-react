import { useNavigate } from "react-router-dom";
import Checkout from "./Checkout";
import { useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const CheckoutContainer = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
  });

  const funcionDelFormulario = (evento) => {
    evento.preventDefault();

    console.log(userData);

    Toastify({
      text: "Formulario enviado correctamente",

      duration: 3000,
    }).showToast();

    navigate("/itemList");
  };

  const funcionDeLosInput = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  return (
    <Checkout
      funcionDelFormulario={funcionDelFormulario}
      funcionDeLosInput={funcionDeLosInput}
    />
  );
};

export default CheckoutContainer;
