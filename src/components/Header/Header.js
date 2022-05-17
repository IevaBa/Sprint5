import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <ul className="header nav p-3 fs-4">
      <li className="nav-item">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "a nav-link active text-secondary fw-bold"
              : "a nav-link text-secondary"
          }
          to="/home"
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "a nav-link active text-secondary fw-bold"
              : "a nav-link text-secondary"
          }
          to="/shopping_list"
        >
          Shopping List
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "a nav-link active text-secondary fw-bold"
              : "a nav-link text-secondary"
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
