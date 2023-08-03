import ItemDetail from "./ItemDetail";
import { useContext, useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    
    let {id} = useParams();
    
    const {addToCart, getQuantityById } = useContext(CartContext);

    let cantidadEnCarrito = getQuantityById(id);


    useEffect(()=>{
        setTimeout(() => {
        let refCollection = collection(db, "products");
        let refDoc = doc(refCollection, id);
        getDoc(refDoc).then(res => setProduct({ ...res.data(), id: res.id }));
    }, 1000);
    }, [id]);
    
    const agregarAlCarrito = (cantidad) => {
        let data = {
            ...product,
            quantity: cantidad
        };
        
        addToCart(data);
    };

    return <ItemDetail product= {product} agregarAlCarrito={agregarAlCarrito} cantidadEnCarrito={cantidadEnCarrito} />;

};

export default ItemDetailContainer;