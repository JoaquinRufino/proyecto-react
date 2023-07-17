import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';



const CartWidget = () => {

  const { cart } = useContext(CartContext);
   

  return (
    
    <div>
        {/* icono de carrito */}
        <Link to="/cart">
        <Badge badgeContent={cart.length} color="primary" showZero>
            <ShoppingCartIcon color="action" />
        </Badge>
        </Link>
    </div>
  );
}

export default CartWidget;