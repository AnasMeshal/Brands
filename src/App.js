//React
import React, { useState } from "react";
import { Route, Switch } from "react-router";

//components
import Home from "./components/Home";
import BrandList from "./components/BrandList";
import brands from "./brands";
import BrandDetail from "./components/BrandDetail";

//Data
import NavBar from "./components/NavBar";

//Styles
import { GlobalStyle } from "./styles";

function App() {
  const [_brands, setBrands] = useState(brands);

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route path="/brands/:brandSlug">
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
