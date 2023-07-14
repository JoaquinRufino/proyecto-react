
const Checkout = ({funcionDelFormulario, funcionDeLosInput}) => {
  return (
    <div>
        {/*eliminar Br*/}
        <h1>Checkout</h1>
        <br>
        </br>
        <form onSubmit={funcionDelFormulario}>
            <input onChange={funcionDeLosInput} type="text" placeholder="Ingrese su nombre" name="name" />
            <input onChange={funcionDeLosInput} type="text" placeholder="Ingrese su apellido" name="lastName" />
            <button type="submit">Enviar</button>
            <button type="button">Cancelar</button>
        </form>
    </div>
  );
};

export default Checkout;