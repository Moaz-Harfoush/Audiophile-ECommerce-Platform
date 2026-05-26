import { useSelector } from "react-redux";
import { use, useMemo } from "react";

const useCartTotals = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const { totalPrice, totalItems } = useMemo(() => {
    const totalPri = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    const totalItm = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    return { totalPrice: totalPri, totalItems: totalItm };
  }, [cartItems]);

  const displayCount = useMemo(() => {
    return totalItems > 9 ? "9+" : totalItems;
  }, [totalItems]);

  const isCartEmpty = cartItems.length === 0;

  return {
    cartItems,
    totalPrice,
    totalItems,
    displayCount,
    isCartEmpty,
  };
};

export default useCartTotals;
