import { useMemo } from "react";

import { NavLink } from "react-router-dom";

import useCartTotals from "../../../hooks/useCartTotals";

import { ICONS } from "../../../assets";
import NavList from "../../shared/NavList";

import { useSelector } from "react-redux";

const Navbar = ({ setActive, setIsCartOpen }) => {
  const { Logo, Hamburger, Cart } = ICONS;
  const { totalItems, displayCount } = useCartTotals();

  return (
    <nav className="flex items-center justify-between w-full h-full border-b border-b-gray-border">
      {/* Brand Logo and Mobile Hamburger Control */}
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

      {/* Desktop Main Navigation Links */}
      <NavList
        className="hidden lg:flex gap-6 items-center"
        onItemClick={() => setActive(false)}
        showActive={true}
      />

      {/* Shopping Cart Trigger Button with Dynamic Item Badge */}
      <button
        className="cursor-pointer relative" // Added relative to safely position absolute badge
        aria-label="View Cart"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <img src={Cart} alt="Cart" />

        {/* Render notification badge only if cart item count exceeds zero */}
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-primary text-white text-[12px] font-bold w-5 h-5 rounded-full flex items-center justify-center pointer-events-none select-none transition-transform duration-200 aspect-square">
            {displayCount}
          </span>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
