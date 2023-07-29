import { db } from "../../../firebaseConfig";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  
  const { categoryName } = useParams();

  useEffect(() => {

    let consulta;

    let productsCollection = collection(db, "products");

    if (!categoryName) {
      consulta = productsCollection;
    } else {
      consulta = query(productsCollection, where("category", "==", categoryName));
    }


    getDocs(consulta).then((res) => {
      let arrayProductos = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setProductos(arrayProductos);
    });
  }, [categoryName]);
    
  
  return(
    <ItemList productos={productos} />
    );
};
export default ItemListContainer;