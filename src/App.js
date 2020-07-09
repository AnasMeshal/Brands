//Recat
import React from "react";

//Styles
import {
  GlobalStyle,
  HomePageWrapper,
  Welcome,
  WelcomeDescription,
} from "./styles";

function App() {
  return (
    <>
      <HomePageWrapper>
        <GlobalStyle />
        <Welcome>Welcome</Welcome>
        <WelcomeDescription>This is your guide to brnads</WelcomeDescription>
      </HomePageWrapper>
    </>
  );
}

export default App;
