import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = ({product, agregarAlCarrito}) => {
return(
    <div>
        <h2>{product.description}</h2>
        <h3>{product.price}</h3>
        <CounterContainer stock={product.stock} agregarAlCarrito={agregarAlCarrito}/>
    </div>
);
}

export default ItemDetail;