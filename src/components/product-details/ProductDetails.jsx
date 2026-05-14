import ProductHero from "./ProductHero";
import ProductInfo from "./ProductInfo";
import ProductGallery from "./ProductGallery";
import ProductSuggestions from "./ProductSuggestions";
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import data from "../../data/products.json";

export default function ProductDetails() {
  const { itemName } = useParams();
  console.log(itemName);
  const product = useMemo(() => {
    return data.products.find((item) => item.slug === itemName);
  }, [itemName]);
  return (
    <>
      <ProductHero product={product} />
      <ProductInfo product={product} />
      <ProductGallery product={product} />
      <ProductSuggestions product={product} />
    </>
  );
}
