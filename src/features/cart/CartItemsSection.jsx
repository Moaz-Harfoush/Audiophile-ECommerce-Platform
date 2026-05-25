import { useMemo } from "react";

import Button from "../../components/ui/Button";

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "./cartSlice";
import CartItemsList from "./CartItemsList";

const CartItemsSection = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  console.log(cartItems);

  const { totalPrice, totalItems } = useMemo(() => {
    const totalPri = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    const totalItm = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    return { totalPrice: totalPri, totalItems: totalItm };
  }, [cartItems]);

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

      <CartItemsList cartItems={cartItems} />

      <div className="flex justify-between items-center mb-4">
        <span className="text-[15px] text-text-body font-medium tracking-[1px]">
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
};

export default CartItemsSection;
