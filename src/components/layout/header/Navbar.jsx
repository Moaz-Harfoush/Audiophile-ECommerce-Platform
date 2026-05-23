import { NavLink } from "react-router-dom";

import { ICONS } from "../../../assets";

import NavList from "../../shared/NavList";
import { useSelector } from "react-redux";

const Navbar = ({ setActive, setIsCartOpen }) => {
  const { Logo, Hamburger, Cart } = ICONS;

  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0,
  );
  const displayCount = totalItems > 9 ? "9+" : totalItems;
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
        {totalItems > 0 && (
          <span className="absolute top-7 right-8 bg-primary text-white text-[12px] font-bold w-5 h-5 rounded-full flex items-center justify-center pointer-events-none select-none transition-transform duration-200 aspect-square">
            {displayCount}
          </span>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
