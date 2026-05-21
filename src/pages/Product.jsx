import { useMemo } from "react";
import { useParams } from "react-router-dom";

import data from "../data/products.json";

import Shop from "../components/shared/Shop";
import BestGear from "../components/shared/BestGear";
import ProductHero from "../components/product-details/ProductHero";
import ProductInfo from "../components/product-details/ProductInfo";
import ProductGallery from "../components/product-details/ProductGallery";
import ProductSuggestions from "../components/product-details/ProductSuggestions";
import NotFound from "./NotFound";

const Product = () => {
  const { itemName } = useParams();
  console.log(itemName);

  const product = useMemo(() => {
    return data.products.find((item) => item.slug === itemName);
  }, [itemName]);
  console.log(product);

  if (!product) {
    return <NotFound />;
  }
  return (
    <>
      <ProductHero product={product} />
      <ProductInfo product={product} />
      <ProductGallery product={product} />
      <ProductSuggestions product={product} />
      <Shop />
      <BestGear />
    </>
  );
};

export default Product;
