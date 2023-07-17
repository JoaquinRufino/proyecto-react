import "./Checkout.css"

const Checkout = ({ funcionDelFormulario, funcionDeLosInput }) => {
  return (
    <div className="formularioDiv">
      <div className="form" >
        <form
          target="_blank"
          action="https://formsubmit.co/rufinojoaquin10@gmail.com"
          method="POST"
          onSubmit={funcionDelFormulario}
        >
          
            <input className="input-control"
              onChange={funcionDeLosInput}
              type="text"
              placeholder="Ingrese su nombre"
              name="name"
            />
          
          
            <input className="input-control"
              onChange={funcionDeLosInput}
              type="text"
              placeholder="Ingrese su apellido"
              name="lastName"
            />
          
          <article className="form-label">
            <label className="form-label">
              Email
            </label>
            <div className="input-group has-validation mb-1">
              <span className="input-group-text" id="inputGroupPrepend">
                @
              </span>
              <input
                type="text"
                className="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              />
            </div>
          </article>
          <div className="botonesEnviar-cancelar">
          <button className="Enviar-cancelar" type="submit">
            Enviar
          </button>
          <button className="Enviar-cancelar" type="button">
            Cancelar
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
