import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
  <div>
      <div className="navbarContainer">
        <Link to="/" className='logo'>Jr Cream</Link>
        <ul className="nav">
          <li>Productos</li>
          <li>Economicas</li>
          <li>Suplex</li>
        </ul>

        <CartWidget />
      </div>
    <Outlet />
  </div>
  );
};

export default Navbar;