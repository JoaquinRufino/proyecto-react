import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="pie-de-pagina">
        <article className="copyright ">
            <h1 className="mover-copyright">© Copyright Jr cream</h1>
        </article>
        <article >
            <Link className="redes" to="./checkout">Contacto</Link>
        </article>
    </footer>
  );
};

export default Footer;