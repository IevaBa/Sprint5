import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <NavLink
          className={({ isActive }) =>
            isActive ? "a nav-link active" : "a nav-link"
          }
          to="/home"
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className={({ isActive }) =>
            isActive ? "a nav-link active" : "a nav-link"
          }
          to="/shopping_list"
        >
          Shopping List
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className={({ isActive }) =>
            isActive ? "a nav-link active" : "a nav-link"
          }
          to="/recipes"
        >
          Recipes
        </NavLink>
      </li>
    </ul>
  );
};

export default Header;
