<<<<<<< HEAD


function App() {
  
  return <div>
  
  </div>
  
=======
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import CartContextComponent from "./context/CartContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartContextComponent>
          <AppRouter />
        </CartContextComponent>
      </BrowserRouter>
    </div>
  );
>>>>>>> 2fbf860934ee1ff7c58d7499e5a94886f64d3a17
}

export default App;
