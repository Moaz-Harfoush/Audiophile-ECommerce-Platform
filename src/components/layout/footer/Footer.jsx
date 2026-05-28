import React from "react";

import FooterNav from "./FooterNav";
import FooterAbout from "./FooterAbout";
import FooterSocials from "./FooterSocials";

const Footer = () => {
  return (
    <footer className="bg-black-main">
      <div className="container py-20 relative">
        {/* Decorative orange top bar reflecting the main branding theme */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 lg:left-10 lg:translate-x-0 w-25 h-1 bg-primary"></div>

        {/* Global Footer Navigation Links & Logo */}
        <FooterNav />

        {/* Secondary layout splitting information text and social icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 items-end">
          <FooterAbout />
          <FooterSocials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
