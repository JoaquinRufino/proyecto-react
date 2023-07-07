//import { ThemeProvider } from "@emotion/react";
import FetchDos from "./FetchDos";
import FetchTres from "./FetchTres";
import FetchUno from "./FetchUno";
//import ProbandoJsonServer from "./ProbandoJsonServer";
//import Navbar from "./components/layout/navbar/Navbar";
//import Home from "./components/pages/home/Home";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";

function App() {
  return (
    <div>
      {/*}
      <Navbar />
      <Home />
      <ItemDetailContainer />
      <ProbandoJsonServer />
      <FetchUno />
      <FetchDos />
      <FetchTres />
    */}
    <ItemDetailContainer />
    <ItemListContainer />
    </div>
);
}

export default App;
