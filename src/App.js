import "./App.css";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme/Theme";
import HeaderIndex from "./views/header";
import BodyIndex from "./views/body";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <HeaderIndex />
      <BodyIndex />
    </ThemeProvider>
  );
}

export default App;
