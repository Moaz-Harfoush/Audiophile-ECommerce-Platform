import useCartTotals from "../hooks/useCartTotals";

import Form from "../components/checkout/Form";
import GoBack from "../components/ui/GoBack";
import useCheckoutForm from "../hooks/useCheckoutForm";
import Overlay from "../components/ui/Overlay";
import OrderSuccessModal from "../components/checkout/OrderSuccessModal";
import { useDispatch } from "react-redux";
import { cartActions } from "../features/cart/cartSlice";

export default function Checkout() {
  const { isCartEmpty, totalPrice } = useCartTotals();
  const checkoutMethod = useCheckoutForm();
  const dispatch = useDispatch();

  if (isCartEmpty) {
    return (
      <div className="container mt-40">
        <GoBack />
        <div className="h-100 flex flex-col items-center justify-center">
          <img
            src="/images/cart/empty-cart.webp"
            alt="Empty Cart"
            className="w-42 object-contain opacity-70"
          />

          <p className="text-text-body font-medium text-base tracking-wide text-center mt-4">
            There is nothing to checkout
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="container mt-40">
        <GoBack />

        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-wider uppercase mb-10 text-black-pure">
            Checkout
          </h1>
          <Form checkoutMethod={checkoutMethod} />
          <Overlay
            isOpen={checkoutMethod.isOverlayOpen}
            onClose={() => {
              checkoutMethod.closeOverlay;
              dispatch(cartActions.clearItems());
            }}
          />
          {checkoutMethod.isOverlayOpen && <OrderSuccessModal />}
        </div>
      </div>
    </div>
  );
}
