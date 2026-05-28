import React from "react";

import Shop from "../../shared/Shop";

const MobileMenu = ({ active, setActive }) => {
  return (
    /* Dropdown container triggered on mobile screens only */
    <div
      onClick={() => setActive(false)}
      className={`
        absolute top-full left-0 w-full bg-white z-50 standard-smooth origin-top
        ${active ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-0 pointer-events-none"}
      `}
    >
      <div className="py-30 shadow-2xl rounded-b-lg">
        <Shop />
      </div>
    </div>
  );
};

export default MobileMenu;
