import "./ProductCard.css";

const ProductCard = ({ producto }) => {
  return (
    <article className="articleProducto">
        <img src={producto.img} className="ropa2"/>
      <div className="div-card">
        <h1>{producto.title}</h1>
        <h4>{producto.description}</h4>
        <button className="verDetalle">Ver Detalle</button>
      </div>
    </article>
  );
};

export default ProductCard;
