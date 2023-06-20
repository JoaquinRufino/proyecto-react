import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbarContainer">
        <h1 className='logo'>Jr Cream</h1>
        <ul className="nav">
          <li>Inicio</li>
          <li>Comprar</li>
        </ul>
        <CartWidget />
    </div>
  )
}

export default Navbar