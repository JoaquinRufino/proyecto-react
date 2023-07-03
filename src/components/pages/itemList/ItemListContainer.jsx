import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  
  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      resolve(products);
    });
  
    getProducts.then((respuesta) => setProductos(respuesta))
    .catch ((error) => console.log(error));
  }, []);
    
  
  return <ItemList productos={productos} />;
};
export default ItemListContainer;