
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
};

export default App;
