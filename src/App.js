import { ThemeProvider } from "styled-components";
import DirectList from "./components/DirectList";
import { GlobalStyle } from "./style";
import DirectItem from "./components/DirectItem";
import DirectDetail from "./components/DirectDetail";
import movies from "./data";
import Home from "./components/Home";

import { Route, Switch } from "react-router";
import NavBar from "./components/NavBar";

const theme = {
  mainColor: "grey",
  backgroundColor: "lightyellow",
  red: "red",
};

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NavBar />
        <Switch>
          <Route path="/movies/:movieId">
            <DirectDetail movies={movies} />
          </Route>
          <Route path="/movies">
            <DirectList movies={movies} />
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
