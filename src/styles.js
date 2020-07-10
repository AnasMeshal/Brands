//Global style
import { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

//Styled components
import styled from "styled-components";

export const DetailWrapper = styled.div`
  display: block;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  border: white solid 3px;
  border-radius: 20px;
  color: white;
  width: 60%;
  background-color: rgba(0, 0, 0, 0.5);
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
  }
`;

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    user-drag: none;
    user-select: none;
    background-color: black;
    background-blend-mode: screen;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(https://cdn.pixabay.com/photo/2016/11/23/17/08/bag-1853847_1280.jpg);
}

`;

export const HomePageWrapper = styled.div`
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  margin: auto;
  margin-top: 15vh;
  margin-bottom: 15vh;
  width: 80vw;
  border: white solid 3px;
  border-radius: 20px;
`;
export const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  // border: black solid 2px;
  margin: 4px;
  border-radius: 5px;
  background: #fff;
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: Wrap;
  //margin-bottom: 2em;

  p {
    color: black;
    margin-top: 1em;
    font-weight: Bolder;
    text-align: center;
    font-size: 15px;
    :hover {
      cursor: default;
    }
  }

  .item-price {
    color: black;
    // font-weight: bold;
    text-align: center;
    font-size: 13px;
  }
`;
export const Logo = styled(Link)`
  img {
    width: 10rem;
    position: absolute;
    left: 45%;
  }
`;

export const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  color: white;
  &.active {
    color: white;
    border: white 2px solid;
    border-radius: 5px;
  }
`;

export const NavStyled = styled.nav`
  background: transapent;
  margin-bottom: 5vh;
`;

export const Search = styled.input`
  margin-top: 5vh;
  margin-bottom: 5vh;
  width: 60%;
  font-size: 100%;
  padding: 11px;
  border: black 2px solid;
  border-radius: 15px;
  outline: none;
`;
export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const ShopImage = styled.img`
  height: 20vw;
  width: 20vw;
  border-radius: 10px;
`;

export const Test = styled.div`
  background-color: red;
`;

export const Welcome = styled.h1`
  margin-top: 2vh;
  font-size: 12vw;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  color: white;
`;

export const WelcomeDescription = styled.p`
  margin-top: 2vh;
  font-size: 6vw;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 400;
  color: white;
`;
