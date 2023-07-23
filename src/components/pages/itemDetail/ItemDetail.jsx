import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";

const ItemDetail = ({product, agregarAlCarrito, cantidadEnCarrito}) => {
  return (
    <div>
      <article className="articleProductoDetail">
        <img src={product.img} className="ropaDetail"/>
      <div className="div-detalle">
        <h2>{product.description}</h2>
        <h3>${product.price}</h3>
        <CounterContainer cantidadEnCarrito={cantidadEnCarrito} stock={product.stock} agregarAlCarrito={agregarAlCarrito} />
      </div>
    </article>

      
    </div>
  )
}

export default ItemDetail;