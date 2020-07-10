//React
import React from "react";
// import { Helmet } from "react-helmet";

//Styles
import { HomePageWrapper, Welcome, WelcomeDescription } from "../styles";

const Home = () => {
  return (
    <>
      <HomePageWrapper>
        <title>Welcome to our store</title>
        <Welcome>Welcome</Welcome>
        <WelcomeDescription>This is your guide to brands</WelcomeDescription>
      </HomePageWrapper>
    </>
  );
};

export default Home;
