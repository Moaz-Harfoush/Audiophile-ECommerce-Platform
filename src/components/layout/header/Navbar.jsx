import { NavLink } from "react-router-dom";

import { ICONS } from "../../../assets";

import NavList from "../../shared/NavList";

const Navbar = ({ setActive, setIsCartOpen }) => {
  const { Logo, Hamburger, Cart } = ICONS;

  return (
    <nav className="flex items-center justify-between w-full h-full border-b border-b-gray-border">
      <div className="flex gap-3 items-center md:gap-10">
        <button
          className="lg:hidden flex cursor-pointer"
          onClick={() => setActive((prev) => !prev)}
          aria-label="Open Menu"
        >
          <img src={Hamburger} alt="Hamburger Icon" />
        </button>

        <NavLink to="/" aria-label="Audiophile Home">
          <img src={Logo} alt="Audiophile Logo" />
        </NavLink>
      </div>
      <NavList
        className="hidden lg:flex gap-6 items-center"
        onItemClick={() => setActive(false)}
        showActive={true}
      />
      <button
        className="cursor-pointer"
        aria-label="View Cart"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <img src={Cart} alt="Cart" />
      </button>
    </nav>
  );
};

export default Navbar;
