import { useParams } from "react-router-dom";
import { useMemo } from "react";

import data from "../data/products.json";

import CategoryHeader from "../components/category/CategoryHeader";
import CategoryProductCard from "../components/category/CategoryProductCard";
import Shop from "../components/shared/Shop";
import BestGear from "../components/shared/BestGear";

const OtherLinks = () => {
  const { categoryName } = useParams();
  const products = useMemo(() => {
    return data.products.filter((item) => item.category === categoryName);
  }, [data.products, categoryName]);

  console.log(products);
  return (
    <>
      <CategoryHeader title={categoryName} />
      {products.map((product, index) => (
        <CategoryProductCard key={product.id} product={product} index={index} />
      ))}
      <Shop />
      <BestGear />
    </>
  );
};

export default OtherLinks;
