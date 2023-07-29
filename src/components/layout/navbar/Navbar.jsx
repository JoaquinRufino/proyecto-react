import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link} from "react-router-dom";

const Navbar = () => {
  return (
      <div className="navbarContainer">
        <Link to="/" className='logo'>Jr Cream</Link>
        <ul className="nav">
          <Link to="/itemList" className="nav-productos">Productos</Link>
          <Link to="/category/economicas" className="nav-productos">Economicas</Link>
          <Link to="/category/suplex" className="nav-productos">Suplex</Link>
        </ul>
        <CartWidget />
      </div>
  );
};

export default Navbar;