
import Navbar from "./components/layout/navbar/Navbar";







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
