import { Stack } from "react-bootstrap";
import ProductCard from "../../common/productCard/ProductCard";
import { Skeleton } from "@mui/material";
import "./ItemList.css";
import Box from '@mui/material/Box';

const ItemList = ({ productos }) => {
  let arr = [1, 2, 3, 4];
  return (
    <section>
      {productos.length > 0
        ? productos.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))
        : arr.map((elemento) => (
            <Stack className="skeleton" key={elemento}>
              <Skeleton
                className="figura"
                variant="rectangular"
                width={410}
                height={300}
              />
              <Box className="box" sx={{ width: 400 }}>
                <Skeleton variant="text" width={340} height={80}  animation={false} />
                <Skeleton variant="text" width={280} height={60}  animation="wave" />
                <Skeleton variant="text" width={120} height={80}  animation={false} />
              </Box>
            </Stack>
          ))}
    </section>
  );
};

export default ItemList;
