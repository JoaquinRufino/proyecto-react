import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  
  const { categoryName } = useParams();

  useEffect(() => {

    let productosFiltrados = products.filter(elemento => elemento.category === categoryName);

    const getProducts = new Promise((resolve, reject) => {
      resolve(categoryName ? productosFiltrados : products);
    });
  
    getProducts.then((respuesta) => setProductos(respuesta))
    .catch ((error) => console.log(error));
  }, [categoryName]);
    
  
  return <ItemList productos={productos} />;
};
export default ItemListContainer;