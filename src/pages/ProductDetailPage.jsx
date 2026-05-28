import { useState, useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data/products.json";

import Shop from "../components/shared/Shop";
import BestGear from "../components/shared/BestGear";
import Toast from "../components/ui/Toast";

import ProductHero from "../components/product-details/ProductHero";
import ProductInfo from "../components/product-details/ProductInfo";
import ProductGallery from "../components/product-details/ProductGallery";
import ProductSuggestions from "../components/product-details/ProductSuggestions";

import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../features/cart/cartSlice";

import NotFound from "./NotFound";

const ProductDetailPage = () => {
  /* Extract the specific product slug from URL parameter keys */
  const { itemName } = useParams();
  const dispatch = useDispatch();

  /* Select specific global slice variables to track cart interaction results */
  const { error: cartError, success: cartSuccess } = useSelector(
    (state) => state.cart,
  );

  /* Memoize lookup operation to optimize filter efficiency across the JSON dictionary */
  const product = useMemo(() => {
    return data.products.find(
      (item) => item.slug.toLowerCase() === itemName.toLowerCase(),
    );
  }, [itemName]);

  /* Reset toast state instantly when navigating to a different product screen */
  useEffect(() => {
    dispatch(cartActions.resetToast());
  }, [itemName, dispatch]);

  /* Secure check layout fallback to 404 page if lookup result is falsy */
  if (!product) {
    return <NotFound />;
  }

  /* Compute visibility trigger condition for notifying alerts */
  const isToastVisible = cartError || cartSuccess;

  return (
    <>
      {/* Product profile key introductory section */}
      <ProductHero product={product} />

      {/* Technical features and package components directory list */}
      <ProductInfo product={product} />

      {/* Dynamic multi-aspect snapshot gallery layout */}
      <ProductGallery product={product} />

      {/* Alternative relevant inventory cross-sell options wrapper */}
      <ProductSuggestions product={product} />

      <Shop />
      <BestGear />

      {/* Global reactive notifications engine for immediate action feedback */}
      <Toast
        isVisible={isToastVisible}
        onClose={() => dispatch(cartActions.resetToast())}
        type={cartError ? "error" : "success"}
        message={
          cartError
            ? "Maximum number of items is reached"
            : `${product.name} added to cart!`
        }
      />
    </>
  );
};

export default ProductDetailPage;
