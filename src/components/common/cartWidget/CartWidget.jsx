import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
//import { customTheme } from '../../../themeConfig';
//import { ThemeProvider } from '@emotion/react';

const CartWidget = () => {
  return (
    //<ThemeProvider theme={customTheme}>
    <div>
        {/* icono de carrito */}
        <Badge badgeContent={4} color="primary">
            <ShoppingCartIcon color="action" />
        </Badge>
    </div>
    //</ThemeProvider>
  );
}

export default CartWidget;