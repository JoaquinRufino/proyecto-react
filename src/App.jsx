//import { ThemeProvider } from "@emotion/react";
import Navbar from "./components/layout/navbar/Navbar";
//import Home from "./components/pages/home/Home";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      {/*<Home />*/}
      <ItemDetailContainer />
      
    </div>
  );
}

export default App;
