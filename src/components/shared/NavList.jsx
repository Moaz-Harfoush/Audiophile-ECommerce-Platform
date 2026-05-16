import { NavLink } from "react-router-dom";

const NavList = ({ className = "", onItemClick, showActive = true }) => {
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
            end
            onClick={onItemClick}
            className={({ isActive }) => {
              const activeClass =
                showActive && isActive ? "text-primary" : "text-text-white";
              return `nav-link ${activeClass} hover:text-primary`;
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
