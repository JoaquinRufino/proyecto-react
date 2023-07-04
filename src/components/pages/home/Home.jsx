import { useState } from 'react';

const Home = () => {

//   const [contador, setContador] = useState(0)

//   const sumar = () => {
//     setContador (contador + 1)
//   }

//   const restar = () => {
//     setContador (contador - 1)
//   }

  return (
    
   <div>

       <h1>{contador}</h1>
     <button onClick={sumar}>Sumar</button> 
     <button onClick={restar}>Restar</button>
<button onClick={() => setContador(0)}>Resetear</button>
    </div>
)
}


export default Home;