//import { ThemeProvider } from "@emotion/react";
import ProbandoJsonServer from "./ProbandoJsonServer";
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
      <ProbandoJsonServer />
    </div>
);
}

export default App;
