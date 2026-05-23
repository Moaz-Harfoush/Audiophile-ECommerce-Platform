import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../counter/cartSlice";
import Button from "../../../ui/Button";

export default function FullCart() {
  const Cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(Cart);
  const totalPrice = Cart.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);
  const totalItems = Cart.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  }, 0);
  return (
    <div>
      <div className="flex flex-col justify-between items-center mb-6 sm:flex-row">
        <h3 className="text-[18px] font-bold tracking-[1.3px] text-black uppercase">
          CART ({totalItems.toLocaleString()})
        </h3>
        <button
          onClick={() => dispatch(cartActions.clearItems())}
          className="text-text-body hover:underline hover:text-primary standard-smooth"
        >
          Remove All
        </button>
      </div>

      <div
        className="h-47.5 overflow-y-auto mb-6 pr-1
        [scrollbar-width:thin]
        [scrollbar-color:#e0e0e0_transparent]
        [&::-webkit-scrollbar]:w-1
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        [&::-webkit-scrollbar-thumb]:rounded-full"
      >
        {Cart.map((item) => (
          <div
            key={item.id || item.shortName}
            className="flex justify-between  items-start sm:items-center mb-6 sm:flex-row sm: flex-col gap-4 sm:gap-0 "
          >
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
                <p className="text-[14px] font-bold text-gray-400 mt-1">
                  $ {item.price.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between bg-gray-light w-24 h-8 px-2 rounded shrink-0">
              <button
                className="text-gray-400 font-bold hover:text-primary w-5 h-full flex items-center justify-center transition-colors"
                onClick={() => dispatch(cartActions.decrement(item.id))}
              >
                -
              </button>
              <span className="text-[13px] font-bold text-black">
                {item.quantity}
              </span>
              <button
                className="text-gray-400 font-bold hover:text-primary w-5 h-full flex items-center justify-center transition-colors"
                onClick={() => dispatch(cartActions.increment(item.id))}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mb-4">
        <span className="text-[15px] text-gray-400 font-medium tracking-[1px]">
          TOTAL
        </span>
        <span className="text-[18px] font-bold text-black">
          $ {totalPrice.toLocaleString()}
        </span>
      </div>
      <div className="grid w-full *:w-full">
        <Button text="Checkout" />
      </div>
    </div>
  );
}
