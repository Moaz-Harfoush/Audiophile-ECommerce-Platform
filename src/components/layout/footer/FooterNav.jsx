import NavList from "../../ui/NavList";

import { NavLink } from "react-router-dom";

import { ICONS } from "../../../assets";

const { Logo } = ICONS;

const FooterNav = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-0 mb-10 lg:mb-14">
      <NavLink to="/" aria-label="Audiophile Home">
        <img src={Logo} alt="Audiophile Logo" />
      </NavLink>

      <NavList
        className="flex flex-col md:flex-row items-center gap-8 md:gap-10 text-sm tracking-[2px] font-bold"
        showActive={false}
      />
    </div>
  );
};

export default FooterNav;
