import React from "react";

import { useDispatch } from "react-redux";
import { cartActions } from "./cartSlice";

export default function CartItemsList({ cartItems }) {
  const dispatch = useDispatch();

  return (
    /* Scrollable container with optimized custom scrollbar utility styling */
    <div
      className="h-47.5 overflow-y-auto mb-6 pr-1
      [scrollbar-width:thin] [scrollbar-color:#e0e0e0_transparent]
      [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full"
    >
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-start flex-wrap sm:items-center mb-6 sm:flex-row gap-4 sm:gap-0"
        >
          {/* Item details thumbnail presentation block */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-light rounded-lg flex items-center justify-center overflow-hidden shrink-0">
              <img
                src={item.cartImage}
                alt={item.shortName}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h4 className="text-[15px] font-bold text-black leading-tight">
                {item.shortName}
              </h4>
              <p className="text-[14px] font-bold text-text-body mt-1">
                $ {item.price.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Quantity adjustment panel inside the cart dropdown */}
          <div className="flex items-center justify-between bg-gray-light w-24 h-8 px-2 rounded shrink-0">
            <button
              className="text-text-body font-bold hover:text-primary w-5 h-full flex items-center justify-center transition-colors"
              onClick={() => dispatch(cartActions.decrement(item.id))}
            >
              -
            </button>
            <span className="text-[13px] font-bold text-black">
              {item.quantity}
            </span>
            <button
              className="text-text-body font-bold hover:text-primary w-5 h-full flex items-center justify-center transition-colors"
              onClick={() => dispatch(cartActions.increment(item.id))}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
