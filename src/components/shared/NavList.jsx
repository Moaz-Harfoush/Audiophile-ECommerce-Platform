import React from "react";

import { NavLink } from "react-router-dom";

const NavList = ({ className = "", onItemClick, showActive = true }) => {
  /* Centralized application core routes navigation dataset */
  const links = [
    { name: "HOME", path: "/" },
    { name: "HEADPHONES", path: "/headphones" },
    { name: "SPEAKERS", path: "/speakers" },
    { name: "EARPHONES", path: "/earphones" },
  ];

  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.name}>
          <NavLink
            to={link.path}
            end // Ensures the home link is only active on exact '/' path matching
            onClick={onItemClick}
            className={({ isActive }) => {
              const activeClass =
                showActive && isActive ? "text-primary" : "text-white";

              return `text-sm tracking-[2px] font-bold standard-smooth hover:text-primary ${activeClass}`;
            }}
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
