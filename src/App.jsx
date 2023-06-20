import { ThemeProvider } from "@emotion/react";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./components/pages/home/Home";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import { customTheme, customThemeDark } from "./themeConfig";
import { useState } from "react";
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';



function App() {

const [darkMode, setDarkMode] = useState(false)

const changeMode = () => {
  setDarkMode(!darkMode)
}

  return (
  <ThemeProvider theme={darkMode ? customThemeDark : customTheme}>
        <div>
              <Navbar />
                  {
                    darkMode ? <LightModeIcon onClick={changeMode} /> : <ModeNightIcon onClick={changeMode} />
                  }
              <ItemListContainer />
              <Home />
        </div>
  </ThemeProvider>
  );
}

export default App;
