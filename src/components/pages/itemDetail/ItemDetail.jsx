import { Box, Skeleton } from "@mui/material";
import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";
import { Stack } from "react-bootstrap";

const ItemDetail = ({ product, agregarAlCarrito, cantidadEnCarrito }) => {
  let arr = [1];
  return (
    <div>
      {product.id ? (
        <article className="articleProductoDetail">
          <img src={product.img} className="ropaDetail" />
          <div className="div-detalle">
            <h2>{product.description}</h2>
            <h3>${product.price}</h3>
            <CounterContainer
              cantidadEnCarrito={cantidadEnCarrito}
              stock={product.stock}
              agregarAlCarrito={agregarAlCarrito}
            />
          </div>
        </article>
      ) : (
        arr.map((elemento) => (
          <Stack className="skeleton-detail" key={elemento}>
            <Skeleton
              className="figura"
              variant="rectangular"
              width={410}
              height={300}
            />
            <Box className="box" sx={{ width: 400 }}>
              <Skeleton
                variant="text"
                width={340}
                height={80}
                animation={false}
              />
              <Skeleton
                variant="text"
                width={280}
                height={60}
                animation="wave"
              />
              <Skeleton
                variant="text"
                width={120}
                height={80}
                animation={false}
              />
            </Box>
          </Stack>
        ))
      )}
    </div>
  );
};

export default ItemDetail;
