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
  const { itemName } = useParams();
  const dispatch = useDispatch();

  const { error: cartError, success: cartSuccess } = useSelector(
    (state) => state.cart,
  );

  const product = useMemo(() => {
    return data.products.find(
      (item) => item.slug.toLowerCase() === itemName.toLowerCase(),
    );
  }, [itemName]);

  useEffect(() => {
    dispatch(cartActions.resetToast());
  }, [itemName, dispatch]);

  if (!product) {
    return <NotFound />;
  }

  const isToastVisible = cartError || cartSuccess;

  return (
    <>
      <ProductHero product={product} />
      <ProductInfo product={product} />
      <ProductGallery product={product} />
      <ProductSuggestions product={product} />
      <Shop />
      <BestGear />
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
