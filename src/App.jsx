import Navbar from "./components/layout/navbar/Navbar";
import Home from "./components/pages/Home/Home";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/pages/notFound/NotFound";
import CartContainer from "./components/pages/cart/CartContainer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/itemList" element={<ItemListContainer />} />
            <Route path="/itemDetail" element={<ItemDetailContainer />} />
            <Route path = "/cart" element = {<CartContainer />} />
          </Route>
            <Route path= "*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
