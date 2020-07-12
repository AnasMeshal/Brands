//React
import React, { useState, useEffect } from "react";

//Logo
import logo from "../logo.png";

//Styles
import { NavStyled, Logo, NavItem } from "../styles";

const NavBar = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  console.log(offset);

  return (
    //changed the logo sizing
    // <NavStyled className="navbar">
    <NavStyled className="navbar fixed-top navbar-expand" offset={offset}>
      <Logo to="/">
        <img src={logo} alt="logo" />
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
