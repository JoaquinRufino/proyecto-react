import { useState, useEffect } from "react";
import { customAxios } from "./axiosInstance";

const ProbandoJsonServer = () => {


    const [products, setProducts] = useState([]);

    useEffect(() => {
        let data = customAxios.get("/");
        data
        .then((res)=> setProducts(res.data))
        .catch((err)=> console.log(err));
    }, []);

    console.log(products);


    let nuevoProducto = {
        title: "Producto 1",
        price: 100,
        description: "Descripcion del producto 1",
        category: "Categoria 1",
    };

     const addProduct = () => {
        let data = customAxios.post("/", nuevoProducto);
     };


     //de esta forma actualizo la informacion de un producto
     let nuevaInfo ={
        price: 1000,
        stock: 0,
     };

     //la funcion que actualiza el producto seleccionado con el id
     //esto ocurre cuando aprieto el boton de actualizar producto ya que en la funcion le pasamos el parametro a cambiar
     //lo hacemos con patch porque put te actualiza todo el objeto y patch solo lo que le pasas y no pierdes la otra informaacion
     const updateProduct = (id) => {
        let data = customAxios.patch(`/${id}`, nuevaInfo);
     };
    
     //la funcion que elimina el producto seleccionado con el id, por ejemplo cuando eliminamos algo del carrito
    const deleteProduct = (id) => {
        let data = customAxios.delete(`/${id}`);
    };


    return (
        <div>
            <h1> Probando Json </h1>
            <button onClick={addProduct}> Agregar Producto </button>
            <button onClick={() => updateProduct(1)}> Actualizar Producto </button>
            <button onClick={() => deleteProduct(3)}> Eliminar Producto </button>
        </div>
    );
};



export default ProbandoJsonServer;