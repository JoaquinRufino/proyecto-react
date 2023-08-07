import Button from "@mui/material/Button";
import "./Checkout.css";
import { Link } from "react-router-dom";

const Checkout = ({ handleSubmit, handleChange, orderId }) => {
  return (
    <div className="checkout">
          {!orderId ? (
            <div className="formularioDiv">
            <div className="form">
            <form onSubmit={handleSubmit}>
             
              <input
                className="input-control"
                onChange={handleChange}
                type="text"
                placeholder="Ingrese su nombre"
                name="name"
              />
              <input
                className="input-control"
                onChange={handleChange}
                type="text"
                placeholder="Ingrese su apellido"
                name="lastName"
              />
              <input
                className="input-control"
                onChange={handleChange}
                type="text"
                placeholder="Ingrese su telefono"
                name="phone"
              />

              <article className="form-label">
                {/*<label className="form-label">Email</label>*/}
                <div className="input-group has-validation mb-1">
                 {/* <span className="input-group-text" id="inputGroupPrepend">
                    @
          </span>*/}
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    id="validationCustomUsername"
                    onChange={handleChange}
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                </div>
              </article>
              <div className="botonesEnviar-cancelar">
                <Button variant="contained" type="submit">
                  Comprar
                </Button>
                <Link to="/itemList">
                <Button variant="contained" type="button">
                  Cancelar
                </Button>
                </Link>
              </div>
            </form>
            </div>
            </div>
          ) : (
            <div className="order-div">
              <div className="orderIdDiv">
              <h1 className="orderId">Su orden de compra es 👇👇 </h1>
              </div>
              <h2 className="orderIdh2">{orderId}</h2>
              <Link to="/itemList">
                  <Button variant="contained">Volver a la tienda</Button>
              </Link>
            </div>
          )}
    </div>
  );
};

export default Checkout;
