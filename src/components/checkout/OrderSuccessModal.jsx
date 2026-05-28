import React from "react";

import { useDispatch } from "react-redux";
import { cartActions } from "../../features/cart/cartSlice";
import useCartTotals from "../../hooks/useCartTotals";

import Button from "../ui/Button";

export default function OrderSuccessModal() {
  const { grandTotal } = useCartTotals();
  const dispatch = useDispatch();

  /* Delayed action routine safeguarding structural routing pipeline executions */
  const handleBackToHome = () => {
    setTimeout(() => {
      dispatch(cartActions.clearItems());
    }, 100);
  };

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100%-32px)] max-w-135 bg-white rounded-lg p-8 md:p-12 shadow-2xl font-sans text-left pointer-events-auto">
      {/* Animated Success Checkmark Ring Decoration */}
      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-8">
        <svg
          width="24"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 18"
          fill="none"
        >
          <path
            d="M2 10L8.5 16.5L22 2"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h2 className="text-[28px] md:text-[32px] font-bold uppercase tracking-wide leading-8 md:leading-9 mb-6 text-black">
        Thank you <br /> for your order
      </h2>

      <p className="text-text-body text-[15px] font-medium mb-8">
        You will receive an email confirmation shortly.
      </p>

      {/* Reciept accounting overview wrap block */}
      <div className="flex flex-col sm:flex-row rounded-lg overflow-hidden mb-12">
        <div className="bg-black text-white p-6 w-full flex flex-col justify-center gap-2">
          <p className="text-[15px] uppercase font-medium text-text-muted tracking-wider">
            Grand Total
          </p>
          <p className="text-[18px] font-bold tracking-wide text-white">
            $ {grandTotal.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="*:w-full *:text-center">
        <Button text="Back To Home" url="/" onClick={handleBackToHome} />
      </div>
    </div>
  );
}
