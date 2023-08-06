import "./NotFound.css"
import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <div className="div-notFound">
            <h1 className="notFound">Not Found - 404</h1>
            <Link className="volverInicio" to="/">Volver al inicio</Link>
        </div>
    );
};

export default NotFound;
