import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css"

const Menu = () => {
  return (
    <div className="navBar">
      <NavLink to="/" className="active" className="home">
        Home
      </NavLink>
      <NavLink to="/movies" className="active" className="movies">
        Movies
      </NavLink>
    </div>
  );
};

export default Menu;
