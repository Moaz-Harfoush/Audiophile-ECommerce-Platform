import { useState, useEffect } from "react";

import { useMediaQuery } from "../../../hooks/useMediaQuery";
import useCartTotals from "../../../hooks/useCartTotals";

import MobileMenu from "./MobileMenu";
import Overlay from "../../ui/Overlay";
import Navbar from "./Navbar";

import CartItemsSection from "../../../features/cart/CartItemsSection";
import EmptyCart from "../../../features/cart/EmptyCart";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const location = useLocation();

  const { isCartEmpty } = useCartTotals();

  useEffect(() => {
    setIsCartOpen(false);
    setActive(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isDesktop) {
      setActive(false);
      // console.log(active);
    }
  }, [isDesktop]);

  return (
    <>
      <header className="w-full bg-black-light h-24 relative">
        <div className="container h-full relative">
          <Navbar setActive={setActive} setIsCartOpen={setIsCartOpen} />
          <div
            className={`
        absolute top-4 h-110 sm:h-104  z-50 bg-white rounded-lg shadow-2xl p-8
        left-8 right-8 md:left-auto md:right-16
        w-auto md:w-86 
        origin-top-right
        standard-smooth
        
        ${
          isCartOpen
            ? "opacity-100 scale-100 translate-y-32 pointer-events-auto"
            : "opacity-0 scale-0 translate-y-12 pointer-events-none"
        }
      `}
          >
            {isCartEmpty ? <EmptyCart /> : <CartItemsSection />}
          </div>
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
