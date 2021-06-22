import { ThemeProvider } from "styled-components";
import DirectList from "./componenets/DirectList";
import { GlobalStyle } from "./styles";
import { useState } from "react";
import DirectItem from "./componenets/DirectItem";
import perfumes from "./products";
import Home from "./componenets/Home";

import { Route, Switch } from "react-router";
import NavBar from "./componenets/NavBar";

const theme = {
  light: {
    mainColor: "grey",
    backgroundColor: "lightyellow",
    red: "red",
  },
  dark: {
    mainColor: "lightyellow",
    backgroundColor: "grey",
    red: "red",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };

  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
        <Switch>
          <Route path="/perfumes/:perfumeSlug">
            <DirectItem perfumes={_newperfume} perfumeDelete={perfumeDelete} />
          </Route>
          <Route path="/perfumes">
            <DirectList perfumes={_newperfume} perfumeDelete={perfumeDelete} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
