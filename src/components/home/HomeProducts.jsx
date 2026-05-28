import React from "react";

import ZX7Section from "./ZX7Section";
import ZX9Section from "./ZX9Section";
import YX1Section from "./YX1Section";

const HomeProducts = () => {
  return (
    <section>
      {/* Wrapper to handle spacing between consecutive featured product sections */}
      <div className="container space-y-10">
        <ZX9Section />
        <ZX7Section />
        <YX1Section />
      </div>
    </section>
  );
};

export default HomeProducts;
