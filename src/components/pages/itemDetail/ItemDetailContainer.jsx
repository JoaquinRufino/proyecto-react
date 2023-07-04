import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { products } from "../../../productsMock";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    
    let id=3;

    useEffect(()=>{

        let promesa = new Promise((resolve, reject) => {
            let productSelected = products.find((product)=> product.id === id)
            resolve(productSelected);
        })

        promesa.then((res) => setProduct(res)).catch((err) => console.log(err));

    }, [id])
    
    const agregarAlCarrito = (cantidad) => {
        let data = {
            ...product,
            quantity: cantidad
        }
        console.log(data);
    };

    return <ItemDetail product= {product} agregarAlCarrito={agregarAlCarrito} />;

};

export default ItemDetailContainer;