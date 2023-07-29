import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';



const CartWidget = () => {

  const { getTotalQuantity} = useContext(CartContext);
   
   let total = getTotalQuantity();

  return (
    
    <div>
        {/* icono de carrito */}
        <Link to="/cart">
        <Badge badgeContent={total} color="primary" showZero>
            <ShoppingCartIcon color="action" />
        </Badge>
        </Link>
    </div>
  );
}

export default CartWidget;