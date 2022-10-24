import React from "react";
import classes from "../styles/Header.module.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav className={classes.Header}>
      <NavLink to="/" className={classes.Link}>
        Home
      </NavLink>
      <NavLink to="users" className={classes.Link}>
        Users
      </NavLink>
    </nav>
  );
};

export default Header;
