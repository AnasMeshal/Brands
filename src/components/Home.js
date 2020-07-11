//React
import React from "react";
import { Helmet } from "react-helmet";

//Styles
import { HomePageWrapper, Welcome, WelcomeDescription } from "../styles";

const Home = () => {
  return (
    <>
      <HomePageWrapper>
        <Helmet>
          <title>Welcome to our store</title>
        </Helmet>
        <Welcome>Brands Guide</Welcome>
        <WelcomeDescription>Premium Brands.</WelcomeDescription>
      </HomePageWrapper>
    </>
  );
};

export default Home;
