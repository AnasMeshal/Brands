import React from "react";
import { Link } from "react-router-dom";
import onlylogo from "../onlylogo.png";
import { NavStyled, Logo, NavItem } from "../styles";

const NavBar = () => {
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <Logo className="navbar-brand" to="/">
          <img src={onlylogo} alt="logo" width="50" />
        </Logo>
        <div className="navbar-nav ml-auto">
          <NavItem
            className="nav-item"
            to="/brands"
            style={{ margin: 10, float: "right" }}
          >
            Brands
          </NavItem>

          <Link
            className="nav-item"
            to="/"
            style={{ margin: 10, float: "right" }}
          >
            Home
          </Link>
        </div>
      </div>
    </NavStyled>
  );
};

export default NavBar;
