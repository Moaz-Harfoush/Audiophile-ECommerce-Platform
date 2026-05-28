import React from "react";

import { useDispatch } from "react-redux";
import { cartActions } from "../features/cart/cartSlice";
import useCartTotals from "../hooks/useCartTotals";
import useCheckoutForm from "../hooks/useCheckoutForm";

import Form from "../components/checkout/Form";

import GoBack from "../components/ui/GoBack";
import Overlay from "../components/ui/Overlay";
import OrderSuccessModal from "../components/checkout/OrderSuccessModal";

export default function Checkout() {
  const { isCartEmpty } = useCartTotals();
  const checkoutMethod = useCheckoutForm();
  const dispatch = useDispatch();

  /* Complete operational reset routing execution when transaction overlay triggers closed */
  const handleCloseSuccess = () => {
    checkoutMethod.closeOverlay();
    window.scrollTo({ top: 0, behavior: "instant" });
    dispatch(cartActions.clearItems());
  };

  return (
    <section>
      <div className="container my-40">
        <GoBack />

        {/* Structural switch rendering empty placeholders versus transactional check-out sections */}
        {isCartEmpty ? (
          <div className="h-100 flex flex-col items-center justify-center bg-white rounded-lg p-8">
            <img
              src="/images/cart/empty-cart.webp"
              alt="Empty Cart"
              className="w-42 object-contain opacity-70"
            />
            <p className="text-text-body font-medium text-base tracking-wide text-center mt-4">
              There is nothing to checkout
            </p>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-wider uppercase mb-10 text-black">
              Checkout
            </h1>

            <Form checkoutMethod={checkoutMethod} />

            {/* Layout layers handles dark blur screening and immediate success dialog frames */}
            <Overlay
              isOpen={checkoutMethod.isOverlayOpen}
              onClose={handleCloseSuccess}
            />

            {checkoutMethod.isOverlayOpen && <OrderSuccessModal />}
          </div>
        )}
      </div>
    </section>
  );
}
