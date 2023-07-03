import CounterContainer from "../../common/counter/CounterContainer";


const ItemDetail = ({product, agregarAlCarrito}) => {
  return (
    <div>
      <h1>{product.description}</h1>
      <h2>{product.price}</h2>

      <CounterContainer stock={product.stock} agregarAlCarrito={agregarAlCarrito}/>
    </div>
  )
}

export default ItemDetail;