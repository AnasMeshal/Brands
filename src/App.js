//Recat
import React, { useState } from "react";
import { Route, Switch } from "react-router";

//components
import Home from "./components/Home";
import BrandList from "./components/BrandList";
import brands from "./brands";

//Styles
import { GlobalStyle } from "./styles";

function App() {
  const [_brands, setBrands] = useState(brands);

  return (
    <>
      <GlobalStyle />
      <Switch>
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
