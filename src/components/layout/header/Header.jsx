import { useState, useEffect } from "react";

import MobileMenu from "./MobileMenu";
import Overlay from "../../ui/Overlay";
import Navbar from "./Navbar";
import EmptyCart from "./cart/EmptyCart";
import Cart from "./cart/Cart";

const Header = () => {
  const [active, setActive] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    const handleTabletChange = (e) => {
      if (!e.matches) {
        setActive(false);
        // console.log(active);
      }
    };

    mediaQuery.addEventListener("change", handleTabletChange);

    return () => mediaQuery.removeEventListener("change", handleTabletChange);
  }, []);

  return (
    <>
      <header className="w-full bg-black-light h-24 relative">
        <div className="container h-full relative">
          <Navbar setActive={setActive} setIsCartOpen={setIsCartOpen} />
          <Cart isCartOpen={isCartOpen}>
            <EmptyCart />
          </Cart>
        </div>

        <MobileMenu active={active} setActive={setActive} />
      </header>

      <Overlay
        isOpen={active || isCartOpen}
        onClose={() => {
          setActive(false);
          setIsCartOpen(false);
        }}
      />
    </>
  );
};

export default Header;
