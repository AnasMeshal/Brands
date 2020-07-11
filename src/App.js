//React
import React from "react";
import { Route, Switch } from "react-router";

//components
import Home from "./components/Home";
import BrandList from "./components/BrandList";
import NavBar from "./components/NavBar";
import BrandDetail from "./components/BrandDetail";

//Data
import brands from "./brands";

//Styles
import { GlobalStyle } from "./styles";

function App() {
  const _brands = brands;

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route exact path="/brands/:brandSlug">
          <BrandDetail brands={_brands} />
        </Route>
        <Route exact path="/brands">
          <BrandList brands={_brands} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
