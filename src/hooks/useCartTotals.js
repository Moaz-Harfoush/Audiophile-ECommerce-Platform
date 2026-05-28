import { useSelector } from "react-redux";
import { useMemo } from "react";

const useCartTotals = () => {
  const cartItems = useSelector((state) => state.cart.items);

  /* Performance Optimization: Aggregated both total price and item count in a single loop execution */
  const { totalPrice, totalItems } = useMemo(() => {
    return cartItems.reduce(
      (acc, item) => {
        acc.totalPrice += item.price * item.quantity;
        acc.totalItems += item.quantity;
        return acc;
      },
      { totalPrice: 0, totalItems: 0 },
    );
  }, [cartItems]);

  /* Calculate grand total applying formula: Price + $50 shipping flat-fee + 20% VAT rate */
  const grandTotal = useMemo(() => {
    return Math.round(totalPrice + 50 + totalPrice * 0.2);
  }, [totalPrice]);

  /* Format visual badge counters to output safe maximum thresholds for layout styling */
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
    grandTotal,
  };
};

export default useCartTotals;
