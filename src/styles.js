//Global style
import { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

//Styled components
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    user-drag: none;
    user-select: none;
    background-image: url(https://i.pinimg.com/originals/23/d7/4e/23d74e06260d45a85d81e9a877a0c0f2.jpg);
}
`;

export const HomePageWrapper = styled.div`
  text-align: center;
  background-color: #dfe4ea;
  margin: auto;
  margin-top: 15vh;
  margin-bottom: 15vh;
  width: 80vw;
  border: black solid 2px;
  border-radius: 20px;
`;

export const Welcome = styled.h1`
  margin-top: 2vh;
  font-size: 12vw;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
`;

export const WelcomeDescription = styled.p`
  margin-top: 2vh;
  font-size: 6vw;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 400;
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: Wrap;
  margin-bottom: 2em;

  p {
    color: black;
    margin-top: 1em;
    font-weight: Bolder;
    text-align: center;
    font-size: 13px;
    :hover {
      cursor: default;
    }
  }

  .item-price {
    color: #27ae60;
    font-weight: bold;
    text-align: center;
    font-size: 20px;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  border: black solid 2px;
  margin: 4px;
  border-radius: 5px;
  background: #fff;
`;

export const ShopImage = styled.img`
  height: 20vw;
  width: 20vw;
  border-radius: 10px;
`;

export const Logo = styled(Link)`
  img {
    width: 10rem;
  }
`;
export const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  color: #7b8788;

  &.active {
    color: black;
    text-decoration: underline;
  }
`;

export const NavStyled = styled.nav`
  background-color: white;
  margin-bottom: 5vh;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  img {
    width: 40%;
    float: left;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
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
