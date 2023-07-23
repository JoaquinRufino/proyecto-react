import LocalMallIcon from '@mui/icons-material/LocalMall';

const Cart = () => {
  return (
    <div className='carrito-vacio'>
        <LocalMallIcon style={{ fontSize: 300 }} />
        <h1>¡Empieza un carrito de compras!</h1>
    </div>
  )
}

export default Cart;