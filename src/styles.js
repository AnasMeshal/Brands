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
    background-color: #EAF0F1;
}
`;

export const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #a4b0bd;
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

export const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: Wrap;
  margin-bottom: 2em;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  border: ${({ theme }) => theme.borderColor} solid 3px;
  margin: 4px;
  border-radius: 10px;
  background: ${({ theme }) => theme.mainColor};

  p {
    color: ${({ theme }) => theme.textColor};
    margin-top: 1em;
    font-weight: Bolder;
    text-align: center;
    font-size: 20px;
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

export const ShopImage = styled.img`
  height: 400px;
  width: 250px;
  border-bottom: ${({ theme }) => theme.borderColor} solid 3px;
  border-radius: 10px;
`;

export const Logo = styled(Link)`
  padding: 0.75em;

  img {
    width: 8rem;
  }
`;
export const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  color: blue;

  &.active {
    color: pink;
  }
`;

export const NavStyled = styled.nav`
  background-color: white;
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
