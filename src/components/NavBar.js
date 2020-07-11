//React
import React from "react";

//Logo
import logo from "../logo.png";

//Styles
import { NavStyled, Logo, NavItem } from "../styles";

const NavBar = () => {
  return (
      //changed the logo sizing
    <NavStyled className="navbar fixed-top navbar-expand"> 
      <Logo to="/">
        <img
          src={logo}
          alt="logo"
        />
      </Logo>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item m-auto">
            <NavItem className="nav-link" to="/brands">
              Brands
            </NavItem>
          </li>
        </ul>
      </div>
    </NavStyled>
  );
};

export default NavBar;