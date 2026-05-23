import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";
import ProductImage from "../ui/ProductImage";
import New from "../shared/New";
import { useDispatch } from "react-redux";
import { cartActions } from "../counter/cartSlice";
import Toast from "./Toast";
import { useSelector } from "react-redux";
const ProductHero = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toast, setToast] = useState(false);
  const [error, setError] = useState(false);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    setQuantity(1);
  }, [product.id]);

  const handleIncrement = () =>
    setQuantity((prev) => (prev >= 999 ? prev : prev + 1));
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    const existingProduct = cart.find((item) => item.id === product.id);
    const currentInCart = existingProduct ? existingProduct.quantity : 0;
    const totalQuantity = currentInCart + quantity;

    if (totalQuantity > 999) {
      setToast(true);
      setError(true);
      console.log("no");
      setTimeout(() => {
        setToast(false);
      }, 3000);
    } else {
      dispatch(cartActions.addItemToCart({ product, quantity }));

      setToast(true);
      setError(false);

      setTimeout(() => {
        setToast(false);
      }, 3000);
    }
  };

  return (
    <section className="mt-40">
      <div className="container">
        <button
          onClick={() => navigate(-1)}
          className="mb-14 mx-auto md:mx-0 text-text-body hover:underline hover:text-primary standard-smooth block"
        >
          Go Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32 items-center">
          <ProductImage
            desktop={product.categoryImage.desktop}
            tablet={product.categoryImage.tablet}
            mobile={product.categoryImage.mobile}
            alt={product.shortName}
            className="w-full h-full object-contain"
            isPriority={true}
          />

          <div className="flex flex-col">
            {product.new && <New />}

            <h1 className="text-4xl md:text-[40px] leading-tight font-bold tracking-wider mb-8 uppercase text-center md:text-left">
              {product.name}
            </h1>

            <p className="text-text-body leading-relaxed mb-10 max-w-md mx-auto md:mx-0 text-center md:text-left">
              {product.description}
            </p>

            <span className="text-lg font-bold tracking-widest mb-12 text-center md:text-left">
              $ {product.price.toLocaleString()}
            </span>

            <div className="flex items-center gap-4 flex-wrap md:flex-nowrap justify-center md:justify-start">
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
          </div>
        </div>

        <Toast
          isVisible={toast}
          message={
            error
              ? `Maximum number of items is reached`
              : `${product.name} added to cart!`
          }
          type={error ? "error" : "success"}
        />
      </div>
    </section>
  );
};

export default ProductHero;
