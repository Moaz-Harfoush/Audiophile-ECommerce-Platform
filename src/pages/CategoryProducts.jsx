import { useMemo } from "react";
import { useParams } from "react-router-dom";

import data from "../data/products.json";

import CategoryHeader from "../components/category/CategoryHeader";
import CategoryProductCard from "../components/category/CategoryProductCard";
import Shop from "../components/shared/Shop";
import BestGear from "../components/shared/BestGear";

import NotFound from "./NotFound";

const CategoryProducts = () => {
  /* Extract category name dynamically from the URL parameters */
  const { categoryName } = useParams();

  /* Memoize filtered products to prevent recalculation on every re-render */
  const products = useMemo(() => {
    return data.products.filter((item) => item.category === categoryName);
  }, [categoryName]);

  /* Fallback to NotFound component if no products match the category */
  if (products.length === 0) {
    return <NotFound />;
  }

  return (
    <>
      {/* Header section displaying the active category title */}
      <CategoryHeader title={categoryName} />

      {/* Map through products and pass data to the card component */}
      {products.map((product, index) => (
        <CategoryProductCard key={product.id} product={product} index={index} />
      ))}

      <Shop />
      <BestGear />
    </>
  );
};

export default CategoryProducts;
