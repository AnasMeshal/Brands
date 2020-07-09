//React
import React from "react";

//Logo
import logo from "../logo.png";

//Styles
import { NavStyled, Logo, NavItem } from "../styles";

const NavBar = () => {
  return (
      //changed the logo sizing
    <NavStyled className="navbar navbar-expand"> 
      <Logo to="/">
        <img
          src={logo}
          alt="logo"
        />
      </Logo>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item m-auto">
            <NavItem className="nav-link" to="/brands">
              Brands
            </NavItem>
          </li>
          <li class="nav-item m-auto">
            <NavItem className="nav-link" to="/">
              Home
            </NavItem>
          </li>
        </ul>
      </div>
    </NavStyled>
  );
};

export default NavBar;