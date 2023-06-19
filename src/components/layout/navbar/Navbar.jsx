import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbarContainer">
        <h1 className='logo'>Jrcream</h1>
        <select className="nav">
        <option value="opcion1">Inicio</option>
        <option value="opcion2">Comprar</option>
        </select>
        <CartWidget />
    </div>
  )
}

export default Navbar