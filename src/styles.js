//Global style
import { createGlobalStyle } from "styled-components";

//Styled components
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    user-drag: none;
    user-select: none;
    background-color: #EAF0F1;
}
`;

export const HomePageWrapper = styled.div`
display: flex;
flex-direction: column;
text-align: center;
background-color: #A4B0BD;
justify-content: center;
align-self: center;
margin-left: auto;
margin-right: auto;
margin-top: 5em;
width: 80%;
border: black solid 2px;
border-radius: 20px;
height: 400px;
`;

export const Welcome = styled.h1`
font-size: 4em;
padding: 0px 30px;
`;

export const WelcomeDescription = styled.p`
font-size: 2em;
padding: 0px 30px;
`;
