import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  let userRol = "customer"
  return (
    <footer className="pie-de-pagina">
        <article className="copyright ">
            <h1 className="mover-copyright">© Copyright Jr cream</h1>
        </article>

        {
          userRol === "admin" && <Link to="/dashboard" className="redes">Admi</Link> 
        }

        <article >
            <Link className="redes" to="./formik">Contacto</Link>
        </article>
    </footer>
  );
};

export default Footer;