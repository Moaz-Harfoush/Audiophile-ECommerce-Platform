import React from "react";

import { NavLink } from "react-router-dom";

import { ICONS } from "../../../assets";
import NavList from "../../shared/NavList";

const FooterNav = () => {
  const { Logo } = ICONS;

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-0 mb-10 lg:mb-14">
      {/* Accessible home link wrap around logo image */}
      <NavLink to="/" aria-label="Audiophile Home">
        <img src={Logo} alt="Audiophile Logo" />
      </NavLink>

      {/* Reusable list component configured for footer styling requirements */}
      <NavList
        className="flex flex-col md:flex-row items-center gap-8 md:gap-10 text-sm tracking-[2px] font-bold"
        showActive={false} // Prevents showing active state highlight in footer layout
      />
    </div>
  );
};

export default FooterNav;
