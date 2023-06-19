import Navbar from "./components/layout/navbar/Navbar";
import Home from "./components/pages/home/Home";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";

function App() {
  return (
  <div>
    <Navbar />
    <ItemListContainer />
    <Home />
  </div>
  );
}

export default App;
