import { useState, useEffect } from "react";

import MobileMenu from "./MobileMenu";
import Overlay from "../../ui/Overlay";
import Navbar from "./Navbar";

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    const handleTabletChange = (e) => {
      if (!e.matches) {
        setActive(false);
      }
    };

    mediaQuery.addEventListener("change", handleTabletChange);

    return () => mediaQuery.removeEventListener("change", handleTabletChange);
  }, []);

  return (
    <header className="w-full bg-black-light h-24 relative">
      <div className="container h-full relative z-70 bg-black-light">
        <Navbar setActive={setActive} />
      </div>

      <MobileMenu active={active} setActive={setActive} />

      <Overlay active={active} setActive={setActive} />
    </header>
  );
};

export default Header;
