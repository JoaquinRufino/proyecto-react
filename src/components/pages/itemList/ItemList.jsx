import ProductCard from '../../common/productCard/ProductCard';


const ItemList = ({productos}) => {

  return (
    <section>
      {productos.map((producto) => {
          return (
            <ProductCard key={producto.id} producto={producto} />
          );
        })}
    </section>
  );
};

export default ItemList;