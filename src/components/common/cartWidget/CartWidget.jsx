import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    
    <div>
        {/* icono de carrito */}
        <Link to="/cart">
        <Badge badgeContent={4} color="primary">
            <ShoppingCartIcon color="action" />
        </Badge>
        </Link>
    </div>
  );
}

export default CartWidget;