import React from "react";

import { IMAGES } from "../../assets";

const EmptyCart = () => {
  const { cart } = IMAGES;

  return (
    /* Center-aligned layout placeholder for unpopulated empty states */
    <div className="h-full flex flex-col items-center justify-center">
      <div className="w-24 h-24 flex items-center justify-center">
        <img
          src={cart.empthyCart} // Verified asset source target reference
          alt="Empty Cart"
          className="w-full h-full object-contain opacity-70"
        />
      </div>

      <p className="text-text-body font-medium text-base tracking-wide text-center mt-4">
        The cart is empty
      </p>
    </div>
  );
};

export default EmptyCart;
