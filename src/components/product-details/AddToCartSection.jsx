import { useState, useEffect } from "react";

import Button from "../ui/Button";

import { useDispatch } from "react-redux";
import { cartActions } from "../../features/cart/cartSlice";

const AddToCartSection = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  /* Reset product quantity to 1 when shifting between product detail pages */
  useEffect(() => {
    setQuantity(1);
  }, [product.id]);

  const handleIncrement = () =>
    setQuantity((prev) => (prev >= 999 ? prev : prev + 1));

  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  /* Dispatch cart action to update global Redux state with chosen item information */
  const handleAddToCart = () => {
    dispatch(cartActions.addItemToCart({ product, quantity }));
  };

  return (
    <div className="flex items-center gap-4 flex-wrap md:flex-nowrap justify-center md:justify-start">
      {/* Quantity adjustment panel control */}
      <div className="bg-gray-light flex items-center justify-between w-32 px-4 py-3">
        <button
          className="text-text-body hover:text-primary font-bold standard-smooth"
          onClick={handleDecrement}
        >
          -
        </button>
        <span className="font-bold text-sm">{quantity}</span>
        <button
          className="text-text-body hover:text-primary font-bold standard-smooth"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>

      <Button text="Add To Cart" onClick={handleAddToCart} />
    </div>
  );
};

export default AddToCartSection;
